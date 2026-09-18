'use client';
import React, { useState } from 'react';
import { Search, ChevronRight, Globe, Play, MapPin, Calendar, Star, Send, ArrowRight, ArrowLeft, BadgeCheck, ChevronDown, Target, Shirt, LocateFixed, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [showAllMobileServices, setShowAllMobileServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  // Parallax hooks
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  // Awwwards-style Dramatic Minimal/Maximal easing curve
  const ease = [0.85, 0, 0.15, 1];

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1C1A17] font-sans selection:bg-[#1C1A17] selection:text-[#F5F4F0] pb-10 overflow-hidden">
      
      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="w-full flex items-center justify-between px-6 lg:px-16 py-6 absolute top-0 left-0 right-0 z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm transition-transform duration-500 group-hover:scale-95">T</div>
          <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-black/70">
          {['Find a Tailor', 'Services', 'Locations', 'How It Works', 'Stories'].map((link, i) => (
            <a key={i} href="#" className="hover:text-black transition-colors">{link}</a>
          ))}
        </div>

        {/* Mobile Right Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="text-black hover:opacity-70 transition"><Search className="w-5 h-5" strokeWidth={1.5} /></button>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-black hover:opacity-70 transition"><Menu className="w-6 h-6" strokeWidth={1.5} /></button>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-[13px] font-medium text-black hover:opacity-70 transition group">
            <Globe className="w-4 h-4" strokeWidth={1.5} />
            EN
            <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
          <div className="w-[1px] h-4 bg-black/20 mx-1"></div>
          <button className="text-black hover:opacity-70 transition">
            <Search className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <div className="w-[1px] h-4 bg-black/20 mx-1"></div>
          <a href="#" className="text-[13px] font-medium hover:opacity-70 transition">Sign In</a>
          <button className="bg-[#1C1A17] text-white px-6 py-2.5 rounded-full text-[13px] font-medium flex items-center gap-2 hover:bg-[#2A2825] hover:scale-[1.02] active:scale-95 transition-all duration-300 ml-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-4 lg:pb-12 px-6 lg:px-16 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-0 lg:gap-8 overflow-hidden">
        
        {/* Mobile Premium Background (User Provided Image) */}
        <div className="absolute top-0 right-0 w-full h-[90%] z-[1] block lg:hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.1, ease }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <img
              src="/hero-mockup-suit.png"
              alt="Bespoke Suit"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          {/* Left Fade to seamlessly blend the image's wall with the page background */}
          <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-[#F5F4F0] via-[#F5F4F0]/90 to-transparent z-[2]"></div>
          {/* Bottom Premium Fade */}
          <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-[#F5F4F0] via-[#F5F4F0]/95 to-transparent z-[2]"></div>
        </div>
        
        {/* Left Content (Text) */}
        <motion.div 
          className="w-full lg:w-[60%] lg:flex-1 flex flex-col justify-start relative z-20 pt-2 lg:pt-0"
        >
          {/* Mobile Entrance Animation */}
          <motion.div 
            className="lg:hidden flex flex-col"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
            }}
          >
            <div className="overflow-hidden mb-5">
              <motion.div variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 1.2, ease } } }} className="flex items-center gap-3">
                <span className="text-[8px] font-bold tracking-[0.2em] text-black/50 uppercase">Bespoke Tailoring</span>
                <div className="w-10 h-[1px] bg-black/15"></div>
              </motion.div>
            </div>
            
            <div className="overflow-hidden mb-5">
              <motion.h1 variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.4, ease } } }} className="font-serif text-[40px] leading-[1.05] tracking-tight text-[#1C1A17]">
                Confidence<br/>Looks Good<br/>On <span className="italic font-light text-black/70">You.</span>
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-8">
              <motion.p variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.2, ease } } }} className="text-[12px] text-black/60 leading-[1.6] max-w-[220px]">
                Find trusted, bespoke tailoring professionals near you. From timeless suits to everyday wear — crafted with precision, just for you.
              </motion.p>
            </div>
            
            <div className="overflow-hidden mb-[12vh]">
              <motion.div variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.2, ease } } }} className="flex flex-col items-start gap-4">
                <button className="bg-[#1C1A17] text-white px-6 py-3 rounded-full text-[12px] font-medium flex items-center gap-2 shadow-[0_8px_20px_rgba(28,26,23,0.12)] active:scale-95 transition-transform">
                  Find a Tailor <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
                <button className="flex items-center gap-3 group cursor-pointer pl-1 active:opacity-70 transition-opacity">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white/60 backdrop-blur-md shadow-sm">
                    <Play className="w-3.5 h-3.5 text-[#1C1A17] fill-[#1C1A17] ml-0.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#1C1A17] tracking-wide leading-tight">Watch<br/>Our Story</span>
                </button>
              </motion.div>
            </div>
            
            {/* Stats Section - Mobile (Premium borderless layout) */}
            <div className="overflow-hidden w-full pt-4">
              <motion.div variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 1.2, ease } } }} className="grid grid-cols-3">
                <div className="flex flex-col items-center justify-center text-center">
                  <h4 className="text-[16px] font-bold font-serif mb-1 flex items-center text-[#1C1A17]">10K<span className="font-sans text-[12px] ml-0.5">+</span></h4>
                  <p className="text-[9px] text-black/50 font-bold tracking-widest uppercase leading-[1.3]">Happy<br/>Clients</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h4 className="text-[16px] font-bold font-serif mb-1 flex items-center gap-1 text-[#1C1A17]">4.8 <Star className="w-3 h-3 fill-[#1C1A17] text-[#1C1A17] mb-[1px]" /></h4>
                  <p className="text-[9px] text-black/50 font-bold tracking-widest uppercase leading-[1.3]">Average<br/>Rating</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h4 className="text-[16px] font-bold font-serif mb-1 flex items-center text-[#1C1A17]">500<span className="font-sans text-[12px] ml-0.5">+</span></h4>
                  <p className="text-[9px] text-black/50 font-bold tracking-widest uppercase leading-[1.3]">Verified<br/>Tailors</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop version with parallax */}
          <motion.div style={{ opacity: opacityHero, y: y1 }} className="hidden lg:flex flex-col justify-center h-full">
            <div className="overflow-hidden mb-6">
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.1, ease }} className="flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase">Bespoke Tailoring</span>
                <div className="w-12 h-[1px] bg-black/20"></div>
              </motion.div>
            </div>
            
            <div className="overflow-hidden mb-6 relative z-20">
              <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.4, delay: 0.2, ease }} className="font-serif text-[76px] leading-[1.0] tracking-tight text-[#1C1A17]">
                Confidence<br/>Looks Good<br/>On <span className="italic font-light text-black/80">You.</span>
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-8 relative z-20">
              <motion.p initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.3, ease }} className="text-[16px] text-black/60 leading-[1.6] max-w-[420px]">
                Find trusted, bespoke tailoring professionals near you. From timeless suits to everyday wear — crafted with precision, just for you.
              </motion.p>
            </div>
            
            <div className="overflow-hidden mb-auto relative z-20">
              <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease }} className="flex items-center gap-6 pb-2">
                <button className="bg-[#151515] text-white px-8 py-4 rounded-full text-[14px] font-medium flex items-center gap-2 hover:bg-black/80 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                  Find a Tailor <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
                <button className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black transition-colors bg-white/40 backdrop-blur-md z-20 relative">
                    <Play className="w-4 h-4 text-[#151515] fill-[#151515] ml-0.5" />
                  </div>
                  <span className="text-[13px] font-medium text-[#151515] leading-tight">Watch<br/>Our Story</span>
                </button>
              </motion.div>
            </div>
            
            {/* Stats Section - Desktop */}
            <div className="overflow-hidden w-max mt-10 relative z-20">
              <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease }} className="flex flex-row items-center justify-start pt-6 border-t border-black/10">
                <div className="flex flex-col items-start pr-12 border-r border-black/10">
                  <h4 className="text-[24px] font-bold font-serif mb-0.5 flex items-center gap-0.5 text-[#1C1A17]">10K<span className="font-sans text-[12px]">+</span></h4>
                  <p className="text-[11px] text-black/50 font-medium">Happy Clients</p>
                </div>
                <div className="flex flex-col items-start px-12 border-r border-black/10">
                  <h4 className="text-[24px] font-bold font-serif mb-0.5 flex items-center gap-1 text-[#1C1A17]">4.8 <Star className="w-4 h-4 fill-[#1C1A17] text-[#1C1A17]" /></h4>
                  <p className="text-[11px] text-black/50 font-medium">Average Rating</p>
                </div>
                <div className="flex flex-col items-start pl-12">
                  <h4 className="text-[24px] font-bold font-serif mb-0.5 flex items-center gap-0.5 text-[#1C1A17]">500<span className="font-sans text-[12px]">+</span></h4>
                  <p className="text-[11px] text-black/50 font-medium">Verified Tailors</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image Container - Desktop Only */}
        <div className="hidden lg:flex lg:relative lg:flex-1 lg:min-h-[750px] z-10">
          <motion.div 
            initial={{ scale: 0.95, clipPath: "inset(10% 10% 10% 10% round 40px)" }} 
            animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0% round 40px)" }} 
            transition={{ duration: 1.8, ease }} 
            className="w-full h-full relative overflow-hidden lg:rounded-[40px] bg-black/5"
          >
            <motion.img 
              initial={{ scale: 1.4 }}
              animate={{ scale: 1.1 }} // Keeps scale 1.1 for parallax base
              transition={{ duration: 1.8, ease }}
              style={{ y: y2 }}
              src="/hero-mannequin-color.jpg" 
              alt="Bespoke Suit" 
              className="absolute inset-0 w-full h-full object-cover object-[70%_top] lg:object-center origin-top border-none"
            />
            
            <div className="overflow-hidden absolute top-12 left-10 hidden lg:flex flex-col gap-8">
              <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease }}>
                <div className="text-[9px] font-bold tracking-[0.3em] text-white/90 uppercase leading-relaxed">More<br/>Than<br/>A Suit</div>
              </motion.div>
              <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.7, ease }}>
                <div className="text-[9px] font-bold tracking-[0.3em] text-white/90 uppercase leading-relaxed">A Better<br/>You.</div>
              </motion.div>
            </div>
            
            <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -25 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.4, delay: 0.8, ease }} className="hidden lg:flex absolute bottom-10 left-10 items-center gap-4 z-10">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-[#F5F4F0] shadow-xl relative bg-black">
                <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=200&auto=format&fit=crop" alt="Details" className="w-full h-full object-cover opacity-60 " />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-white uppercase leading-relaxed max-w-[120px]">
                Crafted<br/>In Every<br/>Detail
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEARCH PILL */}
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease }}
        className="max-w-[1100px] mx-auto px-6 lg:px-0 mt-4 lg:mt-6 relative z-30 mb-10 lg:mb-32"
      >
        <div className="flex bg-white/90 backdrop-blur-xl rounded-[24px] lg:rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-3 lg:p-2 flex-col lg:flex-row items-stretch lg:items-center transform transition duration-500 w-full relative z-50 border border-black/5 gap-2 lg:gap-0">
          
          <div className="flex-[1.2] flex items-center justify-between px-4 lg:px-6 py-4 hover:bg-black/[0.02] transition cursor-pointer rounded-[14px] min-h-[70px] lg:min-h-[90px]">
             <div className="flex items-center gap-4">
               <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" className="w-7 h-7 opacity-70" alt="Suit" />
               <div className="flex flex-col">
                 <span className="text-[13px] font-bold text-black leading-tight mb-1">What are you<br className="hidden lg:block"/> looking for?</span>
                 <span className="text-[13px] text-black/50">Custom Suit</span>
               </div>
             </div>
             <ChevronDown className="w-3.5 h-3.5 text-black/30" strokeWidth={2.5} />
          </div>

          <div className="hidden lg:block w-px h-[50px] bg-black/5"></div>
          <div className="lg:hidden w-full h-px bg-black/5 px-4"></div>

          <div className="flex-[1.4] flex items-center justify-between px-4 lg:px-6 py-4 hover:bg-black/[0.02] transition relative cursor-text rounded-[14px] min-h-[70px] lg:min-h-[90px]">
             <div className="flex items-start gap-4 w-full">
               <MapPin className="w-5 h-5 text-black/80 mt-1 shrink-0" strokeWidth={1.5} />
               <div className="flex flex-col flex-1 w-full">
                 <span className="text-[13px] font-bold text-black mb-1">Your Location</span>
                 <input type="text" placeholder="Enter city, ZIP or address" className="w-full text-[13px] text-black placeholder:text-black/30 bg-transparent outline-none mb-1.5" />
                 <button className="flex items-center gap-1.5 text-[11px] font-bold text-[#007AFF] hover:underline w-max">
                   <LocateFixed className="w-3.5 h-3.5" strokeWidth={2.5} /> Use my current location
                 </button>
               </div>
             </div>
          </div>

          <div className="hidden lg:block w-px h-[50px] bg-black/5"></div>
          <div className="lg:hidden w-full h-px bg-black/5 px-4"></div>

          <div className="flex-1 flex items-center justify-between px-4 lg:px-6 py-4 hover:bg-black/[0.02] transition cursor-pointer rounded-[14px] min-h-[70px] lg:min-h-[90px]">
             <div className="flex items-center gap-4">
               <Target className="w-6 h-6 text-black/80" strokeWidth={1.5} />
               <div className="flex flex-col">
                 <span className="text-[13px] font-bold text-black mb-1">Search Radius</span>
                 <span className="text-[13px] text-black/50">40 km</span>
               </div>
             </div>
             <ChevronDown className="w-3.5 h-3.5 text-black/30" strokeWidth={2.5} />
          </div>

          <div className="hidden lg:block w-px h-[50px] bg-black/5"></div>
          <div className="lg:hidden w-full h-px bg-black/5 px-4"></div>

          <div className="flex-1 flex items-center justify-between px-4 lg:px-6 py-4 hover:bg-black/[0.02] transition cursor-pointer rounded-[14px] min-h-[70px] lg:min-h-[90px]">
             <div className="flex items-center gap-4">
               <Shirt className="w-6 h-6 text-black/80" strokeWidth={1.5} />
               <div className="flex flex-col">
                 <span className="text-[13px] font-bold text-black mb-1">Fitting Preference</span>
                 <span className="text-[13px] text-black/50">Home Visit</span>
               </div>
             </div>
             <ChevronDown className="w-3.5 h-3.5 text-black/30" strokeWidth={2.5} />
          </div>

          <button className="bg-[#1C1A17] text-white h-[60px] lg:h-[64px] mt-2 lg:mt-0 w-full lg:w-auto px-10 rounded-[16px] lg:rounded-[12px] text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-black active:scale-[0.98] transition-all duration-300 lg:ml-2 shrink-0 shadow-[0_4px_16px_rgba(28,26,23,0.2)]">
            Find Tailors <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </motion.div>

      {/* SERVICES SECTION */}
      <section className="px-5 lg:px-16 max-w-[1800px] mx-auto pt-4 pb-16 lg:py-24 mb-10">
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <h2 className="font-serif text-[34px] lg:text-[46px] leading-[1.05] tracking-tight text-[#1C1A17]">
            Find Tailors by <span className="italic text-[#9A7E5F]">Service.</span>
          </h2>
          <button className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-[#9A7E5F] hover:opacity-70 transition-opacity group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="relative">
          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-4 transition-all duration-500 ${!showAllMobileServices ? 'pb-14 lg:pb-0' : ''}`}>
            {[
              { title: "Bespoke Suits", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop" },
              { title: "Custom Suits", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop" },
              { title: "Made-to-Measure", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=400&auto=format&fit=crop" },
              { title: "Wedding Tailoring", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&auto=format&fit=crop" },
              { title: "Tuxedos", img: "https://images.pexels.com/photos/1321943/pexels-photo-1321943.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "Custom Shirts", img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "Blazers", img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=400&auto=format&fit=crop" },
              { title: "Alterations", img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40, scale: 0.95 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 1.2, delay: i * 0.08, ease }} 
                className={`group cursor-pointer block relative w-full aspect-[3/4] lg:aspect-[2/3] rounded-[12px] lg:rounded-[16px] overflow-hidden shadow-sm lg:hover:shadow-[0_24px_48px_rgba(0,0,0,0.15)] lg:hover:-translate-y-2 transition-all duration-[0.8s] ease-[0.16,1,0.3,1] ${!showAllMobileServices && i >= 4 ? 'hidden lg:block' : ''}`}
              >
                <img loading="lazy" src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-60 lg:group-hover:opacity-90 transition-opacity duration-[0.8s] ease-[0.16,1,0.3,1]"></div>
                <div className="absolute bottom-3 lg:bottom-5 left-3 lg:left-5 right-3 text-white text-[12px] lg:text-[14px] font-bold z-10 leading-tight transform lg:group-hover:-translate-y-2 transition-transform duration-[0.8s] ease-[0.16,1,0.3,1]">
                  {s.title}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Fade & See More Button */}
          {!showAllMobileServices && (
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F5F4F0] via-[#F5F4F0]/90 to-transparent flex items-end justify-center pb-2 lg:hidden pointer-events-none">
              <button 
                onClick={() => setShowAllMobileServices(true)}
                className="pointer-events-auto bg-[#1C1A17] text-white text-[12px] font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:bg-black transition-transform transform active:scale-95 flex items-center gap-2 mb-1"
              >
                See More <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PHILOSOPHY GRID */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-16 lg:mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Banner Span 2 */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="lg:col-span-2 bg-[#1C1A17] rounded-[24px] overflow-hidden relative min-h-[350px] lg:min-h-[450px] flex flex-col justify-between p-10 group cursor-pointer">
          <img loading="lazy" src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]" alt="Scissors" />
          <div className="relative z-10">
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Craftsmanship<br/>Lives Forever</p>
          </div>
          <button className="relative z-10 flex items-center gap-3 text-white text-[11px] font-bold tracking-[0.1em] uppercase group-hover:pl-2 transition-all duration-500">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            Play Video
          </button>
        </motion.div>

        {/* Text Block */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.1, ease }} className="bg-white rounded-[24px] p-10 flex flex-col justify-center border border-black/5 hover:shadow-xl transition-shadow duration-500">
          <p className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase mb-4">Our Philosophy</p>
          <h2 className="font-serif text-[34px] leading-tight mb-4">Details<br/>Make Legends.</h2>
          <p className="text-[14px] text-black/60 mb-8 leading-relaxed">From the first stitch to the final fit — true style lives in the details.</p>
          <a href="#" className="flex items-center gap-2 text-[13px] font-semibold text-black hover:opacity-70 transition border-b border-black pb-1 w-max">
            Explore Our Story <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Third Block */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease }} className="bg-[#1C1A17] rounded-[24px] overflow-hidden relative min-h-[350px] lg:min-h-[450px] p-8 flex flex-col justify-end group">
          <img loading="lazy" src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]" alt="Sewing" />
          <p className="relative z-10 text-[10px] font-bold tracking-[0.2em] text-white uppercase leading-relaxed max-w-[150px]">Tailored<br/>For A<br/>Brighter<br/>Tomorrow</p>
        </motion.div>
      </section>

      {/* TOP RATED TAILORS */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-16 lg:mb-20 border-t border-black/10 pt-12 lg:pt-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-12">
          <div className="max-w-[500px]">
            <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-4">Discover Masters</p>
            <h2 className="font-serif text-[36px] lg:text-[40px] leading-tight mb-4">Top Rated Tailors<br/>Near You.</h2>
            <p className="text-[14px] text-black/60">Explore highly-rated artisans who bring decades of expertise to every stitch.</p>
          </div>
          <a href="#" className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-black hover:opacity-70 transition border-b border-black pb-1">
            View All Tailors <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { name: "Antonio's Bespoke", loc: "Upper East Side, NY", rating: "4.9", revs: "128", verified: true, img: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=800", profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" },
            { name: "The Sartorialist", loc: "Soho, London", rating: "4.8", revs: "94", verified: true, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800", profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
            { name: "Milano Cuts", loc: "Downtown, Milan", rating: "5.0", revs: "215", verified: false, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800", profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" },
            { name: "Savile & Co.", loc: "West End, Paris", rating: "4.7", revs: "62", verified: true, img: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=800", profile: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200" }
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: i * 0.1, ease }} className="shrink-0 w-[75vw] md:w-[45vw] lg:w-auto snap-center lg:snap-align-none group cursor-pointer flex flex-col p-4 -m-4 rounded-[32px] lg:hover:bg-white lg:hover:shadow-[0_24px_48px_rgba(0,0,0,0.05)] lg:hover:-translate-y-2 transition-all duration-[0.8s] ease-[0.16,1,0.3,1]">
              <div className="relative mb-8">
                <div className="w-full h-[280px] rounded-[24px] overflow-hidden relative" style={{ WebkitMaskImage: 'radial-gradient(circle at calc(100% - 56px) calc(100% - 16px), transparent 38px, black 39px)', maskImage: 'radial-gradient(circle at calc(100% - 56px) calc(100% - 16px), transparent 38px, black 39px)' }}>
                  <img loading="lazy" src={t.img} alt={t.name} className="w-full h-full object-cover lg:group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-black text-black" />
                    <span className="text-[12px] font-bold">{t.rating}</span>
                  </div>
                </div>
                {/* Profile Cutout Icon */}
                <div className="absolute -bottom-4 right-6 w-16 h-16 rounded-full overflow-hidden bg-gray-200 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.1)] lg:group-hover:scale-110 lg:group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-[0.8s] ease-[0.16,1,0.3,1]">
                  <img loading="lazy" src={t.profile} alt={t.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-serif font-bold text-[20px] mb-1 flex items-center gap-1.5">
                  {t.name}
                  {t.verified && (
                    <div title="Verified" className="flex items-center justify-center -mt-0.5">
                      <BadgeCheck className="w-5 h-5 text-[#0095F6]" fill="currentColor" stroke="white" strokeWidth={2} />
                    </div>
                  )}
                </h3>
                <p className="text-[13px] text-black/50 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5" /> {t.loc}
                </p>
                <div className="w-full h-[1px] bg-black/5 mb-4"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-black/40 font-medium">{t.revs} Reviews</span>
                  <div className="text-[12px] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Profile <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-16 lg:mb-20 flex flex-col lg:flex-row gap-12 lg:gap-16 border-t border-black/10 pt-12 lg:pt-16">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="lg:w-1/3 lg:pt-8">
          <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-4">How It Works</p>
          <h2 className="font-serif text-[36px] lg:text-[44px] leading-tight">Four Simple Steps<br className="hidden lg:block"/>to Your Perfect Fit.</h2>
        </motion.div>
        
        <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", icon: <Search strokeWidth={1.5} />, title: "Search", desc: "Find tailors by service, location and more." },
            { num: "02", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"/></svg>, title: "Compare", desc: "Browse profiles, reviews and prices." },
            { num: "03", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2"/></svg>, title: "Connect", desc: "Send an inquiry or book an appointment." },
            { num: "04", icon: <Calendar strokeWidth={1.5} />, title: "Get Fitted", desc: "Meet your tailor and experience the perfect fit." }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: i * 0.15, ease }} className="flex flex-col relative group">
              {i !== 3 && <ChevronRight className="absolute top-4 -right-6 text-black/20 hidden lg:block group-hover:translate-x-1 transition-transform" strokeWidth={1} />}
              <div className="flex items-start gap-3 mb-4 lg:mb-6">
                <span className="text-[12px] font-bold font-serif">{s.num}</span>
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {s.icon}
                </div>
              </div>
              <h4 className="font-bold text-[15px] lg:text-[16px] mb-1 lg:mb-2">{s.title}</h4>
              <p className="text-[12px] lg:text-[13px] text-black/50 leading-relaxed lg:pr-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}

      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-10 lg:mb-40">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease }} className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-3">Popular Destinations</p>
            <h2 className="font-serif text-[36px] leading-tight">Explore Top Tailoring Cities.</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-black hover:opacity-70 transition border-b border-black pb-1">
            View All Cities <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { city: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600" },
            { city: "London", country: "UK", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" },
            { city: "Paris", country: "France", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600" },
            { city: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600" },
            { city: "Singapore", country: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600" },
            { city: "Sydney", country: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600" }
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: i * 0.08, ease }} className="relative min-w-[260px] md:min-w-0 md:flex-1 h-[350px] rounded-[24px] overflow-hidden shrink-0 md:shrink snap-start group cursor-pointer lg:hover:shadow-[0_24px_48px_rgba(0,0,0,0.15)] lg:hover:-translate-y-2 transition-all duration-[0.8s] ease-[0.16,1,0.3,1]">
              <img loading="lazy" src={c.img} alt={c.city} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-bold text-[18px] mb-1">{c.city}</h4>
                <p className="text-white/70 text-[12px] uppercase tracking-wider">{c.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT OUR CUSTOMERS SAY & FOOTER */}
      <section className="bg-white pt-16 lg:pt-24 pb-12 px-6 lg:px-16 mt-0 lg:mt-20 relative">
        
        <div className="max-w-[1800px] mx-auto mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease }} className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-3">WHAT OUR CUSTOMERS SAY</p>
              <h2 className="font-serif text-[36px] leading-tight">Real People. Exceptional Experiences.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <button onClick={() => setIsReviewModalOpen(true)} className="text-[12px] font-bold text-black border-b border-black pb-0.5 hover:text-[#C8A97E] hover:border-[#C8A97E] transition-colors">Post a Review</button>
              <div className="flex items-center gap-4 border-l border-black/10 pl-6">
                <span className="text-[12px] font-bold text-[#C8A97E]">View All Reviews</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition"><ArrowLeft className="w-3 h-3" /></button>
                  <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition"><ArrowRight className="w-3 h-3" /></button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease }} className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { name: "James R.", loc: "New York, USA", quote: "Found an amazing tailor through TailorFind. The whole process was seamless and the results are incredible!", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
              { name: "Daniel K.", loc: "London, UK", quote: "Professional, reliable and incredibly skilled. My wedding suit was better than I imagined.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" },
              { name: "Michael T.", loc: "Dubai, UAE", quote: "The home visit service was so convenient. Perfect fit and excellent attention to detail.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200" }
            ].map((r, i) => (
              <div key={i} className="min-w-[280px] md:min-w-0 md:flex-1 bg-white border border-black/5 rounded-[16px] p-8 snap-start hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-[0.8s] ease-[0.16,1,0.3,1] flex flex-col justify-between">
                <div>
                  <p className="text-[14px] text-black/70 mb-6 leading-relaxed">&quot;{r.quote}&quot;</p>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-[#C8A97E] text-[#C8A97E]" />)}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img loading="lazy" src={r.img} className="w-12 h-12 rounded-full object-cover" alt={r.name} />
                  <div>
                    <h4 className="text-[13px] font-bold">{r.name}</h4>
                    <p className="text-[11px] text-black/50">{r.loc}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="min-w-[280px] md:min-w-[320px] bg-[#1C1A17] rounded-[16px] overflow-hidden relative p-8 flex flex-col justify-end snap-start group cursor-pointer hover:shadow-xl transition-shadow duration-500">
              <img loading="lazy" src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" alt="Join us" />
              <div className="relative z-10">
                <h4 className="text-[20px] font-serif text-white mb-2">Are you a tailor?</h4>
                <p className="text-[13px] text-white/70 mb-6">Join our network of premium artisans and grow your business.</p>
                <button className="bg-white text-black px-6 py-3 rounded-full text-[12px] font-bold flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  Become a Partner <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-[1700px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-2xl rounded-sm">T</div>
              <span className="font-serif text-[24px] font-medium tracking-tight">TailorFind</span>
            </div>
            <p className="text-[11px] font-bold tracking-[0.1em] text-black/40 uppercase">Exceptional Tailors. Everywhere.</p>
          </div>
          {[
            { title: "For Customers", links: ["Find a Tailor", "Services", "Locations", "How It Works", "Reviews"] },
            { title: "For Tailors", links: ["Join Our Directory", "Pricing Plans", "Verification", "Resources", "Success Stories"] },
            { title: "Company", links: ["About Us", "Contact", "Blog", "Careers"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-[13px] mb-6">{col.title}</h4>
              <div className="flex flex-col gap-4 text-[13px] text-black/60">
                {col.links.map(l => <a href="#" key={l} className="hover:text-black transition-colors">{l}</a>)}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1700px] mx-auto border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-black/40">
          <p>© 2024 TailorFind. All rights reserved.</p>
          <p className="tracking-[0.1em] uppercase font-medium">Exceptional Tailors. Everywhere.</p>
        </div>
      </section>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-[100] bg-[#F5F4F0] flex flex-col px-6 py-8"
          >
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm">T</div>
                <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-black hover:opacity-70 transition bg-black/5 rounded-full">
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-[28px] font-serif tracking-tight">
              {['Find a Tailor', 'Services', 'Locations', 'How It Works', 'Stories'].map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease }}
                  key={i} 
                  href="#" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-black/50 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-auto flex flex-col gap-6"
            >
              <button className="flex items-center gap-2 text-[15px] font-medium border-b border-black/20 pb-4">
                <Globe className="w-5 h-5" strokeWidth={1.5} /> English
              </button>
              <button className="bg-[#1C1A17] text-white w-full py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POST A REVIEW MODAL */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 lg:p-0">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease }}
              className="relative bg-white w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl flex flex-col z-[111]"
            >
              <div className="flex items-center justify-between p-6 lg:p-8 border-b border-black/5">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-1">Your Voice Matters</p>
                  <h3 className="font-serif text-[24px] font-bold text-black leading-tight">Share Your Experience</h3>
                </div>
                <button onClick={() => setIsReviewModalOpen(false)} className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col gap-6">
                {/* Rating */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-black/50 mb-3">Rate Your Tailor</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} className="text-[#C8A97E] hover:scale-110 transition-transform">
                        <Star className="w-8 h-8 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-black/50 mb-2">Your Name</label>
                    <input type="text" placeholder="e.g. James R." className="w-full bg-[#F5F4F0] border border-transparent focus:border-black/20 outline-none rounded-xl px-4 py-3 text-[14px]" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-black/50 mb-2">Location</label>
                    <input type="text" placeholder="e.g. New York, USA" className="w-full bg-[#F5F4F0] border border-transparent focus:border-black/20 outline-none rounded-xl px-4 py-3 text-[14px]" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-black/50 mb-2">Your Review</label>
                    <textarea placeholder="Tell us about your experience..." rows={4} className="w-full bg-[#F5F4F0] border border-transparent focus:border-black/20 outline-none rounded-xl px-4 py-3 text-[14px] resize-none"></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button onClick={() => setIsReviewModalOpen(false)} className="w-full bg-[#1C1A17] text-white rounded-xl py-4 font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-black transition-colors mt-2">
                  Submit Review <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
