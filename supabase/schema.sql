-- ============================================================================
-- AURA-Comms Gamified Learning Platform - Supabase PostgreSQL Schema
-- ============================================================================

-- 1. Users Profile (Streak, Gems, Hearts, XP, League)
CREATE TABLE IF NOT EXISTS public.profiles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL DEFAULT 'Sahil M.',
  email TEXT,
  avatar TEXT DEFAULT '🦉',
  streak INTEGER NOT NULL DEFAULT 14,
  gems INTEGER NOT NULL DEFAULT 450,
  hearts INTEGER NOT NULL DEFAULT 5,
  max_hearts INTEGER NOT NULL DEFAULT 5,
  total_xp INTEGER NOT NULL DEFAULT 2450,
  league TEXT NOT NULL DEFAULT 'Obsidian League',
  league_rank INTEGER NOT NULL DEFAULT 3,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert default user profile if not exists
INSERT INTO public.profiles (id, name, avatar, streak, gems, hearts, max_hearts, total_xp, league, league_rank)
VALUES ('default_user', 'Sahil M.', '🦉', 14, 450, 5, 5, 2450, 'Obsidian League', 3)
ON CONFLICT (id) DO NOTHING;

-- 2. User Path Progress (Completed modules, stars, scores)
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  node_id TEXT NOT NULL,
  scenario_id TEXT NOT NULL,
  stars INTEGER NOT NULL DEFAULT 3,
  score NUMERIC(5,2) DEFAULT 95.0,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, node_id)
);

-- Seed initial completed nodes
INSERT INTO public.user_progress (user_id, node_id, scenario_id, stars, score)
VALUES 
  ('default_user', 'node-1', 'google-ads-ad-not-showing', 3, 96.0),
  ('default_user', 'node-2', 'daily-budget-exhausted-morning', 3, 94.0)
ON CONFLICT (user_id, node_id) DO NOTHING;

-- 3. Roleplay Exercise Sessions (Dialogue history, scores, feedback)
CREATE TABLE IF NOT EXISTS public.roleplay_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  scenario_id TEXT NOT NULL,
  user_phrasing TEXT,
  gold_standard_benchmark TEXT,
  client_reaction TEXT,
  sentiment TEXT,
  scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  dialogue_history JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. User Quests
CREATE TABLE IF NOT EXISTS public.user_quests (
  id TEXT NOT NULL,
  user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  progress INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL DEFAULT 1,
  xp_reward INTEGER NOT NULL DEFAULT 20,
  gem_reward INTEGER NOT NULL DEFAULT 10,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  claimed BOOLEAN NOT NULL DEFAULT FALSE,
  icon TEXT DEFAULT 'target',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, id)
);

-- Seed default quests
INSERT INTO public.user_quests (user_id, id, title, description, progress, total, xp_reward, gem_reward, completed, claimed, icon)
VALUES 
  ('default_user', 'q-1', 'Crisis Tamer', 'Complete 2 Voice Roleplay exercises', 2, 2, 30, 15, TRUE, FALSE, 'mic'),
  ('default_user', 'q-2', 'Daily XP Master', 'Earn 50 XP today in marketing simulations', 35, 50, 20, 10, FALSE, FALSE, 'bolt'),
  ('default_user', 'q-3', 'BLUF Virtuoso', 'Lead with Bottom-Line-Up-Front in 1 dialogue turn', 1, 1, 25, 20, TRUE, TRUE, 'verified'),
  ('default_user', 'q-4', 'Terminology Guard', 'Complete an answer with 0 flagged jargon slip-ups', 0, 1, 40, 25, FALSE, FALSE, 'shield')
ON CONFLICT (user_id, id) DO NOTHING;

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roleplay_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quests ENABLE ROW LEVEL SECURITY;

-- Allow public read & write for demo / anonymous app access
CREATE POLICY "Allow public read access on profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow public update access on profiles" ON public.profiles FOR UPDATE USING (true);

CREATE POLICY "Allow public read access on user_progress" ON public.user_progress FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on user_progress" ON public.user_progress FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access on user_progress" ON public.user_progress FOR UPDATE USING (true);

CREATE POLICY "Allow public read access on roleplay_sessions" ON public.roleplay_sessions FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on roleplay_sessions" ON public.roleplay_sessions FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access on user_quests" ON public.user_quests FOR SELECT USING (true);
CREATE POLICY "Allow public update access on user_quests" ON public.user_quests FOR UPDATE USING (true);
