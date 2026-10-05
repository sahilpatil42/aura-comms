'use client';

import React, { useState, useRef } from 'react';
import { useGamificationStore } from '@/stores/useGamificationStore';
import { soundEffects } from '@/lib/soundEffects';
import { DeviceDiagnosticBanner } from '@/components/layout/DeviceDiagnosticBanner';
import { getPlatformById } from '@/data/adPlatforms';

interface DuoProfileViewProps {
  onOpenSettings: () => void;
}

const MASCOT_OPTIONS = [
  '🦉', '🦅', '🦁', '🦊', '🐺', '🐯', 
  '🐼', '🦄', '🚀', '👑', '⚡', '🎯', 
  '🦾', '💼', '🎧', '🔥', '📊', '📈'
];

const COLOR_OPTIONS = [
  '#58cc02', // Duolingo Green
  '#1cb0f6', // Duolingo Blue
  '#ff9600', // Duolingo Orange
  '#ff4b4b', // Duolingo Red
  '#a855f7', // Purple
  '#00cd9c', // Emerald
  '#eab308', // Gold
  '#ec4899', // Pink
  '#6366f1', // Indigo
];

export const DuoProfileView: React.FC<DuoProfileViewProps> = ({
  onOpenSettings,
}) => {
  const { 
    streak, 
    totalXp, 
    league, 
    userAvatar, 
    userAvatarColor, 
    userName, 
    userHandle, 
    selectedPlatform,
    completedNodeIds,
    setProfileAvatar,
    setProfileDetails
  } = useGamificationStore();

  const platform = getPlatformById(selectedPlatform || 'google-ads');
  const completedPlatformLessons = (completedNodeIds || []).filter(id => id.startsWith(platform.id)).length;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [tempAvatar, setTempAvatar] = useState(userAvatar || '🦉');
  const [tempColor, setTempColor] = useState(userAvatarColor || '#58cc02');
  const [tempName, setTempName] = useState(userName || 'Sahil M.');
  const [tempHandle, setTempHandle] = useState(userHandle || '@sahil_media');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openEditModal = () => {
    soundEffects.playClick();
    setTempAvatar(userAvatar || '🦉');
    setTempColor(userAvatarColor || '#58cc02');
    setTempName(userName || 'Sahil M.');
    setTempHandle(userHandle || '@sahil_media');
    setIsEditModalOpen(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please choose an image under 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setTempAvatar(event.target.result as string);
          soundEffects.playClick();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    setProfileAvatar(tempAvatar, tempColor);
    setProfileDetails(tempName.trim() || 'Sahil M.', tempHandle.trim() || '@sahil_media');
    soundEffects.playSuccess();
    setIsEditModalOpen(false);
  };

  const achievements = [
    { title: 'Crisis Tamer', desc: 'De-escalate 5 high-stakes client objections', icon: '🛡️', unlocked: true, level: 3 },
    { title: 'BLUF Virtuoso', desc: 'Deliver 10 Bottom-Line-Up-Front openings', icon: '⚡', unlocked: true, level: 2 },
    { title: 'Zero Jargon Slip', desc: 'Achieve 100% terminology score in 3 sessions', icon: '🎯', unlocked: true, level: 1 },
    { title: 'Algorithmic Master', desc: 'Explain Meta & Google AI auctions flawlessly', icon: '🧠', unlocked: false, level: 0 },
    { title: 'Obsidian Champion', desc: 'Finish in the Top 3 of the Obsidian League', icon: '👑', unlocked: false, level: 0 },
  ];

  const isTempAvatarImage = tempAvatar.startsWith('data:image') || tempAvatar.startsWith('http');
  const isUserAvatarImage = userAvatar && (userAvatar.startsWith('data:image') || userAvatar.startsWith('http'));

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto pb-28 space-y-6 animate-in fade-in duration-200">
      {/* Real-time Hardware & Mobile Browser Optimization Card */}
      <DeviceDiagnosticBanner />

      {/* Profile Header Card */}
      <div className="p-4 sm:p-6 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-lg flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          {/* Avatar with click-to-edit badge */}
          <div 
            onClick={openEditModal}
            className="relative w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all flex-shrink-0 group overflow-hidden border-2 border-white/20 hover:border-white/50"
            style={{ backgroundColor: userAvatarColor || '#58cc02' }}
            title="Click to change profile picture"
          >
            {isUserAvatarImage ? (
              <img src={userAvatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="select-none">{userAvatar || '🦉'}</span>
            )}

            {/* Hover overlay edit camera */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
              <span className="material-symbols-outlined text-[24px]">photo_camera</span>
            </div>

            {/* Camera badge bottom right */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#202f36] border border-white/20 flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-[13px]">edit</span>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-black text-white truncate">{userName || 'Sahil M.'}</h2>
              <span 
                className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap"
                style={{ 
                  backgroundColor: platform.accentBg, 
                  color: platform.brandColor, 
                  border: `1px solid ${platform.brandColor}` 
                }}
              >
                <span>{platform.icon}</span>
                <span>{platform.name} Specialist</span>
              </span>
            </div>
            <p className="text-xs font-bold text-slate-400 mt-0.5 truncate">{userHandle || '@sahil_media'} · Joined Oct 2026</p>
            <button
              type="button"
              onClick={openEditModal}
              className="mt-2 text-xs font-black text-[#1cb0f6] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">edit</span>
              <span>Edit Profile & Avatar</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenSettings}
          className="p-2.5 rounded-2xl bg-[#202f36] hover:bg-[#283942] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex-shrink-0"
          title="Account Settings"
        >
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
      </div>

      {/* EDIT PROFILE & AVATAR MODAL */}
      {isEditModalOpen && (
        <div 
          onClick={() => setIsEditModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs select-none"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#18252b] border-2 border-[#37464f] rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150 max-h-[90dvh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#58cc02]">
                  Profile Customizer
                </span>
                <h3 className="text-xl font-black text-white">Change Profile Picture</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Live Avatar Preview */}
            <div className="flex flex-col items-center justify-center py-2 space-y-2">
              <div 
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-xl overflow-hidden border-4 border-white/20 transition-all"
                style={{ backgroundColor: tempColor }}
              >
                {isTempAvatarImage ? (
                  <img src={tempAvatar} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="select-none">{tempAvatar}</span>
                )}
              </div>
              <span className="text-xs font-bold text-slate-400">Live Preview</span>
            </div>

            {/* Option A: Upload Custom Photo */}
            <div className="p-3.5 rounded-2xl bg-[#131f24] border border-white/5 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 block">
                Upload Custom Photo / Camera
              </span>
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/*" 
                className="hidden" 
                onChange={handleFileUpload} 
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="btn-3d-blue w-full py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">add_a_photo</span>
                <span>Choose Photo or Take Picture</span>
              </button>
            </div>

            {/* Option B: Choose Mascot Character */}
            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 px-1 block">
                Or Pick a Mascot Avatar
              </span>
              <div className="grid grid-cols-6 gap-2">
                {MASCOT_OPTIONS.map((mascot, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setTempAvatar(mascot);
                    }}
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl transition-all cursor-pointer border-2 ${
                      tempAvatar === mascot 
                        ? 'border-[#58cc02] bg-[#58cc02]/20 scale-105 shadow-sm' 
                        : 'border-white/5 bg-[#202f36] hover:bg-[#283942] hover:border-slate-500'
                    }`}
                  >
                    {mascot}
                  </button>
                ))}
              </div>
            </div>

            {/* Option C: Background Accent Color */}
            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 px-1 block">
                Avatar Background Color
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {COLOR_OPTIONS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setTempColor(color);
                    }}
                    className={`w-8 h-8 rounded-full transition-all cursor-pointer border-2 ${
                      tempColor === color 
                        ? 'border-white scale-110 shadow-md ring-2 ring-[#58cc02]' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Option D: Name & Handle */}
            <div className="space-y-2.5 pt-1">
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  maxLength={30}
                  className="w-full px-3.5 py-2.5 bg-[#131f24] border-2 border-[#202f36] focus:border-[#58cc02] rounded-xl text-xs font-bold text-white outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  User Handle
                </label>
                <input
                  type="text"
                  value={tempHandle}
                  onChange={(e) => setTempHandle(e.target.value)}
                  maxLength={25}
                  className="w-full px-3.5 py-2.5 bg-[#131f24] border-2 border-[#202f36] focus:border-[#58cc02] rounded-xl text-xs font-bold text-white outline-none transition-colors"
                  placeholder="@handle"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="btn-3d-neutral flex-1 py-3 rounded-2xl text-xs font-black cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                className="btn-3d-green flex-1 py-3 rounded-2xl text-xs font-black cursor-pointer"
              >
                SAVE AVATAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gamified Statistics Grid */}
      <div className="space-y-2">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 px-1">
          Career Statistics
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Day Streak */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">🔥</span>
            <div>
              <span className="text-xl font-black text-white block">{streak}</span>
              <span className="text-xs font-bold text-slate-400">Day Streak</span>
            </div>
          </div>

          {/* Total XP */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">⚡</span>
            <div>
              <span className="text-xl font-black text-white block">{totalXp.toLocaleString()}</span>
              <span className="text-xs font-bold text-slate-400">Total XP</span>
            </div>
          </div>

          {/* Current League */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">🏆</span>
            <div>
              <span className="text-base font-black text-white block truncate">{league}</span>
              <span className="text-xs font-bold text-slate-400">Current League</span>
            </div>
          </div>

          {/* Top 3 Finishes */}
          <div className="p-4 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm flex items-center gap-3.5">
            <span className="text-3xl">🥇</span>
            <div>
              <span className="text-xl font-black text-white block">4</span>
              <span className="text-xs font-bold text-slate-400">Top 3 Finishes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Ad Platform Specialization Card */}
      <div className="p-4 sm:p-5 rounded-3xl bg-[#18252b] border-2 border-[#37464f] shadow-sm space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
              style={{ backgroundColor: platform.accentBg, border: `1.5px solid ${platform.brandColor}` }}
            >
              {platform.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-black text-white truncate">{platform.name} Specialization</h4>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-white/10" style={{ color: platform.brandColor }}>
                  {platform.badge}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-400 truncate mt-0.5">{platform.tagline}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-sm font-black text-white block">{completedPlatformLessons} / {platform.totalLessons}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Drills Mastered</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#131f24] rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
          <div 
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              backgroundColor: platform.brandColor,
              width: `${Math.max(5, Math.min(100, Math.round((completedPlatformLessons / platform.totalLessons) * 100)))}%`
            }}
          />
        </div>

        {/* Key Metrics Mastered */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mr-1">Core Metrics:</span>
          {platform.keyMetrics.map((metric) => (
            <span key={metric} className="text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-[#202f36] text-slate-300 border border-white/5">
              {metric}
            </span>
          ))}
        </div>
      </div>

      {/* Achievement Badges Showcase */}
      <div className="space-y-3">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-300 px-1">
          Achievement Badges
        </h3>
        <div className="space-y-2.5">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-3xl border-2 flex items-center justify-between gap-4 ${
                ach.unlocked
                  ? 'bg-[#18252b] border-[#37464f]'
                  : 'bg-[#131f24] border-white/5 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-[#202f36] flex items-center justify-center text-2xl flex-shrink-0">
                  {ach.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-white truncate">
                      {ach.title}
                    </h4>
                    {ach.unlocked && (
                      <span className="text-[10px] font-black uppercase bg-[#ffc800]/20 text-[#ffc800] px-1.5 py-0.2 rounded">
                        Lvl {ach.level}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-400 truncate mt-0.5">
                    {ach.desc}
                  </p>
                </div>
              </div>

              <span className={`text-xs font-black ${ach.unlocked ? 'text-[#58cc02]' : 'text-slate-500'}`}>
                {ach.unlocked ? 'UNLOCKED' : 'LOCKED'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
