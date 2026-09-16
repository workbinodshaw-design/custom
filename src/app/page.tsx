"use client";

import { Search, Globe, ChevronDown, ChevronRight, ChevronLeft, MapPin, Users, Target, Menu, SlidersHorizontal, Mouse } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

import desktopBg from "../../public/tailorfind-bg.jpg";
import mobileBg from "../../public/tailorfind-mobile-bg.jpg";

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
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-16 pt-8 pb-4 reveal-up">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Logo" className="w-8 h-8 filter invert brightness-0" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[28px] md:text-[32px] text-white tracking-normal">TailorFind</span>
            <span className="text-[5.5px] md:text-[6.5px] font-semibold tracking-[0.22em] uppercase mt-1.5 text-white/60">Exceptional Tailors. Everywhere.</span>
          </div>
        </div>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">Find a Tailor</a>
          <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">Services</a>
          <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">Locations</a>
          <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">How It Works</a>
          <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">For Tailors</a>
          <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">About</a>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition">
            <Globe className="w-3.5 h-3.5 text-white" />
            <span className="text-[12px] font-semibold text-white">EN</span>
            <ChevronDown className="w-3 h-3 text-white" />
          </div>
          <a href="#" className="hidden md:block text-[13px] font-semibold text-white hover:opacity-70 transition ml-2">Sign In</a>
          <button className="gold-btn px-6 py-2.5 flex items-center gap-2 text-[12px] font-semibold rounded-full shadow-lg">
            Find a Tailor &rarr;
          </button>
          <div className="lg:hidden ml-2">
            <Menu className="w-6 h-6 text-white" />
          </div>
        </div>
      </nav>

      {/* 2. DARK HERO SECTION */}
      <section className="relative w-full min-h-[900px] flex items-center pt-[140px] pb-12 overflow-hidden bg-[#111]">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=1800&q=80" 
            alt="Tuxedo Background" 
            className="w-full h-full object-cover object-[center_top] opacity-80"
          />
          {/* Gradients to fade edges into dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/50"></div>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-20 w-full max-w-[1700px] mx-auto flex flex-col h-full px-6 lg:px-16 pt-16">
          
          {/* Main Hero Text */}
          <div className="w-full max-w-[700px] flex flex-col reveal-up delay-1">
            <p className="text-white/70 font-semibold tracking-[0.3em] text-[10px] uppercase mb-4">Tailoring a better you</p>
            <h1 className="font-serif text-[50px] md:text-[65px] text-white leading-[1.1] mb-6">
              Find the Perfect Custom Tailor Near You
            </h1>
            <p className="text-white/80 text-[15px] md:text-[18px] max-w-[500px] mb-10 leading-[1.5]">
              Discover trusted bespoke, made-to-measure and custom tailoring professionals around the world.
            </p>
          </div>

          {/* Search Area */}
          <div className="w-full max-w-[1100px] reveal-up delay-2 mt-4">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 mb-2">
              <button className="bg-white text-brand-dark px-6 py-3 rounded-t-lg text-[13px] font-semibold border-b-2 border-brand-gold">
                Find a Tailor
              </button>
              <button className="bg-black/20 backdrop-blur-md text-white px-6 py-3 rounded-t-lg text-[13px] font-medium hover:bg-black/40 transition">
                Book a Home Visit
              </button>
              <button className="bg-black/20 backdrop-blur-md text-white px-6 py-3 rounded-t-lg text-[13px] font-medium hover:bg-black/40 transition">
                Virtual Consultation
              </button>
            </div>

            {/* 4-Column Search Pill */}
            <div className="w-full bg-white rounded-b-xl rounded-tr-xl shadow-2xl p-3 flex flex-col md:flex-row items-center border border-white/20">
              
              {/* Column 1 */}
              <div className="flex-1 flex flex-col px-5 py-2 border-r border-[#EAEAEA] w-full min-w-0">
                <div className="flex items-center gap-2 mb-1 text-brand-dark">
                  <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Suit" className="w-4 h-4 opacity-70" />
                  <label className="text-[11px] font-bold text-brand-dark">What are you looking for?</label>
                </div>
                <div className="flex items-center justify-between cursor-pointer group mt-1">
                  <span className="text-[15px] text-brand-gray group-hover:text-black whitespace-nowrap">Custom Suit</span>
                  <ChevronDown className="w-4 h-4 text-brand-gray" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex-[1.2] flex flex-col px-5 py-2 border-r border-[#EAEAEA] w-full min-w-0">
                <div className="flex items-center gap-2 mb-1 text-brand-dark">
                  <MapPin className="w-4 h-4 text-brand-gray" />
                  <label className="text-[11px] font-bold text-brand-dark">Your Location</label>
                </div>
                <input type="text" placeholder="Enter city, ZIP or address" className="text-[14px] text-brand-dark bg-transparent outline-none w-full placeholder:text-[#B0ADA8] mt-1" />
                <p className="text-[9px] text-[#4285F4] flex items-center gap-1 mt-1 font-medium cursor-pointer hover:underline">
                   <Target className="w-2.5 h-2.5" /> Use my current location
                </p>
              </div>

              {/* Column 3 */}
              <div className="flex-[0.8] flex flex-col px-5 py-2 border-r border-[#EAEAEA] w-full min-w-0">
                <div className="flex items-center gap-2 mb-1 text-brand-dark">
                  <Target className="w-4 h-4 text-brand-gray" />
                  <label className="text-[11px] font-bold text-brand-dark">Search Radius</label>
                </div>
                <div className="flex items-center justify-between cursor-pointer group mt-1">
                  <span className="text-[15px] text-brand-gray group-hover:text-black whitespace-nowrap">40 km</span>
                  <ChevronDown className="w-4 h-4 text-brand-gray" />
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex-1 flex flex-col px-5 py-2 w-full min-w-0">
                <div className="flex items-center gap-2 mb-1 text-brand-dark">
                  <Users className="w-4 h-4 text-brand-gray" />
                  <label className="text-[11px] font-bold text-brand-dark">Fitting Preference</label>
                </div>
                <div className="flex items-center justify-between cursor-pointer group mt-1">
                  <span className="text-[15px] text-brand-gray group-hover:text-black whitespace-nowrap">Home Visit</span>
                  <ChevronDown className="w-4 h-4 text-brand-gray" />
                </div>
              </div>

              {/* Action Button */}
              <button className="gold-btn h-full px-8 py-4 flex items-center justify-center gap-2 text-[15px] font-bold rounded-lg ml-2 shadow-md shrink-0 w-full md:w-auto mt-4 md:mt-0">
                Find Tailors &rarr;
              </button>
            </div>
          </div>

          {/* Trusted Badges Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-12 reveal-up delay-3 text-white/80 text-[12px] font-medium">
             <div className="flex items-center gap-2">
                <span className="text-brand-gold">🛡️</span> Trusted by 10,000+ Customers
             </div>
             <div className="flex items-center gap-2">
                <span className="text-brand-gold">✓</span> Verified Professionals
             </div>
             <div className="flex items-center gap-2">
                <span className="text-brand-gold">🌐</span> Global Coverage
             </div>
             <div className="flex items-center gap-2">
                <span className="text-brand-gold">📅</span> Easy Enquiries & Bookings
             </div>
          </div>
          
        </div>

        {/* Floating Right Text */}
        <div className="absolute right-12 bottom-20 text-right pointer-events-none reveal-up delay-4 hidden lg:block">
           <h3 className="font-serif text-[24px] text-white leading-[1.2]">More</h3>
           <h3 className="font-serif text-[24px] text-white leading-[1.2]">Than a Suit</h3>
           <p className="font-serif italic text-[24px] text-white/70">A Better You</p>
        </div>
      </section>


      {/* 3. SERVICES SECTION */}
      <section className="w-full bg-white py-20 relative z-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Our Services</p>
              <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight">Find Tailors by Service</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-brand-gold hover:text-brand-goldHover transition">
              View All Services &rarr;
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { title: "Bespoke Suits", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35" },
              { title: "Custom Suits", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e" },
              { title: "Made-to-Measure", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0" },
              { title: "Wedding Tailoring", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" },
              { title: "Tuxedos", img: "https://images.unsplash.com/photo-1550614000-4b95d466539d" },
              { title: "Custom Shirts", img: "https://images.unsplash.com/photo-1620012253295-c15bc3a65ce4" },
              { title: "Blazers", img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0" },
              { title: "Alterations", img: "https://images.unsplash.com/photo-1605282570453-caee04df9023" }
            ].map((srv, i) => (
              <div key={i} className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                <img src={`${srv.img}?w=400&q=80`} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <span className="text-white text-[12px] font-semibold">{srv.title}</span>
                  <ChevronRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED TAILORS */}
      <section className="w-full bg-[#F9F9F9] py-20 relative z-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Featured Tailors</p>
              <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight mb-2">Top-Rated Tailors Near You</h2>
              <p className="text-brand-gray text-[14px]">Discover exceptional tailors in your area.</p>
            </div>
            <div className="flex flex-col items-end gap-4 mt-6 md:mt-0">
               <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-brand-gold hover:text-brand-goldHover transition">
                 View All Tailors &rarr;
               </a>
               <div className="flex gap-2">
                 <button className="w-8 h-8 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center hover:bg-[#F0F0F0] transition"><ChevronLeft className="w-4 h-4 text-brand-dark" /></button>
                 <button className="w-8 h-8 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center hover:bg-[#F0F0F0] transition"><ChevronRight className="w-4 h-4 text-brand-dark" /></button>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Blackline Bespoke", rating: "4.9", rev: "128", loc: "Chicago, IL", dist: "2.3 km", price: "$899", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35", av: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
              { name: "The Modern Stitch", rating: "4.7", rev: "96", loc: "New York, NY", dist: "4.8 km", price: "$699", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", av: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
              { name: "Savile Row Atelier", rating: "4.8", rev: "112", loc: "London, UK", dist: "3.1 km", price: "$850", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0", av: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
              { name: "Pacific Tailors", rating: "4.6", rev: "78", loc: "Los Angeles, CA", dist: "6.5 km", price: "$499", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e", av: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" }
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
                {/* Card Header Image */}
                <div className="relative h-[160px] w-full">
                  <img src={`${t.img}?w=600&q=80`} alt="Cover" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-[#00B074] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Verified</div>
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  </button>
                  {/* Avatar overlapping */}
                  <div className="absolute -bottom-6 left-5 w-14 h-14 rounded-full border-4 border-white overflow-hidden bg-white shadow-sm">
                    <img src={`${t.av}?w=100&q=80`} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="px-5 pt-9 pb-5">
                  <h3 className="font-serif text-[20px] text-brand-dark leading-tight mb-1">{t.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-[12px]">
                    <span className="text-[#FFB800]">★</span>
                    <span className="font-bold text-brand-dark">{t.rating}</span>
                    <span className="text-brand-gray">({t.rev} reviews)</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-brand-gray text-[12px] mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.loc} • {t.dist}</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#F5F5F5] text-brand-gray text-[10px] font-semibold px-2 py-1 rounded">Bespoke Suits</span>
                    <span className="bg-[#F5F5F5] text-brand-gray text-[10px] font-semibold px-2 py-1 rounded">Wedding</span>
                    <span className="bg-[#F5F5F5] text-brand-gray text-[10px] font-semibold px-2 py-1 rounded">Shirts</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-5 text-[11px] font-semibold text-brand-dark">
                     <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5 text-brand-gray"/> Studio</span>
                     <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-brand-gray"/> Home Visit</span>
                  </div>
                  
                  <div className="flex items-end justify-between pt-4 border-t border-[#EAEAEA] mb-4">
                     <div className="flex flex-col">
                        <span className="text-brand-gray text-[10px] font-semibold">From</span>
                        <span className="font-serif text-[20px] font-semibold text-brand-dark">{t.price}</span>
                     </div>
                  </div>
                  
                  <button className="w-full border border-brand-dark text-brand-dark py-2.5 rounded-lg text-[13px] font-bold hover:bg-brand-dark hover:text-white transition">
                    View Profile &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="w-full bg-white py-20 relative z-20 border-t border-[#EAEAEA]">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">How It Works</p>
            <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight mb-4">Find Your Perfect Fit<br/>in Four Simple Steps</h2>
            <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-brand-gold hover:text-brand-goldHover transition">
              Learn More &rarr;
            </a>
          </div>
          
          <div className="lg:w-3/4 flex flex-col md:flex-row justify-between relative w-full px-4 lg:px-12">
            {[
              { no: "01", title: "Search", desc: "Find tailors by service, location and more.", icon: <Search className="w-6 h-6 text-brand-gold" /> },
              { no: "02", title: "Compare", desc: "Browse profiles, reviews and prices.", icon: <SlidersHorizontal className="w-6 h-6 text-brand-gold" /> },
              { no: "03", title: "Connect", desc: "Send an inquiry or book an appointment.", icon: <Target className="w-6 h-6 text-brand-gold" /> },
              { no: "04", title: "Get Fitted", desc: "Meet your tailor and experience the perfect fit.", icon: <Users className="w-6 h-6 text-brand-gold" /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col relative flex-1 mb-8 md:mb-0 px-2">
                <div className="w-16 h-16 rounded-full bg-[#Fdfaf5] border border-brand-gold/30 flex items-center justify-center mb-6 relative z-10">
                  {step.icon}
                </div>
                {/* Arrow connector between steps (hidden on mobile, hidden on last item) */}
                {i < 3 && <div className="hidden md:block absolute top-8 left-20 right-0 h-[1px] border-t-2 border-dashed border-[#EAEAEA] -z-0">
                   <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EAEAEA] w-4 h-4 bg-white" />
                </div>}
                
                <h3 className="font-serif text-[24px] text-brand-gold font-bold mb-1">{step.no}</h3>
                <h4 className="font-serif text-[22px] text-brand-dark mb-2">{step.title}</h4>
                <p className="text-brand-gray text-[13px] max-w-[180px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 6. POPULAR DESTINATIONS */}
      <section className="w-full bg-[#F9F9F9] py-20 relative z-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Popular Destinations</p>
              <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight">Explore Top Tailoring Cities</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-brand-gold hover:text-brand-goldHover transition">
              View All Cities &rarr;
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { city: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9" },
              { city: "Los Angeles", country: "USA", img: "https://images.unsplash.com/photo-1580659324422-c31a74d2847a" },
              { city: "Chicago", country: "USA", img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f" },
              { city: "London", country: "UK", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" },
              { city: "Toronto", country: "Canada", img: "https://images.unsplash.com/photo-1507992781348-310259076fe0" },
              { city: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
              { city: "Sydney", country: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" },
              { city: "Melbourne", country: "Australia", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144" }
            ].map((loc, i) => (
              <div key={i} className="group relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <img src={`${loc.img}?w=300&q=80`} alt={loc.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute bottom-4 left-4 z-20 flex flex-col">
                  <span className="text-white font-serif text-[18px] leading-tight mb-1">{loc.city}</span>
                  <span className="text-white/70 text-[10px] font-semibold tracking-wider uppercase">{loc.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="w-full bg-[#F9F9F9] py-20 relative z-20 overflow-hidden">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
               <div>
                  <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">What Our Customers Say</p>
                  <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight">Real People. Exceptional Experiences.</h2>
               </div>
               <div className="flex items-center gap-4 mt-6 md:mt-0">
                  <a href="#" className="text-[13px] font-semibold text-brand-gold hover:text-brand-goldHover mr-4">View All Reviews</a>
                  <button className="w-8 h-8 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center hover:bg-[#F0F0F0]"><ChevronLeft className="w-4 h-4 text-brand-dark" /></button>
                  <button className="w-8 h-8 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center hover:bg-[#F0F0F0]"><ChevronRight className="w-4 h-4 text-brand-dark" /></button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { t: '"Found an amazing tailor through TailorFind. The whole process was seamless and the results are incredible!"', n: "James R.", l: "New York, USA", a: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
                  { t: '"Professional, reliable and incredibly skilled. My wedding suit was better than I imagined."', n: "Daniel K.", l: "London, UK", a: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
                  { t: '"The home visit service was so convenient. Perfect fit and excellent attention to detail."', n: "Michael T.", l: "Dubai, UAE", a: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" }
               ].map((rv, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-[#EAEAEA] shadow-sm flex flex-col justify-between min-h-[220px]">
                     <div>
                        <p className="text-[14px] leading-[1.6] text-brand-dark mb-4 italic">{rv.t}</p>
                        <div className="text-[#FFB800] text-[14px] tracking-widest mb-6">★★★★★</div>
                     </div>
                     <div className="flex items-center gap-3">
                        <img src={`${rv.a}?w=80&q=80`} alt="User" className="w-10 h-10 rounded-full object-cover"/>
                        <div>
                           <p className="text-[12px] font-bold text-brand-dark">{rv.n}</p>
                           <p className="text-[10px] text-brand-gray">{rv.l}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 bg-[#111] text-white p-12 lg:p-16 rounded-xl relative overflow-hidden h-[400px] lg:h-[450px] shadow-xl">
            <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80" alt="Suit Texture" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"/>
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h3 className="font-serif text-[40px] leading-[1.1] mb-6 tracking-wide">Confidence<br/>Looks Good<br/>On You</h3>
              <div className="w-16 h-[2px] bg-brand-gold"></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="w-full relative py-20 overflow-hidden z-20 flex justify-center border-b-[8px] border-brand-gold">
        <div className="absolute inset-0 bg-[#111]">
          <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1600&q=80" alt="Dark background" className="w-full h-full object-cover opacity-20 filter grayscale" />
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto w-full px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between">
           <div className="text-center md:text-left mb-8 md:mb-0">
             <h2 className="font-serif text-[40px] md:text-[50px] text-white leading-tight mb-2">Your Perfect Fit Starts Here</h2>
             <p className="text-white/70 text-[14px]">Join thousands of customers who found their ideal tailor.</p>
           </div>
           
           <div className="flex flex-col md:flex-row items-center gap-8">
              <button className="gold-btn px-10 py-4 rounded-lg text-[14px] font-bold shadow-lg">
                Find a Tailor &rarr;
              </button>
              <div className="hidden lg:block text-white/40 transform -rotate-6 ml-10">
                 <span className="font-cursive text-[45px] text-white tracking-wide block leading-none">Tailored</span>
                 <span className="font-cursive text-[30px] ml-10 block leading-none">for a better tomorrow.</span>
              </div>
           </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="w-full bg-white pt-20 pb-8 px-6 lg:px-16 border-t border-[#EAEAEA] z-20 relative">
        <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          <div className="w-full lg:w-1/4">
            <div className="flex items-center gap-3 mb-6">
               <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Logo" className="w-6 h-6" />
               <div className="flex flex-col leading-none">
                 <span className="font-serif text-[24px] text-brand-dark tracking-normal">TailorFind</span>
                 <span className="text-[5px] font-semibold tracking-[0.22em] uppercase mt-1 text-brand-gray">Exceptional Tailors. Everywhere.</span>
               </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-1">
              <h4 className="text-[12px] font-bold text-brand-dark mb-6">For Customers</h4>
              <ul className="space-y-3 text-[13px] text-brand-gray font-medium">
                <li><a href="#" className="hover:text-brand-dark transition">Find a Tailor</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Services</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Locations</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">How It Works</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Reviews</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-[12px] font-bold text-brand-dark mb-6">For Tailors</h4>
              <ul className="space-y-3 text-[13px] text-brand-gray font-medium">
                <li><a href="#" className="hover:text-brand-dark transition">Join Our Directory</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Pricing Plans</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Verification</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Tailor Resources</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Success Stories</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-[12px] font-bold text-brand-dark mb-6">Company</h4>
              <ul className="space-y-3 text-[13px] text-brand-gray font-medium">
                <li><a href="#" className="hover:text-brand-dark transition">About Us</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Contact</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Blog</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Careers</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-[12px] font-bold text-brand-dark mb-6">Legal</h4>
              <ul className="space-y-3 text-[13px] text-brand-gray font-medium">
                <li><a href="#" className="hover:text-brand-dark transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-dark transition">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-1 flex flex-col items-start md:items-end">
               <h4 className="text-[12px] font-bold text-brand-dark mb-6">Follow Us</h4>
               <div className="flex items-center gap-4 mb-8">
                  <a href="#" className="w-8 h-8 rounded-full border border-[#EAEAEA] flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition">In</a>
                  <a href="#" className="w-8 h-8 rounded-full border border-[#EAEAEA] flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition">Fb</a>
                  <a href="#" className="w-8 h-8 rounded-full border border-[#EAEAEA] flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition">Li</a>
               </div>
               <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition border border-[#EAEAEA] rounded-full px-4 py-2">
                 <Globe className="w-3.5 h-3.5 text-brand-dark" />
                 <span className="text-[11px] font-bold tracking-widest text-brand-dark uppercase">EN</span>
                 <ChevronDown className="w-3 h-3 text-brand-dark" />
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[#EAEAEA] text-[10px] text-brand-gray font-medium uppercase tracking-wider">
          <p>&copy; 2024 TailorFind. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-bold tracking-[0.2em] text-[#B0ADA8]">Exceptional Tailors. Everywhere.</p>
        </div>
      </footer>
    </main>
  );
}
