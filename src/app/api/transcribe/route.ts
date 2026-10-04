import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audioFile = formData.get('audio') as Blob | null;
    const clientProvidedKey = formData.get('apiKey') as string | null;

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    const headerKey = req.headers.get('x-gemini-key') || req.headers.get('authorization')?.replace('Bearer ', '');
    const keyToUse = clientProvidedKey || headerKey || GEMINI_API_KEY;

    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Audio = buffer.toString('base64');
    const mimeType = audioFile.type || 'audio/webm';

    // If Gemini key is available, use Gemini multimodal audio transcription
    if (keyToUse) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${keyToUse}`;
        
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    inlineData: {
                      mimeType: mimeType.split(';')[0],
                      data: base64Audio,
                    },
                  },
                  {
                    text: 'Transcribe the spoken speech in this audio clip verbatim. Output ONLY the exact transcribed text, without any conversational preamble, quotes, or explanation. If the audio is silence or unintelligible, output nothing.',
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 1024,
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const transcript = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
          if (transcript) {
            return NextResponse.json({ success: true, transcript });
          }
          return NextResponse.json({ 
            success: true, 
            transcript: '', 
            notice: 'No clear speech detected in recorded audio.' 
          });
        } else {
          console.warn('Gemini audio transcription error status:', response.status);
          const errBody = await response.json().catch(() => ({}));
          return NextResponse.json({
            success: false,
            error: 'GEMINI_API_ERROR',
            message: errBody?.error?.message || `Gemini transcription returned status ${response.status}`,
          }, { status: response.status >= 500 ? 502 : 400 });
        }
      } catch (err: any) {
        console.error('Gemini transcription fetch error:', err);
        return NextResponse.json({
          success: false,
          error: 'GEMINI_FETCH_ERROR',
          message: err?.message || 'Error communicating with Gemini audio transcription service',
        }, { status: 500 });
      }
    }

    // When no external Gemini API key is configured
    return NextResponse.json({
      success: false,
      error: 'NO_API_KEY',
      message: 'No Gemini API key provided. Client-side browser speech recognition should be used.',
    });
  } catch (error: any) {
    console.error('Error in /api/transcribe:', error);
    return NextResponse.json(
      { error: 'Failed to transcribe audio' },
      { status: 500 }
    );
  }
}
