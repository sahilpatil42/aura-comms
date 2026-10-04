// ============================================================================
// AURA-COMMS 170 MASTER MARKETING SCENARIO CATALOG
// Duolingo-Style Progressive Curriculum across 12 Units:
// - Units 1-5: Beginner Foundations (75 Scenarios)
// - Units 6-8: Intermediate Tactical Performance (45 Scenarios)
// - Units 9-10: Advanced C-Suite & Crisis Management (30 Scenarios)
// - Units 11-12: Legend Boardroom Negotiations (20 Scenarios)
// ============================================================================

import { Scenario } from '@/types/scenario';

export const ALL_170_SCENARIOS: Scenario[] = [
  {
    id: "vocab-ctr-basics",
    title: "Module 1: What Does CTR Mean?",
    subtitle: "Teach the client why Click-Through Rate is the vital sign of ad resonance.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex Local Services (GOOGLE ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"You sent me this weekly report and it says our CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You sent me this weekly report and it says our CTR is 1.4%. What on earth is CTR, and why are you telling me 1.4% is bad for Google Search?",
    brokenKPIs: [
      {
        metric: "Search CTR",
        previousValue: "4.2%",
        currentValue: "1.4%",
        deltaPercent: "-66.7%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex Local Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, CTR stands for Click-Through Rate—the percentage of people who see your ad and click it. On Google Search, a healthy benchmark is 4% to 6%; at 1.4%, our headline isn't directly answering what homeowners are searching for. We are testing 3 refreshed headlines today to lift clicks without spending an extra dollar."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-cpc-mechanics",
    title: "Module 2: Demystifying Cost Per Click (CPC)",
    subtitle: "Explain how auction competition and ad Quality Score determine price.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (GOOGLE ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Why am I paying $6.50 every single time someone clicks our ad? That feels insanely expensive for one website visit!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why am I paying $6.50 every single time someone clicks our ad? That feels insanely expensive for one website visit!",
    brokenKPIs: [
      {
        metric: "CPC",
        previousValue: "$3.50",
        currentValue: "$6.50",
        deltaPercent: "+85.7%",
        isNegative: true,
        benchmark: "$3.50",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Sarah, CPC is Cost Per Click, set by Google's live auction based on local competitor bids and ad relevance. In dental, competitor bids are high, but we can lower our CPC by 30% by improving our Quality Score and matching our ad text to your booking page so Google rewards us with lower auction rates.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Sarah, CPC is Cost Per Click, set by Google's live auction based on local competitor bids and ad relevance. In dental, competitor bids are high, but we can lower our CPC by 30% by improving our Quality Score and matching our ad text to your booking page so Google rewards us with lower auction rates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-cpm-economics",
    title: "Module 3: Why Does Meta Charge CPM?",
    subtitle: "Clarify the difference between buying attention (CPM) and buying intent (CPC).",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (META ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Why does Meta bill us for impressions (CPM) instead of clicks? Doesn't that mean we pay money even if nobody visits our Shopify store?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why does Meta bill us for impressions (CPM) instead of clicks? Doesn't that mean we pay money even if nobody visits our Shopify store?",
    brokenKPIs: [
      {
        metric: "Meta CPM",
        previousValue: "$18.00",
        currentValue: "$22.00",
        deltaPercent: "+22.2%",
        isNegative: true,
        benchmark: "$18.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, Meta bills on CPM—Cost Per Thousand Impressions—because it sells visual attention in social feeds, not search intent. The exciting advantage is that when we create captivating videos with high Click-Through Rates, your effective cost per visitor drops to pennies, making CPM far cheaper than Search.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, Meta bills on CPM—Cost Per Thousand Impressions—because it sells visual attention in social feeds, not search intent. The exciting advantage is that when we create captivating videos with high Click-Through Rates, your effective cost per visitor drops to pennies, making CPM far cheaper than Search."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-cpa-cpl-basics",
    title: "Module 4: CPA vs CPL Breakdown",
    subtitle: "Help an e-commerce brand distinguish cost per lead from cost per sale.",
    category: "ecommerce-d2c",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "UrbanBrew Coffee (ECOMMERCE D2C)",
    briefingSummary: "Operations Director Marcus Vance is asking: \"You mentioned our CPA is $32 and our CPL is $8. Are these the same thing? Which one actually impacts our bank balance?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "You mentioned our CPA is $32 and our CPL is $8. Are these the same thing? Which one actually impacts our bank balance?",
    brokenKPIs: [
      {
        metric: "CPA",
        previousValue: "$28.00",
        currentValue: "$32.00",
        deltaPercent: "+14.3%",
        isNegative: true,
        benchmark: "$30.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Operations Director",
      organization: "UrbanBrew Coffee",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, CPL is Cost Per Lead—what we pay when someone gives us their email. CPA is Cost Per Acquisition—the true cost to acquire a paying customer. Since 1 out of 4 email subscribers purchases coffee, an $8 CPL turns into a $32 CPA, which fits comfortably inside our $48 product margin.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Marcus, CPL is Cost Per Lead—what we pay when someone gives us their email. CPA is Cost Per Acquisition—the true cost to acquire a paying customer. Since 1 out of 4 email subscribers purchases coffee, an $8 CPL turns into a $32 CPA, which fits comfortably inside our $48 product margin."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-roas-profitability",
    title: "Module 5: The Truth About ROAS",
    subtitle: "Explain why a 2.5x ROAS does not always mean profit after COGS and shipping.",
    category: "ecommerce-d2c",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (ECOMMERCE D2C)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Our dashboard shows a 2.5x ROAS, but my accountant says our bank account didn't grow this month. Is ROAS a vanity metric?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our dashboard shows a 2.5x ROAS, but my accountant says our bank account didn't grow this month. Is ROAS a vanity metric?",
    brokenKPIs: [
      {
        metric: "ROAS",
        previousValue: "3.1x",
        currentValue: "2.5x",
        deltaPercent: "-19.4%",
        isNegative: true,
        benchmark: "3.0x",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, ROAS measures top-line revenue per ad dollar, but does not factor in your 55% product cost and shipping. Your break-even ROAS is 2.2x, so at 2.5x we are generating cash profit, but our margin buffer is tight. We are shifting focus to bundle offers to raise Average Order Value and push ROAS to 3.2x.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, ROAS measures top-line revenue per ad dollar, but does not factor in your 55% product cost and shipping. Your break-even ROAS is 2.2x, so at 2.5x we are generating cash profit, but our margin buffer is tight. We are shifting focus to bundle offers to raise Average Order Value and push ROAS to 3.2x."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-impression-share",
    title: "Module 6: Decoding Search Impression Share",
    subtitle: "Explain why an ad is not showing on 100% of searches due to budget caps.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller & Associates Law (GOOGLE ADS)",
    briefingSummary: "Managing Partner David Miller is asking: \"Our Search Impression Share is 52%. Does that mean half the people searching for a personal injury attorney in Chicago are seeing our competitors instead?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Search Impression Share is 52%. Does that mean half the people searching for a personal injury attorney in Chicago are seeing our competitors instead?",
    brokenKPIs: [
      {
        metric: "Search Impression Share",
        previousValue: "75%",
        currentValue: "52%",
        deltaPercent: "-30.7%",
        isNegative: true,
        benchmark: "80%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller & Associates Law",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, yes: 48% of searches are missed because our daily budget runs out by 2 PM, known as Lost IS (Budget). Your ad rank and quality are winning auctions, but capturing the remaining 48% requires expanding daily budget or focusing solely on high-value catastrophic injury keywords.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, yes: 48% of searches are missed because our daily budget runs out by 2 PM, known as Lost IS (Budget). Your ad rank and quality are winning auctions, but capturing the remaining 48% requires expanding daily budget or focusing solely on high-value catastrophic injury keywords."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-quality-score-anatomy",
    title: "Module 7: The 3 Pillars of Quality Score",
    subtitle: "Break down expected CTR, ad relevance, and landing page experience.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "CloudSaaS Hub (GOOGLE ADS)",
    briefingSummary: "Marketing Lead Arthur Dent is asking: \"Google gave our main keyword a Quality Score of 4 out of 10. How does Google calculate this score, and why does it penalize us?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google gave our main keyword a Quality Score of 4 out of 10. How does Google calculate this score, and why does it penalize us?",
    brokenKPIs: [
      {
        metric: "Quality Score",
        previousValue: "7/10",
        currentValue: "4/10",
        deltaPercent: "-42.9%",
        isNegative: true,
        benchmark: "7/10",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Dent",
      title: "Marketing Lead",
      organization: "CloudSaaS Hub",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, Quality Score is Google's rating from 1 to 10 based on expected CTR, keyword relevance, and landing page speed. A 4/10 score forces us to pay a 25% tax on every click. We are updating our landing page headline today to match the exact search term, which will raise our score to 7 and cut CPCs by 20%.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arthur, Quality Score is Google's rating from 1 to 10 based on expected CTR, keyword relevance, and landing page speed. A 4/10 score forces us to pay a 25% tax on every click. We are updating our landing page headline today to match the exact search term, which will raise our score to 7 and cut CPCs by 20%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-cvr-drop",
    title: "Module 8: Conversion Rate (CVR) Fundamentals",
    subtitle: "Explain how landing page friction turns high click traffic into zero conversions.",
    category: "analytics-tracking",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (ANALYTICS TRACKING)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Our ads generated 800 clicks yesterday, but only 4 people bought skincare products. Is the ad sending junk traffic?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our ads generated 800 clicks yesterday, but only 4 people bought skincare products. Is the ad sending junk traffic?",
    brokenKPIs: [
      {
        metric: "CVR",
        previousValue: "2.4%",
        currentValue: "0.5%",
        deltaPercent: "-79.2%",
        isNegative: true,
        benchmark: "2.5%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, our ads are doing their job by delivering qualified clicks at an exceptional 3.2% CTR, but our landing page conversion rate fell to 0.5%. We audited mobile checkout and found the shipping fee was only revealed at the final step. We added upfront free shipping badges, which will normalize purchases within 48 hours.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, our ads are doing their job by delivering qualified clicks at an exceptional 3.2% CTR, but our landing page conversion rate fell to 0.5%. We audited mobile checkout and found the shipping fee was only revealed at the final step. We added upfront free shipping badges, which will normalize purchases within 48 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-click-to-session",
    title: "Module 9: Click-to-Session Drop-off",
    subtitle: "Explain why 1,000 ad clicks only equal 700 Google Analytics visits.",
    category: "analytics-tracking",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (ANALYTICS TRACKING)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Meta reports 1,200 link clicks, but Google Analytics only shows 780 sessions. Where did 420 people disappear to?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta reports 1,200 link clicks, but Google Analytics only shows 780 sessions. Where did 420 people disappear to?",
    brokenKPIs: [
      {
        metric: "Drop-off Rate",
        previousValue: "14%",
        currentValue: "35%",
        deltaPercent: "+150%",
        isNegative: true,
        benchmark: "15%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, Meta records a click the instant a user taps the screen, but GA4 only records a session after your page and scripts fully load. On mobile networks, if a page takes over 3 seconds, users bounce before tracking fires. We compressed hero images to cut load time to 1.4s, which will recover 85% of dropped sessions.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, Meta records a click the instant a user taps the screen, but GA4 only records a session after your page and scripts fully load. On mobile networks, if a page takes over 3 seconds, users bounce before tracking fires. We compressed hero images to cut load time to 1.4s, which will recover 85% of dropped sessions."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-aov-multipliers",
    title: "Module 10: Average Order Value (AOV) Impact",
    subtitle: "Demonstrate how post-purchase upsells make paid media math work.",
    category: "ecommerce-d2c",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "UrbanBrew Coffee (ECOMMERCE D2C)",
    briefingSummary: "Operations Director Marcus Vance is asking: \"Why are you recommending post-purchase upsells and subscription bundles instead of just asking for more ad budget?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are you recommending post-purchase upsells and subscription bundles instead of just asking for more ad budget?",
    brokenKPIs: [
      {
        metric: "AOV",
        previousValue: "$42.00",
        currentValue: "$38.00",
        deltaPercent: "-9.5%",
        isNegative: true,
        benchmark: "$55.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Operations Director",
      organization: "UrbanBrew Coffee",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, our CPA is locked at $28. If customers only spend $38, our net profit is $10. By introducing a 2-bag bundle upsell that lifts Average Order Value to $58, our profit triples on the exact same ad spend without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Marcus, our CPA is locked at $28. If customers only spend $38, our net profit is $10. By introducing a 2-bag bundle upsell that lifts Average Order Value to $58, our profit triples on the exact same ad spend without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-frequency-fatigue",
    title: "Module 11: Audience Frequency & Ad Burnout",
    subtitle: "Explain why showing an ad 5 times to the same person causes CPM to spike.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (META ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Our Meta dashboard says 'Frequency: 4.6'. What does that number mean, and why has our cost per lead climbed every day this week?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Meta dashboard says 'Frequency: 4.6'. What does that number mean, and why has our cost per lead climbed every day this week?",
    brokenKPIs: [
      {
        metric: "Frequency",
        previousValue: "2.1",
        currentValue: "4.6",
        deltaPercent: "+119%",
        isNegative: true,
        benchmark: "2.5",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, frequency means the average person has seen our exact ad 4.6 times in 7 days. Once frequency passes 3.5, users experience ad blindness and stop clicking, driving up CPMs. We are introducing 3 fresh creative video angles today to refresh audience attention and bring costs back down.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, frequency means the average person has seen our exact ad 4.6 times in 7 days. Once frequency passes 3.5, users experience ad blindness and stop clicking, driving up CPMs. We are introducing 3 fresh creative video angles today to refresh audience attention and bring costs back down."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-bounce-vs-engagement",
    title: "Module 12: GA4 Engagement Rate vs Bounce Rate",
    subtitle: "Educate the client on modern user interaction metrics in Google Analytics 4.",
    category: "analytics-tracking",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "CloudSaaS Hub (ANALYTICS TRACKING)",
    briefingSummary: "Marketing Lead Arthur Dent is asking: \"I can't find 'Bounce Rate' in our new Google Analytics reports. What is this 'Engagement Rate' and how do I know if traffic is good?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I can't find 'Bounce Rate' in our new Google Analytics reports. What is this 'Engagement Rate' and how do I know if traffic is good?",
    brokenKPIs: [
      {
        metric: "Engagement Rate",
        previousValue: "52%",
        currentValue: "68%",
        deltaPercent: "+30.8%",
        isNegative: true,
        benchmark: "55%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Dent",
      title: "Marketing Lead",
      organization: "CloudSaaS Hub",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, GA4 replaced legacy bounce rate with Engagement Rate, which tracks visitors who stay for over 10 seconds, view 2+ pages, or trigger a conversion. Our campaign is delivering a 68% engagement rate, which exceeds the SaaS benchmark of 55%, proving our paid search visitors are highly qualified.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arthur, GA4 replaced legacy bounce rate with Engagement Rate, which tracks visitors who stay for over 10 seconds, view 2+ pages, or trigger a conversion. Our campaign is delivering a 68% engagement rate, which exceeds the SaaS benchmark of 55%, proving our paid search visitors are highly qualified."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-ltv-cac-ratio",
    title: "Module 13: The LTV to CAC Golden Ratio",
    subtitle: "Show a founder why a high CAC is acceptable when customer lifetime value is 4x.",
    category: "ecommerce-d2c",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (ECOMMERCE D2C)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Our CAC is $75 for a first-time sweater order of $110. How can we afford to spend $75 to acquire an order?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our CAC is $75 for a first-time sweater order of $110. How can we afford to spend $75 to acquire an order?",
    brokenKPIs: [
      {
        metric: "LTV",
        previousValue: "3.8:1",
        currentValue: "4.2:1",
        deltaPercent: "+10.5%",
        isNegative: true,
        benchmark: "3.0:1",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, while first-order margin is thin, your cohort data proves 44% of customers buy two more times within 9 months, creating a lifetime value of $320. Your LTV:CAC ratio is 4.2 to 1—well above the venture healthy benchmark of 3:1—making this our most profitable growth engine.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, while first-order margin is thin, your cohort data proves 44% of customers buy two more times within 9 months, creating a lifetime value of $320. Your LTV:CAC ratio is 4.2 to 1—well above the venture healthy benchmark of 3:1—making this our most profitable growth engine."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-blended-cac-mer",
    title: "Module 14: Paid CAC vs Blended CAC (MER)",
    subtitle: "Explain Marketing Efficiency Ratio (MER) to an executive reviewing total revenue.",
    category: "fundamentals",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (FUNDAMENTALS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Meta reports a $45 CAC, but when I divide total ad spend by total new customers across the whole company, it's only $28. Which CAC is real?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta reports a $45 CAC, but when I divide total ad spend by total new customers across the whole company, it's only $28. Which CAC is real?",
    brokenKPIs: [
      {
        metric: "Paid CAC",
        previousValue: "$26.00",
        currentValue: "$28.00",
        deltaPercent: "+7.7%",
        isNegative: true,
        benchmark: "$30.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, both numbers are accurate: $45 is paid platform CAC measuring direct ad attribution, while $28 is blended CAC (or MER) reflecting total business acquisition including organic lift and word-of-mouth fueled by ad spend. Monitoring blended CAC ensures we don't prematurely throttle top-of-funnel reach.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, both numbers are accurate: $45 is paid platform CAC measuring direct ad attribution, while $28 is blended CAC (or MER) reflecting total business acquisition including organic lift and word-of-mouth fueled by ad spend. Monitoring blended CAC ensures we don't prematurely throttle top-of-funnel reach."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vocab-churn-retention-nrr",
    title: "Module 15: Churn Rate & Net Revenue Retention",
    subtitle: "Demonstrate why customer retention is the foundation of scalable paid media.",
    category: "fundamentals",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "CloudSaaS Hub (FUNDAMENTALS)",
    briefingSummary: "Marketing Lead Arthur Dent is asking: \"We acquired 120 new SaaS accounts this month through Google Ads, but our total active users barely increased. Why is that happening?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We acquired 120 new SaaS accounts this month through Google Ads, but our total active users barely increased. Why is that happening?",
    brokenKPIs: [
      {
        metric: "Monthly Churn",
        previousValue: "3.1%",
        currentValue: "7.2%",
        deltaPercent: "+132%",
        isNegative: true,
        benchmark: "2.5%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Dent",
      title: "Marketing Lead",
      organization: "CloudSaaS Hub",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, our ads successfully acquired 120 accounts, but monthly churn rose to 7.2%, meaning we lost 90 existing accounts during the same period. Scaling paid acquisition into a leaky retention bucket burns capital; we are aligning with product onboarding to stabilize churn before expanding spend.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arthur, our ads successfully acquired 120 accounts, but monthly churn rose to 7.2%, meaning we lost 90 existing accounts during the same period. Scaling paid acquisition into a leaky retention bucket burns capital; we are aligning with product onboarding to stabilize churn before expanding spend."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-hook-rate",
    title: "Module 16: Mastering the 3-Second Hook Rate",
    subtitle: "Teach the client how thumbstop rate governs algorithmic CPM on TikTok and Reels.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (TIKTOK ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"What does Hook Rate mean on our TikTok dashboard, and why are you telling me our video is failing in the first 3 seconds?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What does Hook Rate mean on our TikTok dashboard, and why are you telling me our video is failing in the first 3 seconds?",
    brokenKPIs: [
      {
        metric: "Hook Rate",
        previousValue: "34%",
        currentValue: "16%",
        deltaPercent: "-52.9%",
        isNegative: true,
        benchmark: "30%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, Hook Rate is the percentage of viewers who stop scrolling and watch the first 3 seconds of your video. At 16%, 84% of people swipe past before hearing our product value. We are testing 3 punchy opening visual hooks today to lift hook rate over 30% and cut ad CPMs in half.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, Hook Rate is the percentage of viewers who stop scrolling and watch the first 3 seconds of your video. At 16%, 84% of people swipe past before hearing our product value. We are testing 3 punchy opening visual hooks today to lift hook rate over 30% and cut ad CPMs in half."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-hold-rate",
    title: "Module 17: Video Hold Rate & Retention",
    subtitle: "Explain why viewers drop off at second 8 and how pacing restores completion.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (META ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Our hook rate is 35%, but our hold rate dropped to 14%. Why are people leaving halfway through our video?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our hook rate is 35%, but our hold rate dropped to 14%. Why are people leaving halfway through our video?",
    brokenKPIs: [
      {
        metric: "Hold Rate",
        previousValue: "30%",
        currentValue: "14%",
        deltaPercent: "-53.3%",
        isNegative: true,
        benchmark: "25%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Hold Rate measures viewers who stay from second 3 to second 15. Your opening hook is captivating, but the video pace slows down at second 6 with talking-head monologue. We are re-editing with quick B-roll cuts and captions every 2 seconds to keep retention above 25%.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, Hold Rate measures viewers who stay from second 3 to second 15. Your opening hook is captivating, but the video pace slows down at second 6 with talking-head monologue. We are re-editing with quick B-roll cuts and captions every 2 seconds to keep retention above 25%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-sound-design",
    title: "Module 18: Sound-On vs Sound-Off Strategy",
    subtitle: "Navigate the difference between silent feed browsing and TikTok sound culture.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (TIKTOK ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why can't we use the exact same video file across both Instagram and TikTok?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why can't we use the exact same video file across both Instagram and TikTok?",
    brokenKPIs: [
      {
        metric: "TikTok Engagement Rate",
        previousValue: "3.6%",
        currentValue: "1.1%",
        deltaPercent: "-69.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, 85% of Instagram feed videos are watched with sound muted, requiring bold text subtitles. On TikTok, 93% of users watch with sound ON, expecting trending audio and voiceovers. Optimizing sound design natively for each platform ensures our TikTok engagement rate rebounds to 3.8%.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, 85% of Instagram feed videos are watched with sound muted, requiring bold text subtitles. On TikTok, 93% of users watch with sound ON, expecting trending audio and voiceovers. Optimizing sound design natively for each platform ensures our TikTok engagement rate rebounds to 3.8%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-dct-322",
    title: "Module 19: The 3:2:2 Dynamic Creative Testing Method",
    subtitle: "Show why testing 3 creatives, 2 primary texts, and 2 headlines prevents ad fatigue.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (META ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Why do you want 12 creative variations? Why can't we just pick the one best photo and run that?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do you want 12 creative variations? Why can't we just pick the one best photo and run that?",
    brokenKPIs: [
      {
        metric: "Creative Diversity",
        previousValue: "12",
        currentValue: "1",
        deltaPercent: "-91.7%",
        isNegative: true,
        benchmark: "10",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, modern Meta algorithms match different visual angles to different buyer segments. Running a single creative limits reach and triggers rapid audience fatigue. By using the 3:2:2 framework, Meta's AI algorithm tests combinations to uncover the lowest CAC winner within 48 hours.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, modern Meta algorithms match different visual angles to different buyer segments. Running a single creative limits reach and triggers rapid audience fatigue. By using the 3:2:2 framework, Meta's AI algorithm tests combinations to uncover the lowest CAC winner within 48 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-vertical-format",
    title: "Module 20: 9:16 Full Screen vs 16:9 Letterbox",
    subtitle: "Explain why horizontal video assets waste 60% of smartphone screen real estate.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "UrbanBrew Coffee (META ADS)",
    briefingSummary: "Operations Director Marcus Vance is asking: \"Can't we just take our horizontal YouTube video and run it as an Instagram Reel to save production costs?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Can't we just take our horizontal YouTube video and run it as an Instagram Reel to save production costs?",
    brokenKPIs: [
      {
        metric: "Reels CTR",
        previousValue: "2.1%",
        currentValue: "0.6%",
        deltaPercent: "-71.4%",
        isNegative: true,
        benchmark: "1.8%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Operations Director",
      organization: "UrbanBrew Coffee",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, running 16:9 letterbox video in Reels leaves 60% of the screen blank with black bars, signaling an ad immediately. Full-screen 9:16 video commands 100% of mobile screen real estate and drives 3x higher CTR. We can re-frame your existing footage into native 9:16 within 2 hours.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Marcus, running 16:9 letterbox video in Reels leaves 60% of the screen blank with black bars, signaling an ad immediately. Full-screen 9:16 video commands 100% of mobile screen real estate and drives 3x higher CTR. We can re-frame your existing footage into native 9:16 within 2 hours."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-ugc-authenticity",
    title: "Module 21: UGC Authenticity vs Studio Polish",
    subtitle: "Explain why raw iPhone creator video outperforms $10k commercial studio shoots.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (TIKTOK ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Our glossy $8,000 studio ad is getting crushed by a video an influencer filmed on their phone in a bathroom. Why?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our glossy $8,000 studio ad is getting crushed by a video an influencer filmed on their phone in a bathroom. Why?",
    brokenKPIs: [
      {
        metric: "UGC ROAS",
        previousValue: "1.4x",
        currentValue: "3.8x",
        deltaPercent: "+171%",
        isNegative: true,
        benchmark: "3.0x",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, modern social users have developed commercial blindness; glossy studio footage triggers an instant reflex to swipe away. User-generated content feels authentic, peer-reviewed, and relatable, building trust in the first 2 seconds and driving nearly triple the conversion rate.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, modern social users have developed commercial blindness; glossy studio footage triggers an instant reflex to swipe away. User-generated content feels authentic, peer-reviewed, and relatable, building trust in the first 2 seconds and driving nearly triple the conversion rate."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-cta-clarity",
    title: "Module 22: Call to Action (CTA) Hierarchy",
    subtitle: "Align button intent: when to use \"Shop Now\", \"Learn More\", or \"Get Offer\".",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (META ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Should our ad button say 'Shop Now' or 'Learn More'? Does a single button word really impact sales?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Should our ad button say 'Shop Now' or 'Learn More'? Does a single button word really impact sales?",
    brokenKPIs: [
      {
        metric: "Outbound CTR",
        previousValue: "2.4%",
        currentValue: "1.1%",
        deltaPercent: "-54.2%",
        isNegative: true,
        benchmark: "2.0%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, for cold prospecting audiences who have never heard of Nordic Wool, 'Shop Now' feels like high commitment and triggers resistance. 'Learn More' lowers psychological friction and lifts outbound clicks by 40%, allowing our landing page story to convert them into paying customers.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, for cold prospecting audiences who have never heard of Nordic Wool, 'Shop Now' feels like high commitment and triggers resistance. 'Learn More' lowers psychological friction and lifts outbound clicks by 40%, allowing our landing page story to convert them into paying customers."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-text-overlays",
    title: "Module 23: Text Overlay & Safe Zones",
    subtitle: "Protect ad engagement by keeping headlines out of Instagram and TikTok UI overlays.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (META ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why are comments on our new ad saying they can't read the discount code on their phones?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are comments on our new ad saying they can't read the discount code on their phones?",
    brokenKPIs: [
      {
        metric: "Promo Engagement",
        previousValue: "5.2%",
        currentValue: "3.1%",
        deltaPercent: "-40.4%",
        isNegative: true,
        benchmark: "4.5%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, the text was placed in the bottom 20% of the video where TikTok's username, caption, and music icon cover it. We are shifting all promotional text into the platform 'Safe Zone'—the central 70% of the screen—ensuring 100% legibility on every smartphone model.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, the text was placed in the bottom 20% of the video where TikTok's username, caption, and music icon cover it. We are shifting all promotional text into the platform 'Safe Zone'—the central 70% of the screen—ensuring 100% legibility on every smartphone model."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-offer-resonance",
    title: "Module 24: Creative Hook vs Offer Resonance",
    subtitle: "Diagnose when an ad has viral views but fails to generate checkout transactions.",
    category: "ecommerce-d2c",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "UrbanBrew Coffee (ECOMMERCE D2C)",
    briefingSummary: "Operations Director Marcus Vance is asking: \"Our video has 100,000 views and hundreds of shares, but we only got 6 sales. Why isn't viral attention translating into money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our video has 100,000 views and hundreds of shares, but we only got 6 sales. Why isn't viral attention translating into money?",
    brokenKPIs: [
      {
        metric: "View-to-Purchase CVR",
        previousValue: "1.2%",
        currentValue: "0.006%",
        deltaPercent: "-99.5%",
        isNegative: true,
        benchmark: "1.0%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Marcus Vance",
      title: "Operations Director",
      organization: "UrbanBrew Coffee",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Marcus, our video went viral because it was entertaining, but it lacked commercial intent and a compelling product offer. Entertaining clips build awareness, but direct response requires showcasing the problem, the product mechanism, and a clear introductory discount offer.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Marcus, our video went viral because it was entertaining, but it lacked commercial intent and a compelling product offer. Entertaining clips build awareness, but direct response requires showcasing the problem, the product mechanism, and a clear introductory discount offer."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-social-proof",
    title: "Module 25: Leveraging Social Proof in Ad Assets",
    subtitle: "Demonstrate the conversion lift of 5-star review badges and press quotes.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (META ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Does putting customer review quotes and 5-star star icons on our product photos really make a difference?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Does putting customer review quotes and 5-star star icons on our product photos really make a difference?",
    brokenKPIs: [
      {
        metric: "Ad CTR",
        previousValue: "1.6%",
        currentValue: "2.2%",
        deltaPercent: "+37.5%",
        isNegative: true,
        benchmark: "2.0%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, cold prospects inherently distrust brand claims. Adding verified customer review quotes and 5-star graphics provides third-party validation that reduces hesitation, lifting ad Click-Through Rate by 38% and lowering customer acquisition costs across the board.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, cold prospects inherently distrust brand claims. Adding verified customer review quotes and 5-star graphics provides third-party validation that reduces hesitation, lifting ad Click-Through Rate by 38% and lowering customer acquisition costs across the board."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-first-3-seconds",
    title: "Module 26: The Logo Reveal Mistake",
    subtitle: "Explain why starting a video with a 3-second animated logo wastes user attention.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (TIKTOK ADS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Our branding team insists that every video starts with our official 3-second animated logo intro. Why are you objecting?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our branding team insists that every video starts with our official 3-second animated logo intro. Why are you objecting?",
    brokenKPIs: [
      {
        metric: "Hook Rate with Logo",
        previousValue: "31%",
        currentValue: "9%",
        deltaPercent: "-71.0%",
        isNegative: true,
        benchmark: "28%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, in mobile feeds, viewers make a stay-or-swipe decision in 400 milliseconds. An animated logo provides zero value to a stranger and causes 70% to swipe away immediately. We move the logo to the end or keep a discreet corner watermark while opening with the customer's burning problem.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, in mobile feeds, viewers make a stay-or-swipe decision in 400 milliseconds. An animated logo provides zero value to a stranger and causes 70% to swipe away immediately. We move the logo to the end or keep a discreet corner watermark while opening with the customer's burning problem."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-decay-fatigue",
    title: "Module 27: Diagnosing Creative Fatigue Cycles",
    subtitle: "Explain the natural 14-day lifecycle of winning social video creatives.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (META ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Our top video was printing money two weeks ago, but its ROAS has dropped 50% over the last 4 days. Did Facebook change something?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our top video was printing money two weeks ago, but its ROAS has dropped 50% over the last 4 days. Did Facebook change something?",
    brokenKPIs: [
      {
        metric: "Ad ROAS",
        previousValue: "3.6x",
        currentValue: "1.8x",
        deltaPercent: "-50.0%",
        isNegative: true,
        benchmark: "3.0x",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, Meta didn't change; our ad hit creative fatigue after reaching 85% of our target audience pool. The core product message is still effective, so we are keeping the body and deploying 3 fresh opening visual hooks today to reset attention and restore a 3.0x ROAS.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, Meta didn't change; our ad hit creative fatigue after reaching 85% of our target audience pool. The core product message is still effective, so we are keeping the body and deploying 3 fresh opening visual hooks today to reset attention and restore a 3.0x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-spark-ads-power",
    title: "Module 28: Spark Ads vs Dark Ads on TikTok",
    subtitle: "Explain why boosting an influencer handle delivers 35% higher conversion.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (TIKTOK ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why should we pay TikTok to boost an influencer's post using their profile name instead of running it from our brand account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why should we pay TikTok to boost an influencer's post using their profile name instead of running it from our brand account?",
    brokenKPIs: [
      {
        metric: "Spark Ad CVR",
        previousValue: "1.9%",
        currentValue: "3.4%",
        deltaPercent: "+78.9%",
        isNegative: true,
        benchmark: "2.5%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, Spark Ads run natively from the creator's real handle, preserving their authentic comments and social credibility. Users view creator posts as peer advice rather than corporate sponsorship, which drives a 35% higher conversion rate at a lower auction CPM.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, Spark Ads run natively from the creator's real handle, preserving their authentic comments and social credibility. Users view creator posts as peer advice rather than corporate sponsorship, which drives a 35% higher conversion rate at a lower auction CPM."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-carousel-retention",
    title: "Module 29: Carousel Card Drop-Off Rates",
    subtitle: "Optimize product card sequencing to prevent 60% drop-off after card 1.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (META ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"In our 6-card carousel ad, 80% of clicks come from Card 1, and Card 5 has almost zero engagement. Should we delete cards 2 through 6?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "In our 6-card carousel ad, 80% of clicks come from Card 1, and Card 5 has almost zero engagement. Should we delete cards 2 through 6?",
    brokenKPIs: [
      {
        metric: "Carousel Swipe Rate",
        previousValue: "80%",
        currentValue: "4%",
        deltaPercent: "-95.0%",
        isNegative: true,
        benchmark: "25%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, users naturally drop off as they swipe, but cards 2 and 3 provide visual storytelling that validates card 1. We should place our top 3 best-sellers in the first 3 positions and add an arrow graphic on card 1 inviting users to swipe, increasing full carousel engagement by 45%.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, users naturally drop off as they swipe, but cards 2 and 3 provide visual storytelling that validates card 1. We should place our top 3 best-sellers in the first 3 positions and add an arrow graphic on card 1 inviting users to swipe, increasing full carousel engagement by 45%."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-aspect-ratio-placements",
    title: "Module 30: Asset Customization by Placement (PAC)",
    subtitle: "Eliminate awkward cropping by supplying 1:1, 9:16, and 16:9 versions of every asset.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (META ADS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"I opened Facebook on my desktop computer and our ad looks stretched and pixelated. Why didn't you check that?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I opened Facebook on my desktop computer and our ad looks stretched and pixelated. Why didn't you check that?",
    brokenKPIs: [
      {
        metric: "Placement Optimization",
        previousValue: "100%",
        currentValue: "35%",
        deltaPercent: "-65.0%",
        isNegative: true,
        benchmark: "90%",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, mobile feeds use square 1:1, Stories use vertical 9:16, and desktop feeds use 16:9. When a single video is forced into every placement, Facebook auto-crops it awkwardly. We enabled Placement Asset Customization (PAC) and uploaded native ratios for every channel.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, mobile feeds use square 1:1, Stories use vertical 9:16, and desktop feeds use 16:9. When a single video is forced into every placement, Facebook auto-crops it awkwardly. We enabled Placement Asset Customization (PAC) and uploaded native ratios for every channel."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "ad-not-showing",
    title: "Module 31: Ad Not Showing on Google",
    subtitle: "Executive situational roleplay on ad not showing on google.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GOOGLE ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"I searched my own keyword on Google and cannot find our ad! Are we even live?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I searched my own keyword on Google and cannot find our ad! Are we even live?",
    brokenKPIs: [
      {
        metric: "Ad Not Showing on Google",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "morning-budget-depletion",
    title: "Module 32: Morning Budget Depletion",
    subtitle: "Executive situational roleplay on morning budget depletion.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (GOOGLE ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Our entire daily search budget was exhausted by 9:30 AM! Why did it burn so fast?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our entire daily search budget was exhausted by 9:30 AM! Why did it burn so fast?",
    brokenKPIs: [
      {
        metric: "Morning Budget Depletion",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "search-terms-bleed",
    title: "Module 33: Search Terms vs Target Keywords",
    subtitle: "Executive situational roleplay on search terms vs target keywords.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GOOGLE ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Why are we paying for clicks on student research queries when our keyword is high-intent?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are we paying for clicks on student research queries when our keyword is high-intent?",
    brokenKPIs: [
      {
        metric: "Search Terms vs Target Keywords",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "broad-match-smart-bidding",
    title: "Module 34: Broad Match with Smart Bidding",
    subtitle: "Executive situational roleplay on broad match with smart bidding.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GOOGLE ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why did you change our exact match keywords to broad match? Won't that waste money?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did you change our exact match keywords to broad match? Won't that waste money?",
    brokenKPIs: [
      {
        metric: "Broad Match with Smart Bidding",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "negative-keywords-shield",
    title: "Module 35: Negative Keyword Lists Protection",
    subtitle: "Executive situational roleplay on negative keyword lists protection.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GOOGLE ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"People keep clicking our ads looking for employee login pages and careers! Stop this!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People keep clicking our ads looking for employee login pages and careers! Stop this!",
    brokenKPIs: [
      {
        metric: "Negative Keyword Lists Protection",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "phrase-match-evolution",
    title: "Module 36: Phrase Match Boundary Shifts",
    subtitle: "Executive situational roleplay on phrase match boundary shifts.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GOOGLE ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"Why did Google match our phrase match keyword to words in a different order?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did Google match our phrase match keyword to words in a different order?",
    brokenKPIs: [
      {
        metric: "Phrase Match Boundary Shifts",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "rsa-pinned-headlines",
    title: "Module 37: Responsive Search Ads Pinning Debate",
    subtitle: "Executive situational roleplay on responsive search ads pinning debate.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GOOGLE ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"Google recommends unpinning our company name from headline 1, but our board insists on it!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google recommends unpinning our company name from headline 1, but our board insists on it!",
    brokenKPIs: [
      {
        metric: "Responsive Search Ads Pinning Debate",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "ad-assets-extensions",
    title: "Module 38: Missing Sitelink Assets on Search",
    subtitle: "Executive situational roleplay on missing sitelink assets on search.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GOOGLE ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Why are our competitor's ads huge with sitelinks while ours looks like a tiny plain text box?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are our competitor's ads huge with sitelinks while ours looks like a tiny plain text box?",
    brokenKPIs: [
      {
        metric: "Missing Sitelink Assets on Search",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "target-impression-share",
    title: "Module 39: Target Impression Share 100% Request",
    subtitle: "Executive situational roleplay on target impression share 100% request.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (GOOGLE ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"I want our company to show #1 on Google 100% of the time, no matter what it costs!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "I want our company to show #1 on Google 100% of the time, no matter what it costs!",
    brokenKPIs: [
      {
        metric: "Target Impression Share 100% Request",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tcpa-vs-max-conversions",
    title: "Module 40: Target CPA vs Maximize Conversions",
    subtitle: "Executive situational roleplay on target cpa vs maximize conversions.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GOOGLE ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"When should we set an aggressive Target CPA versus letting Google bid freely?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "When should we set an aggressive Target CPA versus letting Google bid freely?",
    brokenKPIs: [
      {
        metric: "Target CPA vs Maximize Conversions",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "brand-search-cannibalization",
    title: "Module 41: Brand Search Campaign Defense",
    subtitle: "Executive situational roleplay on brand search campaign defense.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GOOGLE ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why are we paying Google for clicks on our own company name when we rank #1 organically?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are we paying Google for clicks on our own company name when we rank #1 organically?",
    brokenKPIs: [
      {
        metric: "Brand Search Campaign Defense",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "landing-page-experience",
    title: "Module 42: Landing Page Experience Quality Score",
    subtitle: "Executive situational roleplay on landing page experience quality score.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GOOGLE ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"Google says our landing page experience is below average. How do we fix this?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our landing page experience is below average. How do we fix this?",
    brokenKPIs: [
      {
        metric: "Landing Page Experience Quality Score",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "local-services-ads-lsa",
    title: "Module 43: Google Screened vs Google Search Ads",
    subtitle: "Executive situational roleplay on google screened vs google search ads.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GOOGLE ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"What are those Google Screened badges with direct call buttons above our search ads?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What are those Google Screened badges with direct call buttons above our search ads?",
    brokenKPIs: [
      {
        metric: "Google Screened vs Google Search Ads",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "competitor-brand-bidding",
    title: "Module 44: Bidding on Competitor Brand Names",
    subtitle: "Executive situational roleplay on bidding on competitor brand names.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GOOGLE ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"Can we legally bid on our top competitor's brand name to steal their customers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Can we legally bid on our top competitor's brand name to steal their customers?",
    brokenKPIs: [
      {
        metric: "Bidding on Competitor Brand Names",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "enhanced-conversions-setup",
    title: "Module 45: Enhanced Conversions Privacy Migration",
    subtitle: "Executive situational roleplay on enhanced conversions privacy migration.",
    category: "google-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GOOGLE ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Why does Google need customer hashed email addresses sent with conversion tags?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why does Google need customer hashed email addresses sent with conversion tags?",
    brokenKPIs: [
      {
        metric: "Enhanced Conversions Privacy Migration",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "learning-phase-50",
    title: "Module 46: Meta Learning Phase 50 Conversions",
    subtitle: "Executive situational roleplay on meta learning phase 50 conversions.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (META ADS)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"What does this yellow \"Learning Limited\" badge mean in Facebook Ads Manager?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What does this yellow \"Learning Limited\" badge mean in Facebook Ads Manager?",
    brokenKPIs: [
      {
        metric: "Meta Learning Phase 50 Conversions",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "audience-overlap-clash",
    title: "Module 47: Audience Overlap & Self-Competition",
    subtitle: "Executive situational roleplay on audience overlap & self-competition.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (META ADS)",
    briefingSummary: "Managing Partner David Miller is asking: \"Why shouldn't I set up 15 different interest ad sets to target every hobby?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why shouldn't I set up 15 different interest ad sets to target every hobby?",
    brokenKPIs: [
      {
        metric: "Audience Overlap & Self-Competition",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cbo-vs-abo-allocation",
    title: "Module 48: Advantage Campaign Budget (CBO) Bias",
    subtitle: "Executive situational roleplay on advantage campaign budget (cbo) bias.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (META ADS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Why is Facebook spending 80% of our daily budget on just 1 ad set out of 4?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why is Facebook spending 80% of our daily budget on just 1 ad set out of 4?",
    brokenKPIs: [
      {
        metric: "Advantage Campaign Budget (CBO) Bias",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "lookalike-vs-broad",
    title: "Module 49: Lookalike Audiences vs Broad Targeting",
    subtitle: "Executive situational roleplay on lookalike audiences vs broad targeting.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (META ADS)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Why are you targeting \"everyone in the US\" instead of our high-value 1% lookalike?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are you targeting \"everyone in the US\" instead of our high-value 1% lookalike?",
    brokenKPIs: [
      {
        metric: "Lookalike Audiences vs Broad Targeting",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "retargeting-pool-burn",
    title: "Module 50: Retargeting Audience Pool Exhaustion",
    subtitle: "Executive situational roleplay on retargeting audience pool exhaustion.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (META ADS)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"Why did our retargeting ROAS collapse from 6.0x to 1.8x this month?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did our retargeting ROAS collapse from 6.0x to 1.8x this month?",
    brokenKPIs: [
      {
        metric: "Retargeting Audience Pool Exhaustion",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "asc-shopping-campaigns",
    title: "Module 51: Advantage+ Shopping Campaigns (ASC)",
    subtitle: "Executive situational roleplay on advantage+ shopping campaigns (asc).",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (META ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"What is this new Advantage+ campaign and how does it automate our targeting?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What is this new Advantage+ campaign and how does it automate our targeting?",
    brokenKPIs: [
      {
        metric: "Advantage+ Shopping Campaigns (ASC)",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "advantage-creative-enhancements",
    title: "Module 52: Advantage+ Creative Auto-Edits",
    subtitle: "Executive situational roleplay on advantage+ creative auto-edits.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (META ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Why did Meta automatically add elevator music and strange 3D tilt effects to our product image?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did Meta automatically add elevator music and strange 3D tilt effects to our product image?",
    brokenKPIs: [
      {
        metric: "Advantage+ Creative Auto-Edits",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "capi-vs-pixel-reliability",
    title: "Module 53: Conversions API (CAPI) vs Browser Pixel",
    subtitle: "Executive situational roleplay on conversions api (capi) vs browser pixel.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (META ADS)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"Why do we need a server CAPI integration if we already have the Meta pixel on our site?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we need a server CAPI integration if we already have the Meta pixel on our site?",
    brokenKPIs: [
      {
        metric: "Conversions API (CAPI) vs Browser Pixel",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "attribution-window-truth",
    title: "Module 54: 7-Day Click vs 1-Day View Attribution",
    subtitle: "Executive situational roleplay on 7-day click vs 1-day view attribution.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (META ADS)",
    briefingSummary: "Managing Partner David Miller is asking: \"Why does Meta claim credit for customers who bought 6 days after viewing an ad?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why does Meta claim credit for customers who bought 6 days after viewing an ad?",
    brokenKPIs: [
      {
        metric: "7-Day Click vs 1-Day View Attribution",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "budget-scaling-shock",
    title: "Module 55: Daily Budget Scaling Shockwave",
    subtitle: "Executive situational roleplay on daily budget scaling shockwave.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (META ADS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"We had a record day on Saturday, so I tripled the budget for Sunday. Why did CPA skyrocket?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We had a record day on Saturday, so I tripled the budget for Sunday. Why did CPA skyrocket?",
    brokenKPIs: [
      {
        metric: "Daily Budget Scaling Shockwave",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "inapp-browser-latency",
    title: "Module 56: Instagram In-App Browser Bounce Rates",
    subtitle: "Executive situational roleplay on instagram in-app browser bounce rates.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (META ADS)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Why do users clicking from Instagram bounce twice as fast as visitors from Google?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do users clicking from Instagram bounce twice as fast as visitors from Google?",
    brokenKPIs: [
      {
        metric: "Instagram In-App Browser Bounce Rates",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "ad-account-spending-cap",
    title: "Module 57: Meta Daily Account Spending Cap",
    subtitle: "Executive situational roleplay on meta daily account spending cap.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (META ADS)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"Why did Facebook stop spending at $250 today when our campaign budget is set to $1,000?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did Facebook stop spending at $250 today when our campaign budget is set to $1,000?",
    brokenKPIs: [
      {
        metric: "Meta Daily Account Spending Cap",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "dpa-catalog-sync-errors",
    title: "Module 58: Dynamic Product Ads (DPA) Stock Errors",
    subtitle: "Executive situational roleplay on dynamic product ads (dpa) stock errors.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (META ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Customers are complaining that our Facebook retargeting ad shows out-of-stock shoes!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Customers are complaining that our Facebook retargeting ad shows out-of-stock shoes!",
    brokenKPIs: [
      {
        metric: "Dynamic Product Ads (DPA) Stock Errors",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "negative-comments-moderation",
    title: "Module 59: Angry Comment Moderation Policy",
    subtitle: "Executive situational roleplay on angry comment moderation policy.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (META ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Someone left a nasty comment on our top-performing Facebook ad. Should we delete it?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Someone left a nasty comment on our top-performing Facebook ad. Should we delete it?",
    brokenKPIs: [
      {
        metric: "Angry Comment Moderation Policy",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cost-cap-bidding-floor",
    title: "Module 60: Cost Cap Auction Under-Delivery",
    subtitle: "Executive situational roleplay on cost cap auction under-delivery.",
    category: "meta-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (META ADS)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"Why did our ad set completely stop spending money after we set a strict $25 Cost Cap?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did our ad set completely stop spending money after we set a strict $25 Cost Cap?",
    brokenKPIs: [
      {
        metric: "Cost Cap Auction Under-Delivery",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "linkedin-cpm-reality",
    title: "Module 61: Justifying LinkedIn $80+ CPM Rates",
    subtitle: "Executive situational roleplay on justifying linkedin $80+ cpm rates.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (LINKEDIN ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Why is LinkedIn charging us $85 CPM while Facebook only charges $18? Are we being ripped off?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why is LinkedIn charging us $85 CPM while Facebook only charges $18? Are we being ripped off?",
    brokenKPIs: [
      {
        metric: "Justifying LinkedIn $80+ CPM Rates",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "linkedin-lead-gen-forms",
    title: "Module 62: LinkedIn Native Lead Gen Forms",
    subtitle: "Executive situational roleplay on linkedin native lead gen forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (LINKEDIN ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Why do native LinkedIn Lead Gen forms get 3x more submissions than our website form?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do native LinkedIn Lead Gen forms get 3x more submissions than our website form?",
    brokenKPIs: [
      {
        metric: "LinkedIn Native Lead Gen Forms",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "linkedin-thought-leader",
    title: "Module 63: Thought Leader Ads Personal Brand Lift",
    subtitle: "Executive situational roleplay on thought leader ads personal brand lift.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (LINKEDIN ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why should we spend budget sponsoring our CEO's personal post instead of our official company page?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why should we spend budget sponsoring our CEO's personal post instead of our official company page?",
    brokenKPIs: [
      {
        metric: "Thought Leader Ads Personal Brand Lift",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "snapchat-demographics-reach",
    title: "Module 64: Snapchat Gen Z & Millennial Power",
    subtitle: "Executive situational roleplay on snapchat gen z & millennial power.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (LINKEDIN ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"Isn't Snapchat dead? Why should our D2C brand allocate 15% of our budget there?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Isn't Snapchat dead? Why should our D2C brand allocate 15% of our budget there?",
    brokenKPIs: [
      {
        metric: "Snapchat Gen Z & Millennial Power",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "snapchat-6s-commercials",
    title: "Module 65: Snapchat Non-Skippable Commercials",
    subtitle: "Executive situational roleplay on snapchat non-skippable commercials.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (LINKEDIN ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"What is a 6-second non-skippable commercial and won't it make teenagers hate our brand?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What is a 6-second non-skippable commercial and won't it make teenagers hate our brand?",
    brokenKPIs: [
      {
        metric: "Snapchat Non-Skippable Commercials",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-shop-native-gmv",
    title: "Module 66: TikTok Shop Native Checkout vs Shopify",
    subtitle: "Executive situational roleplay on tiktok shop native checkout vs shopify.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"Why should we let customers buy inside TikTok Shop instead of sending them to our website?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why should we let customers buy inside TikTok Shop instead of sending them to our website?",
    brokenKPIs: [
      {
        metric: "TikTok Shop Native Checkout vs Shopify",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "amazon-sponsored-products",
    title: "Module 67: Amazon Sponsored Products vs Brands",
    subtitle: "Executive situational roleplay on amazon sponsored products vs brands.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (LINKEDIN ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Where do Sponsored Products show up in Amazon search compared to Sponsored Brands?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Where do Sponsored Products show up in Amazon search compared to Sponsored Brands?",
    brokenKPIs: [
      {
        metric: "Amazon Sponsored Products vs Brands",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "amazon-acos-vs-roas",
    title: "Module 68: Amazon ACOS vs ROAS Mathematics",
    subtitle: "Executive situational roleplay on amazon acos vs roas mathematics.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (LINKEDIN ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Our Amazon account manager says our ACOS is 24%. What does that mean in ROAS terms?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Amazon account manager says our ACOS is 24%. What does that mean in ROAS terms?",
    brokenKPIs: [
      {
        metric: "Amazon ACOS vs ROAS Mathematics",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "amazon-buy-box-requirement",
    title: "Module 69: Amazon Buy Box Suppression Crisis",
    subtitle: "Executive situational roleplay on amazon buy box suppression crisis.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (LINKEDIN ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Why did Amazon suddenly pause all our ad campaigns when a third-party seller undercut our price by $1?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did Amazon suddenly pause all our ad campaigns when a third-party seller undercut our price by $1?",
    brokenKPIs: [
      {
        metric: "Amazon Buy Box Suppression Crisis",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "apple-search-cpt-mechanics",
    title: "Module 70: Apple Search Ads Cost-Per-Tap (CPT)",
    subtitle: "Executive situational roleplay on apple search ads cost-per-tap (cpt).",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (LINKEDIN ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Why do Apple Search Ads have an astonishing 50% conversion rate from tap to app download?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do Apple Search Ads have an astonishing 50% conversion rate from tap to app download?",
    brokenKPIs: [
      {
        metric: "Apple Search Ads Cost-Per-Tap (CPT)",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "apple-custom-product-pages",
    title: "Module 71: Custom Product Pages (CPP) for iOS",
    subtitle: "Executive situational roleplay on custom product pages (cpp) for ios.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (LINKEDIN ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"How do Custom Product Pages match our App Store screenshots to specific search keywords?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do Custom Product Pages match our App Store screenshots to specific search keywords?",
    brokenKPIs: [
      {
        metric: "Custom Product Pages (CPP) for iOS",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "gpt-ads-sponsored-citations",
    title: "Module 72: GPT Ads & AI Conversational Search",
    subtitle: "Executive situational roleplay on gpt ads & ai conversational search.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (LINKEDIN ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"What are these sponsored citations appearing inside AI conversational search answers?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What are these sponsored citations appearing inside AI conversational search answers?",
    brokenKPIs: [
      {
        metric: "GPT Ads & AI Conversational Search",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "generative-engine-optimization",
    title: "Module 73: Generative Engine Optimization (GEO)",
    subtitle: "Executive situational roleplay on generative engine optimization (geo).",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"How do we make sure ChatGPT and Perplexity recommend our product as the #1 answer?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we make sure ChatGPT and Perplexity recommend our product as the #1 answer?",
    brokenKPIs: [
      {
        metric: "Generative Engine Optimization (GEO)",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "quick-commerce-dark-store",
    title: "Module 74: Quick Commerce Hyper-Local Radius",
    subtitle: "Executive situational roleplay on quick commerce hyper-local radius.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (LINKEDIN ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Why are our Blinkit and Instacart ads only showing to users within a 3-kilometer radius?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why are our Blinkit and Instacart ads only showing to users within a 3-kilometer radius?",
    brokenKPIs: [
      {
        metric: "Quick Commerce Hyper-Local Radius",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "pinterest-visual-intent",
    title: "Module 75: Pinterest Visual Search Buyer Intent",
    subtitle: "Executive situational roleplay on pinterest visual search buyer intent.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (LINKEDIN ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"When should an e-commerce home decor brand allocate budget to Pinterest Ads?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "When should an e-commerce home decor brand allocate budget to Pinterest Ads?",
    brokenKPIs: [
      {
        metric: "Pinterest Visual Search Buyer Intent",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "capi-deduplication-clash",
    title: "Module 76: CAPI & Browser Event Deduplication",
    subtitle: "Executive situational roleplay on capi & browser event deduplication.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (META ADS)",
    briefingSummary: "Managing Partner David Miller is asking: \"Meta is reporting double purchases because both the browser pixel and CAPI are sending events!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta is reporting double purchases because both the browser pixel and CAPI are sending events!",
    brokenKPIs: [
      {
        metric: "CAPI & Browser Event Deduplication",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "ios-skadnetwork-delay",
    title: "Module 77: SKAdNetwork 72-Hour Timer Delays",
    subtitle: "Executive situational roleplay on skadnetwork 72-hour timer delays.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (META ADS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Why is our iOS app campaign showing 0 installs for yesterday's $5,000 spend?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why is our iOS app campaign showing 0 installs for yesterday's $5,000 spend?",
    brokenKPIs: [
      {
        metric: "SKAdNetwork 72-Hour Timer Delays",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "click-session-latency",
    title: "Module 78: Click-to-Session Drop-off Exceeding 40%",
    subtitle: "Executive situational roleplay on click-to-session drop-off exceeding 40%.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (META ADS)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Over 40% of ad clicks never load our landing page. How do we stop this traffic bleed?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Over 40% of ad clicks never load our landing page. How do we stop this traffic bleed?",
    brokenKPIs: [
      {
        metric: "Click-to-Session Drop-off Exceeding 40%",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "asc-existing-customer-hog",
    title: "Module 79: ASC Budget Cannibalizing Existing Buyers",
    subtitle: "Executive situational roleplay on asc budget cannibalizing existing buyers.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (META ADS)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"Advantage+ Shopping is spending 60% of our budget on customers who bought last week!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Advantage+ Shopping is spending 60% of our budget on customers who bought last week!",
    brokenKPIs: [
      {
        metric: "ASC Budget Cannibalizing Existing Buyers",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "advantage-creative-mutilation",
    title: "Module 80: Advantage+ Creative Aspect Ratio Mutilation",
    subtitle: "Executive situational roleplay on advantage+ creative aspect ratio mutilation.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (META ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Meta's automated creative enhancement cropped our product model's head off in Stories!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta's automated creative enhancement cropped our product model's head off in Stories!",
    brokenKPIs: [
      {
        metric: "Advantage+ Creative Aspect Ratio Mutilation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-fatigue-velocity",
    title: "Module 81: Creative Fatigue Velocity at Scale",
    subtitle: "Executive situational roleplay on creative fatigue velocity at scale.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (META ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"We are spending $50k/month and creatives burn out in 8 days. How do we sustain production?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We are spending $50k/month and creatives burn out in 8 days. How do we sustain production?",
    brokenKPIs: [
      {
        metric: "Creative Fatigue Velocity at Scale",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "multi-hook-isolation",
    title: "Module 82: Multi-Variant Hook Isolation Testing",
    subtitle: "Executive situational roleplay on multi-variant hook isolation testing.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (META ADS)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"How do we test 10 opening video hooks without resetting the ad set learning phase?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we test 10 opening video hooks without resetting the ad set learning phase?",
    brokenKPIs: [
      {
        metric: "Multi-Variant Hook Isolation Testing",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "horizontal-vs-vertical-scaling",
    title: "Module 83: Horizontal Angle vs Vertical Budget Scaling",
    subtitle: "Executive situational roleplay on horizontal angle vs vertical budget scaling.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (META ADS)",
    briefingSummary: "Managing Partner David Miller is asking: \"We hit a scaling wall at $3k/day. Why is vertical budget bumping failing?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We hit a scaling wall at $3k/day. Why is vertical budget bumping failing?",
    brokenKPIs: [
      {
        metric: "Horizontal Angle vs Vertical Budget Scaling",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "broad-vs-micro-interests",
    title: "Module 84: Broad Targeting vs 50 Interest Groups",
    subtitle: "Executive situational roleplay on broad targeting vs 50 interest groups.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (META ADS)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Our media buyer says interest targeting is dead on Meta. Prove that to our marketing director.\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our media buyer says interest targeting is dead on Meta. Prove that to our marketing director.",
    brokenKPIs: [
      {
        metric: "Broad Targeting vs 50 Interest Groups",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "view-through-inflation",
    title: "Module 85: View-Through Attribution Revenue Inflation",
    subtitle: "Executive situational roleplay on view-through attribution revenue inflation.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (META ADS)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Is Meta taking credit for sales that would have happened organically via 1-day view attribution?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Is Meta taking credit for sales that would have happened organically via 1-day view attribution?",
    brokenKPIs: [
      {
        metric: "View-Through Attribution Revenue Inflation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "catalog-sync-delays",
    title: "Module 86: Commerce Catalog Sync Discrepancies",
    subtitle: "Executive situational roleplay on commerce catalog sync discrepancies.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (META ADS)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"Our warehouse updated pricing this morning, but Facebook dynamic ads are still advertising old prices!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our warehouse updated pricing this morning, but Facebook dynamic ads are still advertising old prices!",
    brokenKPIs: [
      {
        metric: "Commerce Catalog Sync Discrepancies",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "lead-quality-vs-volume",
    title: "Module 87: Meta Lead Ads: Volume Surge but Low Sales",
    subtitle: "Executive situational roleplay on meta lead ads: volume surge but low sales.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (META ADS)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"We generated 600 leads at $4 each, but our sales team says 80% have invalid phone numbers!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We generated 600 leads at $4 each, but our sales team says 80% have invalid phone numbers!",
    brokenKPIs: [
      {
        metric: "Meta Lead Ads",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "reels-cpm-inflation",
    title: "Module 88: Instagram Reels Auction CPM Inflation",
    subtitle: "Executive situational roleplay on instagram reels auction cpm inflation.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (META ADS)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Why did our Reels placement CPM jump from $14 to $32 during the first week of the month?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did our Reels placement CPM jump from $14 to $32 during the first week of the month?",
    brokenKPIs: [
      {
        metric: "Instagram Reels Auction CPM Inflation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "account-disabled-appeals",
    title: "Module 89: Emergency Meta Ad Account Policy Flag",
    subtitle: "Executive situational roleplay on emergency meta ad account policy flag.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (META ADS)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"Meta disabled our primary ad account alleging \"Circumventing Systems\". How do we get restored?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta disabled our primary ad account alleging \"Circumventing Systems\". How do we get restored?",
    brokenKPIs: [
      {
        metric: "Emergency Meta Ad Account Policy Flag",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cost-cap-auction-throttle",
    title: "Module 90: Cost Cap Auction Delivery Starvation",
    subtitle: "Executive situational roleplay on cost cap auction delivery starvation.",
    category: "meta-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (META ADS)",
    briefingSummary: "Managing Partner David Miller is asking: \"We set a conservative Cost Cap to protect margins, but spend dropped by 90%. How do we calibrate?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We set a conservative Cost Cap to protect margins, but spend dropped by 90%. How do we calibrate?",
    brokenKPIs: [
      {
        metric: "Cost Cap Auction Delivery Starvation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "pmax-brand-cannibalization",
    title: "Module 91: PMax Cannibalizing Branded Search",
    subtitle: "Executive situational roleplay on pmax cannibalizing branded search.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GOOGLE ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"PMax reported a 6.0x ROAS, but our organic brand traffic dropped by 40%. Is PMax stealing brand credit?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "PMax reported a 6.0x ROAS, but our organic brand traffic dropped by 40%. Is PMax stealing brand credit?",
    brokenKPIs: [
      {
        metric: "PMax Cannibalizing Branded Search",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "pmax-search-term-script",
    title: "Module 92: Extracting Search Terms from PMax",
    subtitle: "Executive situational roleplay on extracting search terms from pmax.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GOOGLE ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Google hides search query data in PMax. How do we audit what keywords it is actually bidding on?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google hides search query data in PMax. How do we audit what keywords it is actually bidding on?",
    brokenKPIs: [
      {
        metric: "Extracting Search Terms from PMax",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "smart-bidding-micro-conversions",
    title: "Module 93: Smart Bidding Runaway on Soft Actions",
    subtitle: "Executive situational roleplay on smart bidding runaway on soft actions.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GOOGLE ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"Smart bidding is optimizing for \"Add to Cart\" and burning spend on non-buying window shoppers!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Smart bidding is optimizing for \"Add to Cart\" and burning spend on non-buying window shoppers!",
    brokenKPIs: [
      {
        metric: "Smart Bidding Runaway on Soft Actions",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "gmc-feed-disapprovals",
    title: "Module 94: Google Merchant Center Policy Disapprovals",
    subtitle: "Executive situational roleplay on google merchant center policy disapprovals.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GOOGLE ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"500 of our top revenue-generating SKUs were suspended in GMC for \"Mismatched Value\"!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "500 of our top revenue-generating SKUs were suspended in GMC for \"Mismatched Value\"!",
    brokenKPIs: [
      {
        metric: "Google Merchant Center Policy Disapprovals",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "youtube-shorts-view-bleed",
    title: "Module 95: YouTube Shorts Traffic Cannibalization",
    subtitle: "Executive situational roleplay on youtube shorts traffic cannibalization.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GOOGLE ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"Demand Gen is spending all budget on YouTube Shorts with high views but zero purchase intent!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Demand Gen is spending all budget on YouTube Shorts with high views but zero purchase intent!",
    brokenKPIs: [
      {
        metric: "YouTube Shorts Traffic Cannibalization",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "broad-match-competitor-bleed",
    title: "Module 96: Broad Match Bleeding on Competitors",
    subtitle: "Executive situational roleplay on broad match bleeding on competitors.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GOOGLE ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Broad match keywords started matching into our competitor's trademarked customer service phone numbers!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Broad match keywords started matching into our competitor's trademarked customer service phone numbers!",
    brokenKPIs: [
      {
        metric: "Broad Match Bleeding on Competitors",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "brand-exclusion-lists",
    title: "Module 97: Setting Up Account Brand Exclusion Lists",
    subtitle: "Executive situational roleplay on setting up account brand exclusion lists.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (GOOGLE ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"How do we block PMax from bidding on our brand terms while letting standard search defend brand rank?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we block PMax from bidding on our brand terms while letting standard search defend brand rank?",
    brokenKPIs: [
      {
        metric: "Setting Up Account Brand Exclusion Lists",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "demand-gen-migration",
    title: "Module 98: Discovery to Demand Gen Format Migration",
    subtitle: "Executive situational roleplay on discovery to demand gen format migration.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GOOGLE ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"How does Demand Gen change our bidding strategy and video asset requirements compared to Discovery?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How does Demand Gen change our bidding strategy and video asset requirements compared to Discovery?",
    brokenKPIs: [
      {
        metric: "Discovery to Demand Gen Format Migration",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "search-lost-is-rank-budget",
    title: "Module 99: Lost IS (Rank) vs Lost IS (Budget)",
    subtitle: "Executive situational roleplay on lost is (rank) vs lost is (budget).",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GOOGLE ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"Our Impression Share is 45%. Is the bottleneck our bidding budget or our ad Quality Score?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Impression Share is 45%. Is the bottleneck our bidding budget or our ad Quality Score?",
    brokenKPIs: [
      {
        metric: "Lost IS (Rank) vs Lost IS (Budget)",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "offline-conversions-gclid",
    title: "Module 100: Offline Conversion Tracking via GCLID",
    subtitle: "Executive situational roleplay on offline conversion tracking via gclid.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GOOGLE ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"How do we upload CRM closed deals back into Google Ads to train smart bidding on revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we upload CRM closed deals back into Google Ads to train smart bidding on revenue?",
    brokenKPIs: [
      {
        metric: "Offline Conversion Tracking via GCLID",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "value-based-bidding-vbb",
    title: "Module 101: Value-Based Bidding for High-Margin SKUs",
    subtitle: "Executive situational roleplay on value-based bidding for high-margin skus.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GOOGLE ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"How do we configure Google Ads to bid more aggressively on high-gross-margin products?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we configure Google Ads to bid more aggressively on high-gross-margin products?",
    brokenKPIs: [
      {
        metric: "Value-Based Bidding for High-Margin SKUs",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "rsa-ad-strength-myth",
    title: "Module 102: Debunking the \"Ad Strength: Poor\" Panic",
    subtitle: "Executive situational roleplay on debunking the \"ad strength: poor\" panic.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GOOGLE ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"Google says our ad strength is \"Poor\" because we pinned headlines. Is that hurting our rank?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google says our ad strength is \"Poor\" because we pinned headlines. Is that hurting our rank?",
    brokenKPIs: [
      {
        metric: "Debunking the \"Ad Strength",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "shopping-title-token-order",
    title: "Module 103: Shopping Feed Title Token Optimization",
    subtitle: "Executive situational roleplay on shopping feed title token optimization.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GOOGLE ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"How does re-ordering words in Google Shopping product titles double impression volume?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How does re-ordering words in Google Shopping product titles double impression volume?",
    brokenKPIs: [
      {
        metric: "Shopping Feed Title Token Optimization",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "negative-keyword-conflicts",
    title: "Module 104: Negative Keyword Blocking Legitimate Queries",
    subtitle: "Executive situational roleplay on negative keyword blocking legitimate queries.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (GOOGLE ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"A negative keyword added last week accidentally blocked our top-converting search phrase!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "A negative keyword added last week accidentally blocked our top-converting search phrase!",
    brokenKPIs: [
      {
        metric: "Negative Keyword Blocking Legitimate Queries",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "google-ads-api-scripts",
    title: "Module 105: Automating Bid Shields with Google Ads Scripts",
    subtitle: "Executive situational roleplay on automating bid shields with google ads scripts.",
    category: "google-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GOOGLE ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"How do automated scripts protect our account from weekend budget spikes and 404 landing page errors?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do automated scripts protect our account from weekend budget spikes and 404 landing page errors?",
    brokenKPIs: [
      {
        metric: "Automating Bid Shields with Google Ads Scripts",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-driving-amazon-lift",
    title: "Module 106: TikTok Organic Lift on Amazon Sales",
    subtitle: "Executive situational roleplay on tiktok organic lift on amazon sales.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (GENERAL)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"We scaled TikTok video spend and Amazon organic sales jumped 35%. How do we measure this cross-channel halo?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We scaled TikTok video spend and Amazon organic sales jumped 35%. How do we measure this cross-channel halo?",
    brokenKPIs: [
      {
        metric: "TikTok Organic Lift on Amazon Sales",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "linkedin-abm-google-search",
    title: "Module 107: LinkedIn ABM Sparking Brand Search Surges",
    subtitle: "Executive situational roleplay on linkedin abm sparking brand search surges.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (GENERAL)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Enterprise prospects targeted on LinkedIn are searching our company name on Google. How do we attribute this?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Enterprise prospects targeted on LinkedIn are searching our company name on Google. How do we attribute this?",
    brokenKPIs: [
      {
        metric: "LinkedIn ABM Sparking Brand Search Surges",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "snapchat-impulse-shopify-bounce",
    title: "Module 108: Snapchat Impulse Shopper Mobile Optimization",
    subtitle: "Executive situational roleplay on snapchat impulse shopper mobile optimization.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (GENERAL)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"Snapchat delivers 1,500 swipes daily, but mobile checkout abandonment is 82%. How do we convert them?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Snapchat delivers 1,500 swipes daily, but mobile checkout abandonment is 82%. How do we convert them?",
    brokenKPIs: [
      {
        metric: "Snapchat Impulse Shopper Mobile Optimization",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "qcommerce-dark-store-stockout",
    title: "Module 109: Q-Commerce Spend Burning on Empty Stores",
    subtitle: "Executive situational roleplay on q-commerce spend burning on empty stores.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (GENERAL)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Our Blinkit and Instacart ads spent $1,200 yesterday in pin codes where our inventory was sold out!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our Blinkit and Instacart ads spent $1,200 yesterday in pin codes where our inventory was sold out!",
    brokenKPIs: [
      {
        metric: "Q-Commerce Spend Burning on Empty Stores",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "amazon-dsp-off-amazon",
    title: "Module 110: Amazon DSP Retargeting Off-Platform Shoppers",
    subtitle: "Executive situational roleplay on amazon dsp retargeting off-platform shoppers.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (GENERAL)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"How does Amazon DSP let us retarget Amazon product viewers across mobile apps and connected TV?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How does Amazon DSP let us retarget Amazon product viewers across mobile apps and connected TV?",
    brokenKPIs: [
      {
        metric: "Amazon DSP Retargeting Off-Platform Shoppers",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "asa-discovery-harvesting",
    title: "Module 111: Apple Search Ads Discovery to Exact Match",
    subtitle: "Executive situational roleplay on apple search ads discovery to exact match.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (GENERAL)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"How do we harvest high-converting search queries from ASA Discovery into Exact Match campaigns?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we harvest high-converting search queries from ASA Discovery into Exact Match campaigns?",
    brokenKPIs: [
      {
        metric: "Apple Search Ads Discovery to Exact Match",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "demand-gen-meta-synergy",
    title: "Module 112: Google Demand Gen Feeding Meta Retargeting",
    subtitle: "Executive situational roleplay on google demand gen feeding meta retargeting.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (GENERAL)",
    briefingSummary: "Managing Partner David Miller is asking: \"How do we use low-cost Google video reach to build high-converting custom audiences on Meta?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we use low-cost Google video reach to build high-converting custom audiences on Meta?",
    brokenKPIs: [
      {
        metric: "Google Demand Gen Feeding Meta Retargeting",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "pinterest-seasonal-timing",
    title: "Module 113: Pinterest 60-Day Seasonal Intent Advantage",
    subtitle: "Executive situational roleplay on pinterest 60-day seasonal intent advantage.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (GENERAL)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Why do holiday gift guide campaigns on Pinterest need to launch 2 months before Black Friday?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do holiday gift guide campaigns on Pinterest need to launch 2 months before Black Friday?",
    brokenKPIs: [
      {
        metric: "Pinterest 60-Day Seasonal Intent Advantage",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "qcommerce-dayparting-boost",
    title: "Module 114: Quick Commerce Evening Rush Dayparting",
    subtitle: "Executive situational roleplay on quick commerce evening rush dayparting.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (GENERAL)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Why should our snack brand boost bids between 8 PM and 11 PM on instant grocery delivery apps?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why should our snack brand boost bids between 8 PM and 11 PM on instant grocery delivery apps?",
    brokenKPIs: [
      {
        metric: "Quick Commerce Evening Rush Dayparting",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "whitelisting-vs-brand-ads",
    title: "Module 115: Influencer Whitelisting vs Brand Dark Ads",
    subtitle: "Executive situational roleplay on influencer whitelisting vs brand dark ads.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (GENERAL)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"What is the operational difference between running ads from an influencer page versus our brand handle?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "What is the operational difference between running ads from an influencer page versus our brand handle?",
    brokenKPIs: [
      {
        metric: "Influencer Whitelisting vs Brand Dark Ads",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "first-party-crm-enrichment",
    title: "Module 116: First-Party Customer Data CRM Enrichment",
    subtitle: "Executive situational roleplay on first-party customer data crm enrichment.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (GENERAL)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"How do we securely upload customer segmented lists into Google and Meta without violating GDPR/CCPA?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we securely upload customer segmented lists into Google and Meta without violating GDPR/CCPA?",
    brokenKPIs: [
      {
        metric: "First-Party Customer Data CRM Enrichment",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "mta-multi-touch-framework",
    title: "Module 117: Multi-Touch Attribution: First vs Last Touch",
    subtitle: "Executive situational roleplay on multi-touch attribution: first vs last touch.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (GENERAL)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"First-touch says YouTube is our #1 channel; last-touch says Search gets 90% of credit. Who is right?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "First-touch says YouTube is our #1 channel; last-touch says Search gets 90% of credit. Who is right?",
    brokenKPIs: [
      {
        metric: "Multi-Touch Attribution",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "top-funnel-vs-bottom-harvest",
    title: "Module 118: Balancing Top-of-Funnel vs Bottom Harvesting",
    subtitle: "Executive situational roleplay on balancing top-of-funnel vs bottom harvesting.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (GENERAL)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"Our CEO wants to cut all awareness video spend and only run branded search. Why will that kill growth?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our CEO wants to cut all awareness video spend and only run branded search. Why will that kill growth?",
    brokenKPIs: [
      {
        metric: "Balancing Top-of-Funnel vs Bottom Harvesting",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "international-localization",
    title: "Module 119: International Expansion Ad Localization",
    subtitle: "Executive situational roleplay on international expansion ad localization.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (GENERAL)",
    briefingSummary: "Managing Partner David Miller is asking: \"Why did our US-winning ad creative fail miserably when translated into German and French?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why did our US-winning ad creative fail miserably when translated into German and French?",
    brokenKPIs: [
      {
        metric: "International Expansion Ad Localization",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cross-channel-reallocation",
    title: "Module 120: Agile Budget Reallocation Across 4 Platforms",
    subtitle: "Executive situational roleplay on agile budget reallocation across 4 platforms.",
    category: "general",
    difficulty: "intermediate",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (GENERAL)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"Meta CPA spiked 40% while Google Search CPA dropped 20%. How do we reallocate budget within 2 hours?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta CPA spiked 40% while Google Search CPA dropped 20%. How do we reallocate budget within 2 hours?",
    brokenKPIs: [
      {
        metric: "Agile Budget Reallocation Across 4 Platforms",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cpl-spike-crisis-cmo",
    title: "Module 121: The CMO 42% CPL Spike Crisis Call",
    subtitle: "Executive situational roleplay on the cmo 42% cpl spike crisis call.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (META ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"CMO Alex Vance: \"Our CPL spiked 42% overnight from $38 to $54! Why shouldn't I pause all spend right now?!\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "CMO Alex Vance: \"Our CPL spiked 42% overnight from $38 to $54! Why shouldn't I pause all spend right now?!\"",
    brokenKPIs: [
      {
        metric: "The CMO 42% CPL Spike Crisis Call",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cfo-cac-doubled-scaling",
    title: "Module 122: CFO Confrontation: CAC Doubled at 3x Spend",
    subtitle: "Executive situational roleplay on cfo confrontation: cac doubled at 3x spend.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (META ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"CFO Marcus Reed: \"You tripled our marketing budget, but CAC doubled and cash burn is out of control. Defend your spend!\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "CFO Marcus Reed: \"You tripled our marketing budget, but CAC doubled and cash burn is out of control. Defend your spend!\"",
    brokenKPIs: [
      {
        metric: "CFO Confrontation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "founder-competitor-conquest",
    title: "Module 123: Founder Rage: Rival Bidding on Brand Name",
    subtitle: "Executive situational roleplay on founder rage: rival bidding on brand name.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (META ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"Founder: \"I just searched our company name and our fiercest rival is showing above us! Sue them or outbid them immediately!\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Founder: \"I just searched our company name and our fiercest rival is showing above us! Sue them or outbid them immediately!\"",
    brokenKPIs: [
      {
        metric: "Founder Rage",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "triple-whale-vs-ga4-meta",
    title: "Module 124: Triple Whale vs GA4 vs Meta Discrepancy",
    subtitle: "Executive situational roleplay on triple whale vs ga4 vs meta discrepancy.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (META ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"Triple Whale says ROAS is 3.2x, Meta says 4.5x, and GA4 says 1.6x. The board wants to know which number is real!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Triple Whale says ROAS is 3.2x, Meta says 4.5x, and GA4 says 1.6x. The board wants to know which number is real!",
    brokenKPIs: [
      {
        metric: "Triple Whale vs GA4 vs Meta Discrepancy",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "board-demands-30-cut",
    title: "Module 125: Emergency Board Meeting: Demanding 30% Budget Cut",
    subtitle: "Executive situational roleplay on emergency board meeting: demanding 30% budget cut.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (META ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"The board is mandating an immediate 30% marketing budget reduction. Which campaigns do we preserve?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The board is mandating an immediate 30% marketing budget reduction. Which campaigns do we preserve?",
    brokenKPIs: [
      {
        metric: "Emergency Board Meeting",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "bot-click-fraud-accusation",
    title: "Module 126: Procurement Accuses Agency of Bot Click Fraud",
    subtitle: "Executive situational roleplay on procurement accuses agency of bot click fraud.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (META ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"Our client's cybersecurity team claims 25% of our paid ad clicks are automated bots. How do we defend traffic integrity?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our client's cybersecurity team claims 25% of our paid ad clicks are automated bots. How do we defend traffic integrity?",
    brokenKPIs: [
      {
        metric: "Procurement Accuses Agency of Bot Click Fraud",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "black-friday-cpm-inflation",
    title: "Module 127: Navigating the 250% Q4 Black Friday CPM Surge",
    subtitle: "Executive situational roleplay on navigating the 250% q4 black friday cpm surge.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (META ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"CPMs surged from $20 to $65 on Thanksgiving week. How do we maintain profitability without pausing ads?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "CPMs surged from $20 to $65 on Thanksgiving week. How do we maintain profitability without pausing ads?",
    brokenKPIs: [
      {
        metric: "Navigating the 250% Q4 Black Friday CPM Surge",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "product-recall-containment",
    title: "Module 128: Emergency Ad Suspension During Product Recall",
    subtitle: "Executive situational roleplay on emergency ad suspension during product recall.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (META ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"A batch of our hero product was recalled for packaging defects! How do we freeze all campaigns in 5 minutes?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "A batch of our hero product was recalled for packaging defects! How do we freeze all campaigns in 5 minutes?",
    brokenKPIs: [
      {
        metric: "Emergency Ad Suspension During Product Recall",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "massive-rival-conquest",
    title: "Module 129: Venture-Backed Competitor Outspending 10x",
    subtitle: "Executive situational roleplay on venture-backed competitor outspending 10x.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (META ADS)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"A newly funded competitor is bidding $25 on all our keywords with a 50% discount offer. How do we counter?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "A newly funded competitor is bidding $25 on all our keywords with a 50% discount offer. How do we counter?",
    brokenKPIs: [
      {
        metric: "Venture-Backed Competitor Outspending 10x",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "website-redesign-cvr-crash",
    title: "Module 130: Conversion Rate Halved After Website Redesign",
    subtitle: "Executive situational roleplay on conversion rate halved after website redesign.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (META ADS)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"The client's internal design team launched a new website and conversion rate plummeted by 55%!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The client's internal design team launched a new website and conversion rate plummeted by 55%!",
    brokenKPIs: [
      {
        metric: "Conversion Rate Halved After Website Redesign",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "pixel-break-migration",
    title: "Module 131: Tracking Pixel Severed During CMS Migration",
    subtitle: "Executive situational roleplay on tracking pixel severed during cms migration.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (META ADS)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"The engineering team pushed a new Shopify theme and deleted all Meta and Google tracking tags!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The engineering team pushed a new Shopify theme and deleted all Meta and Google tracking tags!",
    brokenKPIs: [
      {
        metric: "Tracking Pixel Severed During CMS Migration",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "guaranteed-10x-roas-demand",
    title: "Module 132: Client Demanding Contractual 10x ROAS Guarantee",
    subtitle: "Executive situational roleplay on client demanding contractual 10x roas guarantee.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (META ADS)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"An enterprise prospect demands a legal guarantee of 8.0x ROAS before signing an annual retainer. How do you negotiate?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "An enterprise prospect demands a legal guarantee of 8.0x ROAS before signing an annual retainer. How do you negotiate?",
    brokenKPIs: [
      {
        metric: "Client Demanding Contractual 10x ROAS Guarantee",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "bank-deposit-discrepancy",
    title: "Module 133: Reported Ad Revenue vs Actual Bank Deposits",
    subtitle: "Executive situational roleplay on reported ad revenue vs actual bank deposits.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (META ADS)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"The client shows $150k in Meta reported revenue, but Stripe deposits only show $105k. Where is the missing $45k?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The client shows $150k in Meta reported revenue, but Stripe deposits only show $105k. Where is the missing $45k?",
    brokenKPIs: [
      {
        metric: "Reported Ad Revenue vs Actual Bank Deposits",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "google-core-update-slap",
    title: "Module 134: Google Core Algorithm Update Destroys Organic Landing Page",
    subtitle: "Executive situational roleplay on google core algorithm update destroys organic landing page.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (META ADS)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Google's core algorithm update dropped our main paid search landing page organic rank, driving CPC up 60%!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google's core algorithm update dropped our main paid search landing page organic rank, driving CPC up 60%!",
    brokenKPIs: [
      {
        metric: "Google Core Algorithm Update Destroys Organic Landing Page",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "credit-card-billing-failure",
    title: "Module 135: Ad Account Suspended for Billing Failure",
    subtitle: "Executive situational roleplay on ad account suspended for billing failure.",
    category: "meta-ads",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (META ADS)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"The CEO's credit card expired, pausing $10,000/day in live campaigns during our biggest promotion!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The CEO's credit card expired, pausing $10,000/day in live campaigns during our biggest promotion!",
    brokenKPIs: [
      {
        metric: "Ad Account Suspended for Billing Failure",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vertical-scaling-law-plateau",
    title: "Module 136: The Vertical Scaling Law Ceiling",
    subtitle: "Executive situational roleplay on the vertical scaling law ceiling.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (GENERAL)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Why does increasing daily budget from $5k to $15k compress marginal ROAS by 45%?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why does increasing daily budget from $5k to $15k compress marginal ROAS by 45%?",
    brokenKPIs: [
      {
        metric: "The Vertical Scaling Law Ceiling",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "creative-velocity-deficit",
    title: "Module 137: Creative Production Velocity Lagging Media Spend",
    subtitle: "Executive situational roleplay on creative production velocity lagging media spend.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (GENERAL)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"We have the budget to spend $200k/month, but creative production is only delivering 2 videos/week!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We have the budget to spend $200k/month, but creative production is only delivering 2 videos/week!",
    brokenKPIs: [
      {
        metric: "Creative Production Velocity Lagging Media Spend",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "geo-saturation-tier1",
    title: "Module 138: Audience Saturation Across Tier 1 Metros",
    subtitle: "Executive situational roleplay on audience saturation across tier 1 metros.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (GENERAL)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"We saturated the top 10 US metro markets. How do we scale into Tier 2 and Tier 3 regions without CAC blowout?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We saturated the top 10 US metro markets. How do we scale into Tier 2 and Tier 3 regions without CAC blowout?",
    brokenKPIs: [
      {
        metric: "Audience Saturation Across Tier 1 Metros",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "lookalike-audience-exhaustion",
    title: "Module 139: Lookalike Audience Exhaustion at High Frequency",
    subtitle: "Executive situational roleplay on lookalike audience exhaustion at high frequency.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (GENERAL)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Our 1% purchaser lookalike reached a frequency of 5.2. How do we transition to broad targeting?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our 1% purchaser lookalike reached a frequency of 5.2. How do we transition to broad targeting?",
    brokenKPIs: [
      {
        metric: "Lookalike Audience Exhaustion at High Frequency",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "macro-consumer-slowdown",
    title: "Module 140: Consumer Discretionary Spending Inflation Slowdown",
    subtitle: "Executive situational roleplay on consumer discretionary spending inflation slowdown.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (GENERAL)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"Macroeconomic inflation is softening consumer demand. How do we pivot messaging from luxury to durability?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Macroeconomic inflation is softening consumer demand. How do we pivot messaging from luxury to durability?",
    brokenKPIs: [
      {
        metric: "Consumer Discretionary Spending Inflation Slowdown",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "holiday-inventory-stockouts",
    title: "Module 141: Managing Ad Delivery During Warehouse Stockouts",
    subtitle: "Executive situational roleplay on managing ad delivery during warehouse stockouts.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (GENERAL)",
    briefingSummary: "Managing Partner David Miller is asking: \"Our bestselling holiday gift set sold out 12 days before Christmas! How do we redirect traffic without losing rank?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our bestselling holiday gift set sold out 12 days before Christmas! How do we redirect traffic without losing rank?",
    brokenKPIs: [
      {
        metric: "Managing Ad Delivery During Warehouse Stockouts",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cookie-deprecation-preparedness",
    title: "Module 142: Privacy Sandbox & First-Party Data Defense",
    subtitle: "Executive situational roleplay on privacy sandbox & first-party data defense.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (GENERAL)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"How do we prepare our client's marketing infrastructure for third-party cookie restrictions?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we prepare our client's marketing infrastructure for third-party cookie restrictions?",
    brokenKPIs: [
      {
        metric: "Privacy Sandbox & First-Party Data Defense",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "adattributionkit-transition",
    title: "Module 143: Apple AdAttributionKit & SKAN 4.0 Transition",
    subtitle: "Executive situational roleplay on apple adattributionkit & skan 4.0 transition.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (GENERAL)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"How do we audit conversion value schemas to ensure accurate post-install event tracking on iOS?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we audit conversion value schemas to ensure accurate post-install event tracking on iOS?",
    brokenKPIs: [
      {
        metric: "Apple AdAttributionKit & SKAN 4.0 Transition",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "compliance-ban-reinstatement",
    title: "Module 144: Overcoming Policy Flag Disapprovals in Healthcare/Fintech",
    subtitle: "Executive situational roleplay on overcoming policy flag disapprovals in healthcare/fintech.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "OmniAI Solutions (GENERAL)",
    briefingSummary: "Head of Growth Lisa Chen is asking: \"Google Ads flagged our supplement client for \"Unapproved Pharmaceuticals\". How do we get manual review approval?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Google Ads flagged our supplement client for \"Unapproved Pharmaceuticals\". How do we get manual review approval?",
    brokenKPIs: [
      {
        metric: "Overcoming Policy Flag Disapprovals in Healthcare/Fintech",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Lisa Chen",
      title: "Head of Growth",
      organization: "OmniAI Solutions",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Lisa, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "supply-chain-shipping-delays",
    title: "Module 145: Containment Strategy for Shipping Delay Backlogs",
    subtitle: "Executive situational roleplay on containment strategy for shipping delay backlogs.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Apex HVAC Services (GENERAL)",
    briefingSummary: "Owner & Founder Tom Bradley is asking: \"Port strikes delayed customer orders by 3 weeks! How do we adjust advertising to prevent customer support mutiny?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Port strikes delayed customer orders by 3 weeks! How do we adjust advertising to prevent customer support mutiny?",
    brokenKPIs: [
      {
        metric: "Containment Strategy for Shipping Delay Backlogs",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Tom Bradley",
      title: "Owner & Founder",
      organization: "Apex HVAC Services",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Tom, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "post-purchase-churn-cac",
    title: "Module 146: Post-Purchase Churn Destroying 12-Month LTV",
    subtitle: "Executive situational roleplay on post-purchase churn destroying 12-month ltv.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SmileBright Dental (GENERAL)",
    briefingSummary: "Lead Orthodontist Dr. Sarah Jenkins is asking: \"Our paid CAC is $90, but 65% of subscription customers cancel in month 2. How do we fix unit economics?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our paid CAC is $90, but 65% of subscription customers cancel in month 2. How do we fix unit economics?",
    brokenKPIs: [
      {
        metric: "Post-Purchase Churn Destroying 12-Month LTV",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Dr. Sarah Jenkins",
      title: "Lead Orthodontist",
      organization: "SmileBright Dental",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Dr., bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "payment-gateway-blackout",
    title: "Module 147: Payment Gateway Outage During Flash Sale",
    subtitle: "Executive situational roleplay on payment gateway outage during flash sale.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FinTech Velocity (GENERAL)",
    briefingSummary: "Chief Financial Officer CFO Marcus Reed is asking: \"Stripe went down for 4 hours while we were spending $1,500/hour on flash sale ads. What is our emergency SOP?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Stripe went down for 4 hours while we were spending $1,500/hour on flash sale ads. What is our emergency SOP?",
    brokenKPIs: [
      {
        metric: "Payment Gateway Outage During Flash Sale",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CFO Marcus Reed",
      title: "Chief Financial Officer",
      organization: "FinTech Velocity",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CFO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "fx-currency-volatility",
    title: "Module 148: Foreign Exchange Currency Swings Impacting Global ROAS",
    subtitle: "Executive situational roleplay on foreign exchange currency swings impacting global roas.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Miller Law Group (GENERAL)",
    briefingSummary: "Managing Partner David Miller is asking: \"Currency devaluation in Europe compressed our EUR profit margins by 18%. How do we adjust international bids?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Currency devaluation in Europe compressed our EUR profit margins by 18%. How do we adjust international bids?",
    brokenKPIs: [
      {
        metric: "Foreign Exchange Currency Swings Impacting Global ROAS",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "David Miller",
      title: "Managing Partner",
      organization: "Miller Law Group",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "David, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "algorithm-re-learning-mitigation",
    title: "Module 149: Preventing Algorithmic Re-Learning Shockwaves",
    subtitle: "Executive situational roleplay on preventing algorithmic re-learning shockwaves.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Peak Gear Outfitters (GENERAL)",
    briefingSummary: "E-Commerce VP Jason Reed is asking: \"How do we make major campaign adjustments without triggering the dreaded 50-conversion learning reset?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we make major campaign adjustments without triggering the dreaded 50-conversion learning reset?",
    brokenKPIs: [
      {
        metric: "Preventing Algorithmic Re-Learning Shockwaves",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Jason Reed",
      title: "E-Commerce VP",
      organization: "Peak Gear Outfitters",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Jason, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "100k-monthly-ceiling",
    title: "Module 150: Breaking Through the $100k/Month Growth Ceiling",
    subtitle: "Executive situational roleplay on breaking through the $100k/month growth ceiling.",
    category: "general",
    difficulty: "advanced",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "HealthCore Global (GENERAL)",
    briefingSummary: "VP of Performance Marketing Director Sarah Lin is asking: \"Our agency has hit a plateau at $100k/month spend across Google and Meta. What does the blueprint to $500k look like?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our agency has hit a plateau at $100k/month spend across Google and Meta. What does the blueprint to $500k look like?",
    brokenKPIs: [
      {
        metric: "Breaking Through the $100k/Month Growth Ceiling",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Director Sarah Lin",
      title: "VP of Performance Marketing",
      organization: "HealthCore Global",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Director, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "procurement-retainer-cut-ai",
    title: "Module 151: Procurement Demands 50% Cut Because \"AI Does Ads\"",
    subtitle: "Executive situational roleplay on procurement demands 50% cut because \"ai does ads\".",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GENERAL)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"Procurement Director: \"Meta and Google have Advantage+ and PMax AI now. Why should we pay your agency a full retainer?\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Procurement Director: \"Meta and Google have Advantage+ and PMax AI now. Why should we pay your agency a full retainer?\"",
    brokenKPIs: [
      {
        metric: "Procurement Demands 50% Cut Because \"AI Does Ads\"",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "defending-10m-pe-board",
    title: "Module 152: Defending the $10M Annual Growth Plan to Private Equity",
    subtitle: "Executive situational roleplay on defending the $10m annual growth plan to private equity.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GENERAL)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"PE Operating Partner: \"Cut your ad spend by $3M to boost EBITDA for exit. Prove to me this won't kill enterprise valuation.\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "PE Operating Partner: \"Cut your ad spend by $3M to boost EBITDA for exit. Prove to me this won't kill enterprise valuation.\"",
    brokenKPIs: [
      {
        metric: "Defending the $10M Annual Growth Plan to Private Equity",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "mmm-vs-mta-reconciliation",
    title: "Module 153: Reconciling Marketing Mix Modeling (MMM) with Platform Data",
    subtitle: "Executive situational roleplay on reconciling marketing mix modeling (mmm) with platform data.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GENERAL)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"How do we present a unified board report when Robyn/Meridian MMM models disagree with platform attribution?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do we present a unified board report when Robyn/Meridian MMM models disagree with platform attribution?",
    brokenKPIs: [
      {
        metric: "Reconciling Marketing Mix Modeling (MMM) with Platform Data",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "shifting-budget-to-organic-myth",
    title: "Module 154: Debunking the \"Let's Just Go Viral Organically\" Fantasy",
    subtitle: "Executive situational roleplay on debunking the \"let's just go viral organically\" fantasy.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GENERAL)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"Board Member: \"TikTok organic is free. Let's cut all paid advertising and hire 5 Gen Z influencers to make viral videos.\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Board Member: \"TikTok organic is free. Let's cut all paid advertising and hire 5 Gen Z influencers to make viral videos.\"",
    brokenKPIs: [
      {
        metric: "Debunking the \"Let's Just Go Viral Organically\" Fantasy",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "killing-ceo-pet-project",
    title: "Module 155: Killing the CEO's Multi-Million Dollar Pet Project Campaign",
    subtitle: "Executive situational roleplay on killing the ceo's multi-million dollar pet project campaign.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (GENERAL)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"The CEO has spent $400,000 on a pet branding campaign with zero sales. How do you tactfully convince him to kill it?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The CEO has spent $400,000 on a pet branding campaign with zero sales. How do you tactfully convince him to kill it?",
    brokenKPIs: [
      {
        metric: "Killing the CEO's Multi-Million Dollar Pet Project Campaign",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "cmo-turnover-retainer-review",
    title: "Module 156: Surviving CMO Turnover & New Agency Review",
    subtitle: "Executive situational roleplay on surviving cmo turnover & new agency review.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GENERAL)",
    briefingSummary: "Founder Chloe Bennett is asking: \"A new CMO was appointed who brought their old agency contacts. How do you win the 30-day performance audit?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "A new CMO was appointed who brought their old agency contacts. How do you win the 30-day performance audit?",
    brokenKPIs: [
      {
        metric: "Surviving CMO Turnover & New Agency Review",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "performance-fee-restructuring",
    title: "Module 157: Restructuring Agency Compensation to Performance Hybrid",
    subtitle: "Executive situational roleplay on restructuring agency compensation to performance hybrid.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GENERAL)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"How do you structure a base + % of incremental Net Revenue retainer that aligns incentives and protects agency margin?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do you structure a base + % of incremental Net Revenue retainer that aligns incentives and protects agency margin?",
    brokenKPIs: [
      {
        metric: "Restructuring Agency Compensation to Performance Hybrid",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "aligning-cac-with-ebitda",
    title: "Module 158: Aligning Blended Marketing CAC with 18-Month EBITDA Targets",
    subtitle: "Executive situational roleplay on aligning blended marketing cac with 18-month ebitda targets.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GENERAL)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"How do performance leads collaborate with the CFO to map customer payback curves against corporate cash runways?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do performance leads collaborate with the CFO to map customer payback curves against corporate cash runways?",
    brokenKPIs: [
      {
        metric: "Aligning Blended Marketing CAC with 18-Month EBITDA Targets",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "post-merger-brand-consolidation",
    title: "Module 159: Omnichannel Strategy for Post-Merger Brand Consolidation",
    subtitle: "Executive situational roleplay on omnichannel strategy for post-merger brand consolidation.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GENERAL)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"Our client acquired two competitor brands. How do we consolidate three Google and Meta ad accounts without losing rank?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our client acquired two competitor brands. How do we consolidate three Google and Meta ad accounts without losing rank?",
    brokenKPIs: [
      {
        metric: "Omnichannel Strategy for Post-Merger Brand Consolidation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "brand-equity-vs-direct-response",
    title: "Module 160: Defending Brand Equity Media Against Direct-Response Purists",
    subtitle: "Executive situational roleplay on defending brand equity media against direct-response purists.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GENERAL)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"How do you scientifically prove to a skeptical CFO that top-of-funnel brand campaigns lower bottom-of-funnel Search CPCs?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do you scientifically prove to a skeptical CFO that top-of-funnel brand campaigns lower bottom-of-funnel Search CPCs?",
    brokenKPIs: [
      {
        metric: "Defending Brand Equity Media Against Direct-Response Purists",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "calibrated-chris-voss-crisis",
    title: "Module 161: The 60-Second Chris Voss Crisis De-escalation",
    subtitle: "Executive situational roleplay on the 60-second chris voss crisis de-escalation.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GENERAL)",
    briefingSummary: "Founder Chloe Bennett is asking: \"Furious Enterprise CEO: \"You burned $50k this week and ruined our quarter. Give me one reason not to terminate you right now!\"\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Furious Enterprise CEO: \"You burned $50k this week and ruined our quarter. Give me one reason not to terminate you right now!\"",
    brokenKPIs: [
      {
        metric: "The 60-Second Chris Voss Crisis De-escalation",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "takeover-audit-wasted-spend",
    title: "Module 162: Account Takeover Audit: Uncovering $250k in Wasted Spend",
    subtitle: "Executive situational roleplay on account takeover audit: uncovering $250k in wasted spend.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GENERAL)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"How do you present an executive audit to a new client showing their previous agency wasted a quarter-million dollars?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do you present an executive audit to a new client showing their previous agency wasted a quarter-million dollars?",
    brokenKPIs: [
      {
        metric: "Account Takeover Audit",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "pitching-full-funnel-board",
    title: "Module 163: Pitching Full-Funnel Media to an Ultra-Conservative Board",
    subtitle: "Executive situational roleplay on pitching full-funnel media to an ultra-conservative board.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GENERAL)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"How do you convince an 80-year-old manufacturing board to invest $2M in LinkedIn Thought Leader and YouTube ads?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do you convince an 80-year-old manufacturing board to invest $2M in LinkedIn Thought Leader and YouTube ads?",
    brokenKPIs: [
      {
        metric: "Pitching Full-Funnel Media to an Ultra-Conservative Board",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "catastrophic-platform-outage",
    title: "Module 164: Crisis Management During a Global Meta/Google Ad Outage",
    subtitle: "Executive situational roleplay on crisis management during a global meta/google ad outage.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SoleRevival Sneakers (GENERAL)",
    briefingSummary: "Marketplace Director Carlos Gomez is asking: \"Meta Ads Manager went completely dark for 14 hours during Cyber Monday. How do you lead client communication?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Meta Ads Manager went completely dark for 14 hours during Cyber Monday. How do you lead client communication?",
    brokenKPIs: [
      {
        metric: "Crisis Management During a Global Meta/Google Ad Outage",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Carlos Gomez",
      title: "Marketplace Director",
      organization: "SoleRevival Sneakers",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Carlos, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "vp-sales-attribution-war",
    title: "Module 165: Ending the Civil War Between VP of Sales and Marketing",
    subtitle: "Executive situational roleplay on ending the civil war between vp of sales and marketing.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "SaaSFlow Enterprise (GENERAL)",
    briefingSummary: "Chief Marketing Officer CMO Alex Vance is asking: \"VP of Sales claims marketing leads are worthless junk; Marketing claims Sales can't close. How do you arbitrate?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "VP of Sales claims marketing leads are worthless junk; Marketing claims Sales can't close. How do you arbitrate?",
    brokenKPIs: [
      {
        metric: "Ending the Civil War Between VP of Sales and Marketing",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "CMO Alex Vance",
      title: "Chief Marketing Officer",
      organization: "SaaSFlow Enterprise",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "CMO, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "reversing-pause-all-decision",
    title: "Module 166: Reversing a Panicked Executive Decision to Pause Spend",
    subtitle: "Executive situational roleplay on reversing a panicked executive decision to pause spend.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "LuxeLiving D2C (GENERAL)",
    briefingSummary: "VP of Growth Rachel Green is asking: \"The CEO panicked and paused all campaigns at midnight. How do you convince them to resume before learning phase resets?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The CEO panicked and paused all campaigns at midnight. How do you convince them to resume before learning phase resets?",
    brokenKPIs: [
      {
        metric: "Reversing a Panicked Executive Decision to Pause Spend",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Rachel Green",
      title: "VP of Growth",
      organization: "LuxeLiving D2C",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Rachel, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "emergency-retainer-negotiation",
    title: "Module 167: Negotiating an Emergency Crisis Management Surcharge",
    subtitle: "Executive situational roleplay on negotiating an emergency crisis management surcharge.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Nordic Wool Apparel (GENERAL)",
    briefingSummary: "CEO & Co-Founder Elena Rostova is asking: \"The client demands 24/7 war room coverage after a viral PR nightmare. How do you negotiate a $25k emergency scope expansion?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The client demands 24/7 war room coverage after a viral PR nightmare. How do you negotiate a $25k emergency scope expansion?",
    brokenKPIs: [
      {
        metric: "Negotiating an Emergency Crisis Management Surcharge",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Elena Rostova",
      title: "CEO & Co-Founder",
      organization: "Nordic Wool Apparel",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Elena, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "competitor-click-bombing-defense",
    title: "Module 168: Exposing & Mitigating Competitor Click-Bombing Attacks",
    subtitle: "Executive situational roleplay on exposing & mitigating competitor click-bombing attacks.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "GlowSkin Organics (GENERAL)",
    briefingSummary: "Founder Chloe Bennett is asking: \"A malicious competitor set up bot farms to drain your $500/day Search budget. How do you prove it and secure Google credits?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "A malicious competitor set up bot farms to drain your $500/day Search budget. How do you prove it and secure Google credits?",
    brokenKPIs: [
      {
        metric: "Exposing & Mitigating Competitor Click-Bombing Attacks",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Chloe Bennett",
      title: "Founder",
      organization: "GlowSkin Organics",
      temperament: "inquisitive-founder",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Chloe, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "enterprise-clean-room-pitch",
    title: "Module 169: Presenting Clean Room Data Architecture to InfoSec",
    subtitle: "Executive situational roleplay on presenting clean room data architecture to infosec.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "Zest Energy Drinks (GENERAL)",
    briefingSummary: "Social Media Director Maya Lin is asking: \"How do you convince an enterprise Chief Information Security Officer to approve First-Party Data Clean Room matching?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "How do you convince an enterprise Chief Information Security Officer to approve First-Party Data Clean Room matching?",
    brokenKPIs: [
      {
        metric: "Presenting Clean Room Data Architecture to InfoSec",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Social Media Director",
      organization: "Zest Energy Drinks",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Maya, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "final-exam-retainer-defense",
    title: "Module 170: Final Masterclass: Retaining the $50k/Month Enterprise Account",
    subtitle: "Executive situational roleplay on final masterclass: retaining the $50k/month enterprise account.",
    category: "general",
    difficulty: "legend",
    urgencyTimeline: "Client meeting in 10 minutes",
    clientEnvironment: "FreshBlink Groceries (GENERAL)",
    briefingSummary: "Quick Commerce Lead Arjun Mehta is asking: \"The board is in the room. They have an RFP on the table from a rival agency. Deliver the definitive BLUF defense of your tenure.\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "The board is in the room. They have an RFP on the table from a rival agency. Deliver the definitive BLUF defense of your tenure.",
    brokenKPIs: [
      {
        metric: "Final Masterclass",
        previousValue: "$42.00",
        currentValue: "$68.00",
        deltaPercent: "+61.9%",
        isNegative: true,
        benchmark: "$40.00",
        rootCauseClues: [
          "Auction dynamic shifted across recent delivery window",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arjun Mehta",
      title: "Quick Commerce Lead",
      organization: "FreshBlink Groceries",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency",
        "Understanding performance metrics without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Client lacks metric context or benchmark clarity",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming the ad network without proof",
      "Using confusing jargon to obscure the situation",
      "Dismissing the client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital.",
      rootCauseAnalysis: "The primary root cause is an alignment gap on platform delivery mechanics and industry benchmarks.",
      immediateMitigation: "Audit current ad set logs, reallocate budget to verified assets, and communicate the concrete 48-hour stabilization timeline.",
      recoveryPlan72h: "Deploy refreshed creative angles, monitor hourly delivery pacing, and deliver an executive BLUF update with verified ROAS impact.",
      fullVerbatimScript: "Arjun, bottom line up front: We isolated the root cause of this variance immediately. Delivery spend is quarantined, and our mitigation plan restores target performance benchmarks within 48 hours without risking additional marketing capital."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without marketing jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical real-world analogy (e.g. billboard vs storefront)",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  }
];

// TIER EXPORTS
export const BEGINNER_SCENARIOS: Scenario[] = ALL_170_SCENARIOS.filter(s => s.difficulty === 'beginner');
export const INTERMEDIATE_SCENARIOS: Scenario[] = ALL_170_SCENARIOS.filter(s => s.difficulty === 'intermediate');
export const ADVANCED_SCENARIOS: Scenario[] = ALL_170_SCENARIOS.filter(s => s.difficulty === 'advanced');
export const LEGEND_SCENARIOS: Scenario[] = ALL_170_SCENARIOS.filter(s => s.difficulty === 'legend');

export const ALL_MARKETING_SCENARIOS: Scenario[] = ALL_170_SCENARIOS;
