import React from 'react';
import { Hammer, Sparkles, Shield, TreePine, Ruler, Layers, CheckCircle2 } from 'lucide-react';

export default function Craftsmanship() {
  const steps = [
    {
      num: '01',
      title: 'Hand-Selected Seasoned Hardwood',
      desc: 'Only Grade-A Sheesham and pure Burma Teak seasoned below 8% moisture level to guarantee zero warping or cracks across decades.',
      icon: <TreePine size={22} className="text-brass" />
    },
    {
      num: '02',
      title: 'Traditional Mortise & Tenon Joinery',
      desc: 'No weak staples or flimsy screws. Interlocking timber joints engineered by master karigars to withstand 500+ kg load easily.',
      icon: <Hammer size={22} className="text-brass" />
    },
    {
      num: '03',
      title: 'Ergonomic 45D Multi-Density Cushions',
      desc: 'High resilience foam layers fused with pocketed steel springs for cloud-like posture balance and zero sag over 10+ years.',
      icon: <Layers size={22} className="text-brass" />
    },
    {
      num: '04',
      title: 'Direct Counter Home Electronics',
      desc: 'Authentic brand warranties on Smart 4K TVs, Inverter ACs, and Refrigerators with same-day technician setup alongside your furniture.',
      icon: <Shield size={22} className="text-brass" />
    }
  ];

  return (
    <section className="craft-section" id="craftsmanship">
      <div className="container">
        <div className="craft-grid">
          {/* Left Visual Column */}
          <div className="craft-visual-col">
            <div className="craft-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1779031242515-205111711b23?auto=format&fit=crop&w=1200&q=85" 
                alt="Vishwakarma master carpenter chiseling solid wood" 
                className="craft-main-img"
              />
              <div className="craft-floating-card">
                <Sparkles size={20} className="text-brass" />
                <div>
                  <h4 className="craft-card-title">"श्री विश्वकर्मा की कारीगरी"</h4>
                  <p className="craft-card-sub">Every millimeter checked by hand before leaving our workshop.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="craft-text-col">
            <div className="eyebrow-badge">
              <Sparkles size={13} />
              <span>Workshop Legacy</span>
            </div>

            <h2 className="section-title">
              Named for the God of Architecture — <br />
              <em>Held to That Exact Standard.</em>
            </h2>

            <p className="craft-lead">
              At <b>Vishwakarma Furniture &amp; Electronics</b>, we don't build temporary fast-furniture. We craft timeless heirlooms from genuine solid Sheesham &amp; Teak hardwood that your children and grandchildren will inherit with pride.
            </p>

            {/* 4 Process Pillars */}
            <div className="craft-steps-list">
              {steps.map((step, idx) => (
                <div key={idx} className="craft-step-card">
                  <div className="step-icon-box">
                    {step.icon}
                  </div>
                  <div className="step-content">
                    <div className="step-num-title">
                      <span className="step-num">{step.num}</span>
                      <h4>{step.title}</h4>
                    </div>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
