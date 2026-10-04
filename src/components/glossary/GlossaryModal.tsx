'use client';

import React, { useState } from 'react';
import { MARKETING_GLOSSARY, MetricGlossaryItem } from '@/lib/constants/glossary';
import { 
  BookOpen, 
  Search, 
  X, 
  Target, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Performance Metrics', 'Attribution & Tracking', 'Ad Tech & Programmatic', 'Executive Communication'];

  const filteredItems = MARKETING_GLOSSARY.filter((item) => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.executiveExample.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="card-glass w-full max-w-4xl rounded-2xl border border-white/10 p-6 space-y-4 shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Digital Marketing Terminology & Executive Playbook
              </h2>
              <p className="text-xs text-slate-400">
                Authoritative reference for performance media metrics, attribution models, and boardroom diction
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Tabs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search metrics (e.g. BLUF, ROAS, PMax, CAPI, SIVT)..."
              className="w-full bg-slate-950/80 text-white placeholder-slate-500 text-xs pl-9 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="card-glass rounded-xl p-4 border border-white/5 space-y-3 hover:border-indigo-500/30 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {item.category}
                    </span>
                    {item.formulaOrStandard && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-500/20">
                        {item.formulaOrStandard}
                      </span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-base text-white">
                    {item.term}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {item.shortDefinition}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2 border-t border-white/5">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                    Agency Executive Context:
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {item.agencyContext}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    Common Junior Pitfall:
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {item.commonPitfall}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/20 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Director Verbatim Example:
                </span>
                <p className="text-slate-200 italic font-serif">
                  "{item.executiveExample}"
                </p>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <p className="text-xs">No matching marketing terms found for "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
