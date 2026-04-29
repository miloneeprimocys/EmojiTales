"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiOutlineMail } from 'react-icons/hi';
import { IoSend } from 'react-icons/io5';
import { FaStar, FaBell } from 'react-icons/fa';

const NewsLetter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClass = (delay: string = 'delay-0') => `
    transition-all duration-1000 ease-out ${delay}
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  `;

  return (
    <section ref={sectionRef} className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-0">
      
      {/* Small icons floating - Responsive positioning to avoid text overlap */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Rocket - Top Left */}
        <div className="absolute top-[20%] sm:top-[30%] left-[2%] sm:left-[8%] animate-float" style={{ animationDuration: '3.5s' }}>
          <Image src="/n1.svg" alt="Rocket" width={112} height={112} className="w-12 h-12 sm:w-16 md:w-20 lg:w-24 xl:w-48" />
        </div>
        
        {/* Book - Lower Left */}
        <div className="absolute bottom-[35%] left-[1%] sm:left-[10%] lg:left-[22%] 2xl:left-[24%] animate-float" style={{ animationDelay: '0.5s', animationDuration: '4.2s' }}>
          <Image src="/n2.svg" alt="Book" width={104} height={104} className="w-10 h-10 sm:w-14 md:w-18 lg:w-22 xl:w-26" />
        </div>

        {/* Happy Emoji - Middle Right */}
        <div className="absolute top-[15%] right-[2%] sm:right-[15%] lg:right-[28%] 2xl:right-[30%] animate-float" style={{ animationDelay: '0.2s', animationDuration: '3.8s' }}>
          <Image src="/n3.svg" alt="Emoji" width={112} height={112} className="w-12 h-12 sm:w-16 md:w-20 lg:w-24 xl:w-28" />
        </div>

        {/* Angry/Red Emoji - Top Right */}
        <div className="absolute top-[5%] sm:top-[15%] right-[25%] sm:right-[10%] animate-float" style={{ animationDelay: '0.8s', animationDuration: '4.5s' }}>
          <Image src="/n4.svg" alt="Angry Emoji" width={112} height={112} className="w-12 h-12 sm:w-16 md:w-20 lg:w-24 xl:w-28" />
        </div>

        {/* Small Rocket - Far Right center */}
        <div className="absolute bottom-[40%] right-[2%] sm:right-[5%] animate-float" style={{ animationDelay: '1.2s', animationDuration: '3.2s' }}>
          <Image src="/n5.svg" alt="Small Rocket" width={104} height={104} className="w-10 h-10 sm:w-14 md:w-18 lg:w-22 xl:w-26" />
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/footerbg1.svg" 
          alt="Footer Background" 
          width={1920}
          height={600}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 text-center px-4 w-full max-w-4xl">
        <p className={`text-[#FFD700] font-bold text-base md:text-lg mb-2 flex items-center justify-center gap-2 ${animationClass('delay-0')}`}>
            Stay Inspired! <HiOutlineMail className="text-xl text-white" />
        </p>
        <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-6 leading-tight ${animationClass('delay-0')}`}>
          <span className="text-[#FFD700]">Subscribe</span> to Our Newsletter
        </h2>
        <p className={`text-white/95 text-xs sm:text-base md:text-xl mb-6 md:mb-10 font-medium max-w-2xl mx-auto px-4 ${animationClass('delay-100')}`}>
          Get weekly story ideas, creative tips, and free activities delivered straight to your inbox.
        </p>

        {/* Subscription Input Field */}
        <div className={`relative max-w-2xl mx-auto mb-4 lg:mb-8 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 shadow-2xl ${animationClass('delay-200')}`}>
          <div className="flex items-center w-full bg-white rounded-full overflow-hidden">
            <div className="pl-3 sm:pl-5 text-[#1e1b4b] flex-shrink-0">
              <HiOutlineMail className="text-xl sm:text-2xl" />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full min-w-0 py-2.5 sm:py-4 px-2 sm:px-4 text-[#1e1b4b] text-sm sm:text-base font-medium outline-none placeholder:text-gray-400"
            />
            <button className="bg-[#FFD12D] cursor-pointer btn-shine hover:bg-[#ffc400] text-[#1e1b4b] font-bold py-2 sm:py-3 px-3 sm:px-6 m-1 rounded-full flex items-center gap-1 sm:gap-2 transition-all active:scale-95 group whitespace-nowrap flex-shrink-0 text-xs sm:text-base">
              <IoSend className="text-sm sm:text-lg" />
              <span>Subscribe Now</span>
            </button>
          </div>
        </div>

        {/* Feature Points below input */}
        <div className={`flex flex-row items-center justify-center gap-4 lg:gap-12 ${animationClass('delay-300')}`}>
            <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 btn-shine  rounded-full border border-white/30">
                    <FaStar className="text-[#FFD700] text-xs md:text-[16px]" />
                </div>
                <div className="text-left">
                    <p className="text-white font-bold text-sm md:text-[16px]">Early access</p>
                    <p className="text-white/70 text-[10px] md:text-sm">Be the first to try new features</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 btn-shine rounded-full border border-white/30">
                    <FaBell className="text-[#FFD700] text-xs md:text-[16px]" />
                </div>
                <div className="text-left">
                    <p className="text-white font-bold text-sm md:text-[16px]">Special updates</p>
                    <p className="text-white/70 text-[10px] md:text-sm">Exclusive offers & news</p>
                </div>
            </div>
        </div>
      </div>

      {/* Floating Illustrations - Dog and Unicorn */}
        <div className="absolute left-0 bottom-0 xl:left-[7%] z-10 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-96 pointer-events-none">
        <Image src="/dog.svg" alt="Cute dog" width={384} height={384} className="w-full h-auto object-contain" />
      </div>

      {/* Unicorn Image - Right Side */}
      <div className="absolute right-0 bottom-0 xl:right-[7%] z-10 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-96 pointer-events-none">
        <Image src="/unicorn.svg" alt="Unicorn" width={384} height={384} className="w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default NewsLetter;