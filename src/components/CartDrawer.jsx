import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Ruler } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClick, playPop, playChime } from '../utils/audio';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart 
}) {
  const [customNote, setCustomNote] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPincode, setCustomerPincode] = useState('');

  if (!isOpen) return null;

  const handleSendWhatsAppQuote = () => {
    playChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    let itemsListText = cartItems.map((item, idx) => 
      `${idx + 1}. *${item.name}* (Category: ${item.categoryName}, Qty: ${item.quantity})`
    ).join('\n');

    const msg = encodeURIComponent(
      `Namaste Vishwakarma Furniture & Electronics! 🌸\n\n*OFFICIAL PRICE QUOTE REQUEST*\n` +
      (customerName ? `*Name:* ${customerName}\n` : '') +
      (customerPincode ? `*Delivery Pincode:* ${customerPincode}\n` : '') +
      `\n*SELECTED CREATIONS (${cartItems.length}):*\n${itemsListText}\n` +
      (customNote ? `\n*Additional Notes:* ${customNote}\n` : '') +
      `\nPlease share the best workshop price quote and delivery slot.`
    );

    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <ShoppingBag size={20} className="text-brass" />
            <h3>Your Custom Quote List</h3>
            <span className="cart-count-badge">{cartItems.length}</span>
          </div>
          <button 
            className="cart-close-btn"
            onClick={() => { playClick(); onClose(); }}
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className="cart-empty-state">
            <ShoppingBag size={48} className="empty-icon text-muted" />
            <h4>Your quote list is empty</h4>
            <p>Explore our 9 solid beds, 8 handcrafted sofas, and 8 smart electronics to build your custom home quote.</p>
            <button 
              className="btn-luxury-primary"
              onClick={() => { playClick(); onClose(); }}
            >
              <span>Explore Creations</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div className="cart-content-scroll">
            {/* Items List */}
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="cart-item-thumb"
                  />
                  <div className="cart-item-details">
                    <span className="cart-item-cat">{item.categoryName}</span>
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-quote-tag">
                      Item Details Available
                    </span>

                    {/* Quantity controls */}
                    <div className="cart-qty-row">
                      <div className="qty-control-box">
                        <button 
                          className="qty-btn"
                          onClick={() => {
                            playPop();
                            onUpdateQuantity(item.id, item.quantity - 1);
                          }}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => {
                            playPop();
                            onUpdateQuantity(item.id, item.quantity + 1);
                          }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button 
                        className="cart-remove-btn"
                        onClick={() => {
                          playClick();
                          onRemoveItem(item.id);
                        }}
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Customizer Notes Box */}
            <div className="cart-custom-box">
              <label className="custom-box-label">
                <Sparkles size={13} /> Additional Notes:
              </label>
              <textarea
                placeholder="E.g. Any special requirements or preferences..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="cart-textarea"
                rows={2}
              />
            </div>

            {/* Fast Details fields */}
            <div className="cart-fields-row">
              <input 
                type="text" 
                placeholder="Your Name (Optional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="cart-input"
              />
              <input 
                type="text" 
                placeholder="Delivery Pincode"
                value={customerPincode}
                onChange={(e) => setCustomerPincode(e.target.value)}
                className="cart-input"
              />
            </div>

            {/* Quote Benefits Summary */}
            <div className="cart-summary-box">
              <div className="summary-row">
                <span>Selected Items</span>
                <span className="text-brass">{cartItems.length} Products</span>
              </div>
              <div className="summary-row">
                <span>White-Glove Delivery &amp; Room Setup</span>
                <span className="text-brass">FREE</span>
              </div>
              <div className="summary-row">
                <span>Warranty Coverage</span>
                <span className="text-brass">Up to 10-Year Direct Guarantee</span>
              </div>
              <div className="summary-divider" />
              <div className="summary-row total-row">
                <span>Pricing Type</span>
                <span className="total-val">Direct Workshop Quote</span>
              </div>
            </div>

            {/* WhatsApp Checkout CTA */}
            <div className="cart-action-box">
              <button 
                className="btn-luxury-primary w-full cart-wa-submit"
                onClick={handleSendWhatsAppQuote}
              >
                <MessageCircle size={19} />
                <span>Get Complete Quote on WhatsApp</span>
              </button>
              <p className="cart-guarantee-note">
                <ShieldCheck size={14} className="text-brass" /> Direct workshop quote · Fast 15-minute response
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
