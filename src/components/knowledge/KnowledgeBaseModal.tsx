'use client';

import React, { useState, useEffect } from 'react';
import { 
  CORE_MARKETING_METRICS, 
  GITHUB_KNOWLEDGE_ARTICLES,
  GitHubKnowledgeArticle,
  MetricDefinition 
} from '@/data/githubMarketingKnowledgeBase';
import { MARKETING_GLOSSARY } from '@/lib/constants/glossary';
import { KnowledgeStore } from '@/lib/knowledgeStore';
import { PlatformBattlecard, MarketingBookSummary, AdPlatformType } from '@/types/knowledge';
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
  Layers,
  Bot,
  Copy,
  Check,
  Database,
  BookMarked,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface KnowledgeBaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'platforms' | 'books' | 'formulas' | 'github-articles' | 'glossary';
}

export const KnowledgeBaseModal: React.FC<KnowledgeBaseModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'platforms'
}) => {
  const [activeTab, setActiveTab] = useState<'platforms' | 'books' | 'formulas' | 'github-articles' | 'glossary'>(initialTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  // Initialize and ensure LocalStorage is synced
  const [platforms, setPlatforms] = useState<PlatformBattlecard[]>([]);
  const [books, setBooks] = useState<MarketingBookSummary[]>([]);
  const [storageStats, setStorageStats] = useState({
    isCachedLocally: true,
    version: '2.4.0',
    totalPlatforms: 9,
    totalBooks: 7
  });

  useEffect(() => {
    if (isOpen) {
      KnowledgeStore.init();
      setPlatforms(KnowledgeStore.getPlatforms());
      setBooks(KnowledgeStore.getBooks());
      setStorageStats(KnowledgeStore.getStats());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyScript = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptId(id);
    setTimeout(() => setCopiedScriptId(null), 2000);
  };

  // Filter platform battlecards
  const filteredPlatforms = platforms.filter(p => {
    const q = searchTerm.toLowerCase();
    const matchesSearch = 
      p.platformName.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.algorithmicCore.toLowerCase().includes(q) ||
      p.keyFormats.some(f => f.toLowerCase().includes(q)) ||
      p.benchmarks.some(b => b.metric.toLowerCase().includes(q) || b.notes.toLowerCase().includes(q));
    const matchesPlatform = selectedPlatform === 'all' || p.platformId === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  // Filter books
  const filteredBooks = books.filter(b => {
    const q = searchTerm.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.coreThesis.toLowerCase().includes(q) ||
      b.agencyApplication.toLowerCase().includes(q) ||
      b.executiveKeyTakeaways.some(t => t.toLowerCase().includes(q))
    );
  });

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="card-glass w-full max-w-5xl rounded-3xl border-2 border-[#2b3a42] p-4 sm:p-6 space-y-4 shadow-2xl max-h-[92vh] flex flex-col bg-[#131f24] text-slate-100 select-none">
        
        {/* 1. Header with Offline LocalStorage Status */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#58cc02]/20 text-[#58cc02] border border-[#58cc02]/40">
                  AURA MARKETING ENCYCLOPEDIA
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 flex items-center gap-1">
                  <Database className="w-2.5 h-2.5 text-[#1cb0f6]" />
                  <span>100% Synced in LocalStorage (v{storageStats.version})</span>
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight mt-1">
                Ad Platforms, Strategy Books & Benchmark Field Manual
              </h2>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-[#202f36] text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Main Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 p-1 rounded-2xl bg-[#18252b] border border-white/5">
          <button
            onClick={() => setActiveTab('platforms')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
              activeTab === 'platforms'
                ? 'bg-[#58cc02] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ad Platforms</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
              {platforms.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('books')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
              activeTab === 'books'
                ? 'bg-[#58cc02] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Marketing Books</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
              {books.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
              activeTab === 'formulas'
                ? 'bg-[#58cc02] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Core Formulas</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
              {CORE_MARKETING_METRICS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('github-articles')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
              activeTab === 'github-articles'
                ? 'bg-[#58cc02] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Field Playbooks</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20">
              {GITHUB_KNOWLEDGE_ARTICLES.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
              activeTab === 'glossary'
                ? 'bg-[#58cc02] text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Full Glossary</span>
          </button>
        </div>

        {/* 3. Search & Sub-Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                activeTab === 'platforms' 
                  ? 'Search Meta, Google, LinkedIn, Snapchat, GPT Ads, TikTok, Amazon...' 
                  : activeTab === 'books'
                  ? 'Search StoryBrand, Breakthrough Advertising, Hacking Growth, Never Split Difference...'
                  : 'Search formulas, metrics, or scripts...'
              }
              className="w-full bg-[#18252b] text-white placeholder-slate-500 text-xs font-bold pl-9 pr-4 py-2.5 rounded-2xl border-2 border-[#2b3a42] focus:border-[#58cc02] focus:outline-none transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Platform Quick Filter Pills (when on platforms tab) */}
          {activeTab === 'platforms' && (
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
              {[
                { id: 'all', label: 'All' },
                { id: 'meta-ads', label: 'Meta' },
                { id: 'google-ads', label: 'Google' },
                { id: 'linkedin-ads', label: 'LinkedIn' },
                { id: 'snapchat-ads', label: 'Snapchat' },
                { id: 'gpt-ads', label: 'GPT / AI' },
                { id: 'tiktok-ads', label: 'TikTok' },
                { id: 'amazon-ads', label: 'Amazon' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedPlatform(pill.id)}
                  className={`px-2.5 py-1 rounded-xl font-bold text-[11px] whitespace-nowrap cursor-pointer transition-all ${
                    selectedPlatform === pill.id
                      ? 'bg-[#1cb0f6] text-white font-black'
                      : 'bg-[#18252b] text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 4. SCROLLABLE TAB CONTENT */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          
          {/* TAB 1: AD PLATFORM BATTLECARDS */}
          {activeTab === 'platforms' && (
            <div className="space-y-4">
              {filteredPlatforms.length === 0 ? (
                <div className="p-8 text-center bg-[#18252b] rounded-3xl border border-white/5">
                  <p className="text-slate-400 text-sm font-bold">No ad platforms match your search term.</p>
                </div>
              ) : (
                filteredPlatforms.map((platform) => (
                  <div 
                    key={platform.id}
                    className="p-5 rounded-3xl bg-[#18252b] border-2 border-[#2b3a42] hover:border-[#1cb0f6]/50 transition-all space-y-4 shadow-sm"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#1cb0f6]/20 text-[#1cb0f6] border border-[#1cb0f6]/30">
                            {platform.badge}
                          </span>
                          <span className="text-xs text-slate-400 font-bold">
                            {platform.ecosystemReach}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-white mt-1">
                          {platform.platformName}
                        </h3>
                        <p className="text-xs text-slate-300 font-semibold">
                          {platform.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Algorithmic Core & Formats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-[#58cc02] uppercase block mb-1">
                          ⚡ Algorithmic Architecture
                        </span>
                        <p className="text-slate-300 font-semibold leading-relaxed">
                          {platform.algorithmicCore}
                        </p>
                      </div>
                      <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-[#ffc800] uppercase block mb-1">
                          🎯 Primary Formats
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {platform.keyFormats.map((fmt, i) => (
                            <span key={i} className="px-2 py-0.5 bg-white/5 rounded-lg text-[10px] font-bold text-slate-300">
                              {fmt}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics Benchmarks Table */}
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                        📊 Target Benchmarks & Guardrails
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {platform.benchmarks.map((bm, i) => (
                          <div key={i} className="p-3 bg-[#131f24] rounded-2xl border border-white/5 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-white">{bm.metric}</span>
                              <span className="text-[10px] font-bold text-[#58cc02]">{bm.healthyBenchmark}</span>
                            </div>
                            <p className="text-[10px] text-[#ff4b4b] font-semibold">{bm.troubleshootThreshold}</p>
                            <p className="text-[10px] text-slate-400 leading-tight">{bm.notes}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Crisis Playbook & Boardroom BLUF Script */}
                    {platform.crisisPlaybooks.map((cp, idx) => (
                      <div key={idx} className="p-3.5 bg-[#131f24] rounded-2xl border-2 border-[#ff4b4b]/30 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-black text-[#ff4b4b]">
                            <ShieldAlert className="w-4 h-4" />
                            <span>Crisis Response: {cp.situation}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopyScript(`${platform.id}-${idx}`, cp.boardroomBlufScript)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[10px] font-bold transition-all cursor-pointer"
                          >
                            {copiedScriptId === `${platform.id}-${idx}` ? (
                              <>
                                <Check className="w-3 h-3 text-[#58cc02]" />
                                <span className="text-[#58cc02]">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy BLUF Script</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 italic bg-[#18252b] p-3 rounded-xl border border-white/5 font-serif leading-relaxed">
                          {cp.boardroomBlufScript}
                        </p>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: MARKETING BOOKS & STRATEGY PLAYBOOKS */}
          {activeTab === 'books' && (
            <div className="space-y-4">
              {filteredBooks.length === 0 ? (
                <div className="p-8 text-center bg-[#18252b] rounded-3xl border border-white/5">
                  <p className="text-slate-400 text-sm font-bold">No books match your search term.</p>
                </div>
              ) : (
                filteredBooks.map((book) => (
                  <div 
                    key={book.id}
                    className="p-5 rounded-3xl bg-[#18252b] border-2 border-[#2b3a42] hover:border-[#ffc800]/50 transition-all space-y-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 bg-[#131f24] rounded-2xl border border-white/5">
                          {book.coverEmoji}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#ffc800]/20 text-[#ffc800] border border-[#ffc800]/30">
                              {book.category}
                            </span>
                            <span className="text-xs text-slate-400 font-bold">
                              {book.publicationYear}
                            </span>
                          </div>
                          <h3 className="text-lg font-black text-white mt-0.5">
                            {book.title}
                          </h3>
                          <p className="text-xs text-slate-300 font-semibold">
                            By {book.author}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Thesis & Agency Application */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-[#1cb0f6] uppercase block mb-1">
                          💡 Core Thesis
                        </span>
                        <p className="text-slate-300 font-semibold leading-relaxed">
                          {book.coreThesis}
                        </p>
                      </div>
                      <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5">
                        <span className="text-[10px] font-black text-[#58cc02] uppercase block mb-1">
                          💼 Agency Application
                        </span>
                        <p className="text-slate-300 font-semibold leading-relaxed">
                          {book.agencyApplication}
                        </p>
                      </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                        🔑 Executive Takeaways
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300 font-semibold">
                        {book.executiveKeyTakeaways.map((takeaway, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#58cc02] mt-0.5">✓</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Boardroom Scripts */}
                    {book.boardroomScripts.map((scr, idx) => (
                      <div key={idx} className="p-3 bg-[#131f24] rounded-2xl border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black text-[#ffc800]">
                            Scenario: {scr.scenario}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyScript(`${book.id}-${idx}`, scr.script)}
                            className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white font-bold cursor-pointer"
                          >
                            {copiedScriptId === `${book.id}-${idx}` ? (
                              <span className="text-[#58cc02]">Copied!</span>
                            ) : (
                              <span>Copy Script</span>
                            )}
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 italic font-serif leading-relaxed">
                          {scr.script}
                        </p>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: CORE FORMULAS */}
          {activeTab === 'formulas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredFormulas.map((metric, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#2b3a42] space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-white">{metric.name}</h4>
                      <span className="text-xs font-black text-[#58cc02]">{metric.acronym}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-xl bg-[#131f24] border border-white/10 text-xs font-mono font-bold text-[#1cb0f6]">
                      {metric.formula}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-semibold">{metric.description}</p>
                  <div className="p-2.5 bg-[#131f24] rounded-2xl border border-white/5 space-y-1 text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-bold">Benchmark:</span>
                      <span className="text-[#58cc02] font-black">{metric.healthyBenchmark}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-tight">
                      <span className="text-[#ffc800] font-black">Tip: </span>
                      {metric.beginnerTip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: FIELD PLAYBOOKS & GITHUB ARTICLES */}
          {activeTab === 'github-articles' && (
            <div className="space-y-3">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#2b3a42] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#1cb0f6]/20 text-[#1cb0f6] border border-[#1cb0f6]/30">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-bold">
                      {article.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-white">{article.title}</h4>
                  <p className="text-xs text-slate-300 font-semibold">{article.summary}</p>
                  <div className="p-3 bg-[#131f24] rounded-2xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-black text-[#58cc02] uppercase block">
                      Boardroom Explanation Script
                    </span>
                    <p className="text-xs text-slate-200 italic font-serif leading-relaxed">
                      {article.clientExplanationScript}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: GLOSSARY */}
          {activeTab === 'glossary' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredGlossary.map((item, i) => (
                <div 
                  key={i}
                  className="p-3.5 rounded-2xl bg-[#18252b] border border-white/5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white">{item.term}</span>
                    <span className="text-[10px] font-bold text-[#1cb0f6] uppercase">{item.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-semibold">{item.shortDefinition}</p>
                  <p className="text-[11px] text-slate-400 italic">"{item.executiveExample}"</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 5. Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-bold">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#58cc02]" />
            <span>Indexed in Browser LocalStorage for Instant Offline Access</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-3d-green px-5 py-2 rounded-xl text-xs font-black text-white"
          >
            GOT IT
          </button>
        </div>

      </div>
    </div>
  );
};
