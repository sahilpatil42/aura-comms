import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);
  return NextResponse.json({
    hasKey,
    model: hasKey ? 'gemini-1.5-flash' : 'semantic-contextual-engine',
  });
}

export async function POST(req: NextRequest) {
  try {
    const { apiKey } = await req.json();

    if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid Google Gemini API key.' },
        { status: 400 }
      );
    }

    const trimmedKey = apiKey.trim();

    // Verify key by sending a micro-prompt to Gemini
    const testUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${trimmedKey}`;
    const testRes = await fetch(testUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: 'Respond with the word OK' }] }],
        generationConfig: { maxOutputTokens: 5 },
      }),
    });

    if (!testRes.ok) {
      const errData = await testRes.json().catch(() => ({}));
      const errMsg = errData?.error?.message || `Gemini API returned status ${testRes.status}`;
      return NextResponse.json(
        { success: false, error: `Invalid Gemini API Key: ${errMsg}` },
        { status: 400 }
      );
    }

    // Set in runtime environment
    process.env.GEMINI_API_KEY = trimmedKey;

    // Persist to .env.local
    try {
      const envPath = path.join(process.cwd(), '.env.local');
      let envContent = '';
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
      }

      if (envContent.includes('GEMINI_API_KEY=')) {
        envContent = envContent.replace(/GEMINI_API_KEY=.*(\r?\n|$)/g, `GEMINI_API_KEY=${trimmedKey}$1`);
      } else {
        envContent += `\nGEMINI_API_KEY=${trimmedKey}\n`;
      }

      fs.writeFileSync(envPath, envContent, 'utf8');
    } catch (fsErr) {
      console.warn('Could not update .env.local file automatically:', fsErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Gemini LLM Brain successfully verified and connected!',
      model: 'gemini-1.5-flash',
    });
  } catch (error: any) {
    console.error('Error verifying Gemini API key:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server error verifying API key' },
      { status: 500 }
    );
  }
}
