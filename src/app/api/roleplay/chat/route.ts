import { NextRequest, NextResponse } from 'next/server';
import { RoleplayChatRequestSchema } from '@/lib/validations';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { generateClientRoleplayReply } from '@/lib/gemini';
import { DialogueTurn } from '@/types/scenario';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const parseResult = RoleplayChatRequestSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid request payload', details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { scenarioId, userMessage, history, currentTurn } = parseResult.data;

    const scenario = CRISIS_SCENARIOS.find((s) => s.id === scenarioId) || CRISIS_SCENARIOS[0];

    const typedHistory = history as DialogueTurn[];

    const clientReply = await generateClientRoleplayReply(
      scenario,
      userMessage,
      typedHistory,
      currentTurn
    );

    return NextResponse.json({
      success: true,
      turn: {
        id: `turn-client-${Date.now()}`,
        speaker: 'client',
        text: clientReply.text,
        timestamp: Date.now(),
        sentiment: clientReply.sentiment,
        flaggedPhrases: clientReply.flaggedPhrases || [],
      },
    });
  } catch (error: any) {
    console.error('Error in /api/roleplay/chat:', error);
    return NextResponse.json(
      { error: 'Internal server error processing roleplay dialogue' },
      { status: 500 }
    );
  }
}
