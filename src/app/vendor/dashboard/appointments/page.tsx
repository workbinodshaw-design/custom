"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Plus, Settings, X } from "lucide-react";
import { useVendor, Appointment, AppointmentStatus } from "@/lib/mock/VendorContext";

export default function AppointmentsPage() {
  const { state, updateAppointmentStatus, addAppointment } = useVendor();
  const [selectedApt, setSelectedApt] = useState<Appointment | null>(null);
  const [isNewAptModalOpen, setIsNewAptModalOpen] = useState(false);
  
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 35 }, (_, i) => i - 2); 

  const handleStatusChange = (status: AppointmentStatus) => {
    if (selectedApt) {
      updateAppointmentStatus(selectedApt.id, status);
      setSelectedApt({ ...selectedApt, status });
    }
  };

  const [newApt, setNewApt] = useState({ customer: "", type: "", date: "", time: "", location: "", notes: "" });

  const handleSaveNew = () => {
    if (!newApt.customer) return;
    addAppointment({
      id: "A-" + Math.floor(Math.random() * 1000),
      ...newApt,
      status: "Pending" as AppointmentStatus
    });
    setIsNewAptModalOpen(false);
    setNewApt({ customer: "", type: "", date: "", time: "", location: "", notes: "" });
  };

  return (
    <div className="space-y-6 relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-serif text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Calendar</h1>
          <p className="text-[14px] text-[#666666]">Manage your schedule and availability rules.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-black/10 text-[#111111] px-4 py-2.5 rounded-[8px] text-[13px] font-bold shadow-sm hover:bg-[#F5F5F5] transition-colors flex items-center gap-2">
            <Settings className="w-4 h-4" /> Availability Settings
          </button>
          <button onClick={() => setIsNewAptModalOpen(true)} className="bg-[#111111] text-[#E5C158] px-5 py-2.5 rounded-[8px] text-[13px] font-bold shadow-sm hover:bg-black transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Booking
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* Main Calendar Area */}
        <div className="flex-1 w-full bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
          
          <div className="px-6 py-5 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
            <div className="flex items-center gap-4">
              <h2 className="font-serif text-[20px] font-medium text-[#111111]">October 2026</h2>
              <div className="flex items-center bg-white border border-black/10 rounded-[6px] overflow-hidden shadow-sm">
                <button className="px-2 py-1.5 hover:bg-[#F5F5F5] transition-colors"><ChevronLeft className="w-4 h-4 text-[#666666]" /></button>
                <div className="w-[1px] h-4 bg-[#EAEAEA]"></div>
                <button className="px-2 py-1.5 hover:bg-[#F5F5F5] transition-colors"><ChevronRight className="w-4 h-4 text-[#666666]" /></button>
              </div>
            </div>
            <div className="flex bg-[#F5F5F5] border border-black/5 rounded-[6px] overflow-hidden p-0.5">
              {['Month', 'Week', 'Day'].map((view, i) => (
                <button key={view} className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-[4px] transition-colors ${i === 0 ? 'bg-white text-[#111111] shadow-[0_2px_4px_rgba(0,0,0,0.05)]' : 'text-[#888888] hover:text-[#111111]'}`}>
                  {view}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {weekDays.map(day => (
                <div key={day} className="text-center text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 lg:gap-4">
              {dates.map((date, i) => {
                const isCurrentMonth = date > 0 && date <= 31;
                const isToday = date === 24;
                const hasEvent = date === 24 || date === 25;
                
                return (
                  <div key={i} className={`aspect-square rounded-[8px] border flex flex-col p-2 transition-all ${
                    isToday ? 'border-[#111111] bg-[#FAFAF9] shadow-sm' : 
                    isCurrentMonth ? 'border-[#EAEAEA] hover:border-black/20 hover:shadow-sm cursor-pointer' : 
                    'border-transparent opacity-30 pointer-events-none'
                  }`}>
                    <div className={`text-[12px] font-bold self-end w-6 h-6 flex items-center justify-center rounded-full ${
                      isToday ? 'bg-[#111111] text-[#E5C158]' : 'text-[#666666]'
                    }`}>
                      {isCurrentMonth ? date : (date <= 0 ? 30 + date : date - 31)}
                    </div>
                    
                    {hasEvent && isCurrentMonth && (
                      <div className="mt-auto space-y-1">
                        <div className="w-full h-1 bg-[#E5C158]/50 rounded-full"></div>
                        {date === 24 && <div className="w-full h-1 bg-blue-400/50 rounded-full"></div>}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Day Agenda */}
        <div className="w-full xl:w-[340px] bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col h-full xl:h-[700px] overflow-hidden shrink-0">
          <div className="p-6 border-b border-black/5 bg-[#FAFAF9]">
            <h3 className="font-serif text-[18px] font-medium text-[#111111]">Agenda</h3>
            <p className="text-[13px] text-[#666666] mt-1">{state.appointments.length} appointments scheduled</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {state.appointments.map(apt => (
              <div 
                key={apt.id} 
                onClick={() => setSelectedApt(apt)}
                className="bg-white border border-[#EAEAEA] rounded-[12px] p-4 shadow-sm hover:border-black/20 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${apt.status === 'Confirmed' ? 'bg-[#A67C00]' : 'bg-blue-500'}`}></div>
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[4px] ${apt.status === 'Confirmed' ? 'text-[#A67C00] bg-[#E5C158]/10' : 'text-blue-600 bg-blue-50'}`}>{apt.type}</span>
                  <span className="text-[10px] font-bold text-[#666666] uppercase tracking-widest">{apt.status}</span>
                </div>
                <div className="font-serif text-[18px] font-medium text-[#111111] mb-1">{apt.customer}</div>
                <div className="flex flex-col gap-1.5 text-[12px] text-[#666666] font-medium mt-2">
                  <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {apt.date}, {apt.time}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {apt.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Appointment Detail Modal */}
      <AnimatePresence>
        {selectedApt && (
          <div className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white w-full max-w-md rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="px-6 py-5 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
                <h2 className="font-serif text-[20px] font-medium text-[#111111]">Appointment Details</h2>
                <button onClick={() => setSelectedApt(null)} className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"><X className="w-5 h-5 text-[#888888]" /></button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-[20px] font-serif font-medium text-[#111111]">{selectedApt.customer}</div>
                  <div className="text-[13px] text-[#888888]">{selectedApt.type}</div>
                </div>
                <div className="space-y-3 text-[13px]">
                  <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-[#888888]"/> <span className="text-[#111111] font-medium">{selectedApt.date} at {selectedApt.time}</span></div>
                  <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#888888]"/> <span className="text-[#111111] font-medium">{selectedApt.location}</span></div>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#888888] uppercase mb-2 block">Notes</span>
                  <p className="bg-[#FAFAF9] p-3 rounded-[8px] text-[13px] text-[#444444] border border-[#EAEAEA]">{selectedApt.notes || "No notes."}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#888888] uppercase mb-2 block">Update Status</span>
                  <div className="flex gap-2">
                    <button onClick={() => handleStatusChange('Confirmed')} className={`flex-1 py-2 rounded-[6px] text-[11px] font-bold uppercase tracking-wider transition-colors ${selectedApt.status === 'Confirmed' ? 'bg-[#111111] text-[#E5C158]' : 'bg-[#F5F5F5] text-[#888888] hover:bg-[#EAEAEA]'}`}>Confirm</button>
                    <button onClick={() => handleStatusChange('Completed')} className={`flex-1 py-2 rounded-[6px] text-[11px] font-bold uppercase tracking-wider transition-colors ${selectedApt.status === 'Completed' ? 'bg-[#111111] text-white' : 'bg-[#F5F5F5] text-[#888888] hover:bg-[#EAEAEA]'}`}>Complete</button>
                    <button onClick={() => handleStatusChange('Cancelled')} className={`flex-1 py-2 rounded-[6px] text-[11px] font-bold uppercase tracking-wider transition-colors ${selectedApt.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-[#F5F5F5] text-[#888888] hover:bg-[#EAEAEA]'}`}>Cancel</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {isNewAptModalOpen && (
          <div className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white w-full max-w-md rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="px-6 py-5 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
                <h2 className="font-serif text-[20px] font-medium text-[#111111]">New Booking</h2>
                <button onClick={() => setIsNewAptModalOpen(false)} className="p-2 hover:bg-[#F5F5F5] rounded-full transition-colors"><X className="w-5 h-5 text-[#888888]" /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Customer Name</label>
                  <input type="text" value={newApt.customer} onChange={e => setNewApt({...newApt, customer: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-2.5 text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                </div>
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Type</label>
                  <input type="text" value={newApt.type} onChange={e => setNewApt({...newApt, type: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-2.5 text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Date</label>
                    <input type="text" placeholder="e.g. Oct 26" value={newApt.date} onChange={e => setNewApt({...newApt, date: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-2.5 text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Time</label>
                    <input type="text" placeholder="e.g. 10:00 AM" value={newApt.time} onChange={e => setNewApt({...newApt, time: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-2.5 text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                  </div>
                </div>
                <button onClick={handleSaveNew} className="w-full mt-4 bg-[#111111] text-[#E5C158] py-3 rounded-[8px] text-[13px] font-bold hover:bg-black transition-colors">Save Appointment</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
