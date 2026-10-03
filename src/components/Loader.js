import React from 'react';

const Loader = () => {
  return (
      <div className="loader-screen">
            <div className="loader-bg-orbs">
                    <div className="orb orb-1" />
                            <div className="orb orb-2" />
                                    <div className="orb orb-3" />
                                          </div>
                                                <div className="loader-content">
                                                        <div className="loader-3d-cube">
                                                                  <div className="cube-face front">V</div>
                                                                            <div className="cube-face back">C</div>
                                                                                      <div className="cube-face right">🛒</div>
                                                                                                <div className="cube-face left">💎</div>
                                                                                                          <div className="cube-face top">✨</div>
                                                                                                                    <div className="cube-face bottom">🚀</div>
                                                                                                                            </div>
                                                                                                                                    <h1 className="loader-brand">VELORA<span>CART</span></h1>
                                                                                                                                            <p className="loader-tagline">Luxury Shopping Experience</p>
                                                                                                                                                    <div className="loader-progress">
                                                                                                                                                              <div className="loader-progress-bar" />
                                                                                                                                                                      </div>
                                                                                                                                                                              <p className="loader-status">Loading Premium Experience...</p>
                                                                                                                                                                                    </div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                          );
                                                                                                                                                                                          };

                                                                                                                                                                                          export default Loader;