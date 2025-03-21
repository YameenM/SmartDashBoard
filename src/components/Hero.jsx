import React, { useEffect } from 'react';
import dashboardImage from '../assets/dashboard-hero.webp';
import { startTypewriter } from '../utils/typewriter';
import { DollarSign, TrendingUp, BarChart3 } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    startTypewriter(
      ['Simplify your Data.', 'Analyze in Real-Time.', 'Grow Confidently.'],
      'typewriter'
    );
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* 🔆 Glowing Orange Blob */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-orange-400 opacity-30 rounded-full blur-3xl z-0 translate-x-1/2 -translate-y-1/2" />

      {/* Floating Dots */}
      <div className="absolute left-10 top-10 w-3 h-3 bg-orange-400 rounded-full animate-pulse z-0" />
      <div className="absolute right-24 bottom-20 w-4 h-4 bg-orange-300 rounded-full animate-ping z-0" />
      <div className="absolute left-1/2 bottom-10 w-2 h-2 bg-orange-400 rounded-full animate-bounce z-0" />
      <div className="absolute left-20 top-10 w-3 h-3 bg-orange-400 rounded-full animate-pulse z-0" />
      <div className="absolute right-30 bottom-20 w-4 h-4 bg-orange-300 rounded-full animate-ping z-0" />
      <div className="absolute left-18 bottom-10 w-2 h-2 bg-orange-400 rounded-full animate-bounce z-0" />
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 w-full">
          {/* Icons Row */}
          <div className="flex gap-4 mb-4 animate-fadeIn">
            <div className="p-3 bg-white rounded-full shadow-lg text-orange-500 hover:scale-105 hover:animate-bounce duration-300 delay-10 transition-transform">
              <DollarSign size={28} />
            </div>
            <div className="p-3 bg-white rounded-full shadow-lg text-blue-500 hover:scale-105 hover:animate-bounce duration-300 delay-15 transition-transform">
              <TrendingUp size={28} />
            </div>
            <div className="p-3 bg-white rounded-full shadow-lg text-green-500 hover:scale-105 hover:animate-bounce duration-300 delay-20 transition-transform">
              <BarChart3 size={28} />
            </div>
          </div>

          {/* Heading & Subheading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4 text-center md:text-left">
            SmartDashboard
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 h-10 mb-4">
            <span id="typewriter" />
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Real-time insights to help you grow faster and smarter.
          </p>

          <p className="text-gray-600 text-lg max-w-xl mb-6 text-center md:text-left">
            Transform your business insights with our powerful and modern analytics dashboard.
          </p>

          <div className="text-center md:text-left">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 ml-20 md:ml-24">
          <img
            src={dashboardImage}
            alt="Dashboard Preview"
            className="w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-2xl shadow-orange-200 transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-gray-500 text-sm mb-2">Scroll Down</div>
        <div className="animate-bounce text-orange-500 text-2xl">↓</div>
      </div>
    </section>
  );
};

export default Hero;
