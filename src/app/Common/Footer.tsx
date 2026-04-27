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
    

      {/* Bottom Navigation Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
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
                  className="w-9 h-9 rounded-full bg-gray-50 border border-gray-300 flex items-center btn-shine justify-center text-gray-600 hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed] transition-all duration-300"
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
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Features</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Templates</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Pricing</li>
            </ul>
          </div>

          <div className={animationClass('delay-150')}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">About Us</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Blog</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Contact</li>
            </ul>
          </div>

          <div className={animationClass('delay-200')}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">FAQ</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Help Center</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Privacy Policy</li>
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
                className="w-full bg-white text-black border placeholder:text-gray-500 border-gray-200 rounded-xl py-2.5 px-4 pr-12 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]/20 transition-all"
              />
              <button className="absolute right-2 top-2 bg-[#7c3aed] cursor-pointer  p-1.5 rounded-lg text-white hover:bg-[#6d28d9] transition-colors shadow-md">
                <IoSend size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t -mb-6 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Emoji Tales. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-gray-600 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;