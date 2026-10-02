import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import LoginGate from './components/LoginGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Deals from './components/Deals';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';

function App() {
  const [user, setUser] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
      const [showScrollTop, setShowScrollTop] = useState(false);
        const [toasts, setToasts] = useState([]);

          // Check for saved user
            useEffect(() => {
                const saved = localStorage.getItem('veloraUser');
                    if (saved) {
                          try {
                                  setUser(JSON.parse(saved));
                                        } catch (e) {
                                                localStorage.removeItem('veloraUser');
                                                      }
                                                          }
                                                            }, []);

                                                              // Scroll to top button visibility
                                                                useEffect(() => {
                                                                    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
                                                                        window.addEventListener('scroll', handleScroll);
                                                                            return () => window.removeEventListener('scroll', handleScroll);
                                                                              }, []);

                                                                                const handleLogin = (userData) => {
                                                                                    setUser(userData);
                                                                                        addToast(`Welcome, ${userData.name}! 🎉`);
                                                                                          };

                                                                                            const handleLogout = () => {
                                                                                                localStorage.removeItem('veloraUser');
                                                                                                    setUser(null);
                                                                                                      };

                                                                                                        const addToast = (message) => {
                                                                                                            const id = Date.now();
                                                                                                                setToasts(prev => [...prev, { id, message }]);
                                                                                                                    setTimeout(() => {
                                                                                                                          setToasts(prev => prev.filter(t => t.id !== id));
                                                                                                                              }, 3000);
                                                                                                                                };

                                                                                                                                  // Show login gate if no user
                                                                                                                                    if (!user) {
                                                                                                                                        return <LoginGate onLogin={handleLogin} />;
                                                                                                                                          }

                                                                                                                                            return (
                                                                                                                                                <CartProvider>
                                                                                                                                                      <div className="app">
                                                                                                                                                        import ParticleBackground from './components/ParticleBackground';
                                                                                                                                                              <Navbar user={user} onLogout={handleLogout} />
                                                                                                                                                                      <Hero />
                                                                                                                                                                              <Categories />
                                                                                                                                                                                      <Products onProductClick={setSelectedProduct} />
                                                                                                                                                                                              <Deals />
                                                                                                                                                                                                      <Features />
                                                                                                                                                                                                              <Testimonials />
                                                                                                                                                                                                                      <Newsletter />
                                                                                                                                                                                                                              <Footer />
                                                                                                                                                                                                                                      <Cart />

                                                                                                                                                                                                                                              {selectedProduct && (
                                                                                                                                                                                                                                                        <ProductModal
                                                                                                                                                                                                                                                                    product={selectedProduct}
                                                                                                                                                                                                                                                                                onClose={() => setSelectedProduct(null)}
                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                  )}

                                                                                                                                                                                                                                                                                                          {/* Toast Notifications */}
                                                                                                                                                                                                                                                                                                                  <div className="toast-container">
                                                                                                                                                                                                                                                                                                                            {toasts.map(toast => (
                                                                                                                                                                                                                                                                                                                                        <div key={toast.id} className="toast">
                                                                                                                                                                                                                                                                                                                                                      <div className="toast-icon">✅</div>
                                                                                                                                                                                                                                                                                                                                                                    <span className="toast-text">{toast.message}</span>
                                                                                                                                                                                                                                                                                                                                                                                  <button className="toast-close" onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}>
                                                                                                                                                                                                                                                                                                                                                                                                  ✕
                                                                                                                                                                                                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                      {/* Scroll to Top */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                              <button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ↑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </CartProvider>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        export default App;