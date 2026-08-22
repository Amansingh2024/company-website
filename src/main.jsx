import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';

import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FreeDeliverySection from './components/FreeDeliverySection';
import ProductGrid from './components/ProductGrid';
import RoomVisualizer from './components/RoomVisualizer';
import Craftsmanship from './components/Craftsmanship';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CinematicVideoModal from './components/CinematicVideoModal';
import TypewriterModal from './components/TypewriterModal';
import { MessageCircle, Sparkles } from 'lucide-react';
import { playChime } from './utils/audio';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isTypewriterModalOpen, setIsTypewriterModalOpen] = useState(false);

  // Automatically open the Typewriter Consultation Form on website visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypewriterModalOpen(true);
      playChime();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Luxury Wood Grain Film Effect */}
      <div className="luxury-grain-overlay" />

      {/* Top Navbar with sound */}
      <Navbar
        onSelectCategory={handleCategoryChange}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Hero Section with Three.js 3D Studio Stage & Live Typewriter */}
      <Hero3D
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
        onSelectCategory={handleCategoryChange}
        onOpenTypewriterModal={() => setIsTypewriterModalOpen(true)}
      />

      {/* Free Delivery Promise Section (500 KM radius showcase like Kanha) */}
      <FreeDeliverySection 
        onOpenTypewriterModal={() => setIsTypewriterModalOpen(true)}
      />

      {/* Interactive 3D Room Visualizer */}
      <RoomVisualizer onSelectCategory={handleCategoryChange} />

      {/* Master Catalog with 9 Beds, 8 Sofas, 8 Electronics */}
      <ProductGrid
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onQuickView={(product) => setActiveModalProduct(product)}
      />

      {/* Workshop Craftsmanship Heritage */}
      <Craftsmanship />

      {/* Verified Reviews & Trust Stats */}
      <Testimonials />

      {/* Interactive FAQ Section */}
      <FAQSection />

      {/* Showroom Map & Instant WhatsApp Quote Booking (Patna Location) */}
      <ContactSection />

      {/* Footer */}
      <Footer onSelectCategory={handleCategoryChange} />

      {/* Welcome Typewriter Quote & Booking Modal (Opens on load) */}
      <TypewriterModal 
        isOpen={isTypewriterModalOpen}
        onClose={() => setIsTypewriterModalOpen(false)}
      />

      {/* Product Quick-View 3D Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
        />
      )}

      {/* Cinematic 3D Showreel Video Modal */}
      <CinematicVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        title="Direct WhatsApp Showroom Assistance"
        aria-label="Direct WhatsApp Showroom Assistance"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
