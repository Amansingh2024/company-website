import React, { useState } from 'react';
import { Truck, MapPin, Shield, CheckCircle, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { playClick, playPop, playChime } from '../utils/audio';
import confetti from 'canvas-confetti';

const REGIONS = [
  "Patna",
  "Danapur",
  "Saran (Maker)",
  "Gopalganj",
  "Muzaffarpur",
  "Gaya",
  "Bhagalpur",
  "Darbhanga",
  "Purnia",
  "Ara / Bhojpur",
  "Jharkhand",
  "Uttar Pradesh",
  "Nepal Border & beyond"
];

export default function FreeDeliverySection({ onOpenTypewriterModal }) {
  const [cityQuery, setCityQuery] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const handleCheckDelivery = (e) => {
    e.preventDefault();
    if (!cityQuery.trim()) return;

    playChime();
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.8 }
    });

    setCheckResult({
      city: cityQuery,
      status: 'FREE_DELIVERY',
      message: `🎉 Great News! ${cityQuery} is fully covered under our 500 KM Free Doorstep Delivery & Professional Assembly program!`
    });
  };

  return (
    <section id="free-delivery" className="free-delivery-section">
      <div className="delivery-glow-orb orb-gold" />
      <div className="delivery-glow-orb orb-maroon" />

      <div className="container">
        <div className="free-delivery-card-outer">
          <div className="free-delivery-card-inner">
            {/* Top Eyebrow Badge */}
            <div className="delivery-badge-pill">
              <Truck size={16} className="text-brass" />
              <span className="text-brass font-bold uppercase tracking-widest text-xs">VISHWAKARMA PROMISE</span>
            </div>

            {/* Giant Title */}
            <h2 className="delivery-giant-title">
              <span className="gold-shimmer-text">FREE</span>
              <br />
              <span className="text-white">DELIVERY</span>
            </h2>

            <p className="delivery-radius-highlight">
              Up to <span className="text-brass">500 KM</span> Across Bihar &amp; Beyond
            </p>

            <p className="delivery-lead-sub">
              We provide free insured delivery up to 500 KM — handcrafted solid wood furniture and smart electronics delivered directly from our workshop to your doorstep with zero transit damage.
            </p>

            {/* Regions Pill Grid */}
            <div className="delivery-regions-wrap">
              {REGIONS.map((region, i) => (
                <span key={i} className="region-chip">
                  <MapPin size={12} className="text-brass" />
                  {region}
                </span>
              ))}
            </div>

            {/* Instant Pincode / City Eligibility Checker */}
            <div className="pincode-check-box">
              <h4>Check Free Delivery to Your Location</h4>
              <form onSubmit={handleCheckDelivery} className="pincode-input-row">
                <input 
                  type="text"
                  placeholder="Enter your City, Town, or Pincode (e.g. Patna, Danapur, Saran...)"
                  value={cityQuery}
                  onChange={(e) => setCityQuery(e.target.value)}
                  className="pincode-input"
                />
                <button type="submit" className="pincode-check-btn" onClick={() => playPop()}>
                  <span>Check Eligibility</span>
                  <ArrowRight size={15} />
                </button>
              </form>

              {checkResult && (
                <div className="delivery-result-banner animate-fade-in">
                  <CheckCircle size={20} className="text-brass shrink-0" />
                  <p>{checkResult.message}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="delivery-actions-row">
              <button 
                className="btn-luxury-primary"
                onClick={() => { playClick(); onOpenTypewriterModal(); }}
              >
                <Sparkles size={16} />
                <span>Claim Free Delivery Quote</span>
              </button>

              <a 
                href="https://wa.me/919876543210?text=Namaste%2C%20I%20want%20to%20know%20about%20Free%20Delivery%20up%20to%20500%20KM%20for%20my%20home." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-luxury-glass"
                onClick={() => playClick()}
              >
                <MessageCircle size={16} />
                <span>Ask on WhatsApp Hotline</span>
              </a>
            </div>

            <p className="delivery-footer-note">
              ✦ Handcrafted furniture &amp; smart electronics — straight from workshop to your room assembly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
