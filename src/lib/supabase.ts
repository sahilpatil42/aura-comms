import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yoipgjhiprbbuifbncyp.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaXBnamhpcHJiYnVpZmJuY3lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMzg1ODIsImV4cCI6MjEwNjcxNDU4Mn0._srXKqybIz3UosKTILeUy9eaXpOv-eKwkZqvJZfY0HM';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-supabase-url')
);

// Fallback-safe Supabase client for client-side queries
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Server-side service client for administrative routes
export function getServiceSupabase() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return null;
  return createClient(supabaseUrl, serviceKey);
}

/**
 * Save completed roleplay session to Supabase
 */
export async function saveRoleplaySession(data: {
  scenarioId: string;
  userPhrasing: string;
  goldStandardBenchmark: string;
  scores: Record<string, any>;
  clientReaction?: string;
  sentiment?: string;
  dialogueHistory?: any[];
}) {
  if (!supabase) return null;
  try {
    const { data: record, error } = await supabase
      .from('roleplay_sessions')
      .insert({
        user_id: 'default_user',
        scenario_id: data.scenarioId,
        user_phrasing: data.userPhrasing,
        gold_standard_benchmark: data.goldStandardBenchmark,
        scores: data.scores,
        client_reaction: data.clientReaction,
        sentiment: data.sentiment,
        dialogue_history: data.dialogueHistory || [],
      })
      .select()
      .single();

    if (error) {
      console.warn('Supabase saveRoleplaySession notice:', error.message);
      return null;
    }
    return record;
  } catch (err) {
    console.warn('Supabase session write notice:', err);
    return null;
  }
}

/**
 * Save user node completion & stars to Supabase
 */
export async function recordNodeCompletion(nodeId: string, scenarioId: string, stars = 3, score = 95.0) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: 'default_user',
        node_id: nodeId,
        scenario_id: scenarioId,
        stars,
        score,
        completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,node_id' })
      .select();

    return data;
  } catch (e) {
    return null;
  }
}

/**
 * Sync Gamification Profile (streak, gems, hearts, total_xp) to Supabase
 */
export async function syncGamificationProfile(stats: {
  streak?: number;
  gems?: number;
  hearts?: number;
  totalXp?: number;
  league?: string;
  leagueRank?: number;
}) {
  if (!supabase) return null;
  try {
    const updateData: any = { updated_at: new Date().toISOString() };
    if (stats.streak !== undefined) updateData.streak = stats.streak;
    if (stats.gems !== undefined) updateData.gems = stats.gems;
    if (stats.hearts !== undefined) updateData.hearts = stats.hearts;
    if (stats.totalXp !== undefined) updateData.total_xp = stats.totalXp;
    if (stats.league !== undefined) updateData.league = stats.league;
    if (stats.leagueRank !== undefined) updateData.league_rank = stats.leagueRank;

    const { data, error } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', 'default_user')
      .select();

    return data;
  } catch (e) {
    return null;
  }
}
