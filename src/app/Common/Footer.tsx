"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animation
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

  // Animation utility: slide up from bottom
  const animationClass = (delay: string = 'delay-0') => `
    transition-all duration-1000 ease-out ${delay}
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
  `;
  return (
    <footer ref={sectionRef} className="w-full bg-white">
      {/* Top CTA Section with Background and Illustrations */}
      <div className="relative w-full min-h-[400px] md:min-h-[600px]  flex items-start lg:items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-0">
        {/* Small icons floating above background */}
        <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
          <img 
            src="/All_small_icons.svg" 
            alt="Decorative icons" 
            className="w-[90%] h-[90%] object-contain"
          />
        </div>

        {/* Background SVG - Ensures wavy edges are visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/footerbg.svg" 
            alt="Footer Background" 
            className="w-full h-full object-cover object-top lg:object-center rounded-t-3xl "
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-30 text-center px-6 max-w-2xl ">
          <h2 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight ${animationClass('delay-0')}`}>
            Ready to Create <br />
            <span className="text-[#FFD700]">Magical Stories?</span>
          </h2>
          <p className={`text-white/95 text-sm sm:text-base md:text-xl mb-6 md:mb-10 font-medium max-w-lg mx-auto px-4 ${animationClass('delay-100')}`}>
            Join thousands of happy families and spark imagination today!
          </p>
          <button className={`bg-[#FFD12D] hover:bg-[#ffdb57] text-[#1e1b4b] font-bold py-3 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg flex items-center gap-2 mx-auto transition-all shadow-xl hover:scale-105 active:scale-95 ${animationClass('delay-200')}`}>
            Start Your Journey 
            <span className="text-lg md:text-xl">→</span>
          </button>
        </div>

        {/* Floating Illustrations - Smaller on mobile/MD/LG, bigger on XL+ */}
        <div className="absolute left-[5%] xl:left-[7%] bottom-0 z-10 w-25 sm:w-35 md:w-50 lg:w-70 xl:w-87.5 2xl:w-105">
          <img src="/dog.svg" alt="Cute dog" className="w-full h-auto object-contain" />
        </div>
        <div className="absolute right-[5%] xl:right-[7%]  bottom-0 z-10 w-25 sm:w-35 md:w-50 lg:w-70 xl:w-87.5 2xl:w-105">
          <img src="/unicorn.svg" alt="Unicorn" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Logo and Socials */}
          <div className={`lg:col-span-1 ${animationClass('delay-0')}`}>
            <div className="mb-6">
              <img src="/logo.svg" alt="EmojiTales Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-500 text-sm  leading-relaxed mb-8 max-w-xs">
              A magical storytelling platform where kids create, imagine and learn through AI.
            </p>
            {/* Social Icons using React Icons */}
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, link: "#" },
                { Icon: FaInstagram, link: "#" },
                { Icon: FaTwitter, link: "#" },
                { Icon: FaYoutube, link: "#" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link}
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed] transition-all duration-300"
                >
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className={`md:pl-4 ${animationClass('delay-100')}`}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Features</li>
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Pricing</li>
            </ul>
          </div>

          <div className={animationClass('delay-150')}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div className={animationClass('delay-200')}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-[#7c3aed] cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className={`lg:col-span-2 bg-[#f8f7ff] rounded-2xl p-6 ${animationClass('delay-300')}`}>
            <h4 className="font-bold text-[#1e1b4b] mb-4 text-lg xl:text-xl">Stay updated</h4>
            <p className="text-gray-500 text-sm xl:text-[16px] mb-6">
              Get tips, stories and updates straight to your inbox.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white border placeholder:text-gray-500 border-gray-200 rounded-xl py-3.5 px-4 pr-12 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/20 transition-all"
              />
              <button className="absolute right-2 top-2 bg-[#7c3aed] p-2 rounded-lg text-white hover:bg-[#6d28d9] transition-colors shadow-md">
                <IoSend size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2025 Emoji Tales. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <span className="hover:text-gray-600 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;