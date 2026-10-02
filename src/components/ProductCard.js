import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index, onClick }) => {
  const [wishlisted, setWishlisted] = useState(false);
    const { addToCart } = useCart();

      const handleAddToCart = (e) => {
          e.stopPropagation();
              addToCart(product);
                };

                  const handleWishlist = (e) => {
                      e.stopPropagation();
                          setWishlisted(!wishlisted);
                            };

                              return (
                                  <div className={`product-card fade-up stagger-${(index % 4) + 1}`} onClick={onClick}>
                                        <div className="product-image">
                                                <div className="product-badges">
                                                          {product.badge === 'new' && <span className="product-badge product-badge-new">New</span>}
                                                                    {product.badge === 'sale' && <span className="product-badge product-badge-sale">Sale</span>}
                                                                              {product.badge === 'hot' && <span className="product-badge product-badge-hot">🔥 Hot</span>}
                                                                                      </div>

                                                                                              <button
                                                                                                        className={`product-wishlist ${wishlisted ? 'active' : ''}`}
                                                                                                                  onClick={handleWishlist}
                                                                                                                          >
                                                                                                                                    {wishlisted ? '❤️' : '🤍'}
                                                                                                                                            </button>

                                                                                                                                                    <span className="product-image-emoji">{product.emoji}</span>

                                                                                                                                                            <button className="product-quick-add" onClick={handleAddToCart}>
                                                                                                                                                                      🛒 Add to Cart
                                                                                                                                                                              </button>
                                                                                                                                                                                    </div>

                                                                                                                                                                                          <div className="product-info">
                                                                                                                                                                                                  <div className="product-category">{product.category}</div>
                                                                                                                                                                                                          <div className="product-name">{product.name}</div>
                                                                                                                                                                                                                  <div className="product-rating">
                                                                                                                                                                                                                            <div className="product-stars">
                                                                                                                                                                                                                                        {'★'.repeat(Math.floor(product.rating))}
                                                                                                                                                                                                                                                    {product.rating % 1 !== 0 && '☆'}
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                        <span className="product-rating-count">({product.reviews})</span>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                        <div className="product-price-row">
                                                                                                                                                                                                                                                                                                  <div>
                                                                                                                                                                                                                                                                                                              <span className="product-price">${product.price}</span>
                                                                                                                                                                                                                                                                                                                          <span className="product-old-price">${product.oldPrice}</span>
                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                              <div className="product-colors">
                                                                                                                                                                                                                                                                                                                                                          {product.colors?.map((color, i) => (
                                                                                                                                                                                                                                                                                                                                                                        <span key={i} className="product-color" style={{ background: color }} />
                                                                                                                                                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                                                                                                                                                                                  export default ProductCard;