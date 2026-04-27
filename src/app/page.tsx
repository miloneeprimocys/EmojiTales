"use client";

import { useState, useEffect } from "react";
import Navbar from "./Common/Navbar";
import Hero from "./Pages/Homepage/Hero";
import HowItWorks from "./Pages/Homepage/HowItWorks";
import Service  from "./Pages/Homepage/Service";
import IdealService from "./Pages/Homepage/IdealService";
import FifthSection from "./Pages/Homepage/FifthSection";
import Footer from "./Common/Footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="overflow-x-hidden space-y-6">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Service />
      <IdealService />
      <FifthSection />
      <Footer/>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-3  cursor-pointer bg-[#7c3aed] hover:bg-[#6d28d9] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 max-sm:bottom-6 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:right-auto ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg 
          className="w-3 h-3" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
