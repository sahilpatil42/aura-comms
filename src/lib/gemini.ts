import { Scenario, DialogueTurn, SessionEvaluation, FlaggedPhraseItem, TurnEvaluation } from '@/types/scenario';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function callGemini(
  prompt: string, 
  systemInstruction?: string, 
  apiKeyOverride?: string
): Promise<string | null> {
  const activeKey = apiKeyOverride || GEMINI_API_KEY;
  if (!activeKey) {
    return null;
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`;
    
    const body: Record<string, unknown> = {
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      }
    };

    if (systemInstruction) {
      body.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      console.warn(`Gemini API returned status ${response.status}`);
      return null;
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return candidateText || null;
  } catch (err) {
    console.error('Error invoking Gemini API:', err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Dynamic Turn Response Generator (Stage 2)
// ---------------------------------------------------------------------------
export async function generateClientRoleplayReply(
  scenario: Scenario,
  userMessage: string,
  history: DialogueTurn[],
  currentTurn: number
): Promise<{ text: string; sentiment: 'confrontational' | 'skeptical' | 'reassured' | 'neutral'; flaggedPhrases?: string[] }> {
  // Check for common red flag words or weak hedging
  const lowerMsg = userMessage.toLowerCase();
  const flagged: string[] = [];
  if (lowerMsg.includes('algorithm') || lowerMsg.includes('google changed') || lowerMsg.includes('meta changed')) {
    flagged.push('Blaming algorithm without proof');
  }
  if (lowerMsg.includes('i think maybe') || lowerMsg.includes('probably') || lowerMsg.includes('sort of') || lowerMsg.includes('kind of')) {
    flagged.push('Weak hedging / lack of conviction');
  }
  if (lowerMsg.includes('give it more time') || lowerMsg.includes('learning phase')) {
    flagged.push('Passive inaction / waiting on learning phase');
  }

  // If Gemini key is available, use real LLM
  if (GEMINI_API_KEY) {
    const isBeginner = scenario.difficulty === 'beginner';
    const isIntermediate = scenario.difficulty === 'intermediate';

    const toneInstruction = isBeginner
      ? `1. Stay strictly in character as a non-technical business owner, founder, or clinic director (${scenario.stakeholder.name}, ${scenario.stakeholder.title}). You have normal questions and concerns about your ad investment.
2. If the user explains things simply, calmly, and using relatable analogies (e.g. Ad Preview Tool, mobile page speed, store visits vs billboards), be pleased, appreciative, and receptive (sentiment: "reassured" or "neutral").
3. If they use dense acronyms without explaining, ask them to clarify what that means for a non-technical person.
4. Keep responses conversational and realistic (2 to 3 sentences). DO NOT mention boardrooms or enterprise C-suite meetings.`
      : `1. Stay strictly in character as "${scenario.stakeholder.name}", ${scenario.stakeholder.title} at ${scenario.stakeholder.organization}.
2. If the user dodged the root cause, made vague algorithm excuses, or used passive hedging ("I think maybe", "give it a few weeks"), confront them sharply!
3. If they gave a strong BLUF, took ownership, and identified technical root causes, push for exact tactical verification and accountability.
4. Keep your response between 2 to 4 sentences. Make it sound like a live, high-friction operational call. Do NOT break character.`;

    const prompt = `
You are roleplaying as "${scenario.stakeholder.name}", ${scenario.stakeholder.title} at ${scenario.stakeholder.organization}.
Difficulty Tier: ${scenario.difficulty.toUpperCase()}
Temperament: ${scenario.stakeholder.temperament}.
Scenario context: ${scenario.briefingSummary}
Urgency / Timeline: ${scenario.urgencyTimeline}
Target Root Causes you know about: ${scenario.targetRootCauses.join('; ')}
Prohibited excuses you dislike: ${scenario.prohibitedExcuses.join('; ')}

Current Dialogue Turn: ${currentTurn} of 5.
Previous dialogue history:
${history.map(h => `${h.speaker === 'client' ? scenario.stakeholder.name : 'Agency Lead'}: ${h.text}`).join('\n')}

The user just responded:
"${userMessage}"

INSTRUCTIONS:
${toneInstruction}
5. If the user asks for help, says they don't know, or asks for definitions/explanations of metrics (e.g. "what is CPL?", "explain the situation", "I don't know"): Break down the metric definition simply, explain what went wrong with the campaigns, and coach them on how they should answer with BLUF.
6. Return JSON format:
{
  "text": "your spoken client response",
  "sentiment": "confrontational" | "skeptical" | "reassured" | "neutral"
}
`;

    const aiRes = await callGemini(prompt, "You are a realistic marketing client roleplay engine. Output only valid JSON.");
    if (aiRes) {
      try {
        const cleanJson = aiRes.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanJson);
        return {
          text: parsed.text,
          sentiment: parsed.sentiment || 'skeptical',
          flaggedPhrases: flagged
        };
      } catch (e) {
        console.warn("Failed to parse Gemini roleplay JSON, falling back", e);
      }
    }
  }

  // High-fidelity fallback roleplay engine
  return generateDeterministicClientReply(scenario, userMessage, history, currentTurn, flagged);
}

function generateDeterministicClientReply(
  scenario: Scenario,
  userMessage: string,
  history: DialogueTurn[],
  currentTurn: number,
  flagged: string[]
): { text: string; sentiment: 'confrontational' | 'skeptical' | 'reassured' | 'neutral'; flaggedPhrases?: string[] } {
  const lower = userMessage.toLowerCase();
  const name = scenario.stakeholder.name.split(' ')[0];

  // Immediately confront user if input is off-topic, gibberish, mic-test, or relies on prohibited excuses
  const words = userMessage.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const turnEval = generateDeterministicTurnEvaluation(scenario, userMessage, words, lower);
  if (!turnEval.isPass && turnEval.sentiment === 'confrontational') {
    return {
      text: turnEval.clientReaction,
      sentiment: 'confrontational',
      flaggedPhrases: [...flagged, ...(turnEval.flaggedPhrases || [])],
    };
  }

  // BEGINNER SCENARIO 1: Google Ads Ad Not Showing
  if (scenario.id === 'google-ads-ad-not-showing') {
    if (currentTurn === 1) {
      if (lower.includes('preview') || lower.includes('impression share') || lower.includes('quality score') || lower.includes('not click') || lower.includes('hurt')) {
        return {
          text: "Wait, really? So searching on my phone actually hurts our click-through rate? That makes sense, but how can I verify for myself that people in our local zip code are actually seeing the ad right now?",
          sentiment: 'skeptical',
          flaggedPhrases: flagged
        };
      }
      return {
        text: "I understand, but when I search 'emergency teeth whitening' I see Dr. Adams down the street and I don't see us. Are you 100% sure our budget isn't just sitting idle?",
        sentiment: 'skeptical',
        flaggedPhrases: flagged
      };
    }
    if (currentTurn === 2) {
      if (lower.includes('preview') || lower.includes('tool') || lower.includes('diagnostic') || lower.includes('screenshot') || lower.includes('link')) {
        return {
          text: "That is such a relief! So Google's Ad Preview Tool lets me see our live ad without racking up phantom impressions. Can you email me that preview link so I can see it?",
          sentiment: 'reassured',
          flaggedPhrases: flagged
        };
      }
      return {
        text: "Okay, so our Impression Share is at 74% and genuine prospective patients are seeing it. I just wanted to be sure our $2,500 monthly budget was actually working for the clinic.",
        sentiment: 'neutral',
        flaggedPhrases: flagged
      };
    }
    return {
      text: "Thank you for explaining that so simply without confusing technical jargon. I promise I won't search from my phone anymore! Keep up the great work.",
      sentiment: 'reassured',
      flaggedPhrases: flagged
    };
  }

  // BEGINNER SCENARIO 2: Meta vs GA4 Click Discrepancy
  if (scenario.id === 'meta-vs-ga4-click-discrepancy') {
    if (currentTurn === 1) {
      if (lower.includes('load') || lower.includes('speed') || lower.includes('second') || lower.includes('bounce') || lower.includes('script') || lower.includes('wait')) {
        return {
          text: "Wait—so Meta counts the click the instant they tap, but if our mobile store takes 4 seconds to load, impatient shoppers hit Back before Google Analytics can even count them? Is that why we're missing 280 visitors?",
          sentiment: 'skeptical',
          flaggedPhrases: flagged
        };
      }
      return {
        text: "That doesn't make sense—Meta says 400 people clicked, but GA4 only shows 120 visitors. Am I paying Meta for fake bot clicks, or is our tracking broken?",
        sentiment: 'confrontational',
        flaggedPhrases: flagged
      };
    }
    if (currentTurn === 2) {
      return {
        text: "Okay, compressing the heavy product photos and getting mobile load time under 2 seconds sounds like a clear fix. How quickly can we get those optimizations live?",
        sentiment: 'reassured',
        flaggedPhrases: flagged
      };
    }
    return {
      text: "Got it! Let's get those image files compressed today. Thank you for breaking down the math so clearly—now I understand why the numbers look different.",
      sentiment: 'reassured',
      flaggedPhrases: flagged
    };
  }

  // BEGINNER SCENARIO 3: CPC vs CPM
  if (scenario.id === 'cpc-vs-cpm-bidding-explained') {
    if (currentTurn === 1) {
      return {
        text: "I love the store visitor versus highway billboard comparison! That makes total sense. So on Google Search where people are actively searching to buy, paying per click protects us, right?",
        sentiment: 'neutral',
        flaggedPhrases: flagged
      };
    }
    return {
      text: "And on Meta, if our video ad gets lots of clicks, CPM actually works out to be way cheaper per visitor! Let's keep CPC on Search and test CPM on Meta. Thanks for explaining this so clearly.",
      sentiment: 'reassured',
      flaggedPhrases: flagged
    };
  }

  // BEGINNER SCENARIO 4: Daily Budget Exhausted
  if (scenario.id === 'daily-budget-exhausted-morning') {
    if (currentTurn === 1) {
      return {
        text: "Wait, so our $100 ran out before 11 AM because morning commuter searches spiked and burned the whole budget? Why weren't the ads spaced out throughout the day?",
        sentiment: 'skeptical',
        flaggedPhrases: flagged
      };
    }
    return {
      text: "Ad scheduling from 9 AM to 6 PM with negative keywords for DIY queries sounds perfect. That way the calls come in when our estimators are at their desks. Let's do it!",
      sentiment: 'reassured',
      flaggedPhrases: flagged
    };
  }

  // BEGINNER SCENARIO 5: High CTR Zero Purchases
  if (scenario.id === 'high-ctr-zero-purchases') {
    if (currentTurn === 1) {
      return {
        text: "So our 3.8% CTR means people love the dress in our Instagram video, but when they clicked, they were dumped onto a general collection page instead of the exact product? That's why nobody bought?",
        sentiment: 'skeptical',
        flaggedPhrases: flagged
      };
    }
    return {
      text: "And optimizing for 'Traffic' told Facebook to find cheap clickers instead of actual buyers! Switching to the Purchase objective and linking straight to the dress makes total sense. Thank you!",
      sentiment: 'reassured',
      flaggedPhrases: flagged
    };
  }

  // ADVANCED SCENARIO 1: Google PMax Cannibalization
  if (scenario.id === 'google-pmax-cannibalization') {
    if (currentTurn === 1) {
      if (lower.includes('brand') || lower.includes('cannibaliz') || lower.includes('exclusion') || lower.includes('hubspot') || lower.includes('webhook')) {
        return {
          text: "Wait—are you telling me our own PMax campaign was bidding up our Brand keywords from $1.80 to $6.40? Why wasn't an exclusion list attached before we turned it on? And what about the lead quality—sales is screaming that demo requests are coming from Russian puzzle games!",
          sentiment: 'skeptical',
          flaggedPhrases: flagged
        };
      } else {
        return {
          text: "That sounds like a generic agency textbook answer. I don't care about 'market volatility' or 'giving smart bidding time to learn.' We are burning $12,000 every single day! Did anyone audit the actual search terms and display placement reports or not?",
          sentiment: 'confrontational',
          flaggedPhrases: flagged
        };
      }
    }

    if (currentTurn === 2) {
      if (lower.includes('display') || lower.includes('app') || lower.includes('exclusion') || lower.includes('paused') || lower.includes('stop')) {
        return {
          text: "Okay, so you caught the junk display placements and capped the brand cannibalization. But what do I tell our CEO in 90 minutes when she asks why our CPL is still 68% over target on the rolling 7-day average?",
          sentiment: 'skeptical',
          flaggedPhrases: flagged
        };
      } else {
        return {
          text: "You're still dodging my question. If our CRM offline sync broke, how many thousands of dollars did Google Ads optimize into junk leads before your team noticed?",
          sentiment: 'confrontational',
          flaggedPhrases: flagged
        };
      }
    }

    if (currentTurn === 3) {
      if (lower.includes('board') || lower.includes('72 hour') || lower.includes('bluf') || lower.includes('credit') || lower.includes('normalize')) {
        return {
          text: "Alright. If you can send me that exact forensic one-pager with the stabilized CPL forecast before 11:30 AM, I can defend this in the boardroom. But I want daily updates at 8 AM until CPL is back under $140. Deal?",
          sentiment: 'reassured',
          flaggedPhrases: flagged
        };
      } else {
        return {
          text: "I need concrete deliverables, not promises. Send me the exact line-item changes, the negative keyword audit, and the timeline for when our pipeline qualification recovers to 25%. We are watching this by the hour.",
          sentiment: 'neutral',
          flaggedPhrases: flagged
        };
      }
    }
  }

  // ADVANCED SCENARIO 2: Meta Ads Advantage+ Creative Decay
  if (scenario.id === 'meta-advantage-creative-decay') {
    if (currentTurn === 1) {
      if (lower.includes('creative') || lower.includes('frequency') || lower.includes('fatigue') || lower.includes('existing customer') || lower.includes('cap')) {
        return {
          text: "Are you serious? Advantage+ was spending 40% of our budget retargeting customers who already bought from us last week?! How did that cap get set so high, and why did nobody notice that one video had a 4.8 frequency?",
          sentiment: 'skeptical',
          flaggedPhrases: flagged
        };
      } else {
        return {
          text: "Don't tell me it's iOS 14 or the Meta auction being volatile. Triple Whale shows our new customer CAC doubled overnight. Why is our spend concentrated on one burnt-out ad unit?",
          sentiment: 'confrontational',
          flaggedPhrases: flagged
        };
      }
    }

    if (currentTurn === 2) {
      return {
        text: "Okay, capping existing customers at 5% makes sense. But creative production takes days. Where are the 6 new creative hooks coming from, and how will you ensure they don't fatigue in 48 hours like the last one?",
        sentiment: 'skeptical',
        flaggedPhrases: flagged
      };
    }

    return {
      text: "Fine. Implement the dynamic testing sandbox today. If blended ROAS doesn't climb back to at least 2.5x by Wednesday morning, I'm freezing ASC budget and shifting everything to Google Demand Gen.",
      sentiment: 'neutral',
      flaggedPhrases: flagged
    };
  }

  // ADVANCED SCENARIO 3: Quick Commerce Zepto & Blinkit Bleed
  if (scenario.id === 'quick-commerce-zepto-blinkit-bleed') {
    if (currentTurn === 1) {
      if (lower.includes('dark store') || lower.includes('stock') || lower.includes('inventory') || lower.includes('pin code') || lower.includes('oos')) {
        return {
          text: "42 dark stores were out of stock and we kept spending top-of-search bids on Zepto?! That is ₹4 Lakhs down the drain! Why don't our campaigns automatically pause when inventory drops?",
          sentiment: 'confrontational',
          flaggedPhrases: flagged
        };
      }
      return {
        text: "Don't blame our Bhiwandi warehouse team! If the product isn't on the shelf, your ads should never fire. What have you done to stop our ad money from vanishing right now?",
        sentiment: 'confrontational',
        flaggedPhrases: flagged
      };
    }

    return {
      text: "Switching top-of-search to the 500g variant is smart since it has stock. But I need that automated pin-code inventory script live by tonight so this never repeats.",
      sentiment: 'reassured',
      flaggedPhrases: flagged
    };
  }

  // Dynamic Evaluation-driven fallback for all curriculum scenarios
  return {
    text: turnEval.clientReaction,
    sentiment: turnEval.sentiment,
    flaggedPhrases: [...flagged, ...(turnEval.flaggedPhrases || [])],
  };
}

// ---------------------------------------------------------------------------
// Single-Turn Instant Evaluator (Used by VoiceRoleplayExercise)
// ---------------------------------------------------------------------------
export async function evaluateRoleplayTurn(
  scenario: Scenario,
  userMessage: string,
  history: DialogueTurn[] = [],
  currentTurn: number = 1,
  apiKeyOverride?: string
): Promise<TurnEvaluation> {
  const activeKey = apiKeyOverride || GEMINI_API_KEY;
  const userText = (userMessage || '').trim();
  const lower = userText.toLowerCase();
  const words = lower.split(/\s+/).filter(Boolean);

  // If Gemini key is available, use real LLM evaluation with strict rubric
  if (activeKey) {
    const prompt = `
You are an expert Performance Marketing Managing Director grading an agency media buyer responding to a panicking client during a live crisis.

SCENARIO: "${scenario.title}" (${scenario.difficulty.toUpperCase()})
STAKEHOLDER: "${scenario.stakeholder.name}", ${scenario.stakeholder.title} at ${scenario.stakeholder.organization}
STAKEHOLDER TEMPERAMENT: "${scenario.stakeholder.temperament}"
CLIENT CRISIS OBJECTION: "${scenario.initialClientDialogue}"
TARGET ROOT CAUSES: ${scenario.targetRootCauses.join('; ')}
PROHIBITED EXCUSES: ${scenario.prohibitedExcuses.join('; ')}
GOLD STANDARD BLUF BENCHMARK: "${scenario.modelAnswerBLUF.bluf}"

THE USER (MEDIA BUYER) RESPONDED:
"${userText}"

STRICT EVALUATION RUBRIC:
0. ASKING FOR HELP / "I DON'T KNOW" / ASKING FOR DEFINITION (e.g. "I don't know what happened", "can you explain what CPL means?", "what is the situation?", "tell me the answer"):
   - sentiment: "skeptical" or "neutral".
   - isPass: false.
   - clientReaction: The client/agent breaks down the metric definition, explains what went wrong in this specific account, and explicitly tells the user what kind of BLUF answer they need to hear to be reassured.
   - feedbackNotes: Explain the metric and prompt the user to practice delivering the BLUF answer.

1. OFF-TOPIC, TRIVIAL, MIC TESTING, OR NONSENSE (e.g. "so that would mean oh my god this working nice", "testing mic", "hello", random chit-chat):
   - You MUST assign FAILING scores: marketingLogic: 5-25, terminology: 5-20, grammar: 40-60, executivePresence: 10-25.
   - overallScore: 10-25.
   - isPass: false.
   - sentiment: "confrontational".
   - clientReaction: The client is baffled and outraged that the user gave an irrelevant/gibberish reply instead of solving the crisis.
   - feedbackNotes: Explain that the response was completely off-topic and did not diagnose the metric shift or provide containment.

2. DEFENSIVE / PROHIBITED EXCUSES (blaming the algorithm without evidence, "wait for learning phase", "it's not our fault"):
   - marketingLogic: 25-45, terminology: 30-50, executivePresence: 25-40.
   - overallScore: 30-45.
   - isPass: false.
   - sentiment: "confrontational".
   - feedbackNotes: Explain why blaming the algorithm without proof destroys client trust.

3. PARTIAL / WEAK (mentions the metric, but leaves out the root cause, actionable containment, or timeline):
   - overallScore: 50-68.
   - isPass: false.
   - sentiment: "skeptical".
   - feedbackNotes: Point out the missing containment plan and next steps.

4. EXCELLENT / GOLD STANDARD (clear BLUF framing, diagnoses root cause, articulates containment and recovery timeline):
   - overallScore: 85-98.
   - isPass: true.
   - sentiment: "reassured".
   - feedbackNotes: Praise the BLUF ownership, precision, and reassuring demeanor.

RETURN JSON IN THIS EXACT STRUCTURE (no markdown, valid JSON only):
{
  "scores": {
    "marketingLogic": number (0-100),
    "terminology": number (0-100),
    "grammar": number (0-100),
    "executivePresence": number (0-100)
  },
  "overallScore": number (0-100),
  "isPass": boolean,
  "sentiment": "reassured" | "skeptical" | "confrontational",
  "clientReaction": "spoken client response in character",
  "feedbackNotes": "director critique explaining why it passed or failed",
  "flaggedPhrases": ["phrase1"],
  "strengths": ["strength1"],
  "weaknesses": ["weakness1"]
}
`;

    try {
      const aiRes = await callGemini(prompt, "You are a master performance marketing agency director. Output strictly valid JSON.", activeKey);
      if (aiRes) {
        const clean = aiRes.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(clean);
        return {
          scores: {
            marketingLogic: Math.round(parsed.scores?.marketingLogic ?? 50),
            terminology: Math.round(parsed.scores?.terminology ?? 50),
            grammar: Math.round(parsed.scores?.grammar ?? 60),
            executivePresence: Math.round(parsed.scores?.executivePresence ?? 50),
          },
          overallScore: Math.round(parsed.overallScore ?? 50),
          isPass: Boolean(parsed.isPass ?? (parsed.overallScore >= 70 && parsed.sentiment === 'reassured')),
          sentiment: parsed.sentiment || (parsed.overallScore >= 70 ? 'reassured' : 'confrontational'),
          clientReaction: parsed.clientReaction || `${scenario.stakeholder.name}: "I need a real explanation of what happened to our campaigns."`,
          feedbackNotes: parsed.feedbackNotes || "Evaluate against the BLUF framework.",
          goldStandardBenchmark: scenario.modelAnswerBLUF.bluf,
          flaggedPhrases: Array.isArray(parsed.flaggedPhrases) ? parsed.flaggedPhrases : [],
          strengths: Array.isArray(parsed.strengths) ? parsed.strengths : [],
          weaknesses: Array.isArray(parsed.weaknesses) ? parsed.weaknesses : [],
        };
      }
    } catch (e) {
      console.warn("Gemini evaluation error, falling back to deterministic:", e);
    }
  }

  // High-precision deterministic evaluation fallback
  return generateDeterministicTurnEvaluation(scenario, userText, words, lower);
}

function generateDeterministicTurnEvaluation(
  scenario: Scenario,
  userText: string,
  words: string[],
  lower: string
): TurnEvaluation {
  const goldBenchmark = scenario.modelAnswerBLUF?.bluf || 
    "Alex, bottom line up front: Our CPL rose because audience saturation drove Meta CPMs from $18 to $26. We immediately deployed 3 fresh creative video hooks and capped ad set spend to lock pacing back to target within 48 hours.";

  const stakeholderFirstName = scenario.stakeholder.name.split(' ')[0];
  const primaryKPI = scenario.brokenKPIs[0]?.metric || 'target metrics';

  // Marketing & scenario vocabulary
  const marketingVocab = [
    'cpl', 'cpm', 'ctr', 'cpc', 'roas', 'cac', 'conversion', 'conversions',
    'lead', 'leads', 'budget', 'spend', 'ad set', 'adsets', 'ad set spend', 'campaign',
    'creative', 'creatives', 'fatigue', 'saturation', 'frequency', 'impression', 'impressions',
    'clicks', 'bidding', 'audience', 'audiences', 'targeting', 'pause', 'refresh', 'hook',
    'hooks', 'video', 'retargeting', 'pacing', 'cap', 'capped', 'reallocated', 'tracking',
    'pixel', 'capi', 'bluf', 'bottom line', 'pmax', 'quality score', 'search terms',
    'negative keywords', 'inventory', 'dark store', 'discrepancy', 'preview tool',
    'variants', 'variant', 'stop-loss', 'containment'
  ];
  const matchedMarketingTerms = marketingVocab.filter(term => lower.includes(term));

  // Root cause keywords from scenario definition
  const rootCauseWords = scenario.targetRootCauses.flatMap(rc => 
    rc.toLowerCase().split(/\W+/).filter(w => w.length > 3)
  );
  const matchedRootCauses = rootCauseWords.filter(k => lower.includes(k));

  // Prohibited excuses check
  const prohibitedTriggers = [
    'algorithm is learning', 'algorithm changed', 'blame the algorithm', 'google changed',
    'meta changed', 'not our fault', 'give it time', 'wait a few weeks', 'give it a few weeks',
    'learning phase', 'market volatility', 'everyone is seeing this', 'it is what it is'
  ];
  const matchedExcuses = prohibitedTriggers.filter(ex => lower.includes(ex));

  // Structural checks
  const hasBluf = /\b(bottom line|bluf|up front|immediate|contained|here is what|to stabilize)\b/i.test(lower);
  const hasActionPlan = /\b(deployed|paused|refreshed|capped|reallocated|stabiliz|variant|variants|hook|hooks|audit|tested|schedule|plan|stop-loss)\b/i.test(lower);

  // 0. Check if user is asking for help, says "I don't know", or asks for definition/explanation of what happened
  const isHelpOrDontKnow = /\b(i don't know|idk|don't know|dont know|not sure|help|explain|what does .* mean|what happened|what is the answer|tell me what to do|can you explain|what should i say|definition|what is cpl|what is cpm|what is ctr|what is roas)\b/i.test(lower);

  if (isHelpOrDontKnow) {
    const rootHint = scenario.targetRootCauses[0] || 'audience saturation drove ad costs up';
    const primaryMetric = scenario.brokenKPIs[0]?.metric || 'Cost Per Lead';
    const prevVal = scenario.brokenKPIs[0]?.previousValue || 'normal baseline';
    const currVal = scenario.brokenKPIs[0]?.currentValue || 'elevated';
    
    return {
      scores: {
        marketingLogic: 50,
        terminology: 50,
        grammar: 75,
        executivePresence: 50,
      },
      overallScore: 54,
      isPass: false,
      sentiment: 'skeptical',
      clientReaction: `${stakeholderFirstName}: "Let me break down what is happening: Our ${primaryMetric} shifted from ${prevVal} to ${currVal}. In terms of what happened: ${rootHint}. What I need you to say is lead with BLUF: state the root cause clearly, explain that spend is contained, and give me our 48-hour recovery actions like refreshing video hooks and capping ad sets. Now, tell me how we are going to fix this!"`,
      feedbackNotes: `You asked for clarification. In live agency communications, asking for context is helpful, but you must quickly lead with BLUF ownership and containment. Review the recommended response and talk back to the client.`,
      goldStandardBenchmark: goldBenchmark,
      flaggedPhrases: [],
      strengths: ['Sought clarity rather than fabricating incorrect numbers.'],
      weaknesses: [
        'Did not lead with an authoritative recommendation.',
        'Left client needing to explain the crisis.'
      ],
    };
  }

  // 1. Check for empty, trivial, mic test, or nonsensical gibberish / off-topic
  const isTooShort = words.length < 4 || userText.length < 15;
  const isTestOrGibberish = /\b(test|testing|working nice|oh my god|mic|can you hear|check|hello|hi|hey|blah|asdf)\b/i.test(lower);
  const isOffTopic = matchedMarketingTerms.length === 0 && matchedRootCauses.length === 0;

  // CASE A: TRIVIAL / MIC TEST / GIBBERISH / OFF-TOPIC (e.g. "so that would mean oh my god this working nice")
  if (isTooShort || isTestOrGibberish || isOffTopic) {
    return {
      scores: {
        marketingLogic: 15,
        terminology: 10,
        grammar: 45,
        executivePresence: 18,
      },
      overallScore: 19,
      isPass: false,
      sentiment: 'confrontational',
      clientReaction: `${stakeholderFirstName}: "That doesn't answer my question at all. We are burning budget and our ${primaryKPI} took a massive hit, and you're saying '${userText.slice(0, 45)}'?! What is the actual technical explanation for why this happened?!"`,
      feedbackNotes: `Your response was off-topic or conversational filler. In a live client confrontation, panicking stakeholders require an immediate BLUF (Bottom Line Up Front) explanation addressing why ${primaryKPI} shifted and what containment actions you deployed.`,
      goldStandardBenchmark: goldBenchmark,
      flaggedPhrases: [userText],
      strengths: [],
      weaknesses: [
        `Completely failed to address why ${primaryKPI} degraded.`,
        'Used zero performance marketing terminology.',
        'Left the client panicked without operational containment.'
      ],
    };
  }

  // CASE B: PROHIBITED EXCUSES / BLAMING ALGORITHM
  if (matchedExcuses.length > 0) {
    return {
      scores: {
        marketingLogic: 32,
        terminology: 40,
        grammar: 68,
        executivePresence: 28,
      },
      overallScore: 39,
      isPass: false,
      sentiment: 'confrontational',
      clientReaction: `${stakeholderFirstName}: "Don't just blame the algorithm or tell me to wait! We are losing thousands of dollars every day. Did anyone on your team actually audit our campaigns before this call?!"`,
      feedbackNotes: `You relied on a prohibited excuse ("${matchedExcuses[0]}"). Never deflect to platform black boxes without empirical telemetry. Panicking stakeholders need operational ownership and an immediate stop-loss.`,
      goldStandardBenchmark: goldBenchmark,
      flaggedPhrases: matchedExcuses,
      strengths: ['Identified that campaigns are in an active state.'],
      weaknesses: [
        `Used a prohibited excuse: "${matchedExcuses[0]}".`,
        'Passive delay tactic ("give it time / wait") erodes client trust.',
        'Failed to propose proactive creative or bidding containment.'
      ],
    };
  }

  // CASE C: PARTIAL / WEAK EXPLANATION (Mentions a metric or keyword, but no actionable containment or no BLUF)
  const isPartial = matchedMarketingTerms.length < 2 || !hasActionPlan || matchedRootCauses.length === 0;
  if (isPartial) {
    return {
      scores: {
        marketingLogic: 58,
        terminology: 62,
        grammar: 76,
        executivePresence: 54,
      },
      overallScore: 62,
      isPass: false,
      sentiment: 'skeptical',
      clientReaction: `${stakeholderFirstName}: "Okay, so you pointed to that metric shift, but what is our immediate 48-hour plan to contain this? I need concrete action items before I agree to keep campaigns active."`,
      feedbackNotes: `You identified part of the problem, but failed to provide an immediate containment plan or timeline. In performance marketing, diagnosing the issue without a fix leaves clients anxious. Lead with BLUF and state your stop-loss action in sentence #1.`,
      goldStandardBenchmark: goldBenchmark,
      flaggedPhrases: [],
      strengths: [
        matchedMarketingTerms.length > 0 ? `Used marketing metrics (${matchedMarketingTerms.slice(0, 2).join(', ')}).` : 'Acknowledged client concern.'
      ],
      weaknesses: [
        'Missing proactive 48-hour containment action items.',
        'Opening sentence was chronological rather than BLUF-first.'
      ],
    };
  }

  // CASE D: EXCELLENT / GOLD STANDARD ANSWER
  const logicScore = Math.min(98, 88 + Math.min(matchedRootCauses.length * 2, 6));
  const termScore = Math.min(96, 86 + Math.min(matchedMarketingTerms.length * 2, 8));
  const grammarScore = 96;
  const presenceScore = hasBluf ? 95 : 88;
  const overall = Math.round((logicScore * 0.35) + (termScore * 0.25) + (grammarScore * 0.15) + (presenceScore * 0.25));

  return {
    scores: {
      marketingLogic: logicScore,
      terminology: termScore,
      grammar: grammarScore,
      executivePresence: presenceScore,
    },
    overallScore: overall,
    isPass: true,
    sentiment: 'reassured',
    clientReaction: `${stakeholderFirstName}: "Understood. That is the exact clarity I needed. Having those corrective steps deployed with capped spend gives me confidence. Keep me posted on how pacing looks tomorrow."`,
    feedbackNotes: `Exceptional execution of the BLUF framework. You diagnosed the root cause, communicated clear containment measures, and protected client confidence without making excuses.`,
    goldStandardBenchmark: goldBenchmark,
    flaggedPhrases: [],
    strengths: [
      'Led with authoritative BLUF framing.',
      `Precise root cause diagnosis (${matchedRootCauses.slice(0, 2).join(', ')}).`,
      'Actionable 48-hour recovery timeline.'
    ],
    weaknesses: [],
  };
}

// ---------------------------------------------------------------------------
// 4-Pillar Multi-Tiered Evaluation Generator (Stage 3)
// ---------------------------------------------------------------------------
export async function evaluateRoleplaySession(
  scenario: Scenario,
  dialogueHistory: DialogueTurn[]
): Promise<SessionEvaluation> {
  const userTurns = dialogueHistory.filter(t => t.speaker === 'user');
  const userTextCombined = userTurns.map(t => t.text).join(' ');

  if (GEMINI_API_KEY) {
    const prompt = `
You are the Executive Managing Director of a premier global performance marketing agency with 25+ years experience.
Perform a 4-pillar forensic evaluation of an agency practitioner who just conducted a client roleplay.

Scenario: "${scenario.title}"
Difficulty Tier: ${scenario.difficulty.toUpperCase()}
Client Environment: "${scenario.clientEnvironment}"
Key Metrics: ${scenario.brokenKPIs.map(k => `${k.metric}: ${k.currentValue} (was ${k.previousValue})`).join(', ')}
Target Root Causes: ${scenario.targetRootCauses.join('; ')}
Prohibited Excuses: ${scenario.prohibitedExcuses.join('; ')}

FULL DIALOGUE TRANSCRIPT:
${dialogueHistory.map((t, idx) => `[Turn ${Math.floor(idx/2)+1}] ${t.speaker === 'client' ? scenario.stakeholder.name : 'User (Agency)'}: ${t.text}`).join('\n')}

EVALUATION GUIDELINES (Calibrated for ${scenario.difficulty.toUpperCase()} level):
- For BEGINNER tier: Evaluate on foundational communication clarity, patience, empathy, use of relatable analogies, and explaining terms simply without dumping unnecessary jargon on a small business owner. Do NOT penalize for not citing complex enterprise ad-tech acronyms.
- For INTERMEDIATE/ADVANCED tier: Evaluate strictly on technical root cause precision (e.g. broad match bleed, server-side attribution, dark store inventory, PMax cannibalization), BLUF framework, metric math, and boardroom composure.

EVALUATE STRICTLY ON THESE 4 PILLARS (Scores 0 to 100):
1. marketingLogic (Marketing Logic & Root Cause Analysis): Did they isolate the real driver or make vague excuses?
2. terminologyAccuracy (Industry Terminology & Metric Precision): Appropriate and accurate usage of relevant marketing concepts for this scenario.
3. grammarRegister (Grammar, Syntax & Professional Register): Removal of filler words ("um", "like", "you know"), hedging ("I think maybe"), crisp professional diction.
4. executivePresence (Executive Presence & Framing): Composure, solution-first ownership, proactive reassurance.

Flag specific weak phrases the user uttered with exact improved reframes.
Provide a turn-by-turn critique.

Return JSON in this EXACT structure:
{
  "overallScore": number (0-100),
  "overallGrade": "Managing Director Ready" | "Senior Media Lead" | "Associate Media Buyer" | "Needs Remediation",
  "summaryFeedback": "2-3 sentences executive summary",
  "pillars": {
    "marketingLogic": {
      "score": number,
      "rating": "Exceptional" | "Proficient" | "Needs Improvement" | "Critical Failure",
      "strengths": ["string", "string"],
      "weaknesses": ["string"],
      "keyRecommendations": ["string"]
    },
    "terminologyAccuracy": {
      "score": number,
      "rating": "Exceptional" | "Proficient" | "Needs Improvement" | "Critical Failure",
      "strengths": ["string"],
      "weaknesses": ["string"],
      "keyRecommendations": ["string"]
    },
    "grammarRegister": {
      "score": number,
      "rating": "Exceptional" | "Proficient" | "Needs Improvement" | "Critical Failure",
      "strengths": ["string"],
      "weaknesses": ["string"],
      "keyRecommendations": ["string"]
    },
    "executivePresence": {
      "score": number,
      "rating": "Exceptional" | "Proficient" | "Needs Improvement" | "Critical Failure",
      "strengths": ["string"],
      "weaknesses": ["string"],
      "keyRecommendations": ["string"]
    }
  },
  "flaggedPhrases": [
    {
      "originalText": "exact weak phrase user said",
      "flagReason": "why it failed executive standards",
      "improvedReframe": "agency director reframe",
      "category": "filler" | "hedging" | "terminology-error" | "defensive-excuse"
    }
  ],
  "turnBreakdown": [
    {
      "turnNumber": 1,
      "userUtterance": "summary of what user said",
      "critique": "director-level feedback on this turn"
    }
  ]
}
`;

    const aiRes = await callGemini(prompt, "You are a master performance marketing agency director. Output strictly valid JSON.");
    if (aiRes) {
      try {
        const clean = aiRes.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed: SessionEvaluation = JSON.parse(clean);
        return parsed;
      } catch (err) {
        console.warn('Failed to parse Gemini evaluation JSON, falling back', err);
      }
    }
  }

  // Deterministic evaluation engine
  return generateDeterministicEvaluation(scenario, dialogueHistory, userTextCombined, userTurns);
}

function generateDeterministicEvaluation(
  scenario: Scenario,
  dialogueHistory: DialogueTurn[],
  userTextCombined: string,
  userTurns: DialogueTurn[]
): SessionEvaluation {
  const lower = userTextCombined.toLowerCase();

  // 1. Marketing Logic Assessment
  let logicScore = 65;
  const logicStrengths: string[] = [];
  const logicWeaknesses: string[] = [];

  const hitRootCause = scenario.targetRootCauses.some(rc => {
    const keywords = rc.toLowerCase().split(' ').filter(w => w.length > 4);
    return keywords.some(k => lower.includes(k));
  });

  if (hitRootCause) {
    logicScore += 22;
    logicStrengths.push('Correctly identified the structural technical root cause rather than deflecting to external forces.');
  } else {
    logicScore -= 15;
    const targetHint = scenario.targetRootCauses[0] || 'the core technical anomaly';
    logicWeaknesses.push(`Failed to clearly explain the specific driver: ${targetHint.slice(0, 70)}...`);
  }

  if (lower.includes('algorithm') && !lower.includes('smart bidding')) {
    logicScore -= 10;
    logicWeaknesses.push('Blamed the platform algorithm without supporting data or concrete explanations.');
  } else {
    logicStrengths.push('Avoided lazy algorithm blaming and anchored discussion to operational levers.');
  }

  // 2. Terminology Accuracy
  let termScore = 70;
  const termStrengths: string[] = [];
  const termWeaknesses: string[] = [];

  const marketingTerms = [
    'cpl', 'cpc', 'cpm', 'roas', 'cac', 'attribution', 'oct', 'capi', 'blended', 
    'last-click', 'frequency', 'impression share', 'pmax', 'exclusion', 'ctr', 
    'ad preview', 'quality score', 'drop-off', 'sessions', 'clicks', 'broad match', 
    'dayparting', 'scheduling', 'conversion', 'conversions'
  ];
  const matchedTerms = marketingTerms.filter(t => lower.includes(t));

  if (matchedTerms.length >= 3) {
    termScore += 20;
    termStrengths.push(`Precise application of quantitative media metrics (${matchedTerms.slice(0, 3).join(', ')}).`);
  } else if (matchedTerms.length >= 1) {
    termScore += 10;
    termStrengths.push(`Utilized relevant marketing terminology (${matchedTerms.join(', ')}).`);
  } else {
    termScore -= 10;
    termWeaknesses.push('Spoke in vague qualitative generalities instead of clear performance terminology.');
  }

  // 3. Grammar & Professional Register
  let grammarScore = 75;
  const grammarStrengths: string[] = [];
  const grammarWeaknesses: string[] = [];
  const flaggedPhrases: FlaggedPhraseItem[] = [];

  const fillers = ['um', 'uh', 'like', 'you know', 'basically', 'actually'];
  const hedgings = ['i think', 'maybe', 'probably', 'sort of', 'kind of', 'hopefully'];

  fillers.forEach(f => {
    if (new RegExp(`\\b${f}\\b`, 'i').test(userTextCombined)) {
      grammarScore -= 5;
      flaggedPhrases.push({
        originalText: f,
        flagReason: 'Filler word diminishes authority during high-stakes client confrontation.',
        improvedReframe: 'Deliberate vocal pause (silence)',
        category: 'filler'
      });
    }
  });

  hedgings.forEach(h => {
    if (lower.includes(h)) {
      grammarScore -= 6;
      flaggedPhrases.push({
        originalText: h,
        flagReason: 'Tentative hedging signals internal uncertainty to panicking stakeholders.',
        improvedReframe: 'Our telemetry confirms / Our audit isolated',
        category: 'hedging'
      });
    }
  });

  if (grammarScore >= 80) {
    grammarStrengths.push('Clean executive cadence with minimal hedging or vocal fillers.');
  } else {
    grammarWeaknesses.push('Excessive hedging language reduced client confidence in agency control.');
  }

  // 4. Executive Presence & Framing
  let presenceScore = 70;
  const presenceStrengths: string[] = [];
  const presenceWeaknesses: string[] = [];

  const firstUserTurn = userTurns[0]?.text.toLowerCase() || '';
  if (firstUserTurn.includes('bottom line') || firstUserTurn.includes('isolated') || firstUserTurn.includes('contained') || firstUserTurn.includes('here is what')) {
    presenceScore += 18;
    presenceStrengths.push('Commendable execution of the BLUF (Bottom Line Up Front) framework on opening turn.');
  } else {
    presenceScore -= 10;
    presenceWeaknesses.push('Opening response was reactive and chronological rather than leading with containment and bottom line.');
    flaggedPhrases.push({
      originalText: userTurns[0]?.text.slice(0, 60) + '...',
      flagReason: 'Failed to lead with BLUF; started with backstory rather than immediate financial containment.',
      improvedReframe: scenario.modelAnswerBLUF.bluf.slice(0, 120) + '...',
      category: 'defensive-excuse'
    });
  }

  // Clamp scores
  logicScore = Math.min(98, Math.max(35, logicScore));
  termScore = Math.min(96, Math.max(40, termScore));
  grammarScore = Math.min(98, Math.max(38, grammarScore));
  presenceScore = Math.min(95, Math.max(35, presenceScore));

  const overall = Math.round((logicScore * 0.35) + (termScore * 0.25) + (grammarScore * 0.15) + (presenceScore * 0.25));

  let grade = 'Associate Media Buyer';
  if (overall >= 88) grade = 'Managing Director Ready';
  else if (overall >= 78) grade = 'Senior Media Lead';
  else if (overall < 60) grade = 'Needs Remediation';

  const getRating = (s: number) => {
    if (s >= 85) return 'Exceptional';
    if (s >= 70) return 'Proficient';
    if (s >= 55) return 'Needs Improvement';
    return 'Critical Failure';
  };

  const turnBreakdown = userTurns.map((turn, i) => ({
    turnNumber: i + 1,
    userUtterance: turn.text.slice(0, 140) + (turn.text.length > 140 ? '...' : ''),
    critique: i === 0 
      ? (firstUserTurn.includes('bottom line') ? 'Strong direct BLUF opening.' : 'Lead more proactively with containment actions rather than explaining what happened.')
      : 'Solid turn progression. Ensure every metric is coupled with an operational timeline.'
  }));

  return {
    overallScore: overall,
    overallGrade: grade,
    summaryFeedback: `Session completed across ${userTurns.length} turns. You scored highest in ${termScore > logicScore ? 'Terminology Precision' : 'Marketing Logic'}, but need sharper executive framing to prevent client panic during the opening 30 seconds.`,
    pillars: {
      marketingLogic: {
        score: logicScore,
        rating: getRating(logicScore),
        strengths: logicStrengths.length ? logicStrengths : ['Addressed the operational crisis.'],
        weaknesses: logicWeaknesses.length ? logicWeaknesses : ['Could further detail the technical auction mechanics.'],
        keyRecommendations: ['Always link broken metrics to a specific account setting or attribution break.']
      },
      terminologyAccuracy: {
        score: termScore,
        rating: getRating(termScore),
        strengths: termStrengths.length ? termStrengths : ['Understood the primary cost KPIs.'],
        weaknesses: termWeaknesses.length ? termWeaknesses : ['Introduce down-funnel metrics like MER and OCT.'],
        keyRecommendations: ['Contrast platform-reported last-click metrics with blended business outcomes.']
      },
      grammarRegister: {
        score: grammarScore,
        rating: getRating(grammarScore),
        strengths: grammarStrengths.length ? grammarStrengths : ['Clear sentence structure.'],
        weaknesses: grammarWeaknesses.length ? grammarWeaknesses : ['Eliminate hedging verbs like "think" or "maybe".'],
        keyRecommendations: ['Replace qualifiers with factual declarative statements ("Data demonstrates...").']
      },
      executivePresence: {
        score: presenceScore,
        rating: getRating(presenceScore),
        strengths: presenceStrengths.length ? presenceStrengths : ['Maintained professional composure.'],
        weaknesses: presenceWeaknesses.length ? presenceWeaknesses : ['Adopt BLUF in sentence #1 of every crisis response.'],
        keyRecommendations: ['Lead with the stop-loss action before giving the diagnostic context.']
      }
    },
    flaggedPhrases,
    turnBreakdown
  };
}

// ---------------------------------------------------------------------------
// Adaptive Drill-Down Grader (Stage 5)
// ---------------------------------------------------------------------------
export async function gradeDrillSubmission(
  scenario: Scenario,
  pillar: string,
  prompt: string,
  userResponse: string
): Promise<{ score: number; aiFeedback: string }> {
  if (GEMINI_API_KEY) {
    const aiPrompt = `
You are an agency managing director grading a 60-second micro-remediation drill for a digital marketer.
Pillar Being Tested: ${pillar}
Drill Prompt: "${prompt}"
User's Response: "${userResponse}"

Score the user's response from 0 to 100 based on conciseness, technical rigor, absence of filler/hedging, and executive poise.
Provide 2-3 sentences of sharp, constructive director-level feedback.

Return JSON:
{
  "score": number,
  "aiFeedback": "string"
}
`;
    const res = await callGemini(aiPrompt);
    if (res) {
      try {
        const clean = res.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(clean);
      } catch (e) {
        console.warn('Failed to parse drill feedback JSON', e);
      }
    }
  }

  // Deterministic drill grading
  const words = userResponse.trim().split(/\s+/).length;
  let score = 75;
  if (words > 20 && words < 120) score += 12;
  if (userResponse.toLowerCase().includes('data') || userResponse.toLowerCase().includes('telemetry') || userResponse.toLowerCase().includes('isolated')) {
    score += 8;
  }
  score = Math.min(95, score);

  return {
    score,
    aiFeedback: `Decisive delivery with good economy of language (${words} words). You anchored the defense directly to verified telemetry, demonstrating strong executive command under fire.`
  };
}
