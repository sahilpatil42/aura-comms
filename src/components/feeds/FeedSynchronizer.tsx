'use client';

import React, { useState, useEffect } from 'react';
import { MarketingFeedItem, SyncFeedResponse } from '@/types/marketing-feed';
import { useSessionStore } from '@/stores/useSessionStore';
import { CRISIS_SCENARIOS } from '@/lib/constants/scenarios';
import { 
  Rss, 
  RefreshCw, 
  ExternalLink, 
  Sparkles, 
  AlertCircle, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Loader2
} from 'lucide-react';

interface FeedSynchronizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedSynchronizer: React.FC<FeedSynchronizerProps> = ({ isOpen, onClose }) => {
  const { selectScenario } = useSessionStore();
  const [feeds, setFeeds] = useState<MarketingFeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  const fetchFeeds = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/sync-marketing-feeds?forceRefresh=true');
      const data: SyncFeedResponse = await res.json();
      if (data.success) {
        setFeeds(data.feedItems);
        setLastSynced(new Date().toLocaleTimeString());
      }
    } catch (e) {
      console.error('Failed to sync marketing feeds:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && feeds.length === 0) {
      fetchFeeds();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLaunchScenario = (category: string) => {
    const matched = CRISIS_SCENARIOS.find(s => s.category === category) || CRISIS_SCENARIOS[0];
    selectScenario(matched);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="card-glass w-full max-w-3xl rounded-2xl border border-white/10 p-6 space-y-5 shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Rss className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Live Marketing Intelligence & Developer Feeds
              </h2>
              <p className="text-xs text-slate-400">
                Automated changelog ingestion from Google Ads, Meta Graph API & Search Engine Land
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchFeeds}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-white/10 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isLoading ? 'Syncing...' : 'Sync Now'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sync Status Banner */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active Ingestion Pipeline · Semantic Scenario Generator Online
          </span>
          {lastSynced && <span>Last Synced: {lastSynced}</span>}
        </div>

        {/* Feed List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {isLoading && feeds.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <Loader2 className="w-6 h-6 animate-spin text-indigo-400 mx-auto" />
              <p className="text-xs">Connecting to developer changelog endpoints...</p>
            </div>
          ) : (
            feeds.map((feed) => (
              <div
                key={feed.id}
                className="card-glass rounded-xl p-4 border border-white/5 space-y-2.5 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {feed.source}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          feed.impactLevel === 'Critical'
                            ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}
                      >
                        {feed.impactLevel} Impact
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-white leading-snug">
                      {feed.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleLaunchScenario(feed.category)}
                    className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Simulate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {feed.summary}
                </p>

                {feed.derivedCrisisConcept && (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">
                      Auto-Derived Crisis: <strong className="text-indigo-300">{feed.derivedCrisisConcept}</strong>
                    </span>
                    <div className="flex gap-1">
                      {feed.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-1.5 py-0.2 rounded bg-slate-900 text-slate-400 text-[10px]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Cron Route: <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono">/api/sync-marketing-feeds</code></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold cursor-pointer"
          >
            Close Feed Center
          </button>
        </div>
      </div>
    </div>
  );
};
