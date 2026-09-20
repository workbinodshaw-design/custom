"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, ArrowRight, TrendingUp, Users, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ease = [0.85, 0, 0.15, 1] as const;

export default function VendorLanding() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic profile to establish your digital presence.",
      features: [
        "Business name, logo & description",
        "Portfolio & photos",
        "Services & price range",
        "Studio location & Google Map"
      ],
      cta: "Create Free Profile",
      popular: false,
      theme: "light"
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Direct leads and full calendar booking system.",
      features: [
        "Everything in Free",
        "Direct customer leads to your inbox",
        "Lead & analytics dashboard",
        "Full appointment booking & calendar",
        "Website & social media links"
      ],
      cta: "Start Pro Trial",
      popular: false,
      theme: "dark"
    },
    {
      name: "Pro + Verified",
      price: "$129",
      period: "/month",
      description: "Ultimate trust with the Verified Partner badge.",
      features: [
        "Everything in Pro",
        "Verified Partner badge on profile",
        "Higher ranking in search results",
        "Increased customer trust",
        "Priority support"
      ],
      cta: "Apply for Verification",
      popular: true,
      theme: "gold"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F4F0] font-sans selection:bg-[#B8860B] selection:text-white overflow-hidden">
      
      {/* Absolute Navbar override for dark mode hero */}
      <div className="absolute top-0 left-0 right-0 z-50 mix-blend-difference">
        <Navbar />
      </div>
      
      <main>
        
        {/* Premium Cinematic Hero */}
        <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <img 
              src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000" 
              alt="Master Tailor" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A] z-10"></div>
          </motion.div>

          <motion.div style={{ opacity: opacityHero }} className="relative z-20 max-w-[1200px] mx-auto mt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease }}>
              <p className="text-[11px] lg:text-[13px] font-bold tracking-[0.3em] text-[#B8860B] uppercase mb-8">
                TailorFind for Vendors
              </p>
            </motion.div>
            
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: "110%" }} 
                animate={{ y: 0 }} 
                transition={{ duration: 1.5, delay: 0.2, ease }}
                className="font-serif text-[56px] md:text-[80px] lg:text-[110px] leading-[1.05] font-medium tracking-tight text-white"
              >
                The Global Standard <br/>
                <span className="text-white/60 font-cursive italic text-[64px] md:text-[96px] lg:text-[130px] pr-4">for</span> Masters.
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1.5, delay: 0.8, ease }}
              className="text-[16px] lg:text-[20px] text-white/60 max-w-[650px] mx-auto mb-12 leading-relaxed font-light"
            >
              Join the world's most exclusive marketplace for custom tailors. Get discovered by high-intent clients, receive direct leads, and manage your appointments seamlessly.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.5, delay: 1, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/vendor/register">
                <button className="bg-white text-black px-10 py-5 rounded-full text-[15px] font-bold hover:bg-[#F5F4F0] hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                  Apply to Join
                </button>
              </Link>
              <button className="px-10 py-5 rounded-full text-[15px] font-bold border border-white/20 text-white hover:border-white/60 transition-colors">
                View Pricing
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Dark Bento Grid Benefits */}
        <section className="bg-[#0A0A0A] py-32 px-6 lg:px-16 max-w-[1600px] mx-auto relative z-20">
          <div className="text-center mb-20">
            <h2 className="font-serif text-[40px] lg:text-[56px] leading-tight text-white mb-6">Your craft deserves <br className="hidden lg:block"/>an audience.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "SEO Discovery", desc: "Rank higher on Google with our optimized, high-converting vendor profiles." },
              { icon: Users, title: "Direct Leads", desc: "Receive high-intent inquiries straight to your custom dashboard." },
              { icon: Calendar, title: "Smart Booking", desc: "Let clients book studio visits, home fittings, or virtual consults instantly." },
              { icon: ShieldCheck, title: "Verified Trust", desc: "Stand out with our rigorous Verification Badge to close deals faster." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 1, delay: i * 0.1, ease }} 
                className="bg-[#111111] rounded-[32px] p-10 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[24px] font-medium text-white mb-4">{benefit.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-[#0A0A0A] pb-40 px-6 lg:px-16 max-w-[1600px] mx-auto" id="pricing">
          <div className="text-center mb-24">
            <p className="text-[11px] lg:text-[13px] font-bold tracking-[0.3em] text-white/40 uppercase mb-6">Membership</p>
            <h2 className="font-serif text-[48px] lg:text-[64px] leading-tight text-white mb-4">Transparent Pricing.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 1.2, delay: i * 0.15, ease }}
                className={`relative rounded-[40px] p-10 lg:p-12 flex flex-col ${
                  plan.theme === 'gold' ? 'bg-gradient-to-b from-[#1A160C] to-[#0A0A0A] border border-[#B8860B]/30 shadow-[0_0_80px_rgba(184,134,11,0.05)]' :
                  plan.theme === 'dark' ? 'bg-[#111111] border border-white/10' :
                  'bg-white text-black'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(184,134,11,0.3)]">
                    The Gold Standard
                  </div>
                )}
                
                <h3 className={`font-serif text-[32px] mb-3 ${plan.theme === 'gold' ? 'text-[#B8860B]' : ''}`}>{plan.name}</h3>
                <p className={`text-[15px] mb-10 min-h-[44px] leading-relaxed ${plan.theme === 'light' ? 'text-black/60' : 'text-white/50'}`}>{plan.description}</p>
                
                <div className="flex items-end gap-1 mb-12">
                  <span className="font-serif text-[64px] leading-none">{plan.price}</span>
                  {plan.period && <span className={`text-[15px] font-medium mb-2 ${plan.theme === 'light' ? 'text-black/40' : 'text-white/40'}`}>{plan.period}</span>}
                </div>

                <div className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${plan.theme === 'gold' ? 'text-[#B8860B]' : plan.theme === 'light' ? 'text-black' : 'text-white'}`} strokeWidth={2} />
                      <span className={`text-[15px] leading-relaxed ${plan.theme === 'light' ? 'text-black/80' : 'text-white/80'}`}>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/vendor/register?plan=${plan.name.toLowerCase()}`}>
                  <button className={`w-full py-5 rounded-full text-[15px] font-bold transition-all duration-300 ${
                    plan.theme === 'gold' ? 'bg-[#B8860B] text-white hover:bg-[#996B09] shadow-[0_8px_30px_rgba(184,134,11,0.2)]' :
                    plan.theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' :
                    'bg-[#1C1A17] text-white hover:bg-black'
                  }`}>
                    {plan.cta}
                  </button>
                </Link>

              </motion.div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}
