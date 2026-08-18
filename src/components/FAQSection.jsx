import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, ShieldCheck, Truck, Ruler, PhoneCall } from 'lucide-react';
import { playClick, playPop } from '../utils/audio';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Do you use 100% solid wood or plywood/MDF core in your beds and sofas?',
      a: 'We use strictly 100% solid seasoned Sheesham (Indian Rosewood) and pure Burma Teakwood. We never use particle boards, cheap MDF, or hollow composite cores. Every joint is crafted using authentic mortise-and-tenon carpentry engineered to last for generations.',
      icon: <ShieldCheck size={18} className="text-brass" />
    },
    {
      q: 'Can I get beds and sofas customized to the exact size of my bedroom/living room?',
      a: 'Yes! Every piece at Vishwakarma can be tailored to your room specifications — whether you need a custom King size (e.g. 78x75 inches), lower floor-bed height, specific hydraulic storage depth, or custom upholstery fabrics like Italian Boucle, Dutch Velvet, or Full-Grain Leatherette.',
      icon: <Ruler size={18} className="text-brass" />
    },
    {
      q: 'How does delivery and room assembly work in Dariyapur Bazar & other locations?',
      a: 'We provide 100% Free White-Glove Home Delivery and Room Setup. Our skilled carpentry technicians safely transport your furniture, carry it directly to your room of choice, assemble all hydraulics/frames, and test every part before handing over.',
      icon: <Truck size={18} className="text-brass" />
    },
    {
      q: 'What brand warranties are provided on home electronics (TV, AC, Fridge)?',
      a: 'All smart electronics sold from our Dariyapur Bazar counter carry 100% authentic brand manufacturer warranties (up to 3 years comprehensive on Sony/LG TVs, 10 years on AC compressors and digital inverter motors), with authorized technician installation included.',
      icon: <HelpCircle size={18} className="text-brass" />
    },
    {
      q: 'How can I get an instant price quote and inspect items before delivery?',
      a: 'You can add any product to your custom quote list or tap "Get Quote on WhatsApp". Our senior showroom manager at Dariyapur Bazar will immediately send you high-definition video walkthroughs, wood cross-section photos, and the best direct workshop quotation.',
      icon: <PhoneCall size={18} className="text-brass" />
    }
  ];

  const toggleFAQ = (idx) => {
    playPop();
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-head-center">
          <div className="eyebrow-badge">
            <Sparkles size={13} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Everything You Need to Know <br />
            <em>About Our Quality &amp; Process.</em>
          </h2>
          <p className="section-subtitle">
            Clear answers about timber seasoning, custom sizing, showroom visits in Dariyapur Bazar, and direct workshop ordering.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <button 
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-left">
                    <span className="faq-icon-box">{faq.icon}</span>
                    <span className="faq-q-text">{faq.q}</span>
                  </div>
                  <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                </button>

                {isOpen && (
                  <div className="faq-answer-box">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
