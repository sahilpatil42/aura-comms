import { NextRequest, NextResponse } from 'next/server';
import { EvaluateSessionRequestSchema } from '@/lib/validations';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { evaluateRoleplaySession } from '@/lib/gemini';
import { DialogueTurn } from '@/types/scenario';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const parseResult = EvaluateSessionRequestSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid evaluation request payload', details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { scenarioId, dialogueHistory } = parseResult.data;

    const scenario = CRISIS_SCENARIOS.find((s) => s.id === scenarioId) || CRISIS_SCENARIOS[0];
    const typedHistory = dialogueHistory as DialogueTurn[];

    const evaluation = await evaluateRoleplaySession(scenario, typedHistory);

    return NextResponse.json({
      success: true,
      evaluation,
    });
  } catch (error: any) {
    console.error('Error in /api/roleplay/evaluate:', error);
    return NextResponse.json(
      { error: 'Internal server error evaluating roleplay session' },
      { status: 500 }
    );
  }
}
