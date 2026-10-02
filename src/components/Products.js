import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

const allProducts = [
  { id: 1, emoji: '👟', name: 'Air Max Velora Pro', category: 'Footwear', price: 299, oldPrice: 499, badge: 'hot', rating: 4.9, reviews: 342, colors: ['#a855f7', '#6366f1', '#ec4899'], desc: 'Premium running shoes with advanced cushioning technology for ultimate comfort and style.' },
    { id: 2, emoji: '⌚', name: 'Chrono Luxe Watch', category: 'Watches', price: 599, oldPrice: 899, badge: 'new', rating: 4.8, reviews: 218, colors: ['#f59e0b', '#94a3b8', '#1a1a25'], desc: 'Elegant timepiece crafted with precision engineering and premium materials.' },
      { id: 3, emoji: '🎧', name: 'Sonic Elite Headphones', category: 'Electronics', price: 199, oldPrice: 349, badge: 'sale', rating: 4.7, reviews: 567, colors: ['#1a1a25', '#a855f7', '#ef4444'], desc: 'Immersive wireless headphones with active noise cancellation and 40hr battery.' },
        { id: 4, emoji: '👜', name: 'Luxe Leather Tote', category: 'Bags', price: 449, oldPrice: 699, badge: 'new', rating: 4.9, reviews: 134, colors: ['#92400e', '#1a1a25', '#be185d'], desc: 'Handcrafted Italian leather tote bag with spacious compartments.' },
          { id: 5, emoji: '🕶️', name: 'Aero Sunglasses', category: 'Accessories', price: 179, oldPrice: 299, badge: 'hot', rating: 4.6, reviews: 456, colors: ['#1a1a25', '#f59e0b', '#6366f1'], desc: 'UV400 polarized lenses with lightweight titanium frame.' },
            { id: 6, emoji: '📱', name: 'Nexus Ultra Phone', category: 'Electronics', price: 999, oldPrice: 1299, badge: 'new', rating: 4.8, reviews: 892, colors: ['#94a3b8', '#1a1a25', '#a855f7'], desc: 'Flagship smartphone with 200MP camera and all-day battery life.' },
              { id: 7, emoji: '👕', name: 'Premium Cotton Tee', category: 'Clothing', price: 89, oldPrice: 149, badge: 'sale', rating: 4.5, reviews: 723, colors: ['#ffffff', '#1a1a25', '#6366f1'], desc: 'Ultra-soft organic cotton t-shirt with a perfect relaxed fit.' },
                { id: 8, emoji: '💍', name: 'Diamond Ring Velora', category: 'Jewelry', price: 1299, oldPrice: 1999, badge: 'hot', rating: 5.0, reviews: 89, colors: ['#f59e0b', '#94a3b8', '#e11d48'], desc: 'Stunning 18K gold ring with ethically sourced diamonds.' },
                  { id: 9, emoji: '🎮', name: 'Pro Gaming Controller', category: 'Electronics', price: 149, oldPrice: 229, badge: 'sale', rating: 4.7, reviews: 1203, colors: ['#1a1a25', '#ef4444', '#6366f1'], desc: 'Professional-grade controller with haptic feedback and low latency.' },
                    { id: 10, emoji: '👞', name: 'Oxford Classic Shoes', category: 'Footwear', price: 349, oldPrice: 549, badge: 'new', rating: 4.8, reviews: 267, colors: ['#92400e', '#1a1a25', '#78350f'], desc: 'Handcrafted leather Oxford shoes for the modern gentleman.' },
                      { id: 11, emoji: '🧴', name: 'Velora Skincare Set', category: 'Beauty', price: 129, oldPrice: 199, badge: 'hot', rating: 4.6, reviews: 534, colors: ['#ffffff', '#fbbf24', '#a855f7'], desc: 'Complete skincare routine with premium natural ingredients.' },
                        { id: 12, emoji: '🎒', name: 'Urban Tech Backpack', category: 'Bags', price: 199, oldPrice: 329, badge: 'sale', rating: 4.7, reviews: 412, colors: ['#1a1a25', '#6366f1', '#059669'], desc: 'Water-resistant backpack with USB charging port and laptop compartment.' },
                        ];

                        const tabs = ['All', 'Footwear', 'Electronics', 'Clothing', 'Watches', 'Bags'];

                        const Products = ({ onProductClick }) => {
                          const [activeTab, setActiveTab] = useState('All');
                            const ref = useRef();

                              const filtered = activeTab === 'All'
                                  ? allProducts
                                      : allProducts.filter(p => p.category === activeTab);

                                        useEffect(() => {
                                            const observer = new IntersectionObserver(
                                                  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
                                                        { threshold: 0.05 }
                                                            );
                                                                ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
                                                                    return () => ref.current?.querySelectorAll('.fade-up').forEach(el => observer.unobserve(el));
                                                                      }, [activeTab]);

                                                                        return (
                                                                            <section className="products" id="products" ref={ref}>
                                                                                  <div className="section-container">
                                                                                          <div className="section-header fade-up">
                                                                                                    <div className="section-badge">🔥 Trending</div>
                                                                                                              <h2 className="section-title">Featured <span>Products</span></h2>
                                                                                                                        <p className="section-desc">Handpicked premium products just for you</p>
                                                                                                                                </div>

                                                                                                                                        <div className="products-tabs fade-up">
                                                                                                                                                  {tabs.map(tab => (
                                                                                                                                                              <button
                                                                                                                                                                            key={tab}
                                                                                                                                                                                          className={`product-tab ${activeTab === tab ? 'active' : ''}`}
                                                                                                                                                                                                        onClick={() => setActiveTab(tab)}
                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                  {tab}
                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                        <div className="products-grid">
                                                                                                                                                                                                                                                                                  {filtered.map((product, i) => (
                                                                                                                                                                                                                                                                                              <ProductCard
                                                                                                                                                                                                                                                                                                            key={product.id}
                                                                                                                                                                                                                                                                                                                          product={product}
                                                                                                                                                                                                                                                                                                                                        index={i}
                                                                                                                                                                                                                                                                                                                                                      onClick={() => onProductClick(product)}
                                                                                                                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                export default Products;
                                                                                                                                                                                                                                                                                                                                                                                                export { allProducts };