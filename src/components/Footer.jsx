import React from 'react';
import { Sparkles, Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { playClick } from '../utils/audio';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo-wrap">
              <div className="brand-crest">
                <span>V</span>
              </div>
              <div className="brand-title-group">
                <span className="brand-main-name">Vishwakarma</span>
                <span className="brand-sub-name">FURNITURE &amp; ELECTRONICS</span>
              </div>
            </div>

            <p className="footer-desc">
              Dedicated to the divine craftsmanship of Lord Vishwakarma. Handcrafted solid Sheesham &amp; Teak furniture paired with genuine home electronics for discerning Indian families.
            </p>

            <div className="footer-social-links">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn"
                title="WhatsApp Us"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="tel:+919876543210" 
                className="social-btn"
                title="Call Showroom"
              >
                <Phone size={18} />
              </a>
              <a 
                href="mailto:hello@vishwakarmafurniture.in" 
                className="social-btn"
                title="Email Team"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links: 9 Beds */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">9 Luxury Beds</h4>
            <ul className="footer-links">
              <li><a href="#collections" onClick={() => onSelectCategory('beds')}>Maharaja Grand Sheesham</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('beds')}>Aura Velvet Floating Bed</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('beds')}>Burma Teak Canopy</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('beds')}>Vivaan Hydraulic Storage</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('beds')}>Anaya Channel Boucle Bed</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('beds')}>Ishita Brass Inlay Bed</a></li>
            </ul>
          </div>

          {/* Quick Links: 8 Sofas & 8 Electronics */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Sofas &amp; Electronics</h4>
            <ul className="footer-links">
              <li><a href="#collections" onClick={() => onSelectCategory('sofas')}>Royal Chesterfield</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('sofas')}>Ganesh Modular L-Shape</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('sofas')}>Meera Emerald Velvet 3S</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('electronics')}>Sony Bravia 4K 65" TV</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('electronics')}>LG AI Dual Inverter AC</a></li>
              <li><a href="#collections" onClick={() => onSelectCategory('electronics')}>Bosch Front Load Machine</a></li>
            </ul>
          </div>

          {/* Showroom & Guarantees */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Experience Center</h4>
            <div className="footer-contact-info">
              <p><MapPin size={15} className="text-brass inline-icon" /> Dariyapur Bazar, Bihar, India</p>
              <p><Phone size={15} className="text-brass inline-icon" /> +91 98765 43210</p>
              <p><Mail size={15} className="text-brass inline-icon" /> hello@vishwakarmafurniture.in</p>
              <p className="warranty-tag">✦ 10-Year Warranty · Free Pan-India Delivery</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <b>Vishwakarma Furniture &amp; Electronics</b>. All rights reserved. Handcrafted with divine precision.
          </p>

          <button 
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
