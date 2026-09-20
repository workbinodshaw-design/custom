"use client";

import { motion } from "framer-motion";
import { Search, Filter, Calendar, MapPin, Tag, ChevronDown, MoreHorizontal, MessageSquare, Mail, Phone } from "lucide-react";

export default function LeadsPage() {
  const tabs = ["All Leads", "New", "Contacted", "Qualified", "Converted", "Closed"];
  
  const leads = [
    { id: "LD-9281", name: "Michael Reynolds", email: "michael.r@example.com", phone: "+1 (555) 123-4567", service: "Bespoke Suit", location: "New York, NY", date: "Oct 15, 2026", status: "New", budget: "$1,500 - $2,500" },
    { id: "LD-9280", name: "Sarah Lin", email: "slin@example.com", phone: "+1 (555) 987-6543", service: "Wedding Tuxedo", location: "Brooklyn, NY", date: "Oct 14, 2026", status: "Contacted", budget: "$2,000+" },
    { id: "LD-9279", name: "David Kim", email: "dkim99@example.com", phone: "+1 (555) 456-7890", service: "Shirts & Trousers", location: "Manhattan, NY", date: "Oct 12, 2026", status: "Qualified", budget: "$800 - $1,200" },
    { id: "LD-9278", name: "Emily Parker", email: "emily.parker@example.com", phone: "+1 (555) 234-5678", service: "Custom Jacket", location: "Queens, NY", date: "Oct 10, 2026", status: "Converted", budget: "$900 - $1,500" },
    { id: "LD-9275", name: "James Wilson", email: "j.wilson@example.com", phone: "+1 (555) 345-6789", service: "Alterations", location: "Jersey City, NJ", date: "Oct 08, 2026", status: "Closed", budget: "< $500" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Contacted': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'Qualified': return 'bg-purple-50 text-purple-700 border-purple-100';
      case 'Converted': return 'bg-green-50 text-green-700 border-green-100';
      case 'Closed': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-serif text-[28px] font-medium tracking-tight mb-1">Lead Management</h1>
          <p className="text-[14px] text-black/60">View and manage customer enquiries across your business.</p>
        </div>
        <button className="bg-[#1C1A17] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shadow-sm hover:bg-black transition-colors">
          Export Leads
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-[18px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div className="px-2 pt-2 pb-0 flex overflow-x-auto custom-scrollbar border-b border-black/5">
          {tabs.map((tab, i) => (
            <button key={i} className={`px-5 py-3 text-[13px] font-medium whitespace-nowrap transition-colors relative ${i === 0 ? 'text-[#1C1A17]' : 'text-black/50 hover:text-black/80'}`}>
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C1A17] rounded-t-full"></div>}
            </button>
          ))}
        </div>
        
        <div className="p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="relative w-full lg:w-[320px]">
            <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by name, email, or ID..." 
              className="w-full bg-[#F5F4F0] border border-transparent rounded-[10px] pl-10 pr-4 py-2.5 text-[13px] focus:outline-none focus:bg-white focus:border-black/20 focus:ring-4 focus:ring-black/5 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto">
            <button className="flex items-center gap-2 bg-white border border-black/10 px-4 py-2.5 rounded-[10px] text-[13px] font-medium hover:bg-black/5 transition-colors whitespace-nowrap">
              <Calendar className="w-4 h-4 text-black/50" /> Date <ChevronDown className="w-3.5 h-3.5 text-black/40" />
            </button>
            <button className="flex items-center gap-2 bg-white border border-black/10 px-4 py-2.5 rounded-[10px] text-[13px] font-medium hover:bg-black/5 transition-colors whitespace-nowrap">
              <Tag className="w-4 h-4 text-black/50" /> Service <ChevronDown className="w-3.5 h-3.5 text-black/40" />
            </button>
            <button className="flex items-center gap-2 bg-white border border-black/10 px-4 py-2.5 rounded-[10px] text-[13px] font-medium hover:bg-black/5 transition-colors whitespace-nowrap">
              <MapPin className="w-4 h-4 text-black/50" /> Location <ChevronDown className="w-3.5 h-3.5 text-black/40" />
            </button>
            <button className="flex items-center gap-2 bg-[#F5F4F0] text-black px-4 py-2.5 rounded-[10px] text-[13px] font-bold hover:bg-[#EAE8E1] transition-colors whitespace-nowrap ml-auto">
              <Filter className="w-4 h-4" /> Clear
            </button>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-[18px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAFAF9]">
                <th className="px-6 py-4 text-[11px] font-bold tracking-widest text-black/40 uppercase border-b border-black/5">Customer / Contact</th>
                <th className="px-6 py-4 text-[11px] font-bold tracking-widest text-black/40 uppercase border-b border-black/5">Service details</th>
                <th className="px-6 py-4 text-[11px] font-bold tracking-widest text-black/40 uppercase border-b border-black/5">Received</th>
                <th className="px-6 py-4 text-[11px] font-bold tracking-widest text-black/40 uppercase border-b border-black/5">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold tracking-widest text-black/40 uppercase border-b border-black/5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, i) => (
                <tr key={lead.id} className="border-b border-black/5 last:border-0 hover:bg-[#FAFAF9] transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1C1A17] text-white flex items-center justify-center font-serif text-[16px] shrink-0">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-[#1C1A17]">{lead.name}</div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[12px] text-black/50 flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                          <span className="text-[12px] text-black/50 flex items-center gap-1"><Phone className="w-3 h-3" /> {lead.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[13px] font-bold text-[#1C1A17] mb-1">{lead.service}</div>
                    <div className="flex items-center gap-2 text-[12px] text-black/50">
                      <MapPin className="w-3 h-3" /> {lead.location}
                      <span className="w-1 h-1 bg-black/20 rounded-full mx-1"></span>
                      <span>Budget: {lead.budget}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[13px] text-[#1C1A17] font-medium">{lead.date}</div>
                    <div className="text-[11px] text-black/40 font-mono mt-1">{lead.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors shadow-sm">
                        <MessageSquare className="w-3.5 h-3.5 text-black/70" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors shadow-sm">
                        <MoreHorizontal className="w-4 h-4 text-black/70" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </motion.div>
  );
}
