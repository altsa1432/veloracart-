import React from 'react';
import { brands } from '../data/products';

const Brands = () => {
  return (
      <section className="brands-3d">
            <div className="brands-scroll-track">
                    {[...brands, ...brands].map((brand, i) => (
                              <div key={i} className="brand-item-3d">{brand}</div>
                                      ))}
                                            </div>
                                                </section>
                                                  );
                                                  };

                                                  export default Brands;