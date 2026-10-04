import { NextRequest, NextResponse } from 'next/server';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

// ============================================================================
// AURA ULTRA-SOOTHING NEURAL TEXT-TO-SPEECH (TTS) ENGINE
// Powered by Microsoft Edge Neural Voices (Aria, Jenny, Andrew, Guy, Emma, Sonia)
// Natural, soothing, human broadcast-quality AI speech without robotic artifacts
// ============================================================================

// High-fidelity curated soothing voices
export const SOOTHING_VOICES: Record<string, string> = {
  // Female voices (warm, gentle, articulate)
  'jenny': 'en-US-JennyNeural',       // Warm, conversational, soothing female (Recommended Default)
  'aria': 'en-US-AriaNeural',         // Clear, empathetic, broadcast studio voice
  'emma': 'en-US-EmmaNeural',         // Friendly, crisp, executive professional
  'sonia': 'en-GB-SoniaNeural',       // Refined, soothing British voice
  // Male voices (calm, confident, natural)
  'andrew': 'en-US-AndrewNeural',     // Deep, calm, confident, soothing male
  'guy': 'en-US-GuyNeural',           // Relaxed, natural, conversational male
  'brian': 'en-US-BrianNeural',       // Professional, measured corporate male
  'christopher': 'en-US-ChristopherNeural', // Steady, articulate male
};

function resolveVoiceName(requestedVoice?: string | null, textHint?: string): string {
  if (!requestedVoice) {
    // If text hint suggests male persona, pick Andrew; otherwise Jenny
    if (textHint) {
      const lower = textHint.toLowerCase();
      if (lower.includes('david') || lower.includes('tom') || lower.includes('alex') || lower.includes('mr.')) {
        return SOOTHING_VOICES.andrew;
      }
    }
    return SOOTHING_VOICES.jenny;
  }

  const normalized = requestedVoice.toLowerCase().trim();
  if (SOOTHING_VOICES[normalized]) {
    return SOOTHING_VOICES[normalized];
  }

  // Check if it's already a full short name (e.g. en-US-JennyNeural)
  for (const v of Object.values(SOOTHING_VOICES)) {
    if (v.toLowerCase() === normalized) return v;
  }

  return SOOTHING_VOICES.jenny;
}

// Fallback Google TTS chunk generator in case of network edge issues
async function fetchGoogleTTSFallback(text: string, lang = 'en'): Promise<Buffer> {
  const clean = text.replace(/[*_#`~\[\]]/g, '').trim().slice(0, 200);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(clean)}&tl=${lang}&client=tw-ob`;

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    },
  });

  if (!res.ok) throw new Error(`Google fallback failed with status ${res.status}`);
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

// Primary Edge Neural Audio Synthesizer
async function synthesizeNeuralAudio(text: string, voiceName: string): Promise<Buffer> {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  // Clean Markdown markers and formatting
  const cleanText = text
    .replace(/[*_#`~\[\]]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const { audioStream } = await tts.toStream(cleanText);

  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    audioStream.on('data', (chunk: Buffer) => chunks.push(chunk));
    audioStream.on('end', () => resolve(Buffer.concat(chunks)));
    audioStream.on('error', (err: any) => reject(err));
  });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const text = searchParams.get('text');
    const requestedVoice = searchParams.get('voice');
    const lang = searchParams.get('lang') || 'en';

    if (!text || !text.trim()) {
      return NextResponse.json({ error: 'Missing text parameter' }, { status: 400 });
    }

    const voiceName = resolveVoiceName(requestedVoice, text);

    try {
      // Primary: High-fidelity soothing neural voice
      const audioBuffer = await synthesizeNeuralAudio(text, voiceName);

      return new NextResponse(new Uint8Array(audioBuffer), {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': audioBuffer.length.toString(),
          'Cache-Control': 'public, max-age=86400, immutable',
          'x-aura-voice': voiceName,
        },
      });
    } catch (edgeErr) {
      console.warn('Edge TTS synthesis failed, utilizing fallback audio:', edgeErr);
      const fallbackBuffer = await fetchGoogleTTSFallback(text, lang);
      return new NextResponse(new Uint8Array(fallbackBuffer), {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': fallbackBuffer.length.toString(),
          'Cache-Control': 'public, max-age=3600',
          'x-aura-voice': 'fallback',
        },
      });
    }
  } catch (err: any) {
    console.error('TTS Route Error:', err);
    return NextResponse.json(
      { error: 'Speech synthesis failed', details: err?.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = body.text;
    const requestedVoice = body.voice;
    const lang = body.lang || 'en';

    if (!text || !text.trim()) {
      return NextResponse.json({ error: 'Missing text in body' }, { status: 400 });
    }

    const voiceName = resolveVoiceName(requestedVoice, text);

    try {
      const audioBuffer = await synthesizeNeuralAudio(text, voiceName);
      return new NextResponse(new Uint8Array(audioBuffer), {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': audioBuffer.length.toString(),
          'Cache-Control': 'public, max-age=86400, immutable',
          'x-aura-voice': voiceName,
        },
      });
    } catch (edgeErr) {
      console.warn('Edge TTS POST failed, utilizing fallback:', edgeErr);
      const fallbackBuffer = await fetchGoogleTTSFallback(text, lang);
      return new NextResponse(new Uint8Array(fallbackBuffer), {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': fallbackBuffer.length.toString(),
          'x-aura-voice': 'fallback',
        },
      });
    }
  } catch (err: any) {
    console.error('TTS POST Error:', err);
    return NextResponse.json(
      { error: 'Speech synthesis failed', details: err?.message },
      { status: 500 }
    );
  }
}
