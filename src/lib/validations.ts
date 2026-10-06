import { z } from 'zod';

export const DialogueTurnSchema = z.object({
  id: z.string(),
  speaker: z.enum(['client', 'user']),
  text: z.string().min(1).max(3000),
  timestamp: z.number(),
  sentiment: z.enum(['confrontational', 'skeptical', 'reassured', 'neutral']).optional(),
  flaggedPhrases: z.array(z.string()).optional(),
});

export const RoleplayChatRequestSchema = z.object({
  scenarioId: z.string(),
  userMessage: z.string().min(1).max(3000),
  history: z.array(DialogueTurnSchema),
  currentTurn: z.number().int().min(1).max(10),
  apiKey: z.string().optional(),
});

export const EvaluateSessionRequestSchema = z.object({
  scenarioId: z.string(),
  dialogueHistory: z.array(DialogueTurnSchema).min(1),
  userTotalTurns: z.number().int().min(1).optional().default(1),
  apiKey: z.string().optional(),
});

export const DrillSubmissionSchema = z.object({
  scenarioId: z.string(),
  pillar: z.enum(['marketingLogic', 'terminologyAccuracy', 'grammarRegister', 'executivePresence']),
  prompt: z.string().min(5),
  userResponse: z.string().min(2).max(2000),
});

export const SyncFeedQuerySchema = z.object({
  forceRefresh: z.boolean().optional().default(false),
  category: z.string().optional(),
});
