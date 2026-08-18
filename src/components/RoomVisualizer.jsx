import React, { useState } from 'react';
import { Eye, Palette, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Box, Sliders, Ruler } from 'lucide-react';
import { playClick, playPop } from '../utils/audio';

export default function RoomVisualizer({ onSelectCategory }) {
  const [activeRoom, setActiveRoom] = useState('bedroom'); // 'bedroom' | 'living' | 'electronics'
  const [wallColor, setWallColor] = useState('#1e1a17');
  const [finish, setFinish] = useState('walnut'); // 'walnut' | 'teak' | 'emerald' | 'cognac'

  const rooms = {
    bedroom: {
      title: 'Master Bedroom Suite 3D',
      badge: 'King Size Sheesham + Storage Bed',
      image: 'https://images.unsplash.com/photo-1731336250970-dc942b5e0746?auto=format&fit=crop&w=1200&q=85',
      productsIncluded: ['Maharaja Grand Sheesham King Bed', '2x Floating Nightstands', 'Comfort Ortho Mattress'],
      statusTag: 'Custom Made-to-Measure',
      warranty: '10-Year Warranty'
    },
    living: {
      title: 'Royal Living Room Lounge',
      badge: 'Kanha Chesterfield 3-Seater + Radha Loveseat',
      image: 'https://images.unsplash.com/photo-1573866926487-a1865558a9cf?auto=format&fit=crop&w=1200&q=85',
      productsIncluded: ['Kanha Chesterfield 3-Seater', 'Radha Scandinavian Loveseat', 'Solid Teak Coffee Table'],
      statusTag: 'Custom Upholstery Colors',
      warranty: '5-Year Frame & Foam'
    },
    electronics: {
      title: 'Smart Home Cinema Lounge',
      badge: 'Sony Bravia 65" 4K TV + JBL Dolby Atmos Soundbar',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=85',
      productsIncluded: ['Sony Bravia 65" 4K Google TV', 'JBL Bar 800 Pro Dolby Atmos', 'Floating Entertainment Console'],
      statusTag: 'Official Brand Warranty',
      warranty: 'Free Home Installation'
    }
  };

  const currentRoom = rooms[activeRoom];

  const handleWhatsAppRoomQuote = () => {
    playPop();
    const msg = encodeURIComponent(
      `Namaste Vishwakarma Furniture! 🌸\n\nI want a custom room package quote for:\n*Room Style:* ${currentRoom.title}\n*Selected Finish:* ${finish.toUpperCase()}\n*Included Items:* ${currentRoom.productsIncluded.join(', ')}\n\nPlease share floorplan layout advice, custom dimensions, and best package quotation.`
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
              onClick={() => { playClick(); setActiveRoom('bedroom'); }}
            >
              <Box size={16} />
              <span>Master Bedroom (9 Beds)</span>
            </button>
            <button 
              className={`vis-nav-btn ${activeRoom === 'living' ? 'active' : ''}`}
              onClick={() => { playClick(); setActiveRoom('living'); }}
            >
              <Palette size={16} />
              <span>Living Room (8 Sofas)</span>
            </button>
            <button 
              className={`vis-nav-btn ${activeRoom === 'electronics' ? 'active' : ''}`}
              onClick={() => { playClick(); setActiveRoom('electronics'); }}
            >
              <Sliders size={16} />
              <span>Smart Home Setup (8 Electronics)</span>
            </button>
          </div>

          {/* Visualizer Stage Viewport */}
          <div className="visualizer-stage-grid">
            {/* Visual Canvas Area */}
            <div className="vis-viewport" style={{ backgroundColor: wallColor }}>
              <img 
                src={currentRoom.image} 
                alt={currentRoom.title} 
                className="vis-image"
              />
              <div className="vis-room-badge">
                <span className="live-dot" />
                <span>{currentRoom.badge}</span>
              </div>
              <div className="vis-3d-hint">
                <span>✦ 3D Rendered Room Arrangement</span>
              </div>
            </div>

            {/* Customizer Panel */}
            <div className="vis-controls-panel">
              <div className="vis-panel-header">
                <h3>{currentRoom.title}</h3>
                <p>Curated by Vishwakarma senior interior craftsmen</p>
              </div>

              {/* Material / Finish Selector */}
              <div className="vis-control-block">
                <label className="vis-control-label">1. Choose Wood &amp; Fabric Finish:</label>
                <div className="finish-grid">
                  <button 
                    className={`finish-card ${finish === 'walnut' ? 'active' : ''}`}
                    onClick={() => { playClick(); setFinish('walnut'); }}
                  >
                    <span className="finish-swatch" style={{ background: '#4a2411' }} />
                    <div className="finish-info">
                      <b>Dark Walnut Sheesham</b>
                      <small>Royal classic finish</small>
                    </div>
                  </button>

                  <button 
                    className={`finish-card ${finish === 'teak' ? 'active' : ''}`}
                    onClick={() => { playClick(); setFinish('teak'); }}
                  >
                    <span className="finish-swatch" style={{ background: '#8a5229' }} />
                    <div className="finish-info">
                      <b>Burma Teak Gold</b>
                      <small>Warm heritage tone</small>
                    </div>
                  </button>

                  <button 
                    className={`finish-card ${finish === 'emerald' ? 'active' : ''}`}
                    onClick={() => { playClick(); setFinish('emerald'); }}
                  >
                    <span className="finish-swatch" style={{ background: '#175c4c' }} />
                    <div className="finish-info">
                      <b>Emerald Luxe Velvet</b>
                      <small>Opulent jewel tone</small>
                    </div>
                  </button>
                </div>
              </div>

              {/* Package Details */}
              <div className="vis-control-block">
                <label className="vis-control-label">2. Included in This Room Suite:</label>
                <ul className="vis-included-list">
                  {currentRoom.productsIncluded.map((item, idx) => (
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
                    <span className="price-tag-val">Custom Quote On Request</span>
                  </div>
                  <div className="vis-emi-badge">
                    <span>{currentRoom.statusTag}</span>
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
