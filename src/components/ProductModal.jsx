import React, { useState, useEffect } from 'react';
import { X, Star, ShieldCheck, Truck, RefreshCw, MessageCircle, ShoppingCart, Check, Sparkles, Box, Ruler, Award, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playPop, playChime } from '../utils/audio';

export default function ProductModal({ product, onClose, onAddToCart, isInCart }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'dimensions' | 'materials'

  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const handleOrderWhatsApp = () => {
    playChime();
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    const msg = encodeURIComponent(
      `Namaste Vishwakarma Furniture & Electronics! 🌸\n\nI want to get a quote & details for:\n*Product:* ${product.name}\n*Category:* ${product.categoryName}\n*Dimensions:* ${product.dimensions || 'Standard'}\n\nPlease share the best price quote, customization options, and delivery timeline to my address.`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  const handleAddWithConfetti = () => {
    playPop();
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.8 }
    });
    onAddToCart(product);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={() => { playClick(); onClose(); }}
          aria-label="Close product modal"
        >
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Left: Gallery & 3D Viewer */}
          <div className="modal-gallery">
            <div className="modal-main-image-wrap">
              <img 
                src={product.images[selectedImage] || product.images[0]} 
                alt={product.name}
                className="modal-main-image"
              />
              <div className="modal-img-tag">
                <Sparkles size={13} /> Genuine Artisan Workshop Photo
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {product.images.length > 1 && (
              <div className="modal-thumbnails">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`modal-thumb-btn ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => { playClick(); setSelectedImage(idx); }}
                  >
                    <img src={img} alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Guarantees Strip */}
            <div className="modal-trust-strip">
              <div className="trust-pill">
                <ShieldCheck size={16} className="text-brass" />
                <span>{product.warranty}</span>
              </div>
              <div className="trust-pill">
                <Truck size={16} className="text-brass" />
                <span>{product.delivery}</span>
              </div>
              <div className="trust-pill">
                <RefreshCw size={16} className="text-brass" />
                <span>Custom Sizing &amp; Direct Counter Rates</span>
              </div>
            </div>
          </div>

          {/* Right: Details, Specs, Pricing & Actions */}
          <div className="modal-details">
            <div className="modal-category-badge">
              <span>{product.categoryName}</span>
              <span className="bullet">✦</span>
              <div className="modal-stars">
                <Star size={13} fill="#e3bd76" stroke="#e3bd76" />
                <b>{product.rating}</b>
                <span>({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-subtitle">{product.subtitle}</p>

            {/* Quote Badge Box (No Static Price) */}
            <div className="modal-price-box">
              <div className="price-main">
                <span className="price-big">Price On Request</span>
                <span className="save-badge">Direct Workshop Price</span>
              </div>
              <p className="price-note">
                Inclusive of GST, Free Transit Insurance, Room Setup &amp; Custom Sizing.
              </p>
            </div>

            {/* Description */}
            <p className="modal-desc">{product.description}</p>

            {/* Tab Navigation */}
            <div className="modal-tab-header">
              <button 
                className={`modal-tab ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => { playClick(); setActiveTab('specs'); }}
              >
                <Award size={14} /> Full Specifications
              </button>
              <button 
                className={`modal-tab ${activeTab === 'dimensions' ? 'active' : ''}`}
                onClick={() => { playClick(); setActiveTab('dimensions'); }}
              >
                <Ruler size={14} /> Dimensions &amp; Fit
              </button>
            </div>

            {/* Tab Content */}
            <div className="modal-tab-body">
              {activeTab === 'specs' && (
                <div className="specs-table">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="spec-row">
                      <span className="spec-label">{item.label}</span>
                      <span className="spec-value">{item.value}</span>
                    </div>
                  ))}
                  <div className="spec-row">
                    <span className="spec-label">Primary Material</span>
                    <span className="spec-value">{product.material}</span>
                  </div>
                </div>
              )}

              {activeTab === 'dimensions' && (
                <div className="dimensions-box">
                  <div className="dimension-highlight">
                    <Ruler size={24} className="text-brass" />
                    <div>
                      <h4>Product Dimensions</h4>
                      <p>{product.dimensions || 'Customizable to your room specifications'}</p>
                    </div>
                  </div>
                  <div className="custom-note">
                    <b>Custom Sizing Available:</b> Need this resized for your bedroom or living room wall? Our karigars can adjust length, width, and height with zero extra design surcharge.
                  </div>
                </div>
              )}
            </div>

            {/* Footer Order & Quote CTA */}
            <div className="modal-cta-row">
              <button 
                className={`modal-cart-btn ${isInCart ? 'added' : ''}`}
                onClick={handleAddWithConfetti}
              >
                {isInCart ? (
                  <>
                    <Check size={18} /> In Your Quote List
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} /> Add to Quote List
                  </>
                )}
              </button>

              <button 
                className="modal-whatsapp-btn"
                onClick={handleOrderWhatsApp}
              >
                <MessageCircle size={18} />
                <span>Get Quote on WhatsApp</span>
              </button>
            </div>

            <div className="modal-security-note">
              <span>🔒 100% Genuine Direct Workshop Guarantee · Live Video Call Inspection Available Before Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
