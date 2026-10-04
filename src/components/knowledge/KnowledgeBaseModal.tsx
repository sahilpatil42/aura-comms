'use client';

import React, { useState } from 'react';
import { 
  CORE_MARKETING_METRICS, 
  GITHUB_KNOWLEDGE_ARTICLES,
  GitHubKnowledgeArticle,
  MetricDefinition 
} from '@/data/githubMarketingKnowledgeBase';
import { MARKETING_GLOSSARY, MetricGlossaryItem } from '@/lib/constants/glossary';
import { 
  BookOpen, 
  Search, 
  X, 
  Calculator, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Lightbulb, 
  TrendingUp,
  Bookmark,
  Award,
  Layers
} from 'lucide-react';

interface KnowledgeBaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'formulas' | 'github-articles' | 'glossary';
}

export const KnowledgeBaseModal: React.FC<KnowledgeBaseModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'formulas'
}) => {
  const [activeTab, setActiveTab] = useState<'formulas' | 'github-articles' | 'glossary'>(initialTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  // Filter formulas
  const filteredFormulas = CORE_MARKETING_METRICS.filter(metric => {
    const q = searchTerm.toLowerCase();
    return (
      metric.name.toLowerCase().includes(q) ||
      metric.acronym.toLowerCase().includes(q) ||
      metric.description.toLowerCase().includes(q) ||
      metric.formula.toLowerCase().includes(q)
    );
  });

  // Filter GitHub articles
  const filteredArticles = GITHUB_KNOWLEDGE_ARTICLES.filter(article => {
    const q = searchTerm.toLowerCase();
    const matchesSearch = 
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      article.sourceRepo.toLowerCase().includes(q);
    const matchesDiff = selectedDifficulty === 'all' || article.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  // Filter glossary
  const filteredGlossary = MARKETING_GLOSSARY.filter(item => {
    const q = searchTerm.toLowerCase();
    const matchesSearch = 
      item.term.toLowerCase().includes(q) ||
      item.shortDefinition.toLowerCase().includes(q) ||
      item.executiveExample.toLowerCase().includes(q);
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="card-glass w-full max-w-5xl rounded-3xl border border-white/10 p-5 sm:p-7 space-y-5 shadow-2xl max-h-[90vh] flex flex-col bg-surface-container-high/95">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-secondary to-primary text-white shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/20 text-primary border border-primary/30">
                  GitHub Open Source Knowledge Base
                </span>
                <span className="text-xs text-on-surface-variant hidden sm:inline">
                  Curated from ronakganatra & carlos-eduardo-s-lima
                </span>
              </div>
              <h2 className="text-xl font-black text-on-surface tracking-tight mt-1">
                Digital Marketing Formulas & Field Manual
              </h2>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Main Navigation Tabs */}
          <div className="flex items-center p-1 rounded-2xl bg-surface-container-lowest/80 border border-white/5">
            <button
              onClick={() => setActiveTab('formulas')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'formulas'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Core Formulas</span>
              <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">
                {CORE_MARKETING_METRICS.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('github-articles')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'github-articles'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>GitHub Playbooks</span>
              <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">
                {GITHUB_KNOWLEDGE_ARTICLES.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'glossary'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Executive Glossary</span>
              <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-white/20">
                {MARKETING_GLOSSARY.length}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="w-4 h-4 text-on-surface-variant absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search formulas, concepts, metrics..."
              className="w-full bg-surface-container-lowest text-on-surface placeholder-on-surface-variant text-xs pl-9 pr-3 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Tab 1: Formulas */}
        {activeTab === 'formulas' && (
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-xs text-on-surface flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-primary block font-bold mb-0.5">Marketing Math for Beginners:</strong>
                Never memorize formulas in isolation. Always connect them to client psychology: CTR measures whether people care, CPC measures what the auction demands, and ROAS measures whether the client keeps their business open.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFormulas.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-4 bg-surface-container-lowest/80 border border-white/10 hover:border-primary/40 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-on-surface">
                          {metric.name}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-tertiary-container/30 text-tertiary font-mono">
                          {metric.acronym}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </div>

                  {/* Formula Box */}
                  <div className="px-3 py-2 rounded-xl bg-surface-container-high/60 border border-white/5 font-mono text-xs text-primary font-bold flex items-center justify-between">
                    <span>{metric.formula}</span>
                    <span className="text-[10px] text-on-surface-variant uppercase font-sans font-normal">Formula</span>
                  </div>

                  {/* Benchmark & Beginner Tip */}
                  <div className="space-y-1.5 text-[11px] pt-1 border-t border-white/5">
                    <div className="flex items-center justify-between text-on-surface-variant">
                      <span className="font-semibold text-secondary">Healthy Benchmark:</span>
                      <span className="font-medium text-on-surface">{metric.healthyBenchmark}</span>
                    </div>
                    <div className="text-on-surface-variant leading-relaxed">
                      <strong className="text-tertiary font-semibold">Beginner Pro-Tip: </strong>
                      {metric.beginnerTip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: GitHub Articles & Playbooks */}
        {activeTab === 'github-articles' && (
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {/* Difficulty Filter */}
            <div className="flex items-center gap-2 pb-1">
              <span className="text-xs text-on-surface-variant font-semibold">Filter Level:</span>
              {['all', 'beginner', 'intermediate', 'advanced'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedDifficulty(lvl)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold capitalize transition-all cursor-pointer ${
                    selectedDifficulty === lvl
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:text-on-surface border border-white/5'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="rounded-2xl p-5 bg-surface-container-lowest/80 border border-white/10 hover:border-primary/40 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        article.difficulty === 'beginner' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : article.difficulty === 'intermediate'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}>
                        {article.difficulty}
                      </span>
                      <span className="text-xs font-semibold text-secondary">
                        {article.category}
                      </span>
                    </div>

                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-tertiary hover:underline"
                    >
                      <span>Source: {article.sourceRepo}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-sm font-extrabold text-on-surface">
                    {article.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {article.summary}
                  </p>

                  {/* Key Takeaways */}
                  <div className="p-3 rounded-xl bg-surface-container-high/50 border border-white/5 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                      Core Rules & Technical Takeaways:
                    </span>
                    {article.keyTakeaways.map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2 text-[11px] text-on-surface leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tertiary shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client Explanation Script */}
                  <div className="p-3 rounded-xl bg-surface-container-lowest border border-tertiary/20 text-[11px] text-on-surface space-y-1">
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider block">
                      💬 Client Explanation Script (What to Say on the Call):
                    </span>
                    <p className="italic text-on-surface-variant">
                      {article.clientExplanationScript}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Glossary */}
        {activeTab === 'glossary' && (
          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-4 bg-surface-container-lowest/80 border border-white/10 hover:border-primary/40 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-black text-primary uppercase tracking-wide">
                        {item.term}
                      </span>
                      <span className="block text-[10px] text-secondary font-semibold mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.shortDefinition}
                  </p>

                  <div className="p-2.5 rounded-xl bg-surface-container-high/40 border border-white/5 space-y-1 text-[11px]">
                    <strong className="text-tertiary block font-semibold">How to say it to an executive:</strong>
                    <p className="italic text-on-surface leading-snug">
                      "{item.executiveExample}"
                    </p>
                  </div>

                  <div className="text-[11px] text-rose-300/90 leading-snug">
                    <strong className="text-rose-400">Common Pitfall: </strong>
                    {item.commonPitfall}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-tertiary" />
            <span>Open Source Performance Engineering Data · Updated for 2026</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold text-xs hover:opacity-90 transition-all cursor-pointer"
          >
            Close Knowledge Base
          </button>
        </div>

      </div>
    </div>
  );
};
