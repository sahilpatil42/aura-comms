// ============================================================================
// REDDIT ADS SCENARIO REPOSITORY (50+ LESSONS)
// Progressive Duolingo Curriculum across Beginner, Intermediate, Advanced & Legend
// ============================================================================

import { Scenario } from '@/types/scenario';

export const REDDIT_ADS_SCENARIOS: Scenario[] = [
  {
    id: "reddit-ads-m1-conversation-placement-comments",
    title: "Module 1: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m2-conversation-placement-comments",
    title: "Module 2: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m3-conversation-placement-comments",
    title: "Module 3: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m4-conversation-placement-comments",
    title: "Module 4: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m5-conversation-placement-comments",
    title: "Module 5: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m6-conversation-placement-comments",
    title: "Module 6: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m7-conversation-placement-comments",
    title: "Module 7: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m8-conversation-placement-comments",
    title: "Module 8: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m9-conversation-placement-comments",
    title: "Module 9: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m10-conversation-placement-comments",
    title: "Module 10: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m11-conversation-placement-comments",
    title: "Module 11: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m12-conversation-placement-comments",
    title: "Module 12: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m13-conversation-placement-comments",
    title: "Module 13: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m14-conversation-placement-comments",
    title: "Module 14: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m15-conversation-placement-comments",
    title: "Module 15: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m16-conversation-placement-comments",
    title: "Module 16: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m17-conversation-placement-comments",
    title: "Module 17: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m18-conversation-placement-comments",
    title: "Module 18: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "beginner",
    urgencyTimeline: "Morning Slack check-in",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m19-conversation-placement-comments",
    title: "Module 19: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m20-conversation-placement-comments",
    title: "Module 20: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m21-conversation-placement-comments",
    title: "Module 21: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m22-conversation-placement-comments",
    title: "Module 22: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m23-conversation-placement-comments",
    title: "Module 23: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m24-conversation-placement-comments",
    title: "Module 24: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m25-conversation-placement-comments",
    title: "Module 25: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m26-conversation-placement-comments",
    title: "Module 26: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m27-conversation-placement-comments",
    title: "Module 27: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m28-conversation-placement-comments",
    title: "Module 28: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "intermediate",
    urgencyTimeline: "Weekly performance sync in 30 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m29-conversation-placement-comments",
    title: "Module 29: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m30-conversation-placement-comments",
    title: "Module 30: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m31-conversation-placement-comments",
    title: "Module 31: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m32-conversation-placement-comments",
    title: "Module 32: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m33-conversation-placement-comments",
    title: "Module 33: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m34-conversation-placement-comments",
    title: "Module 34: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m35-conversation-placement-comments",
    title: "Module 35: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m36-conversation-placement-comments",
    title: "Module 36: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m37-conversation-placement-comments",
    title: "Module 37: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m38-conversation-placement-comments",
    title: "Module 38: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "advanced",
    urgencyTimeline: "Urgent CFO call in 15 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m39-conversation-placement-comments",
    title: "Module 39: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m40-conversation-placement-comments",
    title: "Module 40: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m41-conversation-placement-comments",
    title: "Module 41: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m42-conversation-placement-comments",
    title: "Module 42: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m43-conversation-placement-comments",
    title: "Module 43: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m44-conversation-placement-comments",
    title: "Module 44: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m45-conversation-placement-comments",
    title: "Module 45: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m46-conversation-placement-comments",
    title: "Module 46: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m47-conversation-placement-comments",
    title: "Module 47: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m48-conversation-placement-comments",
    title: "Module 48: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m49-conversation-placement-comments",
    title: "Module 49: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m50-conversation-placement-comments",
    title: "Module 50: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m51-conversation-placement-comments",
    title: "Module 51: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "DevFlow IDE (REDDIT ADS)",
    briefingSummary: "Founder & CTO Devon Miller is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Devon Miller",
      title: "Founder & CTO",
      organization: "DevFlow IDE",
      temperament: "analytical-vp",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
    id: "reddit-ads-m52-conversation-placement-comments",
    title: "Module 52: Reddit Conversation Placement & Community Moderation",
    subtitle: "Place ads inside active subreddit debates without getting downvoted into oblivion.",
    category: "reddit-ads",
    difficulty: "legend",
    urgencyTimeline: "Board of Directors meeting in 20 minutes",
    clientEnvironment: "RetroTech Hardware (REDDIT ADS)",
    briefingSummary: "Community Marketing Lead Maya Lin is asking: \"People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?\". Provide an authoritative, empathetic BLUF explanation.",
    initialClientDialogue: "People are leaving snarky comments on our Reddit ad! Should we turn off comments, or will that make redditors hate us even more?",
    brokenKPIs: [
      {
        metric: "Upvote Ratio",
        previousValue: "32%",
        currentValue: "84%",
        deltaPercent: "+162.5%",
        isNegative: true,
        benchmark: "75%",
        rootCauseClues: [
          "Reddit Ads auction dynamics and algorithm pacing",
          "Client requires plain-English explanation without buzzwords",
          "Stabilization plan must be communicated within first 30 seconds"
        ]
      }
    ],
    stakeholder: {
      name: "Maya Lin",
      title: "Community Marketing Lead",
      organization: "RetroTech Hardware",
      temperament: "concerned-owner",
      keyConcerns: [
        "Marketing budget efficiency on Reddit Ads",
        "Understanding Upvote Ratio fluctuation without confusion",
        "Immediate reassurance on 48-hour recovery actions"
      ],
      triggerPhrases: [
        "algorithm is learning",
        "give it a few weeks",
        "it is not our fault"
      ]
    },
    targetRootCauses: [
      "Traditional corporate ad copy triggering Reddit community anti-marketing radar.",
      "Need to de-escalate anxiety and anchor on real business outcomes",
      "Provide concrete next steps and stabilization timeline"
    ],
    prohibitedExcuses: [
      "Blaming Reddit Ads platform without data",
      "Using confusing technical jargon to obscure the situation",
      "Dismissing client concerns"
    ],
    modelAnswerBLUF: {
      bluf: "Devon, turning off comments signals to Reddit that you are hiding something. Instead, our community lead jumped in with a transparent, self-deprecating comment addressing technical questions directly. That pinned comment turned the thread around, lifting our upvote ratio to 84% and driving 180 developer signups.",
      rootCauseAnalysis: "Primary root cause: Traditional corporate ad copy triggering Reddit community anti-marketing radar..",
      immediateMitigation: "Isolate underperforming ad assets, adjust bids by 15%, and reallocate budget to proven winners.",
      recoveryPlan72h: "Deploy refreshed creatives/keywords, monitor hourly pacing, and provide written KPI recovery update.",
      fullVerbatimScript: "Devon, bottom line up front: Reddit respects authentic transparency. We addressed user comments directly with technical facts, turning skeptical users into brand advocates."
    },
    sampleDrillDowns: [
      {
        weakestPillar: "executivePresence",
        prompt: "The client interrupts: \"Can you give me that in plain English without Reddit Ads technical jargon?\"",
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
