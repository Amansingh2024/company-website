import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Shield, Truck, Award, ArrowRight, Box, BedDouble, Armchair, Tv, MessageCircle } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import { playClick, playHover } from '../utils/audio';

const HERO_TYPEWRITER_WORDS = [
  "Solid Sheesham & Teak Wood Beds",
  "Handcrafted Italian Velvet Sofas",
  "Top-Tier Smart Home Electronics",
  "Direct Factory Workshop in Bihar",
  "Free Delivery & Setup Up to 500 KM"
];

const FLOATING_TAGS = [
  { text: "✦ Solid Sheesham Beds", top: "18%", left: "4%", delay: "0s" },
  { text: "✦ Chesterfield Sofas", top: "68%", left: "6%", delay: "-3s" },
  { text: "✦ 4K OLED Smart TVs", top: "22%", right: "6%", delay: "-1.5s" },
  { text: "✦ Free 500 KM Delivery", top: "72%", right: "8%", delay: "-4.5s" }
];

const MARQUEE_ITEMS = [
  "Vishwakarma Furniture",
  "Free Delivery Up to 500 KM",
  "Bihar",
  "Jharkhand",
  "Uttar Pradesh",
  "Nepal",
  "Solid Sheesham & Teak",
  "10-Year Wood Warranty",
  "Smart 4K TVs",
  "Direct Workshop Prices",
  "Grand 3D Showroom"
];

export default function Hero3D({ onOpenVideoModal, onSelectCategory, onOpenTypewriterModal }) {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const currentWord = HERO_TYPEWRITER_WORDS[wordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(110);
        } else {
          setTypingSpeed(45);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % HERO_TYPEWRITER_WORDS.length);
          setTypingSpeed(80);
        } else {
          setTypingSpeed(25);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="hero-section" id="home">
      {/* Background ambient lighting orbs */}
      <div className="hero-glow-orb orb-primary" />
      <div className="hero-glow-orb orb-secondary" />

      {/* Floating Category Tags in Background */}
      <div className="hero-floating-tags-layer" aria-hidden="true">
        {FLOATING_TAGS.map((tag, i) => (
          <span 
            key={i} 
            className="hero-floating-tag"
            style={{ 
              top: tag.top, 
              left: tag.left, 
              right: tag.right,
              animationDelay: tag.delay 
            }}
          >
            {tag.text}
          </span>
        ))}
      </div>

      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Headlines & Typewriter CTAs */}
          <div className="hero-text-col">
            {/* Launch Badge */}
            <div className="hero-eyebrow">
              <span className="live-pulse-dot" />
              <span className="eyebrow-text">Heritage Craftsmanship · Patna &amp; Dariyapur, Bihar</span>
              <Sparkles size={14} className="eyebrow-sparkle" />
            </div>

            {/* Staggered Brand Identity */}
            <div className="hero-brand-stagger">
              <div className="brand-letter-row">
                {"VISHWAKARMA".split('').map((letter, idx) => (
                  <span 
                    key={idx} 
                    className="brand-letter-span"
                    style={{ animationDelay: `${0.05 * idx}s` }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div className="brand-sub-badge-row">
                <span className="gold-line" />
                <span className="company-badge-tag">DIRECT WORKSHOP</span>
                <span className="gold-line" />
              </div>
            </div>

            {/* Live Typewriter Hero Headline */}
            <div className="hero-typewriter-display">
              <span className="typewriter-prefix">We manufacture &amp; deliver:</span>
              <h2 className="typewriter-headline">
                <span className="gold-shimmer-text">{typedText}</span>
                <span className="hero-cursor-blink">|</span>
              </h2>
            </div>

            <p className="hero-lead">
              Solid Sheesham &amp; Burma Teak beds, handcrafted sofas, and high-performance smart electronics. Built for Indian homes that value generational longevity over disposable furniture.
            </p>

            {/* CTA Buttons */}
            <div className="hero-btn-row">
              <button 
                className="btn-luxury-primary"
                onClick={() => { playClick(); onOpenTypewriterModal(); }}
                onMouseEnter={() => playHover()}
              >
                <Sparkles size={18} />
                <span>Get Instant Workshop Quote</span>
              </button>

              <button 
                className="btn-luxury-glass"
                onClick={() => { playClick(); onOpenVideoModal(); }}
                onMouseEnter={() => playHover()}
              >
                <div className="play-circle">
                  <Play size={14} fill="#e3bd76" />
                </div>
                <span>Watch 3D Showroom Film</span>
              </button>
            </div>

            {/* Quick Category Jump Badges */}
            <div className="hero-quick-chips">
              <span className="quick-chip-label">Explore:</span>
              <button 
                className="quick-chip"
                onClick={() => { playClick(); onSelectCategory('beds'); }}
              >
                <BedDouble size={14} /> 9 Royal Beds
              </button>
              <button 
                className="quick-chip"
                onClick={() => { playClick(); onSelectCategory('sofas'); }}
              >
                <Armchair size={14} /> 8 Luxury Sofas
              </button>
              <button 
                className="quick-chip"
                onClick={() => { playClick(); onSelectCategory('electronics'); }}
              >
                <Tv size={14} /> 8 Smart Electronics
              </button>
              <a 
                href="#free-delivery" 
                className="quick-chip highlight-chip"
                onClick={() => playClick()}
              >
                <Truck size={14} /> Free 500 KM Delivery
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="hero-guarantees">
              <div className="guarantee-item">
                <Shield size={16} className="text-brass" />
                <span>10-Yr Solid Wood Warranty</span>
              </div>
              <div className="guarantee-item">
                <Truck size={16} className="text-brass" />
                <span>Free Room Setup &amp; Assembly</span>
              </div>
              <div className="guarantee-item">
                <Award size={16} className="text-brass" />
                <span>Direct Workshop Rates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Studio Stage */}
          <div className="hero-3d-col">
            <div className="hero-3d-card-frame">
              <div className="stage-header-badge">
                <Box size={14} />
                <span>Interactive 3D Studio · Drag to Rotate 360°</span>
              </div>

              {/* Three.js 3D Canvas */}
              <ThreeCanvas initialModel="bed" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Live Continuous Gold Marquee Ticker */}
      <div className="hero-ticker-track" aria-hidden="true">
        <div className="hero-ticker-content">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span key={index} className="ticker-item">
              <span className="ticker-text">{item}</span>
              <span className="ticker-sparkle">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

