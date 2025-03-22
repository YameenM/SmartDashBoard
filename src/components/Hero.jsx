import React, { useEffect } from 'react';
import dashboardImage from '../assets/dashboard-hero.webp';
import { startTypewriter } from '../utils/typewriter';
import { DollarSign, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';


const Hero = () => {
  useEffect(() => {
    startTypewriter(
      ['Simplify your Data.', 'Analyze in Real-Time.', 'Grow Confidently.'],
      'typewriter'
    );
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col justify-center items-center px-4">
      {/* 🔆 Glowing Orange Blob */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-orange-400 opacity-30 rounded-full blur-3xl z-0 translate-x-1/2 -translate-y-1/2" />

      {/* Floating Dots */}
      <div className="absolute left-10 top-30 w-2 h-2 bg-orange-400 rounded-full animate-pulse z-0" />
      <div className="absolute right-20 bottom-100 w-2 h-2 bg-orange-300 rounded-full animate-pulse z-0" />
      <div className="absolute left-10 top-20 w-5 h-5 bg-orange-400 rounded-full animate-pulse z-0" />
      <div className="absolute left-10 bottom-20 w-4 h-4 bg-orange-400 rounded-full animate-pulse z-0" />
      <div className="absolute right-20 bottom-20 w-4 h-4 bg-orange-300 rounded-full animate-pulse z-0" />
      <div className="absolute right-20 top-20 w-5 h-5 bg-orange-400 rounded-full animate-pulse z-0" />
      <div className="absolute right-30 bottom-100 w-2 h-2 bg-orange-300 rounded-full animate-pulse z-0" />  
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
          <h1 className="text-5xl font-bold text-orange-400 dark:text-orange-400">
            $martDashBoard
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 h-10 mb-4 dark:text-white">
            <span id="typewriter" />
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-6 dark:text-white">
            Real-time insights to help you grow faster and smarter.
          </p>

          <p className="text-gray-600 text-lg max-w-xl mb-6 text-center md:text-left dark:text-white">
            Transform your business insights with our powerful and modern analytics dashboard.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {/* Get Started Button */}
        <a href="#pricing">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-orange-500 transition">
            Get Started
            <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </a>

        {/* View Demo Button - Outline style */}
        <a href="#dashboard">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-500 text-white border border-gray-600 dark:border-gray-600 dark:text-white rounded-xl hover:bg-orange-500 dark:hover:bg-orange-500 transition">
            View Demo
            <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </a>
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
        <div className="text-gray-500 text-sm mb-2 dark:text-white">Scroll Down</div>
        <div className="animate-bounce text-orange-500 text-2xl">↓</div>
      </div>
    </section>
  );
};

export default Hero;
