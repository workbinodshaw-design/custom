"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Plus, Settings } from "lucide-react";

export default function AppointmentsPage() {
  
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dates = Array.from({ length: 35 }, (_, i) => i - 2); // Mock month calendar

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-serif text-[28px] font-medium tracking-tight mb-1">Calendar</h1>
          <p className="text-[14px] text-black/60">Manage your schedule and availability rules.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-black/10 text-black px-4 py-2.5 rounded-[10px] text-[13px] font-bold shadow-sm hover:bg-black/5 transition-colors flex items-center gap-2">
            <Settings className="w-4 h-4" /> Availability Settings
          </button>
          <button className="bg-[#1C1A17] text-white px-5 py-2.5 rounded-[10px] text-[13px] font-bold shadow-sm hover:bg-black transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Booking
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* Main Calendar Area */}
        <div className="flex-1 w-full bg-white rounded-[18px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
          
          <div className="px-6 py-5 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
            <div className="flex items-center gap-4">
              <h2 className="font-serif text-[20px] font-medium">October 2026</h2>
              <div className="flex items-center bg-white border border-black/10 rounded-[8px] overflow-hidden shadow-sm">
                <button className="px-2 py-1.5 hover:bg-black/5 transition-colors"><ChevronLeft className="w-4 h-4 text-black/60" /></button>
                <div className="w-[1px] h-4 bg-black/10"></div>
                <button className="px-2 py-1.5 hover:bg-black/5 transition-colors"><ChevronRight className="w-4 h-4 text-black/60" /></button>
              </div>
            </div>
            <div className="flex bg-white border border-black/10 rounded-[8px] overflow-hidden shadow-sm p-1">
              {['Month', 'Week', 'Day'].map((view, i) => (
                <button key={view} className={`px-4 py-1.5 text-[12px] font-bold rounded-[6px] transition-colors ${i === 0 ? 'bg-[#1C1A17] text-white shadow-sm' : 'text-black/60 hover:text-black'}`}>
                  {view}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {weekDays.map(day => (
                <div key={day} className="text-center text-[11px] font-bold uppercase tracking-wider text-black/40">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 lg:gap-4">
              {dates.map((date, i) => {
                const isCurrentMonth = date > 0 && date <= 31;
                const isToday = date === 24;
                const hasEvent = date === 24 || date === 25 || date === 28;
                
                return (
                  <div key={i} className={`aspect-square rounded-[12px] border flex flex-col p-2 transition-all ${
                    isToday ? 'border-[#1C1A17] bg-[#FAFAF9] shadow-sm' : 
                    isCurrentMonth ? 'border-black/5 hover:border-black/20 hover:shadow-sm cursor-pointer' : 
                    'border-transparent opacity-30 pointer-events-none'
                  }`}>
                    <div className={`text-[13px] font-bold self-end w-7 h-7 flex items-center justify-center rounded-full ${
                      isToday ? 'bg-[#1C1A17] text-white' : 'text-black/70'
                    }`}>
                      {isCurrentMonth ? date : (date <= 0 ? 30 + date : date - 31)}
                    </div>
                    
                    {hasEvent && isCurrentMonth && (
                      <div className="mt-auto space-y-1">
                        <div className="w-full h-1.5 bg-[#D4AF37]/40 rounded-full"></div>
                        {date === 24 && <div className="w-full h-1.5 bg-blue-400/40 rounded-full"></div>}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Day Agenda */}
        <div className="w-full xl:w-[360px] bg-white rounded-[18px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col h-full xl:h-[700px] overflow-hidden shrink-0">
          <div className="p-6 border-b border-black/5 bg-[#FAFAF9]">
            <h3 className="font-serif text-[18px] font-medium text-[#1C1A17]">Thursday, Oct 24</h3>
            <p className="text-[13px] text-black/50 mt-1">2 appointments scheduled</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            
            <div className="bg-white border border-black/10 rounded-[14px] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]"></div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-2 py-0.5 rounded-md">Studio Consultation</span>
                <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded-md">Confirmed</span>
              </div>
              <div className="font-serif text-[18px] font-medium text-[#1C1A17] mb-1">Michael Reynolds</div>
              <div className="flex items-center gap-4 text-[12px] text-black/60 font-medium">
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 10:30 AM - 11:30 AM</div>
              </div>
            </div>

            <div className="bg-white border border-black/10 rounded-[14px] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md">Mobile Fitting</span>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded-md">Pending</span>
              </div>
              <div className="font-serif text-[18px] font-medium text-[#1C1A17] mb-1">Sarah Lin</div>
              <div className="flex flex-col gap-1.5 text-[12px] text-black/60 font-medium mt-2">
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 2:00 PM - 3:00 PM</div>
                <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> The Plaza, 5th Ave</div>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </motion.div>
  );
}
