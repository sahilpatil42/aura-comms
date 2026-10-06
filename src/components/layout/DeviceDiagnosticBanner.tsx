'use client';

import React, { useState } from 'react';
import { useDeviceOptimization } from '@/hooks/useDeviceOptimization';
import { Smartphone, Monitor, Globe, Mic, CheckCircle, Sparkles, X, ChevronRight, Volume2, Shield } from 'lucide-react';

interface DeviceDiagnosticProps {
  compact?: boolean;
}

export const DeviceDiagnosticBanner: React.FC<DeviceDiagnosticProps> = ({ compact = false }) => {
  const device = useDeviceOptimization();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {compact ? (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#0c1938]/70 hover:bg-[#12234e] border border-blue-400/20 text-[11px] font-bold text-blue-200 hover:text-white transition-all cursor-pointer backdrop-blur-sm shadow-xs"
          title="View Device & Mobile Optimization Status"
        >
          {device.isMobile ? (
            <Smartphone className="w-3.5 h-3.5 text-sky-400" />
          ) : (
            <Monitor className="w-3.5 h-3.5 text-cyan-300" />
          )}
          <span className="capitalize">{device.os}</span>
          <span className="text-blue-300/40">·</span>
          <span>{device.width}×{device.height}</span>
        </button>
      ) : (
        <div className="p-4 rounded-3xl bg-[#09132c]/85 backdrop-blur-xl border border-blue-400/25 shadow-xl space-y-3 ring-1 ring-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-300">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Active Device Optimization</h4>
                <p className="text-[11px] text-blue-200/70 font-semibold">
                  Auto-calibrated for your current hardware & browser
                </p>
              </div>
            </div>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
              Active · 100% Optimized
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
            <div className="p-2.5 rounded-2xl bg-[#0c1836]/70 backdrop-blur-sm border border-blue-400/15 flex flex-col">
              <span className="text-[10px] uppercase font-black text-blue-300/60">Device & OS</span>
              <span className="text-slate-100 mt-0.5 capitalize flex items-center gap-1 truncate">
                {device.isAndroid ? '🤖 Android' : device.isIOS ? '🍎 iOS' : device.os}
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#0c1836]/70 backdrop-blur-sm border border-blue-400/15 flex flex-col">
              <span className="text-[10px] uppercase font-black text-blue-300/60">Browser</span>
              <span className="text-slate-100 mt-0.5 flex items-center gap-1 truncate">
                🌐 {device.browserName}
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#0c1836]/70 backdrop-blur-sm border border-blue-400/15 flex flex-col">
              <span className="text-[10px] uppercase font-black text-blue-300/60">Resolution</span>
              <span className="text-sky-300 mt-0.5 truncate font-mono">
                {device.width}×{device.height} (@{device.dpr.toFixed(1)}x)
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#0c1836]/70 backdrop-blur-sm border border-blue-400/15 flex flex-col">
              <span className="text-[10px] uppercase font-black text-blue-300/60">Speech Engine</span>
              <span className="text-cyan-300 mt-0.5 flex items-center gap-1 truncate">
                {device.hasWebSpeech ? '🎙️ WebSpeech Ready' : '⚡ Neural Transcribe'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Expanded Modal */}
      {isExpanded && (
        <div 
          onClick={() => setIsExpanded(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040817]/75 backdrop-blur-md select-none animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#09132c]/95 backdrop-blur-2xl border border-blue-400/25 rounded-3xl p-6 shadow-[0_20px_60px_rgba(3,7,24,0.7)] space-y-4 max-h-[90dvh] overflow-y-auto ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="text-base font-black text-white">Device & Resolution Calibrator</h3>
                  <p className="text-[11px] text-blue-200/70 font-semibold">Real-time mobile & browser responsiveness</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#0c1836]/70 backdrop-blur-sm border border-blue-400/15 space-y-2">
                <span className="text-xs font-black uppercase text-sky-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Real-time Adaptive Profile
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-blue-300/60 text-[10px] block">OS Platform:</span>
                    <strong className="text-white capitalize">{device.os} ({device.isMobile ? 'Mobile' : device.isTablet ? 'Tablet' : 'Desktop'})</strong>
                  </div>
                  <div>
                    <span className="text-blue-300/60 text-[10px] block">Browser Family:</span>
                    <strong className="text-white">{device.browserName}</strong>
                  </div>
                  <div>
                    <span className="text-blue-300/60 text-[10px] block">Viewport Dimensions:</span>
                    <strong className="text-sky-300 font-mono">{device.width}px × {device.height}px</strong>
                  </div>
                  <div>
                    <span className="text-blue-300/60 text-[10px] block">Device Pixel Ratio (DPR):</span>
                    <strong className="text-amber-300 font-mono">{device.dpr}x High-DPI</strong>
                  </div>
                  <div>
                    <span className="text-blue-300/60 text-[10px] block">Touch Support:</span>
                    <strong className="text-white">{device.hasTouch ? '✓ Yes (Touchscreen)' : 'Mouse / Trackpad'}</strong>
                  </div>
                  <div>
                    <span className="text-blue-300/60 text-[10px] block">Screen Category:</span>
                    <strong className="text-white capitalize">{device.screenCategory} ({device.orientation})</strong>
                  </div>
                </div>
              </div>

              {/* Browser Specific Tips */}
              {device.isBrave && (
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-black">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Brave Browser Detected</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-200/80">
                    If microphone or live audio gets blocked by Brave Shields, tap the Brave Lion icon in your URL bar and toggle "Shields Down" for this site.
                  </p>
                </div>
              )}

              {device.isFirefox && (
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-xs text-sky-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-black">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Firefox Browser Detected</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-200/80">
                    Firefox Mobile uses high-definition hardware microphone capture with server-side AI fallback transcription for pristine speech accuracy.
                  </p>
                </div>
              )}

              {device.isAndroid && (
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-black">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Android Optimized</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-200/80">
                    Dynamic viewport height (100dvh), safe navigation inset padding, and fast-tap touch ergonomics are active.
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="btn-3d-blue w-full py-3 rounded-2xl text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </>
  );
};
