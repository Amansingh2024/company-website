import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal, Sparkles, BedDouble, Armchair, Tv, Layers, Filter } from 'lucide-react';
import { playClick, playPop } from '../utils/audio';

export default function ProductGrid({ 
  selectedCategory, 
  onSelectCategory, 
  onQuickView, 
  onAddToCart, 
  cartItems 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'rating' | 'name-asc'
  const [filterBestsellerOnly, setFilterBestsellerOnly] = useState(false);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'BedDouble': return <BedDouble size={16} />;
      case 'Armchair': return <Armchair size={16} />;
      case 'Tv': return <Tv size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Bestseller filter
      if (filterBestsellerOnly && !item.isBestseller) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchSub = item.subtitle.toLowerCase().includes(q);
        const matchMat = item.material.toLowerCase().includes(q);
        const matchCat = item.categoryName.toLowerCase().includes(q);
        return matchName || matchSub || matchMat || matchCat;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      // Default: bestseller first, then id
      if (a.isBestseller && !b.isBestseller) return -1;
      if (!a.isBestseller && b.isBestseller) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy, filterBestsellerOnly]);

  const cartIdSet = useMemo(() => {
    return new Set(cartItems.map(item => item.id));
  }, [cartItems]);

  return (
    <section className="catalog-section" id="collections">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-split">
          <div>
            <div className="eyebrow-badge">
              <span>The Complete Master Collection</span>
            </div>
            <h2 className="section-title">
              Beds, Sofas &amp; Electronics <br />
              <em>Built for Indian Lifestyles.</em>
            </h2>
            <p className="section-subtitle">
              Featuring 9 solid-wood beds, 8 handcrafted sofas, and 8 top-tier smart home electronics.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="catalog-search-wrap">
            <Search size={18} className="search-icon" />
            <input 
              type="text"
              placeholder="Search beds, sofas, Smart TVs, ACs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalog-search-input"
            />
            {searchQuery && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs Bar & Filters */}
        <div className="filter-toolbar">
          <div className="category-tabs" role="tablist">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`category-tab ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    playClick();
                    onSelectCategory(cat.id);
                  }}
                  role="tab"
                  aria-selected={isActive}
                >
                  {getCategoryIcon(cat.icon)}
                  <span className="tab-name">{cat.name}</span>
                  <span className="tab-counter">{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* Right Sort Controls */}
          <div className="filter-actions">
            <button 
              className={`filter-toggle-btn ${filterBestsellerOnly ? 'active' : ''}`}
              onClick={() => {
                playPop();
                setFilterBestsellerOnly(!filterBestsellerOnly);
              }}
            >
              <Sparkles size={14} />
              <span>Bestsellers Only</span>
            </button>

            <div className="sort-dropdown-wrap">
              <SlidersHorizontal size={14} className="sort-icon" />
              <select 
                value={sortBy}
                onChange={(e) => {
                  playClick();
                  setSortBy(e.target.value);
                }}
                className="sort-select"
              >
                <option value="popular">Featured &amp; Bestsellers</option>
                <option value="rating">Top Customer Rated</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-meta-bar">
          <span>Showing <b>{filteredProducts.length}</b> verified creations</span>
          {searchQuery && (
            <span className="search-query-tag">Filtered by "{searchQuery}"</span>
          )}
        </div>

        {/* Products Grid with 3D Cards */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid-3d">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isInCart={cartIdSet.has(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <Filter size={42} className="no-res-icon" />
            <h3>No products found</h3>
            <p>Try searching for different keywords or clear your active filters.</p>
            <button 
              className="btn-luxury-primary"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
                setFilterBestsellerOnly(false);
              }}
            >
              View All 25 Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
