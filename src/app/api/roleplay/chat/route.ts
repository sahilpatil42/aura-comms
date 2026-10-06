import { NextRequest, NextResponse } from 'next/server';
import { RoleplayChatRequestSchema } from '@/lib/validations';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { ALL_AGGREGATED_PLATFORM_SCENARIOS } from '@/data/platformScenarios';
import { evaluateRoleplayTurn } from '@/lib/gemini';
import { DialogueTurn } from '@/types/scenario';

const ALL_SCENARIOS = [...CRISIS_SCENARIOS, ...ALL_AGGREGATED_PLATFORM_SCENARIOS];

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

    const { scenarioId, userMessage, history, currentTurn, apiKey } = parseResult.data;

    const scenario = ALL_SCENARIOS.find((s) => s.id === scenarioId) || CRISIS_SCENARIOS[0];

    const typedHistory = history as DialogueTurn[];

    const evaluation = await evaluateRoleplayTurn(
      scenario,
      userMessage,
      typedHistory,
      currentTurn,
      apiKey
    );

    return NextResponse.json({
      success: true,
      turn: {
        id: `turn-client-${Date.now()}`,
        speaker: 'client',
        text: evaluation.clientReaction,
        timestamp: Date.now(),
        sentiment: evaluation.sentiment,
        flaggedPhrases: evaluation.flaggedPhrases || [],
      },
      evaluation,
    });
  } catch (error: any) {
    console.error('Error in /api/roleplay/chat:', error);
    return NextResponse.json(
      { error: 'Internal server error processing roleplay dialogue' },
      { status: 500 }
    );
  }
}
