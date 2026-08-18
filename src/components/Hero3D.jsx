import React from 'react';
import { Sparkles, Play, Shield, Truck, Award, ArrowRight, Box, BedDouble, Armchair, Tv } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';
import { playClick, playHover } from '../utils/audio';

export default function Hero3D({ onOpenVideoModal, onSelectCategory }) {
  return (
    <section className="hero-section" id="home">
      {/* Background ambient lighting orbs */}
      <div className="hero-glow-orb orb-primary" />
      <div className="hero-glow-orb orb-secondary" />

      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Headlines & CTAs */}
          <div className="hero-text-col">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Heritage Craftsmanship · Dariyapur Bazar, Bihar</span>
              <Sparkles size={14} className="eyebrow-sparkle" />
            </div>

            <h1 className="hero-title">
              Crafted with Divine <br />
              <span className="gold-shimmer-text">Vishwakarma</span> Precision.
            </h1>

            <p className="hero-lead">
              Solid Sheesham &amp; Burma Teak beds, handcrafted sofas, and high-performance smart electronics. Built for Indian homes that value generational longevity over disposable furniture.
            </p>

            {/* CTA Buttons */}
            <div className="hero-btn-row">
              <a 
                href="#collections" 
                className="btn-luxury-primary"
                onClick={() => { playClick(); }}
                onMouseEnter={() => playHover()}
              >
                <span>Explore 25+ Creations</span>
                <ArrowRight size={18} />
              </a>

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
              <span className="quick-chip-label">Quick Jump:</span>
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
                <span>Custom Sizing &amp; Direct Counter Rates</span>
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
    </section>
  );
}
