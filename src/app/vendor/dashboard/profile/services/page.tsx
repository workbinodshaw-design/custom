"use client";

import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, CheckCircle2 } from "lucide-react";
import { useVendor } from "@/lib/mock/VendorContext";

export default function ServicesPage() {
  const { state, toggleService } = useVendor();

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-serif text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Services</h1>
          <p className="text-[14px] text-[#666666]">Manage the tailoring services you offer to customers.</p>
        </div>
        <button className="bg-[#111111] text-[#E5C158] px-5 py-2.5 rounded-[8px] text-[13px] font-bold shadow-sm hover:bg-black transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FAFAF9]">
              <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Service Name</th>
              <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Category</th>
              <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Starting Price</th>
              <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.services.map(service => (
              <tr key={service.id} className="border-b border-black/5 last:border-0 hover:bg-[#F5F5F5] transition-colors">
                <td className="px-6 py-4 text-[13px] font-bold text-[#111111]">{service.name}</td>
                <td className="px-6 py-4 text-[13px] text-[#666666]">{service.category}</td>
                <td className="px-6 py-4 text-[13px] font-medium text-[#111111]">${service.startingPrice.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => toggleService(service.id)}
                    className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-[4px] border transition-colors ${service.enabled ? 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100' : 'bg-[#F5F5F5] text-[#888888] border-[#EAEAEA] hover:bg-[#EAEAEA]'}`}
                  >
                    {service.enabled ? 'Enabled' : 'Disabled'}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-[#EAEAEA] rounded-[6px] text-[#888888] hover:text-[#111111] transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-red-50 rounded-[6px] text-[#888888] hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
