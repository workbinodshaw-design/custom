'use client';
import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Play, MapPin, Calendar, Star, ArrowRight, ArrowLeft, BadgeCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Page() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  // Apple-like smooth easing
  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white pb-10 overflow-hidden">
      
      {/* NAVIGATION */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="w-full flex items-center justify-between px-6 lg:px-16 py-6 absolute top-0 left-0 right-0 z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm transition-transform duration-500 group-hover:scale-95">T</div>
          <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-black/70">
          {['Find a Tailor', 'Services', 'Locations', 'How It Works', 'Stories'].map((link, i) => (
            <a key={i} href="#" className="hover:text-black transition-colors">{link}</a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-black hover:opacity-70 transition"><Search className="w-5 h-5" strokeWidth={1.5} /></button>
          <div className="w-[1px] h-4 bg-black/20"></div>
          <a href="#" className="text-[13px] font-medium hover:opacity-70 transition">Sign In</a>
          <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-[13px] font-medium flex items-center gap-2 hover:bg-black/80 hover:scale-[1.02] active:scale-95 transition-all duration-300">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-6 lg:px-16 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 min-h-[90vh]">
        
        {/* Left Content */}
        <motion.div style={{ opacity: opacityHero, y: y1 }} className="flex-1 flex flex-col justify-center lg:pr-12 relative z-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1, ease }} className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase">Bespoke Tailoring</span>
            <div className="w-12 h-[1px] bg-black/20"></div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease }} className="font-serif text-[50px] lg:text-[76px] leading-[1.05] tracking-tight mb-6">
            Confidence<br/>Looks Good<br/>On <span className="italic font-light text-black/80">You.</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }} className="text-[15px] lg:text-[16px] text-black/60 leading-relaxed max-w-[420px] mb-10">
            Find trusted, professional tailors near you.<br/>From timeless suits to everyday wear —<br/>crafted with precision, just for you.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease }} className="flex flex-wrap items-center gap-6 mb-16">
            <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-[14px] font-medium flex items-center gap-2 hover:bg-black/80 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
              Find a Tailor <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black transition-colors">
                <Play className="w-4 h-4 text-black fill-black ml-0.5" />
              </div>
              <span className="text-[13px] font-medium text-black leading-tight">Watch<br/>Our Story</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6, ease }} className="flex items-center gap-12 pt-8 border-t border-black/10 w-max">
            {[ { num: "10K+", text: "Happy Clients" }, { num: "4.8", icon: <Star className="w-4 h-4 fill-black text-black" />, text: "Average Rating" }, { num: "500+", text: "Verified Tailors" } ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-[24px] font-bold font-serif mb-1 flex items-center gap-1">{stat.num} {stat.icon}</h4>
                <p className="text-[11px] text-black/50 font-medium">{stat.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, delay: 0.2, ease }} 
          className="flex-1 relative h-[500px] lg:h-auto min-h-[600px] rounded-[40px] overflow-hidden"
        >
          <motion.img 
            style={{ y: y2, scale: 1.1 }}
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop" 
            alt="Bespoke Suit" 
            className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-90 origin-top"
          />
          {/* Overlay Text */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8, ease }} className="absolute top-12 left-10 flex flex-col gap-8">
            <div className="text-[9px] font-bold tracking-[0.3em] text-white/90 uppercase leading-relaxed">More<br/>Than<br/>A Suit</div>
            <div className="text-[9px] font-bold tracking-[0.3em] text-white/90 uppercase leading-relaxed">A Better<br/>You.</div>
          </motion.div>
          
          {/* Circular Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 1, ease }} className="absolute bottom-10 left-10 flex items-center gap-4 z-10">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-[#F8F8F5] shadow-xl relative bg-black">
              <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=200&auto=format&fit=crop" alt="Details" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
            </div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-white uppercase leading-relaxed max-w-[120px]">
              Crafted<br/>In Every<br/>Detail
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>
        
      </section>

      {/* SEARCH PILL */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease }}
        className="max-w-[1100px] mx-auto px-6 lg:px-0 -mt-12 relative z-30 mb-32"
      >
        <div className="bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-2 flex flex-col md:flex-row items-stretch md:items-center transform transition duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
          
          <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-black/5 hover:bg-black/[0.02] transition cursor-pointer rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none">
             <div className="w-10 h-10 rounded-full bg-[#F8F8F5] flex items-center justify-center shrink-0">
               <img src="https://cdn-icons-png.flaticon.com/128/3004/3004381.png" className="w-5 h-5 opacity-70" alt="Suit" />
             </div>
             <div className="flex flex-col flex-1">
               <span className="text-[11px] font-medium text-black/50 mb-0.5">What are you looking for?</span>
               <span className="text-[14px] font-semibold text-black">Custom Suit</span>
             </div>
             <ChevronRight className="w-4 h-4 text-black/30" />
          </div>

          <div className="flex-1 flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-black/5 hover:bg-black/[0.02] transition cursor-pointer">
             <div className="w-10 h-10 rounded-full bg-[#F8F8F5] flex items-center justify-center shrink-0">
               <MapPin className="w-4 h-4 text-black" strokeWidth={1.5} />
             </div>
             <div className="flex flex-col flex-1">
               <span className="text-[11px] font-medium text-black/50 mb-0.5">Your Location</span>
               <span className="text-[14px] font-semibold text-black/40">Enter city, ZIP or area</span>
             </div>
             <ChevronRight className="w-4 h-4 text-black/30" />
          </div>

          <div className="flex-1 flex items-center gap-4 px-6 py-4 hover:bg-black/[0.02] transition cursor-pointer md:rounded-r-[20px]">
             <div className="w-10 h-10 rounded-full bg-[#F8F8F5] flex items-center justify-center shrink-0">
               <Calendar className="w-4 h-4 text-black" strokeWidth={1.5} />
             </div>
             <div className="flex flex-col flex-1">
               <span className="text-[11px] font-medium text-black/50 mb-0.5">Fitting Preference</span>
               <span className="text-[14px] font-semibold text-black">Home Visit</span>
             </div>
             <ChevronRight className="w-4 h-4 text-black/30" />
          </div>

          <button className="bg-[#1A1A1A] text-white h-[60px] px-8 rounded-[18px] text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-black/80 active:scale-95 transition-all duration-300 m-2 shrink-0 shadow-md">
            Search <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* SERVICES */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-32">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-[400px]">
            <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-4">Our Services</p>
            <h2 className="font-serif text-[40px] leading-tight mb-4">Tailoring for<br/>Every Occasion.</h2>
            <p className="text-[14px] text-black/60">From boardrooms to weddings, we bring your vision to life with unmatched craftsmanship.</p>
          </div>
          <a href="#" className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-black hover:opacity-70 transition border-b border-black pb-1">
            View All Services <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Suits", desc: "Timeless elegance", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800" },
            { title: "Shirts", desc: "Everyday refinement", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800" },
            { title: "Wedding", desc: "For your special day", img: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=800" },
            { title: "Blazers", desc: "Smart & versatile", img: "https://images.unsplash.com/photo-1592878904946-b3ce8ae243ce?q=80&w=800" }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: i * 0.1, ease }} className="group cursor-pointer">
              <div className="w-full h-[320px] rounded-[24px] overflow-hidden mb-5 relative">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] " />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-700"></div>
              </div>
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="font-semibold text-[17px] mb-1">{s.title}</h3>
                  <p className="text-[13px] text-black/50">{s.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY GRID */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Banner Span 2 */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="lg:col-span-2 bg-[#1A1A1A] rounded-[24px] overflow-hidden relative min-h-[350px] lg:min-h-[450px] flex flex-col justify-between p-10 group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]" alt="Scissors" />
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
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease }} className="bg-[#1A1A1A] rounded-[24px] overflow-hidden relative min-h-[350px] lg:min-h-[450px] p-8 flex flex-col justify-end group">
          <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]" alt="Sewing" />
          <p className="relative z-10 text-[10px] font-bold tracking-[0.2em] text-white uppercase leading-relaxed max-w-[150px]">Tailored<br/>For A<br/>Brighter<br/>Tomorrow</p>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-32 flex flex-col lg:flex-row gap-16 border-t border-black/10 pt-20">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="lg:w-1/3">
          <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-4">How It Works</p>
          <h2 className="font-serif text-[44px] leading-tight">Four Simple Steps<br/>to Your Perfect Fit.</h2>
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
              <div className="flex items-start gap-3 mb-6">
                <span className="text-[12px] font-bold font-serif">{s.num}</span>
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {s.icon}
                </div>
              </div>
              <h4 className="font-bold text-[16px] mb-2">{s.title}</h4>
              <p className="text-[13px] text-black/50 leading-relaxed pr-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* TOP RATED TAILORS */}
      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-32 border-t border-black/10 pt-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease }} className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-[500px]">
            <p className="text-[10px] font-bold tracking-[0.2em] text-black/50 uppercase mb-4">Discover Masters</p>
            <h2 className="font-serif text-[40px] leading-tight mb-4">Top Rated Tailors<br/>Near You.</h2>
            <p className="text-[14px] text-black/60">Explore highly-rated artisans who bring decades of expertise to every stitch.</p>
          </div>
          <a href="#" className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-black hover:opacity-70 transition border-b border-black pb-1">
            View All Tailors <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Antonio's Bespoke", loc: "Upper East Side, NY", rating: "4.9", revs: "128", verified: true, img: "https://images.unsplash.com/photo-1598808503746-f34c53b93f3b?q=80&w=800" },
            { name: "The Sartorialist", loc: "Soho, London", rating: "4.8", revs: "94", verified: true, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800" },
            { name: "Milano Cuts", loc: "Downtown, Milan", rating: "5.0", revs: "215", verified: false, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
            { name: "Savile & Co.", loc: "West End, Paris", rating: "4.7", revs: "62", verified: true, img: "https://images.unsplash.com/photo-1537240366835-081cfd332617?q=80&w=800" }
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: i * 0.1, ease }} className="group cursor-pointer flex flex-col">
              <div className="w-full h-[280px] rounded-[24px] overflow-hidden mb-5 relative">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                  <span className="text-[12px] font-bold">{t.rating}</span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-serif font-bold text-[20px] mb-1.5 flex items-center gap-2">
                  {t.name}
                  {t.verified && (
                    <div className="flex items-center gap-1 bg-[#1A1A1A] text-[#C5A880] px-2 py-0.5 rounded-full border border-[#C5A880]/30 shadow-sm" title="Verified Tailor">
                      <BadgeCheck className="w-3 h-3" strokeWidth={2.5} />
                      <span className="text-[9px] font-bold tracking-wider uppercase pr-0.5">Verified</span>
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

      {/* POPULAR DESTINATIONS */}

      <section className="px-6 lg:px-16 max-w-[1800px] mx-auto mb-40">
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
            { city: "London", country: "UK", img: "https://images.unsplash.com/photo-1505761671135-639428ea15a1?q=80&w=600" },
            { city: "Paris", country: "France", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600" },
            { city: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600" },
            { city: "Singapore", country: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600" },
            { city: "Sydney", country: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600" }
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: i * 0.1, ease }} className="relative min-w-[260px] md:min-w-0 md:flex-1 h-[350px] rounded-[24px] overflow-hidden shrink-0 md:shrink snap-start group cursor-pointer">
              <img src={c.img} alt={c.city} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-[1.5s] ease-[0.16,1,0.3,1]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-bold text-[18px] mb-1">{c.city}</h4>
                <p className="text-white/70 text-[12px] uppercase tracking-wider">{c.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL & FOOTER */}
      <section className="bg-white pt-24 pb-12 px-6 lg:px-16 mt-32 relative">
        {/* Testimonial overlapping */}
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease }} className="max-w-[1200px] mx-auto bg-[#F8F8F5] rounded-[32px] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-12 -mt-48 mb-24 relative z-20 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-black/[0.03]">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" alt="Rohan" className="w-28 h-28 rounded-full border-4 border-white shadow-lg" />
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-serif text-[28px] mb-4 text-black">&quot;An Unmatched Experience.&quot;</h3>
            <p className="text-[15px] text-black/60 mb-8 max-w-[480px] leading-relaxed">TailorFind made the entire process effortless. The quality and attention to detail are unmatched.</p>
            <h4 className="font-bold text-[14px]">Rohan Mehta</h4>
            <p className="text-[12px] text-black/40">Entrepreneur, Dubai</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"><ArrowLeft className="w-4 h-4" /></button>
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"><ArrowRight className="w-4 h-4" /></button>
          </div>
          <div className="hidden lg:flex items-center gap-12 pl-12 border-l border-black/10">
            {[ { num: "10K+", text: "Happy Clients" }, { num: "4.8", icon: <Star className="w-3 h-3 fill-black text-black" />, text: "Average Rating" }, { num: "500+", text: "Verified Tailors" } ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-[22px] font-bold font-serif mb-1 flex items-center gap-1">{stat.num} {stat.icon}</h4>
                <p className="text-[11px] text-black/50 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="max-w-[1700px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#1A1A1A] text-white flex items-center justify-center font-serif font-bold text-2xl rounded-sm">T</div>
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

    </div>
  );
}
