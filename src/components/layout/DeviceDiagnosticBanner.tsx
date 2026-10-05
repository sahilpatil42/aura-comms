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
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#202f36] hover:bg-[#283942] border border-white/5 text-[11px] font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
          title="View Device & Mobile Optimization Status"
        >
          {device.isMobile ? (
            <Smartphone className="w-3.5 h-3.5 text-[#58cc02]" />
          ) : (
            <Monitor className="w-3.5 h-3.5 text-[#1cb0f6]" />
          )}
          <span className="capitalize">{device.os}</span>
          <span className="text-slate-400">·</span>
          <span>{device.width}×{device.height}</span>
        </button>
      ) : (
        <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#58cc02]/20 text-[#58cc02]">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white">Active Device Optimization</h4>
                <p className="text-[11px] text-slate-400 font-semibold">
                  Auto-calibrated for your current hardware & browser
                </p>
              </div>
            </div>
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#58cc02]/20 text-[#58cc02] border border-[#58cc02]/30">
              Active · 100% Optimized
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold">
            <div className="p-2.5 rounded-2xl bg-[#131f24] border border-white/5 flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-400">Device & OS</span>
              <span className="text-slate-100 mt-0.5 capitalize flex items-center gap-1 truncate">
                {device.isAndroid ? '🤖 Android' : device.isIOS ? '🍎 iOS' : device.os}
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#131f24] border border-white/5 flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-400">Browser</span>
              <span className="text-slate-100 mt-0.5 flex items-center gap-1 truncate">
                🌐 {device.browserName}
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#131f24] border border-white/5 flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-400">Resolution</span>
              <span className="text-[#1cb0f6] mt-0.5 truncate font-mono">
                {device.width}×{device.height} (@{device.dpr.toFixed(1)}x)
              </span>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#131f24] border border-white/5 flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-400">Speech Engine</span>
              <span className="text-[#58cc02] mt-0.5 flex items-center gap-1 truncate">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90dvh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="text-base font-black text-white">Device & Resolution Calibrator</h3>
                  <p className="text-[11px] text-slate-400 font-semibold">Real-time mobile & browser responsiveness</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/5 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#131f24] border border-white/5 space-y-2">
                <span className="text-xs font-black uppercase text-[#58cc02] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Real-time Adaptive Profile
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block">OS Platform:</span>
                    <strong className="text-white capitalize">{device.os} ({device.isMobile ? 'Mobile' : device.isTablet ? 'Tablet' : 'Desktop'})</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Browser Family:</span>
                    <strong className="text-white">{device.browserName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Viewport Dimensions:</span>
                    <strong className="text-[#1cb0f6] font-mono">{device.width}px × {device.height}px</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Device Pixel Ratio (DPR):</span>
                    <strong className="text-[#ffc800] font-mono">{device.dpr}x High-DPI</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Touch Support:</span>
                    <strong className="text-white">{device.hasTouch ? '✓ Yes (Touchscreen)' : 'Mouse / Trackpad'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Screen Category:</span>
                    <strong className="text-white capitalize">{device.screenCategory} ({device.orientation})</strong>
                  </div>
                </div>
              </div>

              {/* Browser Specific Tips */}
              {device.isBrave && (
                <div className="p-3 rounded-2xl bg-[#ff9600]/10 border border-[#ff9600]/30 text-xs text-[#ff9600] space-y-1">
                  <div className="flex items-center gap-1.5 font-black">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Brave Browser Detected</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    If microphone or live audio gets blocked by Brave Shields, tap the Brave Lion icon in your URL bar and toggle "Shields Down" for this site.
                  </p>
                </div>
              )}

              {device.isFirefox && (
                <div className="p-3 rounded-2xl bg-[#1cb0f6]/10 border border-[#1cb0f6]/30 text-xs text-[#1cb0f6] space-y-1">
                  <div className="flex items-center gap-1.5 font-black">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Firefox Browser Detected</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    Firefox Mobile uses high-definition hardware microphone capture with server-side AI fallback transcription for pristine speech accuracy.
                  </p>
                </div>
              )}

              {device.isAndroid && (
                <div className="p-3 rounded-2xl bg-[#58cc02]/10 border border-[#58cc02]/30 text-xs text-[#58cc02] space-y-1">
                  <div className="flex items-center gap-1.5 font-black">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Android Optimized</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    Dynamic viewport height (100dvh), safe navigation inset padding, and fast-tap touch ergonomics are active.
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="btn-3d-green w-full py-3 rounded-2xl text-xs font-black uppercase tracking-wider"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </>
  );
};
