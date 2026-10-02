import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
      name: 'Sarah Johnson',
          role: 'Fashion Designer',
              avatar: 'S',
                  text: 'VeloraCart has completely transformed my shopping experience. The quality of products and the attention to detail is absolutely remarkable.',
                      rating: 5
                        },
                          {
                              name: 'Michael Chen',
                                  role: 'Tech Entrepreneur',
                                      avatar: 'M',
                                          text: 'The premium selection and lightning-fast delivery make this my go-to shopping destination. Customer service is exceptional!',
                                              rating: 5
                                                },
                                                  {
                                                      name: 'Emily Rodriguez',
                                                          role: 'Content Creator',
                                                              avatar: 'E',
                                                                  text: 'I love how easy it is to find exactly what I need. The curated collections are always on trend and the prices are very competitive.',
                                                                      rating: 5
                                                                        },
                                                                        ];

                                                                        const Testimonials = () => {
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
                                                                                                                <section className="testimonials" ref={ref}>
                                                                                                                      <div className="section-container">
                                                                                                                              <div className="section-header fade-up">
                                                                                                                                        <div className="section-badge">💬 Reviews</div>
                                                                                                                                                  <h2 className="section-title">What Customers <span>Say</span></h2>
                                                                                                                                                            <p className="section-desc">Trusted by thousands of happy shoppers</p>
                                                                                                                                                                    </div>

                                                                                                                                                                            <div className="testimonials-grid">
                                                                                                                                                                                      {testimonials.map((t, i) => (
                                                                                                                                                                                                  <div key={i} className={`testimonial-card fade-up stagger-${i + 1}`}>
                                                                                                                                                                                                                <div className="testimonial-quote">"</div>
                                                                                                                                                                                                                              <div className="testimonial-stars">
                                                                                                                                                                                                                                              {'⭐'.repeat(t.rating)}
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                          <p className="testimonial-text">"{t.text}"</p>
                                                                                                                                                                                                                                                                                        <div className="testimonial-author">
                                                                                                                                                                                                                                                                                                        <div className="testimonial-avatar">{t.avatar}</div>
                                                                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                                                                                          <div className="testimonial-name">{t.name}</div>
                                                                                                                                                                                                                                                                                                                                                            <div className="testimonial-role">{t.role}</div>
                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                                                                                                                                                    export default Testimonials;