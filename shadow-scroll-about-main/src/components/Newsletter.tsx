
import React, { useEffect, useRef, useState } from 'react';

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observer to detect when footer is in view
    const footerElement = document.querySelector('footer');
    
    if (footerElement && newsletterRef.current) {
      footerObserverRef.current = new IntersectionObserver(
        (entries) => {
          // When footer enters viewport, hide newsletter
          if (entries[0].isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      footerObserverRef.current.observe(footerElement);
    }
    
    return () => {
      if (footerObserverRef.current && footerElement) {
        footerObserverRef.current.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div 
      ref={newsletterRef}
      className={`newsletter-sticky ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="container mx-auto px-4">
        <div className="relative w-full md:max-w-xl mx-auto">
          <div className="relative overflow-hidden rounded-md">
            <div className="bg-black p-3 rounded-md flex flex-col items-center justify-between">
              <div className="text-white font-bold text-lg mb-2 text-center">
                Scroll For Newsletter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
