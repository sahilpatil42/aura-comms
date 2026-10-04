'use client';

import React, { useEffect, useRef } from 'react';

interface AudioWaveformProps {
  isActive: boolean;
  speaker: 'user' | 'client' | 'idle';
  height?: number;
  volume?: number;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isActive,
  speaker,
  height = 54,
  volume = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const volumeRef = useRef(volume);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barCount = 36;
      const barWidth = 4;
      const gap = (canvas.width - barCount * barWidth) / (barCount - 1);
      const centerY = canvas.height / 2;

      phase += isActive ? 0.08 : 0.02;

      // Real volume scaling factor from live microphone level (0-100)
      const currentVol = volumeRef.current ?? 50;
      const volScale = isActive ? Math.max(0.2, Math.min(2.0, (currentVol / 35))) : 0.2;

      for (let i = 0; i < barCount; i++) {
        let amplitude = 4; // idle baseline

        if (isActive) {
          // Dynamic organic speech pattern
          const wave1 = Math.sin(phase + i * 0.28);
          const wave2 = Math.cos(phase * 1.4 + i * 0.18);
          const wave3 = Math.sin(phase * 0.7 - i * 0.4);
          const combined = (Math.abs(wave1 * 0.5 + wave2 * 0.35 + wave3 * 0.25));
          
          // Boost middle bars
          const centerFactor = 1 - Math.abs(i - barCount / 2) / (barCount / 2);
          amplitude = Math.max(6, combined * (canvas.height * 0.85) * (0.3 + centerFactor * 0.7) * volScale);
        }

        const x = i * (barWidth + gap);
        const y = centerY - amplitude / 2;

        // Gradient color based on speaker
        const gradient = ctx.createLinearGradient(0, y, 0, y + amplitude);
        if (speaker === 'user') {
          gradient.addColorStop(0, '#10b981'); // Emerald
          gradient.addColorStop(1, '#059669');
        } else if (speaker === 'client') {
          gradient.addColorStop(0, '#ef4444'); // Crimson/Rose
          gradient.addColorStop(1, '#b91c1c');
        } else {
          gradient.addColorStop(0, '#6366f1'); // Indigo idle
          gradient.addColorStop(1, '#4338ca');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, Math.max(3, amplitude), 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, speaker]);

  return (
    <div className="w-full flex items-center justify-center py-1">
      <canvas
        ref={canvasRef}
        width={380}
        height={height}
        className="w-full max-w-md h-12"
      />
    </div>
  );
};
