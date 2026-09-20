"use client";

import { motion } from "framer-motion";
import { Check, Star, ShieldCheck } from "lucide-react";
import { useVendor, Plan } from "@/lib/mock/VendorContext";

export default function SubscriptionPage() {
  const { state, updatePlan } = useVendor();

  const handleUpdate = (plan: Plan) => {
    updatePlan(plan);
    alert(`Demo plan changed locally to ${plan}. Payment integration will be connected later.`);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-4xl mx-auto">
      
      <div className="text-center mb-10">
        <h1 className="font-serif text-[32px] font-medium tracking-tight mb-2 text-[#111111]">Choose your plan</h1>
        <p className="text-[14px] text-[#666666]">Upgrade your business with premium features and priority placement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* FREE PLAN */}
        <div className={`bg-white rounded-[16px] border ${state.plan === 'FREE' ? 'border-[#111111] shadow-md' : 'border-[#EAEAEA]'} p-6 flex flex-col`}>
          <div className="mb-4">
            <h3 className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-2">Basic</h3>
            <div className="font-serif text-[32px] font-medium text-[#111111]">$0<span className="text-[14px] font-sans text-[#888888]">/month</span></div>
          </div>
          <div className="space-y-3 flex-1 mb-6">
            <div className="flex gap-2 text-[13px] text-[#666666]"><Check className="w-4 h-4 text-green-500 shrink-0" /> Public Vendor Profile</div>
            <div className="flex gap-2 text-[13px] text-[#666666]"><Check className="w-4 h-4 text-green-500 shrink-0" /> Basic Lead Management</div>
            <div className="flex gap-2 text-[13px] text-[#888888]"><div className="w-4 h-4 shrink-0"></div> No Direct Contact Info</div>
          </div>
          <button 
            onClick={() => handleUpdate('FREE')}
            disabled={state.plan === 'FREE'}
            className={`w-full py-3 rounded-[8px] text-[13px] font-bold transition-colors ${state.plan === 'FREE' ? 'bg-[#F5F5F5] text-[#888888] cursor-not-allowed' : 'bg-white border border-[#111111] text-[#111111] hover:bg-[#F5F5F5]'}`}
          >
            {state.plan === 'FREE' ? 'Current Plan' : 'Downgrade to Basic'}
          </button>
        </div>

        {/* PRO PLAN */}
        <div className={`bg-[#111111] text-white rounded-[16px] border ${state.plan === 'PRO' ? 'border-[#E5C158] shadow-[0_4px_20px_rgba(229,193,88,0.15)]' : 'border-transparent'} p-6 flex flex-col relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-3">
            <Star className="w-6 h-6 text-[#E5C158] opacity-20" />
          </div>
          <div className="mb-4 relative z-10">
            <h3 className="text-[11px] font-bold tracking-widest text-[#E5C158] uppercase mb-2">Pro</h3>
            <div className="font-serif text-[32px] font-medium text-white">$99<span className="text-[14px] font-sans text-white/50">/month</span></div>
          </div>
          <div className="space-y-3 flex-1 mb-6 relative z-10">
            <div className="flex gap-2 text-[13px] text-white/80"><Check className="w-4 h-4 text-[#E5C158] shrink-0" /> Everything in Basic</div>
            <div className="flex gap-2 text-[13px] text-white/80"><Check className="w-4 h-4 text-[#E5C158] shrink-0" /> View Customer Contact Info</div>
            <div className="flex gap-2 text-[13px] text-white/80"><Check className="w-4 h-4 text-[#E5C158] shrink-0" /> Priority Search Ranking</div>
            <div className="flex gap-2 text-[13px] text-white/80"><Check className="w-4 h-4 text-[#E5C158] shrink-0" /> Advanced Analytics</div>
          </div>
          <button 
            onClick={() => handleUpdate('PRO')}
            disabled={state.plan === 'PRO'}
            className={`w-full py-3 rounded-[8px] text-[13px] font-bold transition-colors relative z-10 ${state.plan === 'PRO' ? 'bg-white/10 text-white cursor-not-allowed' : 'bg-[#E5C158] text-[#111111] hover:bg-[#D4AF37]'}`}
          >
            {state.plan === 'PRO' ? 'Current Plan' : 'Upgrade to Pro — Demo'}
          </button>
        </div>

        {/* PRO VERIFIED PLAN */}
        <div className={`bg-white rounded-[16px] border ${state.plan === 'PRO_VERIFIED' ? 'border-[#A67C00] shadow-md' : 'border-[#EAEAEA]'} p-6 flex flex-col`}>
          <div className="mb-4">
            <h3 className="text-[11px] font-bold tracking-widest text-[#A67C00] uppercase mb-2">Pro + Verified</h3>
            <div className="font-serif text-[32px] font-medium text-[#111111]">$129<span className="text-[14px] font-sans text-[#888888]">/month</span></div>
          </div>
          <div className="space-y-3 flex-1 mb-6">
            <div className="flex gap-2 text-[13px] text-[#666666]"><Check className="w-4 h-4 text-green-500 shrink-0" /> Everything in Pro</div>
            <div className="flex gap-2 text-[13px] text-[#111111] font-bold"><ShieldCheck className="w-4 h-4 text-[#A67C00] shrink-0" /> Verified Partner Badge</div>
            <div className="flex gap-2 text-[13px] text-[#666666]"><Check className="w-4 h-4 text-green-500 shrink-0" /> Maximum Trust & Conversion</div>
          </div>
          <button 
            onClick={() => handleUpdate('PRO_VERIFIED')}
            disabled={state.plan === 'PRO_VERIFIED'}
            className={`w-full py-3 rounded-[8px] text-[13px] font-bold transition-colors ${state.plan === 'PRO_VERIFIED' ? 'bg-[#F5F5F5] text-[#888888] cursor-not-allowed' : 'bg-white border border-[#111111] text-[#111111] hover:bg-[#F5F5F5]'}`}
          >
            {state.plan === 'PRO_VERIFIED' ? 'Current Plan' : 'Apply for Verification — Demo'}
          </button>
        </div>

      </div>

    </motion.div>
  );
}
