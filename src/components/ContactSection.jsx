import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playChime } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Solid Wood Bed',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    playChime();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 }
    });

    const msg = encodeURIComponent(
      `Namaste Vishwakarma Showroom! 🌸\n\n*NEW ENQUIRY FROM WEBSITE*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested In:* ${formData.category}\n*Notes / Room Size:* ${formData.notes || 'Please share catalog'}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
    }, 400);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid-layout">
          {/* Left: Showroom Info & Map */}
          <div className="contact-info-col">
            <div className="eyebrow-badge">
              <Sparkles size={13} />
              <span>Visit Our Flagship Experience Store</span>
            </div>

            <h2 className="section-title">
              Feel the Wood Grain &amp; <br />
              <em>Comfort Before Ordering.</em>
            </h2>

            <p className="contact-lead-p">
              Step into our Dariyapur Bazar experience center to examine timber cross-sections, test mattress firmness, and talk directly with master karigars over a warm cup of chai.
            </p>

            <div className="contact-details-stack">
              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <MapPin size={20} className="text-brass" />
                </div>
                <div>
                  <h4 className="detail-title">Showroom &amp; Experience Center</h4>
                  <p className="detail-text">COSMOS KREATIONS, Patna, Bihar, India</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Phone size={20} className="text-brass" />
                </div>
                <div>
                  <h4 className="detail-title">Direct Calling &amp; WhatsApp Hotline</h4>
                  <p className="detail-text">+91 98765 43210 / +91 98765 43211</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Mail size={20} className="text-brass" />
                </div>
                <div>
                  <h4 className="detail-title">Email Enquiries &amp; Architectural Plans</h4>
                  <p className="detail-text">hello@vishwakarmafurniture.in</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-icon-box">
                  <Clock size={20} className="text-brass" />
                </div>
                <div>
                  <h4 className="detail-title">Store Hours</h4>
                  <p className="detail-text">Monday – Sunday: 10:00 AM – 8:30 PM (All 7 Days Open)</p>
                </div>
              </div>
            </div>

            {/* Live Interactive Google Map Frame */}
            <div className="map-live-container">
              <div className="map-live-header">
                <div className="map-live-title">
                  <MapPin size={16} className="text-brass" />
                  <span><b>COSMOS KREATIONS</b> · Patna, Bihar</span>
                </div>
                <a 
                  href="https://www.google.com/maps/place/COSMOS+KREATIONS+%7C%7C+INTERIOR+DESIGNER+IN+PATNA+%7C%7C+BEST+INTERIOR+DESIGNER+IN+PATNA+%7C+ARCHITECT+IN+PATNA/@25.6302081,85.0986258,15.48z/data=!4m10!1m2!2m1!1screative+interiors+patna!3m6!1s0x39ed57786431c76f:0x15e964ac33ca87f8!8m2!3d25.6302081!4d85.0986258!15sChhjcmVhdGl2ZSBpbnRlcmlvcnMgcGF0bmFaGiIYY3JlYXRpdmUgaW50ZXJpb3JzIHBhdG5hkgERaW50ZXJpb3JfZGVzaWduZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhPV1ZWc1NrNU9SazVVVmpGS1ZXSlViR0ZOVlZvMVRVUmtWMk5GUlJBQuABAPoBBAhuEEc!16s%2Fg%2F11z1_63sqy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                >
                  <span>Get Directions</span>
                  <Send size={12} />
                </a>
              </div>

              <div className="map-iframe-wrap">
                <iframe
                  title="COSMOS KREATIONS Patna Location"
                  src="https://maps.google.com/maps?q=25.6302081,85.0986258&hl=en&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right: Instant WhatsApp Quote Booking Form */}
          <div className="contact-form-col">
            <div className="quote-form-card">
              <div className="form-head">
                <h3>Get in Touch with Our Showroom</h3>
                <p>Tell us what your home needs — we'll calculate exact pricing and message you in 15 minutes.</p>
              </div>

              {submitted ? (
                <div className="form-success-state">
                  <CheckCircle size={54} className="text-brass" />
                  <h3>Quote Request Sent!</h3>
                  <p>Opening WhatsApp to connect you directly with our senior showroom manager.</p>
                  <button 
                    className="btn-luxury-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Ramesh Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
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
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Interested Category</label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="form-select"
                      >
                        <option>Solid Wood Bed (King / Queen)</option>
                        <option>Handcrafted Sofa Set / L-Shape</option>
                        <option>Smart Home Electronics (TV / AC / Fridge)</option>
                        <option>Complete Home Package (Bed + Sofa + Electronics)</option>
                        <option>Custom Architectural Woodwork</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Specific Size Requirements or Room Notes</label>
                    <textarea 
                      rows={3}
                      placeholder="E.g. King bed with hydraulic storage, dark walnut finish, need delivery by next weekend in Dariyapur Bazar..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-luxury-primary w-full form-submit-btn">
                    <MessageCircle size={18} />
                    <span>Get a Quote on WhatsApp</span>
                  </button>

                  <p className="form-privacy-note">
                    🔒 Zero spam guarantee. We reply personally via verified WhatsApp business.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
