import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, X, CheckCircle, Truck, Shield, Clock, MapPin, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playChime, playPop } from '../utils/audio';

const TYPEWRITER_PHRASES = [
  "Namaste! Looking for Solid Teak Beds or Sofas in Bihar?",
  "Get Direct Workshop Pricing & 10-Year Wood Warranty.",
  "Free Doorstep Delivery & Fitting up to 500 KM across Bihar!",
  "Tell us your room size — Get instant WhatsApp Video Quote."
];

export default function TypewriterModal({ isOpen, onClose }) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(55);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Solid Wood Bed (King / Queen)',
    city: 'Patna / Bihar',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    if (!isOpen) return;

    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(40);
        }
      } else {
        // Deleting backward
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
          setTypingSpeed(70);
        } else {
          setTypingSpeed(22);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    playChime();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = encodeURIComponent(
      `Namaste Vishwakarma Showroom! 🌸\n\n*VIP ENQUIRY FROM WEBSITE (500 KM Free Delivery)*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Category:* ${formData.category}\n*Delivery City:* ${formData.city}\n*Notes / Room Size:* ${formData.notes || 'Please send catalog & video walkthrough'}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="typewriter-modal-backdrop" onClick={onClose}>
      <div 
        className="typewriter-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          className="typewriter-modal-close-btn"
          onClick={() => { playClick(); onClose(); }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Top Badges */}
        <div className="modal-header-top">
          <div className="badge-pulse-gold">
            <span className="live-pulse-dot" />
            <span>Grand Launch · Patna, Bihar</span>
          </div>
          <div className="free-del-chip">
            <Truck size={13} className="text-brass" />
            <span>Free Delivery up to 500 KM</span>
          </div>
        </div>

        {/* Animated Brand Title */}
        <div className="typewriter-brand-header">
          <h2 className="modal-brand-name">
            <span className="brand-v">Vishwakarma</span>
            <span className="brand-badge-tag">Company</span>
          </h2>
          <p className="modal-brand-sub">FURNITURE &amp; ELECTRONICS · EST. PATNA</p>
        </div>

        {/* Live Typewriter Screen Banner */}
        <div className="typewriter-live-box">
          <Sparkles size={16} className="typewriter-sparkle-icon" />
          <p className="typewriter-typing-text">
            <span>{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </p>
        </div>

        {/* Form or Success State */}
        {submitted ? (
          <div className="modal-success-box">
            <CheckCircle size={56} className="text-brass animate-bounce" />
            <h3>Thank You, {formData.name}!</h3>
            <p>Connecting you directly with our senior workshop manager on WhatsApp with the complete 2026 catalog and video walkthroughs.</p>
            <button 
              className="btn-luxury-primary mt-4"
              onClick={() => { playClick(); onClose(); }}
            >
              Continue Exploring Showroom
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="typewriter-modal-form">
            <div className="modal-form-grid-2">
              <div className="form-group">
                <label>Your Full Name *</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Aman Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="modal-form-input"
                />
              </div>

              <div className="form-group">
                <label>Phone / WhatsApp Number *</label>
                <input 
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="modal-form-input"
                />
              </div>
            </div>

            <div className="modal-form-grid-2">
              <div className="form-group">
                <label>Interested In</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="modal-form-select"
                >
                  <option>Solid Wood Bed (King / Queen)</option>
                  <option>Handcrafted Sofa Set / L-Shape</option>
                  <option>Smart Home Electronics (TV / AC / Fridge)</option>
                  <option>Complete Home Package (Bed + Sofa + Electronics)</option>
                  <option>Custom Architectural Interior Woodwork</option>
                </select>
              </div>

              <div className="form-group">
                <label>Delivery District / City</label>
                <input 
                  type="text"
                  placeholder="e.g. Patna, Danapur, Saran, Muzaffarpur..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="modal-form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Special Requirements or Room Notes</label>
              <textarea 
                rows={2}
                placeholder="E.g. Need King Sheesham bed with hydraulic storage, dark walnut polish, delivered to Patna..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="modal-form-textarea"
              />
            </div>

            {/* Guarantees Bar */}
            <div className="modal-guarantee-row">
              <span><Shield size={13} className="text-brass" /> 10-Yr Warranty</span>
              <span><Truck size={13} className="text-brass" /> Free Setup &amp; Assembly</span>
              <span><Clock size={13} className="text-brass" /> 15-Min Reply</span>
            </div>

            <button type="submit" className="btn-luxury-primary w-full typewriter-submit-btn">
              <MessageCircle size={18} />
              <span>Get Instant VIP Quote on WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
