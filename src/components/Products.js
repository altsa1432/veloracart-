import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../contexts/AppContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Products = () => {
  const { products, searchQuery } = useApp();
    const [activeTab, setActiveTab] = useState('All');
      const [selectedProduct, setSelectedProduct] = useState(null);
        const ref = useRef();

          const categories = ['All', ...new Set(products.map(p => p.category))];

            let filtered = activeTab === 'All' ? products : products.filter(p => p.category === activeTab);
              if (searchQuery) {
                  filtered = filtered.filter(p => 
                        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.category.toLowerCase().includes(searchQuery.toLowerCase())
                                  );
                                    }

                                      useEffect(() => {
                                          const observer = new IntersectionObserver(
                                                entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
                                                      { threshold: 0.05 }
                                                          );
                                                              ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
                                                                  return () => ref.current?.querySelectorAll('.fade-up').forEach(el => observer.unobserve(el));
                                                                    }, [activeTab, filtered.length]);

                                                                      return (
                                                                          <section className="products-3d" id="products" ref={ref}>
                                                                                <div className="section-container-3d">
                                                                                        <div className="section-header-3d fade-up">
                                                                                                  <div className="section-badge-3d">🔥 Trending</div>
                                                                                                            <h2 className="section-title-3d">Featured <span>Products</span></h2>
                                                                                                                      <p className="section-desc-3d">
                                                                                                                                  {searchQuery ? `Search results for "${searchQuery}"` : 'Handpicked premium products just for you'}
                                                                                                                                            </p>
                                                                                                                                                    </div>

                                                                                                                                                            <div className="products-tabs-3d fade-up">
                                                                                                                                                                      {categories.map(tab => (
                                                                                                                                                                                  <button
                                                                                                                                                                                                key={tab}
                                                                                                                                                                                                              className={`tab-3d ${activeTab === tab ? 'active' : ''}`}
                                                                                                                                                                                                                            onClick={() => setActiveTab(tab)}
                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                      {tab}
                                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                            {filtered.length === 0 ? (
                                                                                                                                                                                                                                                                                                      <div className="no-products-found">
                                                                                                                                                                                                                                                                                                                  <span>😢</span>
                                                                                                                                                                                                                                                                                                                              <p>No products found</p>
                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                ) : (
                                                                                                                                                                                                                                                                                                                                                          <div className="products-grid-3d">
                                                                                                                                                                                                                                                                                                                                                                      {filtered.map((product, i) => (
                                                                                                                                                                                                                                                                                                                                                                                    <div key={product.id} className={`fade-up stagger-${(i % 4) + 1}`}>
                                                                                                                                                                                                                                                                                                                                                                                                    <ProductCard product={product} onQuickView={setSelectedProduct} />
                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            {selectedProduct && (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                export default Products;