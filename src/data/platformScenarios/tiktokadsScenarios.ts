// ============================================================================
// TIKTOK ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const TIKTOK_ADS_SCENARIOS: Scenario[] = [
  {
    id: "tiktok-ads-m1-spark-ads-authorization",
    title: "Module 1: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m2-creative-fatigue-7day",
    title: "Module 2: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m3-tiktok-shop-affiliate-gmv",
    title: "Module 3: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m4-spark-ads-authorization",
    title: "Module 4: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m5-creative-fatigue-7day",
    title: "Module 5: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m6-tiktok-shop-affiliate-gmv",
    title: "Module 6: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m7-spark-ads-authorization",
    title: "Module 7: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m8-creative-fatigue-7day",
    title: "Module 8: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m9-tiktok-shop-affiliate-gmv",
    title: "Module 9: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m10-spark-ads-authorization",
    title: "Module 10: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m11-creative-fatigue-7day",
    title: "Module 11: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m12-tiktok-shop-affiliate-gmv",
    title: "Module 12: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m13-spark-ads-authorization",
    title: "Module 13: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m14-creative-fatigue-7day",
    title: "Module 14: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m15-tiktok-shop-affiliate-gmv",
    title: "Module 15: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m16-spark-ads-authorization",
    title: "Module 16: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m17-creative-fatigue-7day",
    title: "Module 17: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m18-tiktok-shop-affiliate-gmv",
    title: "Module 18: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m19-spark-ads-authorization",
    title: "Module 19: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m20-creative-fatigue-7day",
    title: "Module 20: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m21-tiktok-shop-affiliate-gmv",
    title: "Module 21: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m22-spark-ads-authorization",
    title: "Module 22: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m23-creative-fatigue-7day",
    title: "Module 23: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m24-tiktok-shop-affiliate-gmv",
    title: "Module 24: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m25-spark-ads-authorization",
    title: "Module 25: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m26-creative-fatigue-7day",
    title: "Module 26: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m27-tiktok-shop-affiliate-gmv",
    title: "Module 27: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m28-spark-ads-authorization",
    title: "Module 28: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m29-creative-fatigue-7day",
    title: "Module 29: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m30-tiktok-shop-affiliate-gmv",
    title: "Module 30: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m31-spark-ads-authorization",
    title: "Module 31: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m32-creative-fatigue-7day",
    title: "Module 32: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m33-tiktok-shop-affiliate-gmv",
    title: "Module 33: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m34-spark-ads-authorization",
    title: "Module 34: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m35-creative-fatigue-7day",
    title: "Module 35: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m36-tiktok-shop-affiliate-gmv",
    title: "Module 36: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m37-spark-ads-authorization",
    title: "Module 37: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m38-creative-fatigue-7day",
    title: "Module 38: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m39-tiktok-shop-affiliate-gmv",
    title: "Module 39: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m40-spark-ads-authorization",
    title: "Module 40: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m41-creative-fatigue-7day",
    title: "Module 41: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m42-tiktok-shop-affiliate-gmv",
    title: "Module 42: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m43-spark-ads-authorization",
    title: "Module 43: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m44-creative-fatigue-7day",
    title: "Module 44: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m45-tiktok-shop-affiliate-gmv",
    title: "Module 45: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m46-spark-ads-authorization",
    title: "Module 46: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m47-creative-fatigue-7day",
    title: "Module 47: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m48-tiktok-shop-affiliate-gmv",
    title: "Module 48: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m49-spark-ads-authorization",
    title: "Module 49: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m50-creative-fatigue-7day",
    title: "Module 50: The 7-Day TikTok Creative Fatigue Cycle",
    subtitle: "Manage client expectations on why TikTok ads burn out 3x faster than Facebook.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "HyperVolt Energy (TIKTOK ADS)",
    briefingSummary: "Head of Acquisition Zack Miller is asking: \"Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our winning TikTok ad performed amazingly for 8 days and then suddenly died! Why does TikTok kill our best ads so quickly?!",
    brokenKPIs: [
      {
        metric: "7-Day CPA Drift",
        previousValue: "$14.00",
        currentValue: "$31.00",
        deltaPercent: "+121.4%",
        isNegative: true,
        benchmark: "$16.00",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Zack Miller",
      title: "Head of Acquisition",
      organization: "HyperVolt Energy",
      temperament: "impatient-skeptic",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding 7-Day CPA Drift fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Rapid creative fatigue in high-velocity TikTok user feeds.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Zack, TikTok algorithm delivers high frequency rapidly to aggressive viewer feeds; an ad burns out in 7 to 10 days once audience saturation hits. We run a weekly creative drop model where 3 fresh hooks are tested every Tuesday, allowing us to swap the opener before performance drops.",
      rootCauseAnalysis: "Primary root cause: Rapid creative fatigue in high-velocity TikTok user feeds..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Zack, TikTok algorithmic cadence requires weekly creative rotation. We have already prepared 3 new hook iterations of the winning concept to sustain delivery without pause."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m51-tiktok-shop-affiliate-gmv",
    title: "Module 51: TikTok Shop Affiliate Sampling & GMV Lift",
    subtitle: "Coordinate creator sample seeding with paid TikTok Shop GMV ads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "UrbanThread Streetwear (TIKTOK ADS)",
    briefingSummary: "Founder Liam Chen is asking: \"We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We sent out 50 free product samples to TikTok creators and barely made 10 sales! How is TikTok Shop supposed to drive revenue?",
    brokenKPIs: [
      {
        metric: "TikTok Shop ROAS",
        previousValue: "4.2x",
        currentValue: "1.8x",
        deltaPercent: "-57.1%",
        isNegative: true,
        benchmark: "3.8x",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Liam Chen",
      title: "Founder",
      organization: "UrbanThread Streetwear",
      temperament: "aggressive-founder",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding TikTok Shop ROAS fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Organic seeding without paid media boost amplification.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Liam, sending passive samples without paid Spark amplification leaves discovery entirely to chance. We identified the top 3 creator videos that gained organic traction and boosted them with TikTok Shop Product Card ads, generating $14,000 GMV in 72 hours.",
      rootCauseAnalysis: "Primary root cause: Organic seeding without paid media boost amplification..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Liam, bottom line up front: Free samples need paid Spark boosting to scale. We backed the top 3 performing creator videos with targeted ad spend to unlock 4.2x ROAS."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
  {
    id: "tiktok-ads-m52-spark-ads-authorization",
    title: "Module 52: Spark Ads Creator Code Deployment",
    subtitle: "Explain why running Spark Ads beats standard in-feed non-spark uploads.",
    category: "tiktok-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "GlowBite Supplements (TIKTOK ADS)",
    briefingSummary: "Brand Director Kylie Thorne is asking: \"Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Why do we have to ask influencers for authorization codes? Can't we just download their video and post it from our own ad account?",
    brokenKPIs: [
      {
        metric: "Spark Ad Conversion Rate",
        previousValue: "3.8%",
        currentValue: "1.2%",
        deltaPercent: "-68.4%",
        isNegative: true,
        benchmark: "3.5%",
        rootCauseClues: [
          "TikTok Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Kylie Thorne",
      title: "Brand Director",
      organization: "GlowBite Supplements",
      temperament: "curious-client",
      keyConcerns: [
        "Marketing budget efficiency on TikTok Ads",
        "Understanding Spark Ad Conversion Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Re-uploading creator assets as non-spark dark posts inducing ad blindness.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming TikTok Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Kylie, downloading and re-uploading an influencer video strips away their native username, comments, and trust, which tanks conversion rates by over 60%. Using Spark Ads authorization codes keeps the video authentic to the creator profile, allowing users to follow and buy natively with full social proof.",
      rootCauseAnalysis: "Primary root cause: Re-uploading creator assets as non-spark dark posts inducing ad blindness..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Kylie, bottom line up front: Spark Ads leverage creator authenticity to deliver 40% lower CPAs than brand-uploaded re-posts. We have secured 30-day codes from our top 3 creators today."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without TikTok Ads technical jargon?\"",
        timeLimitSeconds: 45,
        idealPoints: [
          "State bottom-line revenue impact first",
          "Use physical retail analogy",
          "Provide clear reassurance on next steps"
        ]
      }
    ]
  },
];
