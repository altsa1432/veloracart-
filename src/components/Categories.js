import React, { useEffect, useRef } from 'react';
import { categories } from '../data/products';
import { useApp } from '../contexts/AppContext';

const Categories = () => {
  const { setSearchQuery } = useApp();
    const ref = useRef();

      useEffect(() => {
          const observer = new IntersectionObserver(
                entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
                      { threshold: 0.1 }
                          );
                              ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
                                  return () => ref.current?.querySelectorAll('.fade-up').forEach(el => observer.unobserve(el));
                                    }, []);

                                      const handleCategoryClick = (catName) => {
                                          setSearchQuery(catName);
                                              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                                                };

                                                  return (
                                                      <section className="categories-3d" id="categories" ref={ref}>
                                                            <div className="section-container-3d">
                                                                    <div className="section-header-3d fade-up">
                                                                              <div className="section-badge-3d">✨ Browse</div>
                                                                                        <h2 className="section-title-3d">Shop by <span>Category</span></h2>
                                                                                                  <p className="section-desc-3d">Explore our wide range of premium categories</p>
                                                                                                          </div>

                                                                                                                  <div className="categories-grid-3d">
                                                                                                                            {categories.map((cat, i) => (
                                                                                                                                        <div 
                                                                                                                                                      key={i} 
                                                                                                                                                                    className={`category-card-3d fade-up stagger-${i + 1}`}
                                                                                                                                                                                  onClick={() => handleCategoryClick(cat.name)}
                                                                                                                                                                                                style={{ '--cat-color': cat.color }}
                                                                                                                                                                                                            >
                                                                                                                                                                                                                          <div className="category-icon-3d">{cat.icon}</div>
                                                                                                                                                                                                                                        <div className="category-name-3d">{cat.name}</div>
                                                                                                                                                                                                                                                      <div className="category-count-3d">{cat.count} items</div>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                export default Categories;