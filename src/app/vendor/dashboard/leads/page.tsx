"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Calendar, MapPin, Tag, ChevronDown, Mail, Phone, X, ArrowRight } from "lucide-react";
import { useVendor, Lead, LeadStatus } from "@/lib/mock/VendorContext";

export default function LeadsPage() {
  const { state, updateLeadStatus, addLeadNote } = useVendor();
  const [activeTab, setActiveTab] = useState("All Leads");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNote, setNewNote] = useState("");

  const tabs = ["All Leads", "New", "Contacted", "Qualified", "Converted", "Closed"];
  
  const filteredLeads = state.leads.filter(lead => {
    if (activeTab === "All Leads") return true;
    return lead.status === activeTab;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-50 text-blue-700 border border-blue-100';
      case 'Contacted': return 'bg-amber-50 text-amber-700 border border-amber-100';
      case 'Qualified': return 'bg-purple-50 text-purple-700 border border-purple-100';
      case 'Converted': return 'bg-green-50 text-green-700 border border-green-100';
      case 'Closed': return 'bg-[#F5F5F5] text-[#666666] border border-[#EAEAEA]';
      default: return 'bg-[#F5F5F5] text-[#666666] border border-[#EAEAEA]';
    }
  };

  const handleStatusChange = (id: string, status: LeadStatus) => {
    updateLeadStatus(id, status);
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status });
    }
  };

  const handleAddNote = () => {
    if (!newNote.trim() || !selectedLead) return;
    addLeadNote(selectedLead.id, newNote);
    setSelectedLead({ ...selectedLead, notes: [...selectedLead.notes, newNote] });
    setNewNote("");
  };

  return (
    <div className="space-y-4 lg:space-y-6 relative pb-6">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-2 lg:gap-4">
        <div>
          <h1 className="font-serif text-[24px] lg:text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Leads</h1>
          <p className="text-[13px] lg:text-[14px] text-[#666666]">Manage customer enquiries.</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-[12px] lg:rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="px-2 pt-2 pb-0 flex overflow-x-auto custom-scrollbar border-b border-black/5">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-4 lg:px-5 py-3 text-[12px] lg:text-[13px] font-medium whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#111111]' : 'text-[#888888] hover:text-[#111111]'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111] rounded-t-full"></div>}
            </button>
          ))}
        </div>
        
        <div className="p-3 lg:p-4 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4">
          <div className="relative w-full lg:w-[320px]">
            <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] pl-10 pr-4 py-2.5 text-[13px] focus:outline-none focus:bg-white focus:border-black/10 transition-all text-[#111111]"
            />
          </div>
          
          <div className="flex items-center gap-2 lg:gap-3 w-full lg:w-auto overflow-x-auto custom-scrollbar pb-1 lg:pb-0">
            <button className="flex items-center gap-2 bg-white border border-black/10 px-3 lg:px-4 py-2 rounded-[8px] text-[12px] lg:text-[13px] font-medium hover:bg-[#F5F5F5] transition-colors whitespace-nowrap text-[#444444]">
              <Calendar className="w-3.5 h-3.5 text-[#888888]" /> Date <ChevronDown className="w-3.5 h-3.5 text-[#888888]" />
            </button>
            <button className="flex items-center gap-2 bg-white border border-black/10 px-3 lg:px-4 py-2 rounded-[8px] text-[12px] lg:text-[13px] font-medium hover:bg-[#F5F5F5] transition-colors whitespace-nowrap text-[#444444]">
              <Tag className="w-3.5 h-3.5 text-[#888888]" /> Service <ChevronDown className="w-3.5 h-3.5 text-[#888888]" />
            </button>
            <button className="flex items-center gap-2 bg-[#F5F5F5] text-[#111111] px-3 lg:px-4 py-2 rounded-[8px] text-[12px] lg:text-[13px] font-bold hover:bg-[#EAEAEA] transition-colors whitespace-nowrap ml-auto">
              <Filter className="w-3.5 h-3.5" /> <span className="hidden lg:inline">Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* LEADS DESKTOP TABLE */}
      <div className="hidden lg:block bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAFAF9]">
                <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Customer</th>
                <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Service Details</th>
                <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Received</th>
                <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    onClick={() => setSelectedLead(lead)}
                    className="border-b border-black/5 last:border-0 hover:bg-[#F5F5F5] transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-serif text-[16px] shrink-0">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-[14px] font-bold text-[#111111]">{lead.name}</div>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[12px] text-[#888888] flex items-center gap-1"><Mail className="w-3 h-3" /> {state.plan === 'FREE' ? 'Hidden (Pro)' : lead.email}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[13px] font-bold text-[#111111] mb-1">{lead.service}</div>
                      <div className="flex items-center gap-2 text-[12px] text-[#666666]">
                        <MapPin className="w-3 h-3 text-[#888888]" /> {lead.location}
                        <span className="w-1 h-1 bg-[#CCCCCC] rounded-full mx-1"></span>
                        <span>Budget: {lead.budget}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-[13px] text-[#111111] font-medium">{lead.date}</div>
                      <div className="text-[11px] text-[#888888] font-mono mt-1">{lead.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-[6px] ${getStatusStyle(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-[#888888] text-[13px]">
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* LEADS MOBILE CARDS */}
      <div className="lg:hidden space-y-3">
        {filteredLeads.length > 0 ? (
          filteredLeads.map((lead) => (
            <div 
              key={lead.id}
              onClick={() => setSelectedLead(lead)}
              className="bg-white border border-black/10 rounded-[12px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:scale-[0.98] transition-transform cursor-pointer"
            >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-serif text-[16px] shrink-0">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[15px] text-[#111111] leading-tight">{lead.name}</div>
                  <div className="text-[12px] text-[#888888] mt-0.5">{lead.date}</div>
                </div>
              </div>
              <span className={`inline-flex items-center px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-[4px] ${getStatusStyle(lead.status)}`}>
                {lead.status}
              </span>
            </div>
            
            <div className="bg-[#FAFAF9] border border-black/5 rounded-[8px] p-3 mb-4">
              <div className="text-[13px] font-bold text-[#111111] mb-1">{lead.service}</div>
              <div className="flex items-center gap-3 text-[12px] text-[#666666]">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {lead.location}</span>
                <span className="text-[#888888]">{lead.budget}</span>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-[8px] bg-white border border-black/10 text-[13px] font-bold text-[#111111] text-center flex items-center justify-center gap-1 shadow-sm">
              View Lead Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          ))
        ) : null}
        {filteredLeads.length === 0 && (
          <div className="bg-white border border-black/10 rounded-[12px] p-8 text-center shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#111111] mb-2">No leads found</h3>
            <p className="text-[13px] text-[#666666]">Try adjusting your filters or tabs.</p>
          </div>
        )}
      </div>

      {/* Lead Detail Drawer (Slide over on desktop, full sheet on mobile) */}
      <AnimatePresence>
        {selectedLead && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm hidden lg:block"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 lg:top-0 lg:right-0 lg:bottom-0 lg:left-auto lg:w-[480px] bg-[#FDFDFC] lg:shadow-[-4px_0_24px_rgba(0,0,0,0.1)] z-50 flex flex-col pt-[env(safe-area-inset-top)]"
            >
              <div className="px-4 lg:px-6 py-4 border-b border-black/5 flex justify-between items-center bg-white shrink-0">
                <h2 className="font-serif text-[18px] lg:text-[20px] font-medium text-[#111111]">Lead Details</h2>
                <button onClick={() => setSelectedLead(null)} className="p-2 bg-[#F5F5F5] hover:bg-[#EAEAEA] rounded-full transition-colors">
                  <X className="w-5 h-5 text-[#111111]" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 lg:space-y-8 pb-[100px] lg:pb-6">
                
                {/* Customer Info */}
                <div className="bg-white p-4 lg:p-5 rounded-[12px] lg:rounded-[16px] border border-black/5 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#111111] text-white flex items-center justify-center font-serif text-[24px]">
                      {selectedLead.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-[18px] lg:text-[20px] font-serif font-medium text-[#111111]">{selectedLead.name}</div>
                      <div className="text-[12px] lg:text-[13px] text-[#666666] mt-0.5">{selectedLead.id} • {selectedLead.date}</div>
                    </div>
                  </div>

                  {state.plan === 'FREE' ? (
                    <div className="bg-[#FAFAF9] border border-[#EAEAEA] p-4 rounded-[12px] flex flex-col items-center justify-center text-center">
                      <h4 className="text-[13px] font-bold text-[#111111] mb-1">Upgrade to PRO</h4>
                      <p className="text-[12px] text-[#666666] mb-3">Free vendors cannot directly access contact info.</p>
                      <button className="bg-[#111111] text-[#E5C158] px-4 py-2 rounded-[8px] text-[12px] font-bold w-full">Upgrade Now</button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-[#FAFAF9] rounded-[8px] border border-black/5">
                        <Mail className="w-4 h-4 text-[#888888]" />
                        <span className="text-[13px] font-medium text-[#111111]">{selectedLead.email}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[#FAFAF9] rounded-[8px] border border-black/5">
                        <Phone className="w-4 h-4 text-[#888888]" />
                        <span className="text-[13px] font-medium text-[#111111]">{selectedLead.phone}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Request Details */}
                <div className="bg-white p-4 lg:p-5 rounded-[12px] lg:rounded-[16px] border border-black/5 shadow-sm">
                  <h3 className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-4">Request Details</h3>
                  <div className="space-y-3 text-[13px]">
                    <div className="flex justify-between border-b border-black/5 pb-2">
                      <span className="text-[#666666]">Service</span>
                      <span className="font-semibold text-[#111111]">{selectedLead.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-black/5 pb-2">
                      <span className="text-[#666666]">Location</span>
                      <span className="font-semibold text-[#111111]">{selectedLead.location}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-[#666666]">Budget</span>
                      <span className="font-semibold text-[#111111]">{selectedLead.budget}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#666666] block mb-2 font-medium">Customer Message</span>
                      <p className="bg-[#FAFAF9] border border-black/5 p-3.5 rounded-[10px] text-[#111111] leading-relaxed text-[13px]">"{selectedLead.message}"</p>
                    </div>
                  </div>
                </div>

                {/* Internal Notes */}
                <div className="bg-white p-4 lg:p-5 rounded-[12px] lg:rounded-[16px] border border-black/5 shadow-sm">
                  <h3 className="text-[10px] lg:text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-4">Internal Notes</h3>
                  <div className="space-y-3 mb-4">
                    {selectedLead.notes.map((note, idx) => (
                      <div key={idx} className="bg-[#FAFAF9] p-3 border border-black/5 rounded-[8px] text-[12px] lg:text-[13px] text-[#444444]">
                        {note}
                      </div>
                    ))}
                    {selectedLead.notes.length === 0 && (
                      <p className="text-[12px] text-[#888888] italic">No internal notes.</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Add a private note..." 
                      className="flex-1 bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-2.5 text-[13px] outline-none focus:bg-white focus:border-black/20"
                      onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
                    />
                    <button onClick={handleAddNote} className="bg-[#111111] text-[#E5C158] px-4 py-2.5 rounded-[8px] text-[12px] font-bold hover:bg-black transition-colors">
                      Save
                    </button>
                  </div>
                </div>

              </div>

              {/* Mobile/Desktop Fixed Action Bar */}
              <div className="absolute lg:static bottom-0 left-0 right-0 p-4 border-t border-black/5 bg-white pb-[env(safe-area-inset-bottom)]">
                <h3 className="text-[10px] font-bold tracking-widest text-[#888888] uppercase mb-2">Change Status</h3>
                <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                  {tabs.slice(1).map(status => (
                    <button 
                      key={status}
                      onClick={() => handleStatusChange(selectedLead.id, status as LeadStatus)}
                      className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-[6px] transition-colors border shrink-0 ${
                        selectedLead.status === status ? getStatusStyle(status) : 'bg-white border-black/10 text-[#666666] hover:bg-[#F5F5F5]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
