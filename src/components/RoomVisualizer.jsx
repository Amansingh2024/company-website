import React, { useState } from 'react';
import { Palette, Sparkles, MessageCircle, Box } from 'lucide-react';
import { playClick, playPop } from '../utils/audio';

// ── Dynamic finish variants per room tab ─────────────────────────────────────
const ROOM_VARIANTS = {
  bedroom: {
    baseImage: 'https://images.unsplash.com/photo-1731336250970-dc942b5e0746?auto=format&fit=crop&w=1200&q=85',
    walnut: {
      label: 'Dark Walnut Sheesham',
      sublabel: 'Royal classic finish',
      swatch: '#4a2411',
      badge: 'King Size Sheesham · Dark Walnut',
      title: 'Master Bedroom Suite 3D',
      productsIncluded: ['Maharaja Grand Sheesham King Bed', '2x Floating Nightstands', 'Comfort Ortho Mattress'],
      statusTag: 'Custom Made-to-Measure',
      warranty: '10-Year Warranty',
      material: 'Grade-A Seasoned Sheesham Wood',
      finish: 'Glossy Teak Walnut Polyurethane',
    },
    teak: {
      label: 'Burma Teak Gold',
      sublabel: 'Warm heritage tone',
      swatch: '#8a5229',
      badge: 'Royal Canopy Bed · Burma Teak Gold',
      title: 'Heritage Bedroom Suite 3D',
      productsIncluded: ['Royal Teakwood Poster Canopy Bed', '2x Brass Lamp Nightstands', 'Luxury Wool Mattress'],
      statusTag: 'Heritage Handcrafted',
      warranty: 'Lifetime Termite + 15-Year Frame',
      material: '100% Pure Burma Teakwood',
      finish: 'Hand-Rubbed Linseed & Wax Polish',
    },
    emerald: {
      label: 'Emerald Luxe Velvet',
      sublabel: 'Opulent jewel tone',
      swatch: '#175c4c',
      badge: 'Velvet Floating Bed · Emerald Glow',
      title: 'Jewel Bedroom Suite 3D',
      productsIncluded: ['Aura Velvet Floating King Bed', '2x Velvet Ottoman Benches', 'Smart Ambient LED Lighting'],
      statusTag: 'Velvet Upholstery Edition',
      warranty: '5-Year Frame & Foam',
      material: '380 GSM Dutch Velvet & Kiln-Dried Hardwood',
      finish: 'Emerald Jewel-Toned Upholstery',
    },
  },
  living: {
    baseImage: 'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85',
    walnut: {
      label: 'Saddle Brown Leather',
      sublabel: 'Classic Chesterfield tone',
      swatch: '#6b3a1f',
      badge: 'Royal Chesterfield 3-Seater · Brown Leather',
      title: 'Royal Living Room Lounge',
      productsIncluded: ['Royal Chesterfield 3-Seater', 'Teakwood Coffee Table', 'Solid Brass Floor Lamp'],
      statusTag: 'Leather Finish Edition',
      warranty: '5-Year Frame & Foam',
      material: 'Full-Grain Leatherette & Teakwood Legs',
      finish: 'Antiqued Saddle Brown Leather',
    },
    teak: {
      label: 'Cream Belgian Linen',
      sublabel: 'Scandinavian natural warmth',
      swatch: '#c9a97a',
      badge: 'Radha Loveseat 2-Seater · Belgian Linen',
      title: 'Scandinavian Living Room',
      productsIncluded: ['Radha Scandinavian Loveseat', 'Minimal Solid Oak Coffee Table', 'Rattan Side Armchair'],
      statusTag: 'Custom Upholstery Colors',
      warranty: '5-Year Structural Warranty',
      material: 'Belgian Linen Blend & Solid Oak Frame',
      finish: 'Natural Cream Linen Weave',
    },
    emerald: {
      label: 'Emerald Royal Velvet',
      sublabel: 'Jewel-toned luxury',
      swatch: '#175c4c',
      badge: 'Meera Emerald 3-Seater · Velvet',
      title: 'Jewel Living Room Suite',
      productsIncluded: ['Meera Emerald Velvet 3-Seater', 'Gold Plinth Ottoman', 'Brushed Gold Side Table'],
      statusTag: 'Jewel Velvet Edition',
      warranty: '5-Year Anti-Sag Guarantee',
      material: 'Royal Emerald Dutch Velvet & Solid Sal',
      finish: 'Brushed Gold Trim & Emerald Velvet',
    },
  },
};

const FINISH_KEYS = ['walnut', 'teak', 'emerald'];

export default function RoomVisualizer({ onSelectCategory }) {
  const [activeRoom, setActiveRoom] = useState('bedroom');
  const [wallColor] = useState('#1e1a17');
  const [finish, setFinish] = useState('walnut');

  const handleRoomChange = (room) => {
    playClick();
    setActiveRoom(room);
    setFinish('walnut'); // reset finish when tab changes
  };

  const room = ROOM_VARIANTS[activeRoom];
  const variant = room[finish];

  const handleWhatsAppRoomQuote = () => {
    playPop();
    const msg = encodeURIComponent(
      `Namaste Vishwakarma Furniture! 🌸\n\nI want a custom room package quote for:\n*Room Style:* ${variant.title}\n*Selected Finish:* ${variant.label}\n*Material:* ${variant.material}\n*Finish:* ${variant.finish}\n*Included Items:* ${variant.productsIncluded.join(', ')}\n\nPlease share floorplan layout advice, custom dimensions, and best package quotation.`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <section className="visualizer-section" id="visualizer">
      <div className="container">
        <div className="section-head-center">
          <div className="eyebrow-badge">
            <Sparkles size={13} />
            <span>Interactive Room Studio</span>
          </div>
          <h2 className="section-title">
            Visualize Your Entire Room <br />
            <em>Before Placing an Order.</em>
          </h2>
          <p className="section-subtitle">
            Experience how our handcrafted solid-wood collections and smart entertainment units harmonize within modern Indian homes.
          </p>
        </div>

        <div className="visualizer-card" style={{ borderColor: 'var(--line)' }}>
          {/* Room Selector Header Tabs */}
          <div className="visualizer-nav">
            <button
              className={`vis-nav-btn ${activeRoom === 'bedroom' ? 'active' : ''}`}
              onClick={() => handleRoomChange('bedroom')}
            >
              <Box size={16} />
              <span>Master Bedroom (9 Beds)</span>
            </button>
            <button
              className={`vis-nav-btn ${activeRoom === 'living' ? 'active' : ''}`}
              onClick={() => handleRoomChange('living')}
            >
              <Palette size={16} />
              <span>Living Room (8 Sofas)</span>
            </button>
          </div>

          {/* Visualizer Stage Viewport */}
          <div className="visualizer-stage-grid">
            {/* Visual Canvas Area */}
            <div className="vis-viewport" style={{ backgroundColor: wallColor }}>
              <img
                key={activeRoom}
                src={room.baseImage}
                alt={variant.title}
                className="vis-image"
              />
              <div
                key={`${activeRoom}-${finish}`}
                className={`vis-finish-tint vis-finish-tint--${activeRoom} vis-image-fade`}
                style={{ '--finish-color': variant.swatch }}
                aria-hidden="true"
              />
              <div className="vis-room-badge">
                <span className="live-dot" />
                <span>{variant.badge}</span>
              </div>
              <div className="vis-3d-hint">
                <span>✦ 3D Rendered Room Arrangement</span>
              </div>
              {/* Finish overlay pill on the image */}
              <div className="vis-finish-overlay">
                <span className="vis-finish-dot" style={{ background: variant.swatch }} />
                <span>{variant.label}</span>
              </div>
            </div>

            {/* Customizer Panel */}
            <div className="vis-controls-panel">
              <div className="vis-panel-header">
                <h3>{variant.title}</h3>
                <p>Curated by Vishwakarma senior interior craftsmen</p>
              </div>

              {/* Material / Finish Selector */}
              <div className="vis-control-block">
                <label className="vis-control-label">
                  1. {activeRoom === 'electronics' ? 'Choose Brand & Bundle:' : 'Choose Wood & Fabric Finish:'}
                </label>
                <div className="finish-grid">
                  {FINISH_KEYS.map((key) => {
                    const v = ROOM_VARIANTS[activeRoom][key];
                    return (
                      <button
                        key={key}
                        className={`finish-card ${finish === key ? 'active' : ''}`}
                        onClick={() => { playClick(); setFinish(key); }}
                      >
                        <span className="finish-swatch" style={{ background: v.swatch }} />
                        <div className="finish-info">
                          <b>{v.label}</b>
                          <small>{v.sublabel}</small>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Material & Finish details — changes with finish */}
              <div className="vis-control-block">
                <label className="vis-control-label">2. Selected Finish Details:</label>
                <div className="vis-finish-details">
                  <div className="vis-finish-detail-row">
                    <span className="vis-detail-label">Material</span>
                    <span className="vis-detail-value">{variant.material}</span>
                  </div>
                  <div className="vis-finish-detail-row">
                    <span className="vis-detail-label">Finish</span>
                    <span className="vis-detail-value">{variant.finish}</span>
                  </div>
                  <div className="vis-finish-detail-row">
                    <span className="vis-detail-label">Warranty</span>
                    <span className="vis-detail-value">{variant.warranty}</span>
                  </div>
                </div>
              </div>

              {/* Package Details — changes with finish */}
              <div className="vis-control-block">
                <label className="vis-control-label">3. Included in This Room Suite:</label>
                <ul className="vis-included-list">
                  {variant.productsIncluded.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-mark">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote & WhatsApp Action */}
              <div className="vis-footer-box">
                <div className="vis-price-row">
                  <div>
                    <span className="price-tag-label">Suite Package</span>
                    <span className="price-tag-val">Contact for Quote</span>
                  </div>
                  <div className="vis-emi-badge">
                    <span>{variant.statusTag}</span>
                  </div>
                </div>

                <button 
                  className="btn-luxury-primary w-full"
                  onClick={handleWhatsAppRoomQuote}
                >
                  <MessageCircle size={18} />
                  <span>Get Complete Room Quote on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
