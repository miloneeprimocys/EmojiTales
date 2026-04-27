"use client";

import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Templates', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <>
      {/* Main Navbar - Increased height and refined styling */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#05011d]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0">
           <img src="/logo.svg" alt="" className='w-32 h-32 md:h-40 md:w-40'/>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center cursor-pointer gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <a
                  href={link.href}
                  className="text-white/80 group-hover:text-white text-[16px] font-medium transition-all duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
                {/* Reference Underline Styling */}
                <div className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#ffcc4d] transition-all duration-300 
                  ${link.name === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                />
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="flex btn-shine items-center gap-2 px-6 py-3 text-white/90 border border-white/10 rounded-full hover:bg-white/5 transition-all text-sm font-semibold cursor-pointer">
              <TbWorld className="text-lg" />
              <span className="hidden xl:inline">English</span>
              <IoIosArrowDown className="text-xs opacity-60" />
            </button>
            
            <button className="btn-shine bg-[#FFD12D] text-black font-extrabold px-8 py-3 rounded-full transition-all active:scale-95 text-sm cursor-pointer shadow-lg shadow-[#FFD12D]/20 hover:shadow-[#FFD12D]/30">
              Get Started
            </button>
          </div>
          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-3 hover:bg-white/5 rounded-xl transition-colors z-[130] relative cursor-pointer"
          >
            <HiOutlineMenuAlt3 size={32} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY SYSTEM --- */}
      {/* 1. Light Shade Panel (First stage - slides from left) */}
      <div 
        className={`fixed top-0 left-0 h-full w-[90%] max-w-[420px] bg-white/15 backdrop-blur-md z-[110] transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionDelay: isOpen ? '0ms' : '200ms' }}
      />

      {/* 2. Backdrop Overlay (Full screen backdrop) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[105] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 3. Main Side Drawer (Second stage - slides from left on top) */}
      <aside className={`
        fixed top-0 left-0 h-full w-[85%] max-w-[400px] 
        bg-[#05011d] z-[120] 
        transform transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1)
        lg:hidden border-r border-white/10
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      style={{ transitionDelay: isOpen ? '150ms' : '0ms' }}>
        <div className="flex flex-col h-full p-8">
          
          <div className="flex items-center justify-between mb-12">
            <span className="text-white text-2xl font-bold tracking-tight">
              Emoji<span className="text-[#ffcc4d]">Tales</span>
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/60 hover:text-white p-2 border border-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <HiOutlineX size={24} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 overflow-y-auto cursor-pointer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white cursor-pointer text-xl font-bold py-3 border-b border-white/5 hover:text-[#ffcc4d] transition-all flex items-center justify-between group"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <div className="w-10 h-10 flex items-center justify-center -rotate-90 opacity-20 group-hover:opacity-100 transition-all">
                    <IoIosArrowDown size={20} />
                </div>
              </a>
            ))}
          </div>
          
          {/* Bottom Sidebar Controls */}
          <div className="mt-auto flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 w-full py-3 text-white border border-white/10 rounded-2xl bg-white/5 font-semibold cursor-pointer">
              <TbWorld className="text-lg" /> 
              English
            </button>
            
            <button className="btn-shine w-full bg-[#FFD12D] text-black font-extrabold py-3 rounded-2xl shadow-xl shadow-[#FFD12D]/20 uppercase tracking-widest text-sm transition-all active:scale-[0.98] cursor-pointer hover:shadow-[#FFD12D]/30">
              Get Started Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;