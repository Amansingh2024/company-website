import React, { useRef, useState } from 'react';
import { Eye, Star, Sparkles } from 'lucide-react';
import { playHover, playClick, playPop } from '../utils/audio';
import { getProductViews } from '../utils/productViews';

export default function ProductCard({ 
  product, 
  onQuickView
}) {
  const cardRef = useRef(null);
  const galleryViews = getProductViews(product);
  const [tiltStyle, setTiltStyle] = useState({});
  const [sheenStyle, setSheenStyle] = useState({ opacity: 0 });
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`,
      transition: 'transform 0.1s ease-out'
    });

    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;
    setSheenStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(227,189,118,0.28) 0%, transparent 60%)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    });
    setSheenStyle({ opacity: 0, transition: 'opacity 0.4s ease' });
  };

  return (
    <div 
      className="p3d-card-wrapper"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => playHover()}
    >
      <div className="p3d-card" style={tiltStyle}>
        {/* Dynamic Light Sheen overlay */}
        <div className="p3d-sheen" style={sheenStyle} />

        {/* Media Container */}
        <div className="p3d-media" onClick={() => onQuickView(product)}>
          <img 
            src={galleryViews[activeImageIndex]?.url || galleryViews[0]?.url}
            alt={product.name}
            loading="lazy"
            className="p3d-image"
          />

          {/* Badges */}
          <div className="p3d-badge-stack">
            {product.isBestseller && (
              <span className="p3d-badge bestseller">
                <Sparkles size={11} /> Bestseller
              </span>
            )}
            <span className="p3d-badge discount">Direct Workshop</span>
          </div>

          {/* Fast Image dots if multiple */}
          {galleryViews.length > 1 && (
            <div className="p3d-dots" onClick={(e) => e.stopPropagation()}>
              {galleryViews.map((view, idx) => (
                <button
                  key={idx}
                  className={`p3d-dot ${activeImageIndex === idx ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    playPop();
                    setActiveImageIndex(idx);
                  }}
                  aria-label={view.label}
                />
              ))}
            </div>
          )}

          {/* Hover Quick View Overlay Action */}
          <div className="p3d-quickview-overlay">
            <button
              className="quickview-pill"
              onClick={(e) => {
                e.stopPropagation();
                playClick();
                onQuickView(product);
              }}
            >
              <Eye size={15} /> <span>Quick View</span>
            </button>
          </div>

        </div>

        {/* Card Body */}
        <div className="p3d-body">
          <div className="p3d-meta-row">
            <span className="p3d-tag">{product.tag || product.categoryName}</span>
            <div className="p3d-rating">
              <Star size={13} fill="#e3bd76" stroke="#e3bd76" />
              <span>{product.rating}</span>
              <small>({product.reviewsCount})</small>
            </div>
          </div>

          <h3 
            className="p3d-title" 
            title={product.name}
            onClick={() => onQuickView(product)}
          >
            {product.name}
          </h3>

          <p className="p3d-subtitle">{product.subtitle}</p>

          {/* Material / Specs brief */}
          <div className="p3d-brief-spec">
            <span className="spec-dot" />
            <span>{product.material.split('&')[0]}</span>
          </div>

          {/* Price Block */}
          <div className="p3d-price-block">
            <span className="price-main">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
