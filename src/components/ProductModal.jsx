import React, { useState, useEffect, useMemo } from 'react';
import { X, Star, ShieldCheck, Truck, RefreshCw, Sparkles, Ruler, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { playClick, playPop } from '../utils/audio';
import { getProductViews } from '../utils/productViews';

// ── Auto-generate side & back view from first image via Unsplash crop params ──
export default function ProductModal({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab]         = useState('specs');
  const [paused, setPaused]               = useState(false);

  const imageSet = useMemo(() => getProductViews(product), [product]);

  // Keyboard shortcuts + body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowRight')  setSelectedImage(p => (p + 1) % imageSet.length);
      if (e.key === 'ArrowLeft')   setSelectedImage(p => (p - 1 + imageSet.length) % imageSet.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, imageSet.length]);

  // Auto-slideshow every 3.5s
  useEffect(() => {
    if (paused || imageSet.length <= 1) return;
    const timer = setInterval(() => {
      setSelectedImage(prev => (prev + 1) % imageSet.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, showVideo, imageSet.length]);

  // Reset when product changes
  useEffect(() => {
    setSelectedImage(0);
    setPaused(false);
    setActiveTab('specs');
  }, [product?.id]);

  if (!product) return null;

  const goNext = () => { playClick(); setPaused(true); setSelectedImage(p => (p + 1) % imageSet.length); };
  const goPrev = () => { playClick(); setPaused(true); setSelectedImage(p => (p - 1 + imageSet.length) % imageSet.length); };
  const pickThumb = (idx) => { playClick(); setPaused(true); setSelectedImage(idx); };

  const currentImg = imageSet[selectedImage] || { url: product.images[0], label: 'Front View' };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className="modal-close-btn" onClick={() => { playClick(); onClose(); }} aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal-grid">

          {/* ── LEFT: Gallery ── */}
          <div className="modal-gallery">

            {/* Main Image */}
            <div
              className="modal-main-image-wrap"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
                <img
                    key={`${product.id}-${selectedImage}`}
                    src={currentImg.url}
                    alt={`${product.name} – ${currentImg.label}`}
                    className="modal-main-image modal-img-slide"
                  />

                  {/* Prev / Next arrows */}
                  {imageSet.length > 1 && (
                    <>
                      <button className="modal-arrow modal-arrow-left" onClick={goPrev} aria-label="Previous">
                        <ChevronLeft size={20} />
                      </button>
                      <button className="modal-arrow modal-arrow-right" onClick={goNext} aria-label="Next">
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Dot navigation */}
                  {imageSet.length > 1 && (
                    <div className="modal-dots">
                      {imageSet.map((_, idx) => (
                        <button
                          key={idx}
                          className={`modal-dot ${selectedImage === idx ? 'active' : ''}`}
                          onClick={() => pickThumb(idx)}
                        />
                      ))}
                    </div>
                  )}

                  {/* Auto-slide progress bar */}
                  {!paused && imageSet.length > 1 && (
                    <div className="modal-progress-bar" key={`pb-${selectedImage}`}>
                      <div className="modal-progress-fill" />
                    </div>
                  )}

              {/* Image label */}
              <div className="modal-img-tag">
                <Sparkles size={13} /> {currentImg.label}
              </div>
            </div>

            {/* Thumbnail strip */}
            {imageSet.length > 1 && (
              <div className="modal-thumbnails">
                {imageSet.map((imgObj, idx) => (
                  <button
                    key={idx}
                    className={`modal-thumb-btn ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => pickThumb(idx)}
                    title={imgObj.label}
                  >
                    <img src={imgObj.url} alt={imgObj.label} />
                    <span className="thumb-label">{imgObj.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Trust strip */}
            <div className="modal-trust-strip">
              <div className="trust-pill"><ShieldCheck size={16} className="text-brass" /><span>{product.warranty}</span></div>
              <div className="trust-pill"><Truck size={16} className="text-brass" /><span>{product.delivery}</span></div>
              <div className="trust-pill"><RefreshCw size={16} className="text-brass" /><span>Verified Workshop Quality &amp; Fast Delivery</span></div>
            </div>
          </div>

          {/* ── RIGHT: Details ── */}
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

            <div className="modal-price-box">
              <div className="price-main">
                <span className="price-big">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="save-badge">Direct Workshop Price</span>
              </div>
              <p className="price-note">Inclusive of GST, Free Transit Insurance &amp; Room Setup.</p>
            </div>

            <p className="modal-desc">{product.description}</p>

            {/* Tabs */}
            <div className="modal-tab-header">
              <button className={`modal-tab ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => { playClick(); setActiveTab('specs'); }}>
                <Award size={14} /> Full Specifications
              </button>
              <button className={`modal-tab ${activeTab === 'dimensions' ? 'active' : ''}`} onClick={() => { playClick(); setActiveTab('dimensions'); }}>
                <Ruler size={14} /> Dimensions &amp; Fit
              </button>
            </div>

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
                </div>
              )}
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
