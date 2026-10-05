// ============================================================================
// LINKEDIN ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const LINKEDIN_ADS_SCENARIOS: Scenario[] = [
  {
    id: "linkedin-ads-m1-high-cpm-abm-defense",
    title: "Module 1: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m2-lead-gen-form-conversion",
    title: "Module 2: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m3-high-cpm-abm-defense",
    title: "Module 3: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m4-lead-gen-form-conversion",
    title: "Module 4: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m5-high-cpm-abm-defense",
    title: "Module 5: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m6-lead-gen-form-conversion",
    title: "Module 6: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m7-high-cpm-abm-defense",
    title: "Module 7: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m8-lead-gen-form-conversion",
    title: "Module 8: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m9-high-cpm-abm-defense",
    title: "Module 9: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m10-lead-gen-form-conversion",
    title: "Module 10: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m11-high-cpm-abm-defense",
    title: "Module 11: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m12-lead-gen-form-conversion",
    title: "Module 12: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m13-high-cpm-abm-defense",
    title: "Module 13: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m14-lead-gen-form-conversion",
    title: "Module 14: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m15-high-cpm-abm-defense",
    title: "Module 15: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m16-lead-gen-form-conversion",
    title: "Module 16: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m17-high-cpm-abm-defense",
    title: "Module 17: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m18-lead-gen-form-conversion",
    title: "Module 18: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m19-high-cpm-abm-defense",
    title: "Module 19: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m20-lead-gen-form-conversion",
    title: "Module 20: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m21-high-cpm-abm-defense",
    title: "Module 21: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m22-lead-gen-form-conversion",
    title: "Module 22: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m23-high-cpm-abm-defense",
    title: "Module 23: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m24-lead-gen-form-conversion",
    title: "Module 24: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m25-high-cpm-abm-defense",
    title: "Module 25: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m26-lead-gen-form-conversion",
    title: "Module 26: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m27-high-cpm-abm-defense",
    title: "Module 27: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m28-lead-gen-form-conversion",
    title: "Module 28: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m29-high-cpm-abm-defense",
    title: "Module 29: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m30-lead-gen-form-conversion",
    title: "Module 30: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m31-high-cpm-abm-defense",
    title: "Module 31: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m32-lead-gen-form-conversion",
    title: "Module 32: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m33-high-cpm-abm-defense",
    title: "Module 33: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m34-lead-gen-form-conversion",
    title: "Module 34: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m35-high-cpm-abm-defense",
    title: "Module 35: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m36-lead-gen-form-conversion",
    title: "Module 36: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m37-high-cpm-abm-defense",
    title: "Module 37: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m38-lead-gen-form-conversion",
    title: "Module 38: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m39-high-cpm-abm-defense",
    title: "Module 39: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m40-lead-gen-form-conversion",
    title: "Module 40: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m41-high-cpm-abm-defense",
    title: "Module 41: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m42-lead-gen-form-conversion",
    title: "Module 42: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m43-high-cpm-abm-defense",
    title: "Module 43: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m44-lead-gen-form-conversion",
    title: "Module 44: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m45-high-cpm-abm-defense",
    title: "Module 45: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m46-lead-gen-form-conversion",
    title: "Module 46: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m47-high-cpm-abm-defense",
    title: "Module 47: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m48-lead-gen-form-conversion",
    title: "Module 48: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m49-high-cpm-abm-defense",
    title: "Module 49: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m50-lead-gen-form-conversion",
    title: "Module 50: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "FinTech Core (LINKEDIN ADS)",
    briefingSummary: "Chief Marketing Officer Diana Prince is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Diana Prince",
      title: "Chief Marketing Officer",
      organization: "FinTech Core",
      temperament: "frustrated-cfo",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m51-high-cpm-abm-defense",
    title: "Module 51: Defending $85 LinkedIn CPMs to the CFO",
    subtitle: "Explain why high LinkedIn CPMs yield lower Customer Acquisition Cost than cheap display.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "SaaSFlow Solutions (LINKEDIN ADS)",
    briefingSummary: "Managing Director Siddharth Rao is asking: \"Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "Our LinkedIn CPM is $88! On Facebook we pay $18. Why on earth are we throwing company money away on LinkedIn?!",
    brokenKPIs: [
      {
        metric: "Cost Per Mille (CPM)",
        previousValue: "$45.00",
        currentValue: "$88.00",
        deltaPercent: "+95.6%",
        isNegative: true,
        benchmark: "$70.00",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Siddharth Rao",
      title: "Managing Director",
      organization: "SaaSFlow Solutions",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Cost Per Mille (CPM) fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Misunderstanding CPM efficiency vs downstream qualified pipeline value.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Diana, on Facebook 80% of impressions hit unqualified consumers. On LinkedIn, our $88 CPM targets only verified VPs of Engineering at Fortune 500 accounts on our target list. Our Cost Per Qualified Pipeline Opportunity is $420 on LinkedIn versus $1,200 on cheap social channels.",
      rootCauseAnalysis: "Primary root cause: Misunderstanding CPM efficiency vs downstream qualified pipeline value..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Diana, bottom line up front: LinkedIn CPM is higher because it has zero bot traffic and reaches verified enterprise buying committees. Our cost per closed enterprise deal is 40% lower here."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
    id: "linkedin-ads-m52-lead-gen-form-conversion",
    title: "Module 52: Native Lead Gen Forms vs Landing Page Drop-off",
    subtitle: "Prevent 85% mobile drop-off by deploying pre-filled LinkedIn Lead Gen Forms.",
    category: "linkedin-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "CyberShield Enterprise (LINKEDIN ADS)",
    briefingSummary: "VP of Demand Generation Arthur Pendelton is asking: \"We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "We switched from sending clicks to our website to native LinkedIn Lead Gen forms. Are these leads actually real, or just accidental clicks?",
    brokenKPIs: [
      {
        metric: "Form Submission Rate",
        previousValue: "2.1%",
        currentValue: "13.4%",
        deltaPercent: "+538.1%",
        isNegative: true,
        benchmark: "10.0%",
        rootCauseClues: [
          "LinkedIn Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Arthur Pendelton",
      title: "VP of Demand Generation",
      organization: "CyberShield Enterprise",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on LinkedIn Ads",
        "Understanding Form Submission Rate fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Mobile landing page friction solved via pre-filled native forms with qualification gates.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming LinkedIn Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Arthur, native forms pre-populate verified business email and job titles directly from the member profile, eliminating mobile typing friction. To ensure high lead quality, we added a custom qualification question: \"What is your current annual cloud spend?\". All leads passing this threshold are verified buying authorities.",
      rootCauseAnalysis: "Primary root cause: Mobile landing page friction solved via pre-filled native forms with qualification gates..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Arthur, native forms remove mobile friction while our custom qualification question filters out low-intent signups. Sales has already accepted 82% of these leads into active pipeline."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without LinkedIn Ads technical jargon?\"",
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
