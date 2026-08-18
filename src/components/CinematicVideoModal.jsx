import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Box, ShieldCheck } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function CinematicVideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      title: '01. Raw Timber Selection',
      desc: 'Grading 100% seasoned Sheesham and Burma Teak with zero sapwood defects.',
      image: 'https://images.unsplash.com/photo-1779031242515-205111711b23?auto=format&fit=crop&w=1200&q=85'
    },
    {
      title: '02. Divine Hand-Carving',
      desc: 'Master artisans chiseling traditional Jali motifs and precision mortise-tenon joints.',
      image: 'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85'
    },
    {
      title: '03. Upholstery & Cushioning',
      desc: 'Hand-tufting 45D high resilience reflex foam in premium Belgian linen and Dutch velvet.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85'
    },
    {
      title: '04. Final Inspection & Fitting',
      desc: 'Rigorous 6-point structural load check, organic wax polish, and white-glove packaging.',
      image: 'https://images.unsplash.com/photo-1731336250970-dc942b5e0746?auto=format&fit=crop&w=1200&q=85'
    }
  ];

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const interval = setInterval(() => {
      if (isPlaying) {
        setActiveChapter((prev) => (prev + 1) % chapters.length);
      }
    }, 4500);

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      clearInterval(interval);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, isPlaying, chapters.length, onClose]);

  if (!isOpen) return null;

  const current = chapters[activeChapter];

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="video-modal-header">
          <div className="v-brand-mark">
            <span className="v-gold">V</span>
            <span>Vishwakarma Workshop Cinema 3D</span>
          </div>
          <button 
            className="video-close-btn"
            onClick={() => { playClick(); onClose(); }}
            aria-label="Close video player"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cinematic Screen Stage */}
        <div className="video-screen-stage">
          <img 
            src={current.image} 
            alt={current.title}
            className="video-bg-frame fade-in-anim"
          />

          <div className="video-overlay-gradient" />

          {/* Center Play/Pause toggle */}
          <button 
            className="center-video-play-btn"
            onClick={() => { playClick(); setIsPlaying(!isPlaying); }}
            title={isPlaying ? "Pause reel" : "Play reel"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} fill="#e3bd76" />}
          </button>

          {/* Live Chapter Caption */}
          <div className="video-live-caption">
            <span className="caption-tag">✦ Workshop Document Reel · Chapter {activeChapter + 1}/4</span>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
          </div>

          {/* Progress Bars */}
          <div className="video-progress-stack">
            {chapters.map((_, idx) => (
              <div 
                key={idx} 
                className={`video-progress-bar ${idx === activeChapter ? 'active' : idx < activeChapter ? 'completed' : ''}`}
                onClick={() => { playClick(); setActiveChapter(idx); }}
              >
                <div className="progress-fill" />
              </div>
            ))}
          </div>
        </div>

        {/* Chapter Thumbnails Strip */}
        <div className="video-chapters-strip">
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              className={`chapter-pill-btn ${idx === activeChapter ? 'active' : ''}`}
              onClick={() => { playClick(); setActiveChapter(idx); }}
            >
              <span className="pill-num">0{idx + 1}</span>
              <span className="pill-text">{chap.title.split('. ')[1]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
