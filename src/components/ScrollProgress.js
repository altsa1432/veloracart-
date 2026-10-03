import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
              const total = document.documentElement.scrollHeight - window.innerHeight;
                    setProgress((window.scrollY / total) * 100);
                        };
                            window.addEventListener('scroll', handleScroll);
                                return () => window.removeEventListener('scroll', handleScroll);
                                  }, []);

                                    return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
                                    };

                                    export default ScrollProgress