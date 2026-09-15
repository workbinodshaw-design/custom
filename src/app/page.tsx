"use client";

import { Search, Globe, ChevronDown, ChevronRight, ChevronLeft, MapPin, Users, Target, Menu, SlidersHorizontal, Mouse } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Trigger the split curtain reveal animation
    const timer1 = setTimeout(() => setIsLoading(false), 1600); 
    // Unmount loader completely from DOM
    const timer2 = setTimeout(() => setShowLoader(false), 2800); 
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  return (
    <main className={`w-full bg-[#F5F4F0] min-h-screen relative overflow-hidden flex flex-col ${!isLoading ? 'animations-ready' : ''}`}>
      
      {/* FULL SCREEN LOADER - LUXURY SPLIT REVEAL */}
      {showLoader && (
        <div className="fixed inset-0 z-[100] flex flex-col pointer-events-none">
          {/* Top Half Curtain */}
          <div className={`absolute top-0 left-0 w-full h-[50vh] bg-[#1C1A17] transition-transform duration-[1200ms] ease-[cubic-bezier(0.83,0,0.17,1)] ${isLoading ? 'translate-y-0' : '-translate-y-full'}`}></div>
          
          {/* Bottom Half Curtain */}
          <div className={`absolute bottom-0 left-0 w-full h-[50vh] bg-[#1C1A17] transition-transform duration-[1200ms] ease-[cubic-bezier(0.83,0,0.17,1)] ${isLoading ? 'translate-y-0' : 'translate-y-full'}`}></div>

          {/* Center Content (Fades out right before split) */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 delay-200 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
             <div className="flex flex-col items-center">
               <h1 className="font-serif text-[50px] md:text-[70px] text-[#F5F4F0] tracking-tight overflow-hidden leading-none">
                 <span className="block animate-[slideUp_0.8s_ease-out_forwards]">TailorFind</span>
               </h1>
               <div className="flex items-center gap-4 mt-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">
                 <div className="w-8 md:w-16 h-[1px] bg-[#CFA972]/60"></div>
                 <span className="text-[#CFA972] text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold">The Art of Fit</span>
                 <div className="w-8 md:w-16 h-[1px] bg-[#CFA972]/60"></div>
               </div>
             </div>
          </div>
        </div>
      )}

      {/* 1. TOP NAVIGATION */}
      <nav className="relative z-50 w-full max-w-[1700px] mx-auto px-6 lg:px-16 pt-8 pb-4 flex justify-between items-center reveal-up">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="font-serif text-[28px] md:text-[32px] text-brand-dark tracking-normal">TailorFind</span>
          <span className="text-[5.5px] md:text-[6.5px] font-semibold tracking-[0.22em] uppercase mt-1.5 text-[#A09D98]">Exceptional Tailors. Everywhere.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12 text-[12px] font-medium text-brand-dark ml-20">
          <a href="#" className="hover:text-brand-gray transition">Discover</a>
          <a href="#" className="hover:text-brand-gray transition">Bespoke</a>
          <a href="#" className="hover:text-brand-gray transition">Atelier</a>
          <a href="#" className="hover:text-brand-gray transition">For Tailors</a>
          <a href="#" className="hover:text-brand-gray transition">About</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6 text-[12px] font-medium text-brand-dark">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-gray transition">
            <Globe className="w-3.5 h-3.5" />
            EN
            <ChevronDown className="w-3 h-3 ml-[-2px] text-brand-gray" />
          </div>
          
          <div className="hidden md:block w-[1px] h-4 bg-[#D9D6D0]"></div>
          <a href="#" className="hidden md:block hover:text-brand-gray transition">Sign In</a>
          <button className="hidden md:flex dark-btn px-6 py-2.5 items-center gap-2 text-[11px] font-medium tracking-wide ml-2">
            Find a Tailor &rarr;
          </button>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden ml-2 cursor-pointer">
            <Menu className="w-6 h-6 text-brand-dark" />
          </div>
        </div>
      </nav>

      {/* 2. RESPONSIVE HERO SECTION */}
      <section className="relative w-full h-auto lg:h-[85vh] min-h-[850px] md:min-h-[700px] flex items-center -mt-[88px] pt-[88px] pb-12 md:pb-0">
        
        {/* Full Width Background Images (Responsive Swap) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <Image 
              src="/tailorfind-bg.jpg" 
              alt="Bespoke Suit Background" 
              fill
              className="object-cover object-center"
              priority
            />
            {/* Desktop Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F4F0]/90 via-[#F5F4F0]/40 to-transparent"></div>
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            <Image 
              src="/tailorfind-mobile-bg.jpg" 
              alt="Bespoke Mannequin" 
              fill
              className="object-cover object-[center_top]"
              priority
            />
            {/* Mobile Gradient (lighter fade to let the wall show on the left) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F4F0] via-[#F5F4F0]/40 to-[#F5F4F0]/10"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row h-full">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-start md:justify-center px-6 lg:px-16 h-full pb-8 md:pb-32 pt-10 md:pt-16">
            
            <div className="flex items-center gap-4 mb-6 md:mb-8 reveal-up delay-1">
              <div className="w-6 md:w-8 h-[1px] bg-[#C4C0B6]"></div>
              <p className="text-[#96928A] font-semibold tracking-[0.3em] text-[8px] md:text-[9px] uppercase">Tailoring a better you</p>
            </div>
            
            <h1 className="font-serif text-[50px] md:text-[95px] font-normal text-brand-dark leading-[0.95] mb-4 md:mb-8 reveal-up delay-2 tracking-tight relative z-20 shrink-0">
              A Better You<br/>
              In <span className="text-[75px] md:text-[145px] text-[#7A6A53] pr-2 align-baseline relative z-10 italic" style={{ fontFamily: 'var(--font-cursive)' }}>Every</span>
              <span className="relative z-10"> Detail</span>
              
              {/* Custom SVG Swoop perfectly aligned to the cursive 'y' */}
              <svg className="absolute left-[38%] md:left-[32%] top-[82%] md:top-[90%] w-[150px] md:w-[280px] h-[30px] md:h-[40px] text-[#7A6A53] -z-0 pointer-events-none" viewBox="0 0 300 80" fill="none">
                <path d="M 0,10 C 10,50 40,60 80,55 C 130,50 200,30 280,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </h1>
            
            <div className="w-8 h-[1px] bg-brand-dark/20 mb-4 md:mb-8 reveal-up delay-2"></div>
            
            <p className="text-brand-dark/80 md:text-brand-gray text-[12px] md:text-[16px] max-w-[260px] md:max-w-[420px] mb-6 md:mb-12 reveal-up delay-3 font-medium leading-[1.5]">
              Connect with the world's finest tailoring professionals for every occasion, anywhere in the world.
            </p>

            {/* MOBILE LAYOUT */}
            <div className="md:hidden w-full flex flex-col relative z-30 mt-4 pb-4">
              {/* Mobile Search Box */}
              <div className="w-full bg-[#FCFCFB] rounded-[28px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] p-4 flex flex-col border border-[#EBEAE6] mb-6 reveal-up delay-4">
                
                {/* Row 1 */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EBEAE6]">
                  <div className="flex items-center gap-3">
                    <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Suit" className="w-4 h-4 opacity-70" />
                    <div className="flex-col">
                      <label className="block text-[6.5px] font-bold tracking-[0.2em] text-[#A09D98] uppercase mb-0.5">What are you looking for?</label>
                      <span className="text-[12px] font-semibold text-brand-dark">Custom Suit</span>
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-brand-gray" />
                </div>
                
                {/* Row 2 */}
                <div className="flex items-center justify-between py-3 border-b border-[#EBEAE6]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-gray" />
                    <div className="flex-col">
                      <label className="block text-[6.5px] font-bold tracking-[0.2em] text-[#A09D98] uppercase mb-0.5">Where?</label>
                      <span className="text-[12px] font-semibold text-[#B0ADA8]">Enter city, area or address</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gray" />
                </div>

                {/* Row 3 */}
                <div className="flex flex-col py-3 border-b border-[#EBEAE6]">
                  <div className="flex items-center gap-3 mb-2.5">
                    <Users className="w-4 h-4 text-brand-gray" />
                    <label className="block text-[6.5px] font-bold tracking-[0.2em] text-[#A09D98] uppercase">Fitting Preference</label>
                  </div>
                  <div className="flex gap-2 pl-7">
                    <div className="px-5 py-1 rounded-full border border-brand-dark text-[10px] font-medium text-brand-dark">Atelier</div>
                    <div className="px-5 py-1 rounded-full border border-[#EBEAE6] text-[10px] font-medium text-brand-gray bg-transparent">Home</div>
                    <div className="px-5 py-1 rounded-full border border-[#EBEAE6] text-[10px] font-medium text-brand-gray bg-transparent">Virtual</div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between py-3 mb-1">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-brand-gray" />
                    <div className="flex-col">
                      <label className="block text-[6.5px] font-bold tracking-[0.2em] text-[#A09D98] uppercase mb-0.5">Search Radius</label>
                      <span className="text-[12px] font-semibold text-brand-dark">40 km</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-gray" />
                </div>

                {/* Row 5 - Action Buttons */}
                <div className="flex items-center gap-3 w-full mt-2">
                  <button className="dark-btn flex-1 py-3.5 flex items-center justify-center gap-2 text-[12px] font-medium tracking-wide">
                    Find Your Tailor &rarr;
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#EFECE8] flex items-center justify-center flex-shrink-0">
                    <SlidersHorizontal className="w-4 h-4 text-brand-dark" />
                  </button>
                </div>
              </div>

              {/* Mobile Stats */}
              <div className="flex items-center justify-between reveal-up delay-4 w-full px-2">
                <div className="flex flex-col items-center">
                  <p className="font-serif text-[20px] text-brand-dark leading-none font-normal">10,000<span className="text-[12px]">+</span></p>
                  <p className="text-[7px] text-brand-gray mt-1.5 font-bold tracking-[0.2em] uppercase">Verified Tailors</p>
                </div>
                <div className="w-[1px] h-6 bg-[#D9D6D0]"></div>
                <div className="flex flex-col items-center">
                  <p className="font-serif text-[20px] text-brand-dark leading-none font-normal">50<span className="text-[12px]">+</span></p>
                  <p className="text-[7px] text-brand-gray mt-1.5 font-bold tracking-[0.2em] uppercase">Cities & Regions</p>
                </div>
                <div className="w-[1px] h-6 bg-[#D9D6D0]"></div>
                <div className="flex flex-col items-center">
                  <p className="font-serif text-[20px] text-brand-dark leading-none font-normal">100k<span className="text-[12px]">+</span></p>
                  <p className="text-[7px] text-brand-gray mt-1.5 font-bold tracking-[0.2em] uppercase">Clients</p>
                </div>
              </div>
            </div>

          </div>
          {/* End of Left Text Column (w-55%) */}
          
          {/* Right: Slider Controls (Desktop) */}
          <div className="hidden lg:flex w-[45%] h-full relative justify-end items-end pb-32 pr-16">
            <div className="flex flex-col items-end reveal-up delay-4 pointer-events-auto">
              <span className="text-brand-dark/70 text-[9px] font-bold tracking-[0.2em] mb-4">01 <span className="text-brand-dark/30">/ 03</span></span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/70 hover:bg-brand-dark hover:text-white transition bg-white/10 backdrop-blur-sm">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/70 hover:bg-brand-dark hover:text-white transition bg-white/10 backdrop-blur-sm">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
        {/* End of Main Content Flex Row */}

        {/* BOTTOM LAYER: ABSOLUTE SEARCH BAR & STATS FOR DESKTOP */}
        <div className="hidden md:flex flex-col absolute bottom-12 left-0 right-0 z-30 w-full px-6 lg:px-16 pointer-events-none items-start max-w-[1700px] mx-auto">
          
          {/* 1150px Search Pill */}
          <div className="w-full max-w-[1150px] bg-[#FCFCFB] rounded-[40px] p-2.5 pl-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-[#EBEAE6] mb-8 reveal-up delay-3 pointer-events-auto flex items-center">
            {/* Column 1 */}
            <div className="flex-[1.2] flex items-center gap-4 border-r border-[#EBEAE6] pr-6">
              <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Suit" className="w-7 h-7 opacity-70 shrink-0" />
              <div className="flex flex-col min-w-0">
                <label className="text-[10px] font-bold tracking-widest text-[#A09D98] uppercase mb-1 whitespace-nowrap truncate">What are you looking for?</label>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[16px] font-bold text-brand-dark group-hover:text-black whitespace-nowrap">Custom Suit</span>
                  <ChevronDown className="w-4 h-4 text-brand-gray group-hover:text-brand-dark transition shrink-0" />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-[1.2] flex items-center gap-4 border-r border-[#EBEAE6] px-6">
              <MapPin className="w-6 h-6 text-brand-gray shrink-0" />
              <div className="flex flex-col w-full min-w-0">
                <label className="text-[10px] font-bold tracking-widest text-[#A09D98] uppercase mb-1 whitespace-nowrap truncate">Where?</label>
                <input type="text" placeholder="Enter city or area" className="text-[16px] font-bold text-brand-dark bg-transparent outline-none w-full placeholder:font-semibold placeholder:text-[#B0ADA8] min-w-0 truncate" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-[1.5] flex items-center border-r border-[#EBEAE6] px-6">
              <div className="flex flex-col w-full min-w-0">
                <label className="text-[10px] font-bold tracking-widest text-[#A09D98] uppercase mb-2 whitespace-nowrap truncate">Fitting Preference</label>
                <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                  <button className="px-5 py-2 rounded-full border border-brand-dark text-[14px] font-bold text-brand-dark bg-white shadow-sm whitespace-nowrap shrink-0">Atelier</button>
                  <button className="px-4 py-2 rounded-full border border-transparent text-[14px] font-bold text-brand-gray hover:text-brand-dark hover:bg-black/5 transition whitespace-nowrap shrink-0">Home</button>
                  <button className="px-4 py-2 rounded-full border border-transparent text-[14px] font-bold text-brand-gray hover:text-brand-dark hover:bg-black/5 transition whitespace-nowrap shrink-0">Virtual</button>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex-[0.8] flex items-center gap-3 pl-6 pr-4">
              <Target className="w-6 h-6 text-brand-gray shrink-0" />
              <div className="flex flex-col min-w-0">
                <label className="text-[10px] font-bold tracking-widest text-[#A09D98] uppercase mb-1 whitespace-nowrap truncate">Search Radius</label>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[16px] font-bold text-brand-dark group-hover:text-black whitespace-nowrap">40 km</span>
                  <ChevronDown className="w-4 h-4 text-brand-gray group-hover:text-brand-dark transition shrink-0" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-16 h-16 bg-[#1C1A17] rounded-full flex items-center justify-center text-[#F5F4F0] hover:bg-black transition-colors shrink-0 ml-2 shadow-md">
              <Search className="w-6 h-6 shrink-0" />
            </button>
          </div>

          {/* Desktop Stats Row under the pill */}
          <div className="flex items-center gap-12 reveal-up delay-4 pointer-events-auto">
            <div className="flex items-center gap-4 text-[#A09D98] text-[8px] font-semibold tracking-[0.25em] uppercase pr-8 border-r border-[#D9D6D0]">
              <span>Trusted by 10,000+ Tailors</span>
            </div>
            
            <div className="flex items-center gap-8">
              <div>
                <p className="font-serif text-[28px] text-brand-dark leading-none font-normal">10,000+</p>
                <p className="text-[9px] text-brand-gray mt-2 font-bold tracking-widest uppercase">Verified Tailors</p>
              </div>
              <div className="w-[1px] h-10 bg-[#D9D6D0]"></div>
              <div>
                <p className="font-serif text-[28px] text-brand-dark leading-none font-normal">50+</p>
                <p className="text-[9px] text-brand-gray mt-2 font-bold tracking-widest uppercase">Cities & Regions</p>
              </div>
              <div className="w-[1px] h-10 bg-[#D9D6D0]"></div>
              <div>
                <p className="font-serif text-[28px] text-brand-dark leading-none font-normal">100,000+</p>
                <p className="text-[9px] text-brand-gray mt-2 font-bold tracking-widest uppercase">Clients Served</p>
              </div>
            </div>
          </div>
        </div>


        
        {/* Crafted Text absolutely positioned */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right pr-2 pointer-events-none z-20 hidden md:block">
           <p className="text-[#A09D98] text-[8px] font-semibold tracking-[0.3em] leading-[2] uppercase">
              Crafted for a<br/>
              Better Tomorrow
           </p>
        </div>
      </section>

    {/* 4. SERVICES SECTION */}
      <section className="w-full max-w-[1700px] mx-auto px-6 lg:px-16 py-24 md:py-32 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-[#A09D98] text-[9px] font-bold tracking-[0.25em] uppercase mb-4">Our Services</p>
            <h2 className="font-serif text-[40px] md:text-[55px] font-normal leading-[1.1] tracking-tight">Find Tailors by Service</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-[12px] font-medium hover:text-brand-gray transition mt-6 md:mt-0 pb-1 border-b border-brand-dark/20 hover:border-brand-gray">
            View All Services &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Bespoke Suits", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&q=80" },
            { name: "Custom Suits", img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&q=80" },
            { name: "Made-to-Measure", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&q=80" },
            { name: "Wedding Tailoring", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" },
            { name: "Tuxedos", img: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=800&q=80" },
            { name: "Custom Shirts", img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80" },
            { name: "Blazers", img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&q=80" },
            { name: "Alterations", img: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&q=80" }
          ].map((service, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-[16px] overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-500 z-10"></div>
              <img src={service.img} alt={service.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter sepia-[0.3]" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 flex items-center justify-between w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
                <span className="text-white text-[12px] md:text-[14px] font-medium tracking-wide">{service.name}</span>
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED TAILORS */}
      <section className="w-full bg-[#EFECE8] py-24 md:py-32 relative z-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-[#A09D98] text-[9px] font-bold tracking-[0.25em] uppercase mb-4">Featured Tailors</p>
              <h2 className="font-serif text-[40px] md:text-[55px] font-normal leading-[1.1] tracking-tight">Top-Rated Tailors Near You</h2>
              <p className="text-brand-gray text-[14px] mt-4 max-w-[400px]">Discover exceptional tailoring professionals ready to craft your perfect fit.</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-[12px] font-medium hover:text-brand-gray transition mr-4">View All Tailors &rarr;</a>
              <button className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0">
            {[
              "1500648767791-00dcc994a43e", 
              "1507003211169-0a1dd7228f2d", 
              "1519085360753-af0119f7cbe7", 
              "1506794778202-cad84cf45f1d"
            ].map((imgId, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-[#FCFCFB] rounded-[24px] p-4 group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden mb-6">
                  <img src={`https://images.unsplash.com/photo-${imgId}?w=600&q=80`} alt="Tailor" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 bg-[#1C1A17] text-[#EFECE8] text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">Verified</div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                </div>
                <h3 className="font-serif text-[22px] font-medium mb-1">Blackline Bespoke</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#CFA972] text-[12px]">★ 4.9</span>
                  <span className="text-brand-gray text-[11px]">(128 reviews)</span>
                  <span className="text-brand-gray text-[11px]">&bull; Chicago, IL</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#F5F4F0] rounded-full text-[10px] font-medium text-brand-dark">Bespoke Suits</span>
                  <span className="px-3 py-1 bg-[#F5F4F0] rounded-full text-[10px] font-medium text-brand-dark">Wedding</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#EBEAE6] pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-brand-gray font-medium uppercase tracking-widest">Starting at</span>
                    <span className="font-serif text-[18px] font-medium">$899</span>
                  </div>
                  <button className="text-[11px] font-semibold border-b border-brand-dark pb-0.5 hover:text-brand-gray hover:border-brand-gray transition">View Profile &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="w-full max-w-[1700px] mx-auto px-6 lg:px-16 py-24 md:py-32 relative z-20">
        <div className="text-center mb-20">
          <p className="text-[#A09D98] text-[9px] font-bold tracking-[0.25em] uppercase mb-4">How it works</p>
          <h2 className="font-serif text-[40px] md:text-[55px] font-normal leading-[1.1] tracking-tight">Find Your Perfect Fit<br/>In Four Simple Steps</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-brand-dark/10 border-t border-dashed border-brand-dark/30 z-0"></div>
          
          {[
            { step: "01", title: "Search", desc: "Find tailors by service, location, and specialization.", icon: <Search className="w-6 h-6"/> },
            { step: "02", title: "Compare", desc: "Review portfolios, client ratings, and pricing.", icon: <Users className="w-6 h-6"/> },
            { step: "03", title: "Connect", desc: "Send an inquiry or book a consultation instantly.", icon: <MapPin className="w-6 h-6"/> },
            { step: "04", title: "Get Fitted", desc: "Meet your tailor and experience the perfect fit.", icon: <Target className="w-6 h-6"/> }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#FCFCFB] border border-[#EBEAE6] flex items-center justify-center text-brand-dark shadow-sm mb-6 group-hover:bg-brand-dark group-hover:text-[#F5F4F0] transition-colors duration-500">
                {item.icon}
              </div>
              <span className="font-serif text-[32px] text-[#A09D98] mb-2">{item.step}</span>
              <h3 className="text-[16px] font-bold mb-3">{item.title}</h3>
              <p className="text-brand-gray text-[13px] max-w-[200px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. POPULAR DESTINATIONS */}
      <section className="w-full bg-[#EFECE8] py-24 md:py-32 relative z-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-[#A09D98] text-[9px] font-bold tracking-[0.25em] uppercase mb-4">Popular Destinations</p>
              <h2 className="font-serif text-[40px] md:text-[55px] font-normal leading-[1.1] tracking-tight">Explore Top Cities</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-[12px] font-medium hover:text-brand-gray transition mt-6 md:mt-0 pb-1 border-b border-brand-dark/20 hover:border-brand-gray">
              View All Cities &rarr;
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { city: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9" },
              { city: "London", country: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" },
              { city: "Milan", country: "Italy", img: "https://images.unsplash.com/photo-1571556096531-90a618dc20f2" },
              { city: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
              { city: "Tokyo", country: "Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" },
              { city: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e907614adbc" }
            ].map((loc, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-[16px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src={`${loc.img}?w=600&q=80`} alt={loc.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute bottom-6 left-6 z-20 flex flex-col">
                  <span className="text-white font-serif text-[24px] leading-tight mb-1">{loc.city}</span>
                  <span className="text-[#A09D98] text-[9px] font-bold tracking-[0.2em] uppercase">{loc.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="w-full max-w-[1700px] mx-auto px-6 lg:px-16 py-24 md:py-32 relative z-20">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <p className="text-[#A09D98] text-[9px] font-bold tracking-[0.25em] uppercase mb-4">What our customers say</p>
            <h2 className="font-serif text-[40px] md:text-[55px] font-normal leading-[1.1] tracking-tight mb-8">Real People.<br/>Exceptional Experiences.</h2>
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark hover:text-white transition"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FCFCFB] p-8 rounded-[24px] border border-[#EBEAE6] hover:-translate-y-2 transition-transform duration-500">
              <div className="text-[#635749] text-[14px] mb-6">★★★★★</div>
              <p className="text-[14px] leading-[1.8] text-brand-dark mb-8 font-medium">"Found an amazing tailor through TailorFind. The whole process was seamless and the results are incredible. The attention to detail is unmatched."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-dark/10 overflow-hidden"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="User" className="w-full h-full object-cover"/></div>
                <div>
                  <p className="text-[12px] font-bold">James R.</p>
                  <p className="text-[10px] text-brand-gray">New York, USA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1C1A17] text-[#F5F4F0] p-8 rounded-[24px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&q=80" alt="Suit Detail" className="absolute inset-0 w-full h-full object-cover opacity-20 transform group-hover:scale-110 transition-transform duration-700"/>
              <div className="relative z-10 flex flex-col justify-center h-full">
                <h3 className="font-serif text-[32px] md:text-[40px] leading-[1.1] mb-6">Confidence<br/>Looks Good<br/>On You</h3>
                <div className="w-12 h-[1px] bg-[#CFA972]"></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="w-full relative py-32 overflow-hidden z-20">
        <div className="absolute inset-0 bg-[#1C1A17]">
          <img src="/tailorfind-bg.jpg" alt="Dark background" className="w-full h-full object-cover opacity-10 filter grayscale contrast-150" />
        </div>
        <div className="relative z-10 max-w-[800px] mx-auto text-center px-6">
          <h2 className="font-serif text-[50px] md:text-[70px] text-[#F5F4F0] leading-none mb-6">Your Perfect Fit Starts Here</h2>
          <p className="text-[#A09D98] text-[16px] mb-12">Join thousands of customers who found their ideal tailor today.</p>
          <button className="bg-[#CFA972] text-[#1C1A17] px-10 py-4 rounded-full text-[13px] font-bold tracking-wide hover:bg-white transition-colors duration-300">
            Find a Tailor Now
          </button>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="w-full bg-[#FCFCFB] pt-24 pb-12 px-6 lg:px-16 border-t border-[#EBEAE6] z-20 relative">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-8">
              <span className="font-serif text-[32px] text-brand-dark tracking-normal">TailorFind</span>
              <span className="text-[6.5px] font-semibold tracking-[0.22em] uppercase mt-1.5 text-[#A09D98]">Exceptional Tailors. Everywhere.</span>
            </div>
            <p className="text-brand-gray text-[13px] max-w-[300px] leading-relaxed">The premier global marketplace connecting discerning clients with the world's most exceptional tailoring professionals.</p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-brand-dark">For Customers</h4>
            <ul className="space-y-4 text-[13px] text-brand-gray">
              <li><a href="#" className="hover:text-brand-dark transition">Find a Tailor</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Services</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Locations</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-brand-dark">For Tailors</h4>
            <ul className="space-y-4 text-[13px] text-brand-gray">
              <li><a href="#" className="hover:text-brand-dark transition">Join Directory</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Verification</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-brand-dark">Company</h4>
            <ul className="space-y-4 text-[13px] text-brand-gray">
              <li><a href="#" className="hover:text-brand-dark transition">About Us</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Contact</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-dark transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#EBEAE6] text-[11px] text-[#A09D98] font-medium">
          <p>&copy; 2024 TailorFind. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-dark transition">Instagram</a>
            <a href="#" className="hover:text-brand-dark transition">Twitter</a>
            <a href="#" className="hover:text-brand-dark transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
