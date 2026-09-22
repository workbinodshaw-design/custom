"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useVendor } from "@/lib/mock/VendorContext";

const ease = [0.85, 0, 0.15, 1] as const;

export default function VendorAuth() {
  const [mode, setMode] = useState<"register" | "login">("register");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setVendorId } = useVendor();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    if (mode === "register") {
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        location: "New York, USA",
        rating: "0.0",
        reviews: "0",
        verified: false,
        plan: "FREE",
      };
      
      try {
        const res = await fetch('/api/vendors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const json = await res.json();
        if (res.ok && json.success) {
          setVendorId(json.data.id);
          router.push('/vendor/dashboard');
        } else {
          alert("Failed to register.");
        }
      } catch (err) {
        alert("Error registering.");
      }
    } else {
      // Login flow
      const email = formData.get('email');
      const password = formData.get('password');
      
      try {
        const res = await fetch('/api/vendors');
        const json = await res.json();
        if (res.ok && json.success) {
          const user = json.data.find((v: any) => v.email === email && v.password === password);
          if (user) {
            setVendorId(user.id);
            router.push('/vendor/dashboard');
          } else {
            alert("Invalid email or password.");
          }
        }
      } catch (err) {
        alert("Error logging in.");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex selection:bg-[#1C1A17] selection:text-[#F5F4F0]">
      {/* Left Column - Image & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#1C1A17] overflow-hidden p-12 flex-col justify-between">
        <img 
          src="https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1200" 
          alt="Tailor Working" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        
        <div className="relative z-10">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group w-max">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-serif font-bold text-xl rounded-sm">T</div>
              <span className="font-serif text-[22px] font-medium tracking-tight text-white">TailorFind</span>
            </div>
          </Link>
        </div>

        <div className="relative z-10 max-w-[480px]">
          <h2 className="font-serif text-[48px] text-white leading-[1.1] mb-6">Crafting a global network of masters.</h2>
          <div className="space-y-4">
            {["Reach high-intent clients globally", "Manage bookings effortlessly", "Showcase your bespoke portfolio"].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[15px]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-24">
        <Link href="/vendor" className="lg:hidden mb-12">
          <div className="flex items-center gap-2 cursor-pointer group w-max">
            <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm">T</div>
            <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
          </div>
        </Link>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease }} className="w-full max-w-[420px] mx-auto lg:mx-0">
          <Link href="/vendor">
            <div className="flex items-center gap-2 text-[13px] font-medium text-black/50 hover:text-black transition-colors mb-10 w-max">
              <ChevronLeft className="w-4 h-4" /> Back to Pricing
            </div>
          </Link>

          <h1 className="font-serif text-[32px] font-medium tracking-tight mb-2">
            {mode === "register" ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-[14px] text-black/60 mb-8">
            {mode === "register" ? "Start your journey as a TailorFind vendor today." : "Log in to manage your TailorFind dashboard."}
          </p>

          <div className="flex bg-[#F5F4F0] p-1 rounded-xl mb-8">
            <button 
              onClick={() => setMode("register")}
              className={`flex-1 py-2.5 text-[14px] font-bold rounded-lg transition-all ${mode === "register" ? "bg-white text-black shadow-sm" : "text-black/50 hover:text-black"}`}
            >
              Sign Up
            </button>
            <button 
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 text-[14px] font-bold rounded-lg transition-all ${mode === "login" ? "bg-white text-black shadow-sm" : "text-black/50 hover:text-black"}`}
            >
              Log In
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
              {mode === "register" && (
                <div>
                  <label className="block text-[13px] font-bold text-black/70 mb-2 uppercase tracking-wide">Legal Business Name</label>
                  <input name="name" type="text" placeholder="e.g. Antonio's Bespoke" className="w-full border border-black/10 rounded-[12px] px-4 py-3.5 text-[15px] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all bg-white" required={mode === "register"} />
                </div>
              )}
              
              <div>
                <label className="block text-[13px] font-bold text-black/70 mb-2 uppercase tracking-wide">Email Address</label>
                <input name="email" type="email" placeholder="hello@antonios.com" className="w-full border border-black/10 rounded-[12px] px-4 py-3.5 text-[15px] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all bg-white" required />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-black/70 mb-2 uppercase tracking-wide">Password</label>
                <input name="password" type="password" placeholder="••••••••" className="w-full border border-black/10 rounded-[12px] px-4 py-3.5 text-[15px] focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all bg-white" required />
              </div>

              <button type="submit" disabled={loading} className="w-full bg-[#1C1A17] text-white py-4 rounded-full text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-black hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-4 shadow-[0_8px_24px_rgba(28,26,23,0.15)] disabled:opacity-70 disabled:hover:scale-100">
                {loading ? "Please wait..." : mode === "register" ? "Create Account" : "Sign In"} <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </form>

          <p className="text-[12px] text-black/40 text-center mt-8">
            By continuing, you agree to our <a href="#" className="underline hover:text-black">Terms of Service</a> and <a href="#" className="underline hover:text-black">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
