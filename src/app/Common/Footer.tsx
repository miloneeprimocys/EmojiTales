"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <footer ref={sectionRef} className="w-full bg-white">
    

      {/* Bottom Navigation Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Logo and Socials */}
          <div className={`lg:col-span-1 ${animationClass('delay-0')}`}>
            <div className="mb-6">
              <Image src="/logo.svg" alt="EmojiTales Logo" width={120} height={40} className="h-10 w-auto" />
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
          <div className={`text-center ${animationClass('delay-100')}`}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li onClick={() => scrollToSection('home')} className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Home</li>
              <li onClick={() => scrollToSection('features')} className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Features</li>
              <li onClick={() => scrollToSection('service')} className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Service</li>
              <li onClick={() => scrollToSection('working')} className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Working</li>
            </ul>
          </div>

          <div className={`text-center ${animationClass('delay-150')}`}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">About Us</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Blog</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Contact</li>
            </ul>
          </div>

          <div className={`text-center ${animationClass('delay-200')}`}>
            <h4 className="font-bold text-[#1e1b4b] mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-gray-500 text-[15px]">
              <li onClick={() => scrollToSection('faq')} className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">FAQ</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Terms of Service</li>
              <li className="hover:text-[#7c3aed] cursor-pointer hover:translate-x-1 duration-300 ease-in-out transition-all">Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t -mb-6 border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 EmoTales. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;