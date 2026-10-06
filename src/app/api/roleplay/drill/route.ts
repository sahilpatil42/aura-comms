import { NextRequest, NextResponse } from 'next/server';
import { DrillSubmissionSchema } from '@/lib/validations';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { ALL_AGGREGATED_PLATFORM_SCENARIOS } from '@/data/platformScenarios';
import { gradeDrillSubmission } from '@/lib/gemini';

const ALL_SCENARIOS = [...CRISIS_SCENARIOS, ...ALL_AGGREGATED_PLATFORM_SCENARIOS];

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const parseResult = DrillSubmissionSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid drill submission payload', details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { scenarioId, pillar, prompt, userResponse } = parseResult.data;
    const scenario = ALL_SCENARIOS.find((s) => s.id === scenarioId) || CRISIS_SCENARIOS[0];

    const result = await gradeDrillSubmission(scenario, pillar, prompt, userResponse);

    return NextResponse.json({
      success: true,
      score: result.score,
      aiFeedback: result.aiFeedback,
    });
  } catch (error: any) {
    console.error('Error in /api/roleplay/drill:', error);
    return NextResponse.json(
      { error: 'Internal server error grading remediation drill' },
      { status: 500 }
    );
  }
}
