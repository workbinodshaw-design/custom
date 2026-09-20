"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="font-serif text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Settings</h1>
        <p className="text-[14px] text-[#666666]">This frontend prototype page is ready for implementation.</p>
      </div>
      <div className="bg-white rounded-[16px] border border-black/5 p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <h2 className="text-[16px] font-semibold text-[#111111] mb-2">Settings Prototype</h2>
        <p className="text-[13px] text-[#888888]">The structure and routing is established. Form UI will be added.</p>
      </div>
    </motion.div>
  );
}
