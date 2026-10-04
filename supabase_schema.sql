-- ============================================================================
-- AURA-Comms Database Schema (Supabase / PostgreSQL)
-- Multi-Tenant Role-Playing Engine with Strict Row-Level Security (RLS)
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Scenarios Table
CREATE TABLE IF NOT EXISTS public.scenarios (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  urgency_timeline TEXT NOT NULL,
  client_environment TEXT NOT NULL,
  briefing_summary TEXT NOT NULL,
  initial_client_dialogue TEXT NOT NULL,
  broken_kpis JSONB NOT NULL DEFAULT '[]'::jsonb,
  stakeholder JSONB NOT NULL DEFAULT '{}'::jsonb,
  target_root_causes TEXT[] NOT NULL DEFAULT '{}',
  prohibited_excuses TEXT[] NOT NULL DEFAULT '{}',
  model_answer_bluf JSONB NOT NULL DEFAULT '{}'::jsonb,
  sample_drill_downs JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on scenarios (Public can read, authenticated admin can manage)
ALTER TABLE public.scenarios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to scenarios" 
  ON public.scenarios FOR SELECT USING (true);

-- 2. Roleplay Sessions Table
CREATE TABLE IF NOT EXISTS public.sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  scenario_id TEXT REFERENCES public.scenarios(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'in_progress', -- 'in_progress' | 'evaluated' | 'archived'
  current_stage INT NOT NULL DEFAULT 1,
  dialogue_history JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_turns INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on sessions
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can only select their own sessions"
  ON public.sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert their own sessions"
  ON public.sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only update their own sessions"
  ON public.sessions FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can only delete their own sessions"
  ON public.sessions FOR DELETE
  USING (auth.uid() = user_id);

-- 3. Evaluations Table
CREATE TABLE IF NOT EXISTS public.evaluations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES public.sessions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  overall_score INT NOT NULL,
  overall_grade TEXT NOT NULL,
  summary_feedback TEXT NOT NULL,
  pillars JSONB NOT NULL DEFAULT '{}'::jsonb,
  flagged_phrases JSONB NOT NULL DEFAULT '[]'::jsonb,
  turn_breakdown JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on evaluations
ALTER TABLE public.evaluations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own evaluations"
  ON public.evaluations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create evaluations for their sessions"
  ON public.evaluations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 4. User Remediation Drills Table
CREATE TABLE IF NOT EXISTS public.user_drills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  scenario_id TEXT REFERENCES public.scenarios(id) ON DELETE CASCADE,
  pillar TEXT NOT NULL,
  prompt TEXT NOT NULL,
  user_response TEXT NOT NULL,
  ai_feedback TEXT NOT NULL,
  score INT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on user drills
ALTER TABLE public.user_drills ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own drills"
  ON public.user_drills FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own drills"
  ON public.user_drills FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 5. Marketing Live Feeds Table
CREATE TABLE IF NOT EXISTS public.marketing_feeds (
  id TEXT PRIMARY KEY,
  source TEXT NOT NULL,
  source_url TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  published_at TIMESTAMPTZ NOT NULL,
  category TEXT NOT NULL,
  impact_level TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  derived_crisis_concept TEXT,
  generated_scenario JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on marketing feeds (public read)
ALTER TABLE public.marketing_feeds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read marketing feeds"
  ON public.marketing_feeds FOR SELECT USING (true);

-- Index optimization
CREATE INDEX IF NOT EXISTS idx_sessions_user ON public.sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_evaluations_session ON public.evaluations(session_id);
CREATE INDEX IF NOT EXISTS idx_feeds_category ON public.marketing_feeds(category);
