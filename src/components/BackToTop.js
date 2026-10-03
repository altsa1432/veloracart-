import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 400);
            window.addEventListener('scroll', handler);
                return () => window.removeEventListener('scroll', handler);
                  }, []);
                    return (
                        <button className={`back-to-top ${visible ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                              <span>↑</span>
                                  </button>
                                    );
                                    };

                                    export default BackToTop;