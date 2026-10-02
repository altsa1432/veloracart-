import React, { useEffect, useRef } from 'react';

const features = [
  { icon: '🚚', title: 'Free Shipping', desc: 'Free delivery on orders over $50 worldwide' },
    { icon: '🛡️', title: 'Secure Payment', desc: 'Your payments are protected with 256-bit encryption' },
      { icon: '🔄', title: 'Easy Returns', desc: '30-day hassle-free return policy on all items' },
        { icon: '💬', title: '24/7 Support', desc: 'Round the clock customer support via chat & call' },
        ];

        const Features = () => {
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
                                                <section className="features" id="about" ref={ref}>
                                                      <div className="section-container">
                                                              <div className="section-header fade-up">
                                                                        <div className="section-badge">💎 Why Us</div>
                                                                                  <h2 className="section-title">Why Choose <span>VeloraCart</span></h2>
                                                                                            <p className="section-desc">We deliver excellence in every aspect</p>
                                                                                                    </div>

                                                                                                            <div className="features-grid">
                                                                                                                      {features.map((f, i) => (
                                                                                                                                  <div key={i} className={`feature-card fade-up stagger-${i + 1}`}>
                                                                                                                                                <div className="feature-icon">{f.icon}</div>
                                                                                                                                                              <div className="feature-title">{f.title}</div>
                                                                                                                                                                            <div className="feature-desc">{f.desc}</div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                                  ))}
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                      };

                                                                                                                                                                                                                      export default Features;