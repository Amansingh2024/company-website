import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';

import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductGrid from './components/ProductGrid';
import RoomVisualizer from './components/RoomVisualizer';
import Craftsmanship from './components/Craftsmanship';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CinematicVideoModal from './components/CinematicVideoModal';
import CartDrawer from './components/CartDrawer';
import { MessageCircle } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

      {/* Top Navbar with sound & cart */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={handleCategoryChange}
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Hero Section with Three.js 3D Studio Stage */}
      <Hero3D
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
        onSelectCategory={handleCategoryChange}
      />

      {/* Interactive 3D Room Visualizer */}
      <RoomVisualizer onSelectCategory={handleCategoryChange} />

      {/* Master Catalog with 9 Beds, 8 Sofas, 8 Electronics */}
      <ProductGrid
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onQuickView={(product) => setActiveModalProduct(product)}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
      />

      {/* Workshop Craftsmanship Heritage */}
      <Craftsmanship />

      {/* Verified Reviews & Trust Stats */}
      <Testimonials />

      {/* Interactive FAQ Section */}
      <FAQSection />

      {/* Showroom Map & Instant WhatsApp Quote Booking (Dariyapur Bazar) */}
      <ContactSection />

      {/* Footer */}
      <Footer onSelectCategory={handleCategoryChange} />

      {/* Product Quick-View 3D Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onAddToCart={handleAddToCart}
          isInCart={cartItems.some((item) => item.id === activeModalProduct.id)}
        />
      )}

      {/* Cinematic 3D Showreel Video Modal */}
      <CinematicVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* Custom Quote & Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
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
