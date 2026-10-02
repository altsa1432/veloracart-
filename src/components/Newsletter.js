import React, { useState, useEffect, useRef } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
      const ref = useRef();

        const handleSubmit = (e) => {
            e.preventDefault();
                if (email) {
                      setSubscribed(true);
                            setEmail('');
                                  setTimeout(() => setSubscribed(false), 3000);
                                      }
                                        };

                                          useEffect(() => {
                                              const observer = new IntersectionObserver(
                                                    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
                                                          { threshold: 0.1 }
                                                              );
                                                                  ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
                                                                      return () => ref.current?.querySelectorAll('.fade-up').forEach(el => observer.unobserve(el));
                                                                        }, []);

                                                                          return (
                                                                              <section className="newsletter" ref={ref}>
                                                                                    <div className="section-container">
                                                                                            <div className="newsletter-box fade-up">
                                                                                                      <div className="newsletter-glow" />
                                                                                                                <h2 className="newsletter-title" style={{ position: 'relative' }}>
                                                                                                                            Stay in the <span style={{ background: 'var(--gradient1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Loop</span> ✨
                                                                                                                                      </h2>
                                                                                                                                                <p className="newsletter-desc">
                                                                                                                                                            Subscribe to get exclusive deals, early access to new collections, and 10% off your first order.
                                                                                                                                                                      </p>
                                                                                                                                                                                <form className="newsletter-form" onSubmit={handleSubmit}>
                                                                                                                                                                                            <input
                                                                                                                                                                                                          type="email"
                                                                                                                                                                                                                        className="newsletter-input"
                                                                                                                                                                                                                                      placeholder="Enter your email address"
                                                                                                                                                                                                                                                    value={email}
                                                                                                                                                                                                                                                                  onChange={e => setEmail(e.target.value)}
                                                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                                                          <button type="submit" className="newsletter-btn">
                                                                                                                                                                                                                                                                                                        {subscribed ? '✅ Subscribed!' : '🚀 Subscribe'}
                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                              </form>
                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                                                                                                                  export default Newsletter;