
import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';

const SinglePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with centered logo */}
      <header className="w-full bg-black py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <Link to="/" className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/0347627e-6356-4431-b176-5a32a4de480f.png" 
              alt="Company Logo" 
              className="h-24 w-auto" 
            />
          </Link>
        </div>
      </header>
      
      {/* Main content with video player */}
      <main className="flex-grow container mx-auto px-0 py-0">
        <div className="w-full mx-auto">
          <div className="overflow-hidden rounded-lg">
            <VideoPlayer 
              src="/IMG_6930.MP4" 
              poster="/lovable-uploads/6b2b35fb-df89-43f6-a969-6bdee9f7b644.png"
            />
          </div>
        </div>
      </main>

      {/* Slogans Section - Similar to Index page */}
      <section className="w-full">
        {/* Purpose Slogan */}
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')",
            filter: "brightness(0.65)"
          }}></div>
          <div className="relative z-10 py-20 px-6 md:px-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider">PURPOSE</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                Greek God is more than clothing. It's a reminder of who you are and what you're capable of.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                The greatest warriors, thinkers, and leaders of history lived with discipline, strength, and purpose.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                We are their descendants. That same fire runs in our veins.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-center font-light">
                Every design is a symbol—a call to awaken that power within.
              </p>
            </div>
          </div>
        </div>
        
        {/* Vision Slogan */}
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')",
            filter: "brightness(0.65)"
          }}></div>
          <div className="relative z-10 py-20 px-6 md:px-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider">VISION</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                To create a brand that embodies high performance—mentally, physically, and spiritually.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                A movement for those who refuse to settle, who push limits, and live with intention.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-center font-light">
                Each piece is crafted to remind you of the legacy you carry—because greatness isn't just in the past. It's in you.
              </p>
            </div>
          </div>
        </div>
        
        {/* Legacy Slogan */}
        <div className="relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
            filter: "brightness(0.65)"
          }}></div>
          <div className="relative z-10 py-20 px-6 md:px-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-caesar mb-8 text-center tracking-wider">LEGACY</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                Greek God isn't about the past—it's about unlocking the power already in you.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center font-light">
                This is for those who refuse to be ordinary. Who refuse to live small.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-center font-light">
                It's time to own your legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Newsletter component that hovers until footer is visible */}
      <Newsletter />
    </div>
  );
};

export default SinglePage;
