
import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Add EmailOctopus form script
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/700e70e4-12b4-11f0-8fb3-0591309124e6.js';
    script.async = true;
    script.setAttribute('data-form', '700e70e4-12b4-11f0-8fb3-0591309124e6');
    
    // Add script to footer newsletter container
    const container = document.getElementById('footer-newsletter-container');
    if (container) {
      container.appendChild(script);
    }
    
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-white font-caesar text-xl md:text-2xl mb-4 text-center tracking-wider">
            
          </div>
          <div id="footer-newsletter-container" className="w-full flex justify-center"></div>
          
          <div className="mt-4 pt-2 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} GreekGod. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
