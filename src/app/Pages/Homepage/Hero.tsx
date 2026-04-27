"use client";

import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { MdVerifiedUser } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation immediately on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure smooth animation

    return () => clearTimeout(timer);
  }, []);

  // Utility to handle staggered entry animations
  const animationClass = (delay: string, isLeft: boolean = false, isRight: boolean = false) => `
    transition-all duration-1000 ease-out 
    ${isVisible 
      ? 'opacity-100 translate-x-0 translate-y-0' 
      : isLeft 
        ? 'opacity-0 -translate-x-10' 
        : isRight 
          ? 'opacity-0 translate-x-10' 
          : 'opacity-0 translate-y-10'
    } 
    ${delay}
  `;

  return (
    <section className="relative min-h-screen lg:min-h-[75vh] xl:min-h-screen bg-[#05011d]  pt-32 pb-12 sm:pb-20 overflow-hidden flex flex-col items-center">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-0 xl:pt-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center space-y-6 lg:items-start lg:text-left">
          {/* Badge */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md ${animationClass('delay-0', true)}`}>
          <img src="/herostar.svg" alt="" className="inline-block w-6 h-6 animate-pulse" />
            <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">
              AI Storytelling for Kids
            </span>
          </div>

          {/* Heading */}
          <h1 className={`text-white text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight ${animationClass('delay-150', true)}`}>
            Turn Emojis Into <br />
            <span className="text-[#ffcc4d]">Magical </span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Stories
            </span> with AI <img src="/aistar.svg" alt="" className="inline-block w-18 h-18" />
          </h1>

          {/* Subtext */}
          <p className={`text-white/70 text-lg md:text-xl max-w-lg leading-relaxed ${animationClass('delay-300', true)}`}>
            A safe, fun and creative storytelling platform for kids. Loved by parents, powered by AI.
          </p>

          {/* Buttons */}
          <div className={`flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start ${animationClass('delay-500', true)}`}>
            <button className="btn-shine group flex cursor-pointer items-center gap-2 bg-[#FFD12D] text-black font-extrabold px-8 py-4 rounded-full transition-all active:scale-95 shadow-lg shadow-[#FFD12D]/20 hover:shadow-[#FFD12D]/30">
              Create a Story
              <HiArrowRight className="text-xl transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
            </button>
            
            <button className="flex btn-shine items-center cursor-pointer gap-2 bg-white/5 border border-white/10  text-white font-semibold px-8 py-4 rounded-full transition-all active:scale-95">
              Watch Demo
              <div className="relative w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                {/* Dark vibration layer */}
                <div 
                  className="absolute inset-0 rounded-full bg-black/20 animate-ping"
                  style={{
                    animation: 'vibration-dark 1.5s ease-in-out infinite'
                  }}
                ></div>
                {/* Light vibration layer */}
                <div 
                  className="absolute inset-0 rounded-full bg-white/30 animate-ping"
                  style={{
                    animation: 'vibration-light 1.5s ease-in-out infinite 0.2s'
                  }}
                ></div>
                <HiPlay className="text-sm relative z-10" />
              </div>
            </button>
          </div>

          {/* Trust Badges */}
          <div className={`flex flex-wrap items-center justify-center gap-6 pt-2 lg:justify-start ${animationClass('delay-700', true)}`}>
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
               <img src="/safe.svg" alt="" className='h-6 w-6' />
              </div>
              <span className="text-white/80 text-sm group-hover:text-white transition-colors">Safe for Kids</span>
            </div>
            <div className="flex items-center gap-2 group">
            <img src="/ai.svg" alt="" className='h-6 w-6' />
              <span className="text-white/80 text-sm group-hover:text-white transition-colors">AI Powered</span>
            </div>
            <div className="flex items-center gap-2 group">
             <img src="/parent.svg" alt="" className='h-6 w-6' />
              <span className="text-white/80 text-sm group-hover:text-white transition-colors">Parent Approved</span>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className={`relative flex justify-center items-center transition-all duration-[1500ms] ease-out ${animationClass('delay-300', false, true)}`}>
          {/* Main Character Image */}
          <div className="relative z-20 w-full max-w-[550px] xl:max-w-[650px] 2xl:max-w-[900px]">
            <img 
              src="/hero.svg" 
              alt="Kids reading magical book" 
              className="w-full h-auto drop-shadow-[0_20px_60px_rgba(168,85,247,0.45)]"
            />
            
          </div>
        </div>
      </div>

      {/* Cloud Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-50 p-0 m-0 border-0">
       <img src="/cloud.svg" alt="Cloud" className="w-full h-auto drop-shadow-none p-0 m-0 sm:-mb-1" />
      </div>
    </section>
  );
};

export default Hero;