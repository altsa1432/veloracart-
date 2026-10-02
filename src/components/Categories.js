import React, { useEffect, useRef } from 'react';

const categories = [
  { icon: '👟', name: 'Footwear', count: '2.4K' },
    { icon: '👕', name: 'Clothing', count: '3.1K' },
      { icon: '⌚', name: 'Watches', count: '890' },
        { icon: '📱', name: 'Electronics', count: '1.5K' },
          { icon: '💎', name: 'Jewelry', count: '670' },
            { icon: '🎒', name: 'Bags', count: '1.2K' },
            ];

            const Categories = () => {
              const ref = useRef();

                useEffect(() => {
                    const observer = new IntersectionObserver(
                          entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
                                { threshold: 0.1 }
                                    );
                                        ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
                                            return () => ref.current?.querySelectorAll('.fade-up').forEach(el => observer.unobserve(el));
                                              }, []);

                                                return (
                                                    <section className="categories" id="categories" ref={ref}>
                                                          <div className="section-container">
                                                                  <div className="section-header fade-up">
                                                                            <div className="section-badge">✨ Browse</div>
                                                                                      <h2 className="section-title">Shop by <span>Category</span></h2>
                                                                                                <p className="section-desc">Explore our wide range of premium categories</p>
                                                                                                        </div>

                                                                                                                <div className="categories-grid">
                                                                                                                          {categories.map((cat, i) => (
                                                                                                                                      <div key={i} className={`category-card fade-up stagger-${i + 1}`}>
                                                                                                                                                    <div className="category-icon">{cat.icon}</div>
                                                                                                                                                                  <div className="category-name">{cat.name}</div>
                                                                                                                                                                                <div className="category-count">{cat.count} items</div>
                                                                                                                                                                                            </div>
                                                                                                                                                                                                      ))}
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          };

                                                                                                                                                                                                                          export default Categories;