"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, TrendingUp, Users, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ease = [0.85, 0, 0.15, 1] as const;

export default function VendorLanding() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic profile to establish your digital presence.",
      features: [
        "Business name, logo & description",
        "Portfolio & photos",
        "Services & price range",
        "Studio location & Google Map",
        "Inquiry form (managed by Admin)",
        "SEO-friendly profile page"
      ],
      notIncluded: [
        "Direct customer lead delivery",
        "Appointment booking & calendar",
        "Website & social media links",
        "Verified Partner badge"
      ],
      cta: "Create Free Profile",
      popular: false
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
        "Website & social media links",
        "Advanced profile insights"
      ],
      notIncluded: [
        "Verified Partner badge"
      ],
      cta: "Start Pro Trial",
      popular: true
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
      notIncluded: [],
      cta: "Apply for Verification",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1C1A17] font-sans selection:bg-[#1C1A17] selection:text-[#F5F4F0]">
      <Navbar />
      
      <main className="pt-32 pb-20">
        
        {/* Hero Section */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
            <p className="text-[12px] font-bold tracking-[0.2em] text-[#B8860B] uppercase mb-6">TailorFind for Vendors</p>
            <h1 className="font-serif text-[48px] lg:text-[72px] leading-[1.1] font-medium tracking-tight mb-8">
              Grow your bespoke <br className="hidden lg:block" /> tailoring business.
            </h1>
            <p className="text-[16px] lg:text-[18px] text-black/60 max-w-[600px] mx-auto mb-10 leading-relaxed">
              Join the world's most exclusive marketplace for custom tailors. Get discovered by high-intent clients, receive direct leads, and manage your appointments seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/vendor/register">
                <button className="bg-[#1C1A17] text-white px-8 py-4 rounded-full text-[15px] font-bold hover:bg-black hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_8px_24px_rgba(28,26,23,0.2)]">
                  List Your Business
                </button>
              </Link>
              <button className="px-8 py-4 rounded-full text-[15px] font-bold border border-black/10 hover:border-black/30 transition-colors">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, title: "SEO Discovery", desc: "Rank higher on Google with our optimized, high-converting vendor profiles." },
            { icon: Users, title: "Direct Leads", desc: "Receive high-intent inquiries straight to your dashboard (Pro plans)." },
            { icon: Calendar, title: "Smart Booking", desc: "Let clients book studio visits, home fittings, or virtual consults instantly." },
            { icon: ShieldCheck, title: "Verified Trust", desc: "Stand out with our rigorous Verification Badge to close deals faster." }
          ].map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1, ease }} className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm">
              <div className="w-12 h-12 bg-[#F5F4F0] rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-5 h-5 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-[20px] font-bold mb-3">{benefit.title}</h3>
              <p className="text-[14px] text-black/60 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12" id="pricing">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[40px] lg:text-[56px] leading-tight mb-4">Transparent Pricing.</h2>
            <p className="text-[16px] text-black/60">Choose the plan that fits your growth stage. Upgrade anytime.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 1, delay: i * 0.15, ease }}
                className={`relative rounded-[32px] p-8 lg:p-10 ${plan.popular ? 'bg-[#1C1A17] text-white shadow-2xl scale-[1.02] lg:-mt-4' : 'bg-white border border-black/5 shadow-lg'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8860B] text-white text-[12px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-serif text-[28px] mb-2">{plan.name}</h3>
                <p className={`text-[14px] mb-8 min-h-[42px] ${plan.popular ? 'text-white/60' : 'text-black/60'}`}>{plan.description}</p>
                
                <div className="flex items-end gap-1 mb-8">
                  <span className="font-serif text-[56px] leading-none">{plan.price}</span>
                  {plan.period && <span className={`text-[15px] font-medium mb-2 ${plan.popular ? 'text-white/60' : 'text-black/40'}`}>{plan.period}</span>}
                </div>

                <Link href={`/vendor/register?plan=${plan.name.toLowerCase()}`}>
                  <button className={`w-full py-4 rounded-full text-[15px] font-bold mb-10 transition-all duration-300 ${plan.popular ? 'bg-white text-black hover:bg-gray-100' : 'bg-[#F5F4F0] text-black hover:bg-[#EAE8E1]'}`}>
                    {plan.cta}
                  </button>
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-[#B8860B]' : 'text-black'}`} strokeWidth={2} />
                      <span className={`text-[14px] leading-snug ${plan.popular ? 'text-white/80' : 'text-black/80'}`}>{feat}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3 opacity-50">
                      <XCircle className="w-5 h-5 shrink-0" strokeWidth={2} />
                      <span className="text-[14px] leading-snug line-through">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </main>
    </div>
  );
}
