
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Our Story</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fade-in">
              Crafting exceptional products since 2010, we believe in quality, sustainability, and timeless design.
            </p>
            <div className="w-full h-[400px] md:h-[500px] animate-fade-in bg-black overflow-hidden">
              <img 
                src="/brand-story.webp" 
                alt="Our Brand Story" 
                className="w-full h-full object-cover border-0 m-0 p-0"
              />
            </div>
          </div>
        </section>
        
        {/* Slogan Section with Background */}
        <section className="w-full py-24 relative" style={{ 
          backgroundImage: 'url(/bg.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 style={{fontFamily: '"Caesar Dressing", cursive'}} className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-widest">WEAR THE POWER, OWN THE MYTH</h2>
              <p style={{fontFamily: '"Caesar Dressing", cursive'}} className="text-3xl md:text-4xl text-white tracking-widest py-4">ANCIENT ROOTS, MODERN EXPRESSION</p>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-2xl mx-auto" />
        
        {/* Mission Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                We believe in creating products that stand the test of time - both in quality and design. Our mission is to provide you with products that become more meaningful with every use.
              </p>
              <p className="text-gray-300 mb-4">
                Sustainability isn't just a buzzword for us; it's at the core of everything we do. From sourcing raw materials to our manufacturing processes, we constantly strive to minimize our environmental footprint.
              </p>
              <p className="text-gray-300">
                Through our commitment to ethical practices and timeless design, we aim to redefine what it means to create products that are good for you and the planet.
              </p>
            </div>
            <div className="bg-gray-900 p-12 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Quality</h4>
                    <p className="text-gray-600 text-sm">Meticulous attention to detail and superior craftsmanship</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Sustainability</h4>
                    <p className="text-gray-600 text-sm">Environmentally conscious materials and processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Transparency</h4>
                    <p className="text-gray-600 text-sm">Honest communication about our products and processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-black rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation</h4>
                    <p className="text-gray-600 text-sm">Continuously improving and evolving our designs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-2xl mx-auto" />
        
        {/* Team Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-gray-600 mb-12">
              Our diverse team of passionate individuals works tirelessly to bring our vision to life. 
              Meet the people behind our brand who make everything possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alexandra Chen",
                  role: "Founder & Creative Director",
                  bio: "With over 15 years of experience in design, Alexandra brings her unique vision and expertise to every aspect of our brand."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Head of Product Development",
                  bio: "Michael's innovative approach and attention to detail ensure that our products are both beautiful and functional."
                },
                {
                  name: "Sarah Johnson",
                  role: "Sustainability Officer",
                  bio: "Sarah leads our sustainability initiatives, ensuring we maintain the highest environmental standards across all operations."
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
