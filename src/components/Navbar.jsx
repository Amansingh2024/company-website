import React, { useState, useEffect } from 'react';
import { MessageCircle, Volume2, VolumeX, Menu, X, BedDouble, Armchair, Tv, Sparkles, Box, Play } from 'lucide-react';
import { toggleSound, isSoundEnabled, playClick } from '../utils/audio';

export default function Navbar({ 
  onSelectCategory,
  onOpenVideo 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo & Name */}
          <a href="#home" className="brand-logo-wrap" onClick={() => playClick()}>
            <div className="brand-crest">
              <span>V</span>
            </div>
            <div className="brand-title-group">
              <span className="brand-main-name">Vishwakarma</span>
              <span className="brand-sub-name">FURNITURE &amp; ELECTRONICS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-links">
            <a href="#home" onClick={() => playClick()}>Home</a>
            <a 
              href="#collections" 
              onClick={() => { playClick(); onSelectCategory('beds'); }}
            >
              Beds (9)
            </a>
            <a 
              href="#collections" 
              onClick={() => { playClick(); onSelectCategory('sofas'); }}
            >
              Sofas (8)
            </a>
            <a 
              href="#collections" 
              onClick={() => { playClick(); onSelectCategory('electronics'); }}
            >
              Electronics (8)
            </a>
            <a href="#visualizer" onClick={() => playClick()}>3D Studio</a>
            <a href={`${import.meta.env.BASE_URL}showroom-tour.html`} onClick={() => playClick()}>Video Tour</a>
            <a href="#craftsmanship" onClick={() => playClick()}>Craftsmanship</a>
            <a href="#contact" onClick={() => playClick()}>Showroom</a>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="nav-right-actions">
            {/* Audio Sound FX Toggle */}
            <button 
              className={`nav-icon-btn ${soundOn ? 'sound-active' : ''}`}
              onClick={handleSoundToggle}
              title={soundOn ? "UI Sound Effects Active (Click to Mute)" : "Muted (Click to Enable)"}
              aria-label="Toggle UI Sounds"
            >
              {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Direct WhatsApp Call */}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-whatsapp-pill"
              onClick={() => playClick()}
            >
              <MessageCircle size={16} />
              <span className="wa-txt">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Hamburger */}
            <button 
              className="mobile-menu-btn"
              onClick={() => { playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <a 
            href="#home" 
            onClick={() => { playClick(); setMobileMenuOpen(false); }}
          >
            Home
          </a>
          <a 
            href="#collections" 
            onClick={() => {
              playClick();
              onSelectCategory('beds');
              setMobileMenuOpen(false);
            }}
          >
            <BedDouble size={20} /> 9 Solid Wood Beds
          </a>
          <a 
            href="#collections" 
            onClick={() => {
              playClick();
              onSelectCategory('sofas');
              setMobileMenuOpen(false);
            }}
          >
            <Armchair size={20} /> 8 Handcrafted Sofas
          </a>
          <a 
            href="#collections" 
            onClick={() => {
              playClick();
              onSelectCategory('electronics');
              setMobileMenuOpen(false);
            }}
          >
            <Tv size={20} /> 8 Smart Electronics
          </a>
          <a 
            href="#visualizer" 
            onClick={() => { playClick(); setMobileMenuOpen(false); }}
          >
            <Box size={20} /> 3D Room Studio
          </a>
          <a href={`${import.meta.env.BASE_URL}showroom-tour.html`} onClick={() => { playClick(); setMobileMenuOpen(false); }}>
            <Play size={20} /> Video Showroom Tour
          </a>
          <a 
            href="#craftsmanship" 
            onClick={() => { playClick(); setMobileMenuOpen(false); }}
          >
            <Sparkles size={20} /> Our Craftsmanship
          </a>
          <a 
            href="#contact" 
            onClick={() => { playClick(); setMobileMenuOpen(false); }}
          >
            Showroom &amp; Address
          </a>

          <div className="mobile-nav-footer">
            <a 
              href="https://wa.me/919876543210" 
              className="btn-luxury-primary w-full"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span>Chat with Showroom on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
