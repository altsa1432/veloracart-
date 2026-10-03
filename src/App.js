import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Loader from './components/Loader';
import LoginGate from './components/LoginGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreeDBackground from './components/ThreeDBackground';
import Categories from './components/Categories';
import Products from './components/Products';
import Deals from './components/Deals';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import AdminPanel from './components/AdminPanel';
import ChatWidget from './components/ChatWidget';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import Notifications from './components/Notifications';

function MainApp() {
  const { loading, user, isAdminPanelOpen } = useApp();

    if (loading) return <Loader />;
      if (!user) return <LoginGate />;
        if (isAdminPanelOpen) return <AdminPanel />;

          return (
              <div className="app">
                    <ThreeDBackground />
                          <ScrollProgress />
                                <Navbar />
                                      <main>
                                              <Hero />
                                                      <Categories />
                                                              <Products />
                                                                      <Deals />
                                                                              <Features />
                                                                                      <Brands />
                                                                                              <Testimonials />
                                                                                                      <Newsletter />
                                                                                                            </main>
                                                                                                                  <Footer />
                                                                                                                        <Cart />
                                                                                                                              <Wishlist />
                                                                                                                                    <ChatWidget />
                                                                                                                                          <BackToTop />
                                                                                                                                                <Notifications />
                                                                                                                                                    </div>
                                                                                                                                                      );
                                                                                                                                                      }

                                                                                                                                                      export default function App() {
                                                                                                                                                        return (
                                                                                                                                                            <AppProvider>
                                                                                                                                                                  <MainApp />
                                                                                                                                                                      </AppProvider>
                                                                                                                                                                        );
                                                                                                                                                                        }