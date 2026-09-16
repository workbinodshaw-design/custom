"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Calendar, Globe, MapPin, Target, Users, Search, ChevronDown, ChevronRight, ChevronLeft, Menu, SlidersHorizontal, Mouse } from "lucide-react";
import Image from "next/image";

import desktopBg from "../../public/tailorfind-bg.jpg";
import mobileBg from "../../public/tailorfind-mobile-bg.jpg";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

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
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-16 pt-8 pb-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Logo" className="w-10 h-10 filter invert-[0.8] sepia-[1] saturate-[3] hue-rotate-[10deg] brightness-[0.9] contrast-[1.2]" />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[28px] md:text-[34px] text-white tracking-normal leading-[0.9]">TailorFind</span>
            <span className="text-[5.5px] md:text-[6px] font-semibold tracking-[0.3em] uppercase mt-1 text-white/50">Exceptional Tailors. Everywhere.</span>
          </div>
        </div>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex flex-col">
            <a href="#" className="text-[12px] font-semibold text-white tracking-wide hover:opacity-70 transition">Find a Tailor</a>
            <div className="h-[2px] w-full bg-[#C6A87C] mt-1.5"></div>
          </div>
          <a href="#" className="text-[12px] font-medium text-white tracking-wide hover:opacity-70 transition">Services</a>
          <a href="#" className="text-[12px] font-medium text-white tracking-wide hover:opacity-70 transition">Locations</a>
          <a href="#" className="text-[12px] font-medium text-white tracking-wide hover:opacity-70 transition">How It Works</a>
          <a href="#" className="text-[12px] font-medium text-white tracking-wide hover:opacity-70 transition">For Tailors</a>
          <a href="#" className="text-[12px] font-medium text-white tracking-wide hover:opacity-70 transition">About</a>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative">
            <div onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition">
              <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              <span className="text-[11px] md:text-[12px] font-medium text-white">{selectedLang}</span>
              <ChevronDown className="w-3 h-3 text-white" />
            </div>
            
            {/* Dropdown Menu */}
            {langOpen && (
              <div className="absolute top-full mt-4 right-0 w-[120px] bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 flex flex-col z-50">
                {['EN', 'FR', 'ES', 'IT'].map(lang => (
                  <button 
                    key={lang}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    className={`text-left px-4 py-2 text-[12px] font-medium transition ${selectedLang === lang ? 'text-[#CFA972] bg-white/5' : 'text-white hover:bg-white/10'}`}
                  >
                    {lang === 'EN' ? 'English' : lang === 'FR' ? 'Français' : lang === 'ES' ? 'Español' : 'Italiano'}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-white/30"></div>
          <a href="#" className="hidden md:block text-[13px] font-medium text-white hover:opacity-70 transition">Sign In</a>
          <button className="hidden md:flex bg-[#D4AF37] text-black px-6 py-2.5 items-center gap-2 text-[13px] font-bold rounded-full shadow-lg hover:bg-[#CFA972] transition">
            Find a Tailor &rarr;
          </button>
          <div className="lg:hidden ml-1">
            <Menu className="w-6 h-6 text-white" />
          </div>
        </div>
      </motion.nav>

      {/* 2. DARK HERO SECTION */}
      <section className="relative w-full pt-[120px] md:pt-[160px] pb-10 md:pb-24 overflow-hidden bg-[#0A1010]">
        
        {/* Background Image Parallax */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=2000&q=80" 
            alt="Suit Background" 
            className="w-full h-full object-cover object-[center_top] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80"></div>
        </motion.div>

        {/* Hero Content Wrapper */}
        <div className="relative z-20 w-full max-w-[1700px] mx-auto flex flex-col px-5 lg:px-16">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full relative">
            
            {/* Main Hero Text (Left) */}
            <div className="w-full max-w-[800px] flex flex-col relative z-10">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.2 }} viewport={{ once: true }} className="flex items-center gap-4 mb-5 md:mb-6 mt-8 md:mt-0">
                <p className="text-white font-bold tracking-[0.25em] text-[9px] md:text-[10px] uppercase">Tailoring a better you</p>
                <div className="w-12 h-[1px] bg-[#C6A87C]"></div>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.4 }} viewport={{ once: true }} className="font-serif flex flex-col mb-4 md:mb-6">
                <span className="text-[52px] md:text-[85px] text-white leading-[1.05]">Find the</span>
                <span className="text-[52px] md:text-[85px] text-[#CFA972] italic leading-[1.05]">Perfect</span>
                <span className="text-[52px] md:text-[85px] text-white leading-[1.05]">Custom Tailor</span>
                <span className="text-[32px] md:text-[50px] text-white/95 leading-[1.05] mt-1 md:mt-2">Near You</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.6 }} viewport={{ once: true }} className="text-white/80 text-[14px] md:text-[18px] max-w-[500px] pr-[90px] md:pr-0 leading-[1.5] mb-8">
                Discover trusted bespoke, made-to-measure and custom tailoring professionals around the world.
              </motion.p>

              {/* Watch Our Story (Left on Mobile) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.7 }} viewport={{ once: true }} className="flex items-center gap-4 cursor-pointer group mb-2 lg:mb-0">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#CFA972] flex items-center justify-center transition hover:bg-[#CFA972]/10">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-[#CFA972] fill-current" />
                </div>
                <span className="text-[12px] md:text-[13px] font-medium text-white leading-tight">Watch<br/>Our Story</span>
              </motion.div>
            </div>

            {/* Floating Right Text (Mobile & Desktop) */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.8 }} viewport={{ once: true }} className="absolute right-0 bottom-[15px] md:bottom-0 lg:bottom-auto lg:top-auto lg:relative lg:flex flex-col items-end gap-16 z-0">
              <div className="flex flex-col items-end gap-4 text-right">
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-white/80 uppercase">More<br/>Than A Suit</span>
                <div className="w-10 md:w-12 h-[1px] md:h-[2px] bg-[#CFA972]"></div>
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-white/80 uppercase">A Better You</span>
              </div>
            </motion.div>
          </div>

          {/* Search Area */}
          <motion.div initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.5 }} viewport={{ once: true, amount: 0.2 }} className="w-full max-w-[1200px] mt-8 md:mt-16 z-20">
            
            {/* Tabs (Scrollable on mobile) */}
            <div className="flex items-center gap-1 md:gap-2 mb-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
              <button className="bg-white text-black px-6 py-3.5 rounded-t-[12px] text-[12px] md:text-[13px] font-bold flex items-center gap-2 shrink-0">
                <Search className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CFA972]" /> Find a Tailor
              </button>
              <button className="bg-black/40 backdrop-blur-md border border-white/10 border-b-0 text-white px-6 py-3.5 rounded-t-[12px] text-[12px] md:text-[13px] font-medium hover:text-white transition flex items-center gap-2 shrink-0">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-70" /> Book a Home Visit
              </button>
              <button className="bg-black/40 backdrop-blur-md border border-white/10 border-b-0 text-white px-6 py-3.5 rounded-t-[12px] text-[12px] md:text-[13px] font-medium hover:text-white transition flex items-center gap-2 shrink-0">
                <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-70" /> Virtual Consultation
              </button>
            </div>

            {/* 4-Column Search Pill */}
            <div className="w-full bg-white rounded-b-[20px] rounded-tr-[20px] md:rounded-tr-none shadow-2xl p-3 md:p-0 flex flex-col md:flex-row items-stretch md:items-center border border-white/20">
              
              {/* Column 1 */}
              <div className="flex-1 flex flex-col px-5 py-4 md:py-3 border-b md:border-b-0 md:border-r border-[#EAEAEA] w-full min-w-0">
                <div className="flex items-center justify-between cursor-pointer group w-full">
                  <div className="flex items-center gap-4">
                    <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" alt="Suit" className="w-6 h-6 opacity-80" />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-medium text-gray-500 mb-0.5">What are you looking for?</span>
                      <span className="text-[14px] text-black font-semibold">Custom Suit</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-black font-bold" strokeWidth={2.5} />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex-[1.2] flex flex-col px-5 py-4 md:py-3 border-b md:border-b-0 md:border-r border-[#EAEAEA] w-full min-w-0">
                 <div className="flex items-center gap-4 w-full">
                    <MapPin className="w-6 h-6 text-black shrink-0" strokeWidth={1.5} />
                    <div className="flex flex-col w-full justify-center">
                      <span className="text-[11px] font-medium text-gray-500 mb-0.5">Your Location</span>
                      <input type="text" placeholder="Enter city, ZIP or address" className="text-[14px] font-medium text-black bg-transparent outline-none w-full placeholder:text-gray-400" />
                      <p className="text-[10px] text-[#4285F4] flex items-center gap-1 mt-1 font-semibold cursor-pointer hover:underline">
                         <Target className="w-2.5 h-2.5" /> Use my current location
                      </p>
                    </div>
                  </div>
              </div>

              {/* Column 3 */}
              <div className="flex-[0.8] flex flex-col px-5 py-4 md:py-3 border-b md:border-b-0 md:border-r border-[#EAEAEA] w-full min-w-0">
                <div className="flex items-center justify-between cursor-pointer group w-full">
                  <div className="flex items-center gap-4">
                    <Target className="w-6 h-6 text-black" strokeWidth={1.5} />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-medium text-gray-500 mb-0.5">Search Radius</span>
                      <span className="text-[14px] text-black font-semibold">40 km</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-black font-bold" strokeWidth={2.5} />
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex-1 flex flex-col px-5 py-4 md:py-3 w-full min-w-0">
                <div className="flex items-center justify-between cursor-pointer group w-full">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-black" strokeWidth={1.5} />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-medium text-gray-500 mb-0.5">Fitting Preference</span>
                      <span className="text-[14px] text-black font-semibold">Home Visit</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-black font-bold" strokeWidth={2.5} />
                </div>
              </div>

              {/* Action Button */}
              <button className="bg-[#C19B64] hover:bg-[#A67D42] text-black h-[56px] px-8 flex items-center justify-center gap-2 text-[15px] font-bold rounded-xl mt-4 md:mt-0 md:rounded-l-none md:rounded-r-[20px] shadow-sm shrink-0 w-full md:w-auto transition-colors">
                Find Tailors &rarr;
              </button>
            </div>
          </motion.div>
          
          {/* Trusted Badges Row (Mobile & Desktop) */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} viewport={{ once: true }} className="flex justify-between items-start w-full pt-8 md:pt-16 mt-8 border-t border-white/10 pb-8">
            <div className="flex flex-col items-center text-center flex-1 px-1">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-[#CFA972] mb-2" strokeWidth={1.5} />
              <span className="text-[8px] md:text-[11px] text-white/90 leading-tight">Trusted by<br/>10,000+<br/>Customers</span>
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-white/10 mt-1 md:mt-2"></div>
            
            <div className="flex flex-col items-center text-center flex-1 px-1">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#CFA972] mb-2" strokeWidth={1.5} />
              <span className="text-[8px] md:text-[11px] text-white/90 leading-tight">Verified<br/>Professionals</span>
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-white/10 mt-1 md:mt-2"></div>
            
            <div className="flex flex-col items-center text-center flex-1 px-1">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#CFA972] mb-2" strokeWidth={1.5} />
              <span className="text-[8px] md:text-[11px] text-white/90 leading-tight">Global<br/>Coverage</span>
            </div>
            <div className="w-[1px] h-10 md:h-12 bg-white/10 mt-1 md:mt-2"></div>
            
            <div className="flex flex-col items-center text-center flex-1 px-1">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-[#CFA972] mb-2" strokeWidth={1.5} />
              <span className="text-[8px] md:text-[11px] text-white/90 leading-tight">Easy Enquiries<br/>& Bookings</span>
            </div>
          </motion.div>
          
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
              { title: "Tuxedos", img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660" },
              { title: "Custom Shirts", img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660" },
              { title: "Blazers", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0" },
              { title: "Alterations", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e" }
            ].map((srv, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 80, filter: 'blur(10px)', scale: 0.9 }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                <img src={`${srv.img}?w=400&q=80`} alt={srv.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                  <span className="text-white text-[12px] font-semibold">{srv.title}</span>
                  <ChevronRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED TAILORS */}
      <section className="w-full bg-[#F9F9F9] py-20 relative z-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Featured Tailors</p>
              <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight mb-2">Top-Rated Tailors Near You</h2>
              <p className="text-brand-gray text-[14px]">Discover exceptional tailors in your area.</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-4 mt-6 md:mt-0">
               <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-[#CFA972] hover:text-[#B88E52] transition">
                 View All Tailors &rarr;
               </a>
               <div className="flex gap-2">
                 <button className="w-8 h-8 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center hover:bg-[#F0F0F0] transition"><ChevronLeft className="w-4 h-4 text-brand-dark" /></button>
                 <button className="w-8 h-8 rounded-full border border-[#EAEAEA] bg-white flex items-center justify-center hover:bg-[#F0F0F0] transition"><ChevronRight className="w-4 h-4 text-brand-dark" /></button>
               </div>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-4 md:gap-5 pb-8 pt-2 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-6 lg:pb-0 lg:overflow-visible">
            {[
              { name: "Blackline Bespoke", rating: "4.9", rev: "128", loc: "Chicago, IL", dist: "2.3 km", price: "$899", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35", av: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
              { name: "The Modern Stitch", rating: "4.7", rev: "96", loc: "New York, NY", dist: "4.8 km", price: "$699", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", av: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
              { name: "Savile Row Atelier", rating: "4.8", rev: "112", loc: "London, UK", dist: "3.1 km", price: "$850", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0", av: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
              { name: "Pacific Tailors", rating: "4.6", rev: "78", loc: "Los Angeles, CA", dist: "6.5 km", price: "$499", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e", av: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="bg-white rounded-xl overflow-hidden shrink-0 w-[280px] lg:w-auto snap-start lg:snap-align-none border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="w-full bg-white py-16 md:py-20 relative z-20 border-t border-[#EAEAEA]">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start lg:items-center">
          
          <div className="lg:w-1/4 mb-10 lg:mb-0">
            <p className="text-brand-gray text-[10px] font-bold tracking-[0.25em] uppercase mb-3">How It Works</p>
            <h2 className="font-serif text-[36px] md:text-[45px] text-brand-dark leading-tight mb-4">Find Your Perfect Fit<br/>in Four Simple Steps</h2>
            <a href="#" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-[#CFA972] hover:text-[#B88E52] transition">
              Learn More &rarr;
            </a>
          </div>
          
          <div className="lg:w-3/4 grid grid-cols-2 md:flex md:flex-row justify-between relative w-full gap-y-10 gap-x-4 lg:gap-x-0 lg:px-12">
            {[
              { no: "01", title: "Search", desc: "Find tailors by service, location and more.", icon: <Search className="w-6 h-6 text-[#CFA972]" /> },
              { no: "02", title: "Compare", desc: "Browse profiles, reviews and prices.", icon: <SlidersHorizontal className="w-6 h-6 text-[#CFA972]" /> },
              { no: "03", title: "Connect", desc: "Send an inquiry or book an appointment.", icon: <Target className="w-6 h-6 text-[#CFA972]" /> },
              { no: "04", title: "Get Fitted", desc: "Meet your tailor and experience the perfect fit.", icon: <Users className="w-6 h-6 text-[#CFA972]" /> }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col relative flex-1">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#Fdfaf5] border border-[#CFA972]/30 flex items-center justify-center mb-5 md:mb-6 relative z-10">
                  {step.icon}
                </div>
                {/* Arrow connector between steps (hidden on mobile, hidden on last item) */}
                {i < 3 && <div className="hidden md:block absolute top-8 left-20 right-0 h-[1px] border-t-2 border-dashed border-[#EAEAEA] -z-0">
                   <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EAEAEA] w-4 h-4 bg-white" />
                </div>}
                
                <h3 className="font-serif text-[20px] md:text-[24px] text-[#CFA972] font-bold mb-1">{step.no}</h3>
                <h4 className="font-serif text-[18px] md:text-[22px] text-brand-dark mb-1.5 md:mb-2">{step.title}</h4>
                <p className="text-brand-gray text-[12px] md:text-[13px] max-w-[160px] md:max-w-[180px] leading-relaxed">{step.desc}</p>
              </motion.div>
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
              <motion.div key={i} initial={{ opacity: 0, y: 60, filter: 'blur(10px)', scale: 0.98 }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="group relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                <img src={`${loc.img}?w=300&q=80`} alt={loc.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute bottom-4 left-4 z-20 flex flex-col">
                  <span className="text-white font-serif text-[18px] leading-tight mb-1">{loc.city}</span>
                  <span className="text-white/70 text-[10px] font-semibold tracking-wider uppercase">{loc.country}</span>
                </div>
              </motion.div>
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
                  <motion.div key={i} initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="bg-white p-6 rounded-xl border border-[#EAEAEA] shadow-sm flex flex-col justify-between min-h-[220px]">
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
                  </motion.div>
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



