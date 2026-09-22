"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Plus, Settings, X, Search } from "lucide-react";
import { useVendor, Appointment, AppointmentStatus } from "@/lib/mock/VendorContext";

export default function AppointmentsPage() {
  const { state, updateAppointmentStatus, addAppointment } = useVendor();
  const [selectedApt, setSelectedApt] = useState<Appointment | null>(null);
  const [isNewAptModalOpen, setIsNewAptModalOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'Upcoming' | 'Past'>('Upcoming');
  
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
    <div className="space-y-4 lg:space-y-6 relative pb-6">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3 lg:gap-4">
        <div>
          <h1 className="font-serif text-[24px] lg:text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Calendar</h1>
          <p className="text-[13px] lg:text-[14px] text-[#666666]">Manage your schedule and availability rules.</p>
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0">
          <button className="flex-1 lg:flex-none bg-white border border-black/10 text-[#111111] px-4 py-2.5 lg:py-2.5 rounded-[8px] text-[12px] lg:text-[13px] font-bold shadow-sm hover:bg-[#F5F5F5] transition-colors flex items-center justify-center gap-2">
            <Settings className="w-4 h-4" /> <span className="hidden lg:inline">Availability Settings</span><span className="lg:hidden">Settings</span>
          </button>
          <button onClick={() => setIsNewAptModalOpen(true)} className="flex-1 lg:flex-none bg-[#111111] text-[#E5C158] px-5 py-2.5 lg:py-2.5 rounded-[8px] text-[12px] lg:text-[13px] font-bold shadow-sm hover:bg-black transition-colors flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> New Booking
          </button>
        </div>
      </div>

      {/* MOBILE AGENDA VIEW */}
      <div className="lg:hidden space-y-4 mt-2">
        
        {/* Mobile View Toggles */}
        <div className="flex bg-[#F5F5F5] p-1 rounded-[8px]">
          <button 
            onClick={() => setMobileView('Upcoming')} 
            className={`flex-1 py-2 text-[12px] font-bold uppercase tracking-wider rounded-[6px] transition-colors ${mobileView === 'Upcoming' ? 'bg-white text-[#111111] shadow-sm' : 'text-[#888888]'}`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setMobileView('Past')} 
            className={`flex-1 py-2 text-[12px] font-bold uppercase tracking-wider rounded-[6px] transition-colors ${mobileView === 'Past' ? 'bg-white text-[#111111] shadow-sm' : 'text-[#888888]'}`}
          >
            Past
          </button>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search appointments..." 
            className="w-full bg-white border border-black/10 rounded-[8px] pl-10 pr-4 py-2.5 text-[13px] focus:outline-none focus:border-black/20 transition-all text-[#111111] shadow-sm"
          />
        </div>

        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-3 pl-1">Today</h3>
            {state.appointments.length > 0 ? (
              <div className="space-y-3">
                {state.appointments.map(apt => (
                  <div 
                    key={apt.id} 
                    onClick={() => setSelectedApt(apt)}
                    className="bg-white border border-black/10 rounded-[12px] p-4 shadow-sm active:scale-[0.98] transition-transform cursor-pointer relative overflow-hidden flex gap-4"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${apt.status === 'Confirmed' ? 'bg-[#A67C00]' : 'bg-blue-500'}`}></div>
                    
                    <div className="flex flex-col items-center justify-start pt-1 min-w-[50px]">
                      <span className="text-[11px] font-bold text-[#111111] leading-none mb-1">{apt.time.split(' ')[0]}</span>
                      <span className="text-[9px] font-bold text-[#888888]">{apt.time.split(' ')[1]}</span>
                    </div>
                    
                    <div className="flex-1 border-l border-black/5 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-[15px] text-[#111111] leading-tight">{apt.customer}</span>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[4px] ${apt.status === 'Confirmed' ? 'text-[#A67C00] bg-[#E5C158]/10' : 'text-blue-600 bg-blue-50'}`}>{apt.status}</span>
                      </div>
                      <div className="text-[13px] text-[#666666] mb-2">{apt.type}</div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#888888]">
                        <MapPin className="w-3 h-3" /> {apt.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white border border-[#EAEAEA] rounded-[12px]">
                <p className="text-[13px] text-[#888888]">No appointments today.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DESKTOP SPLIT VIEW */}
      <div className="hidden lg:flex flex-col xl:flex-row gap-6 items-start">
        
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
            {state.appointments.length > 0 ? (
              state.appointments.map(apt => (
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
                  <h4 className="font-semibold text-[15px] text-[#111111] mb-2">{apt.customer}</h4>
                  <div className="flex items-center gap-4 text-[12px] text-[#666666]">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {apt.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {apt.location}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-[13px] text-[#888888]">No appointments scheduled.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Appointment Detail Modal (Bottom Sheet on Mobile) */}
      <AnimatePresence>
        {selectedApt && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedApt(null)}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm lg:hidden"
            />
            <div className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm hidden lg:flex items-center justify-center p-4">
              {/* Desktop Centered Modal */}
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

            {/* Mobile Bottom Sheet Modal */}
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[24px] lg:hidden flex flex-col max-h-[90vh] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_24px_rgba(0,0,0,0.1)]"
            >
              <div className="flex justify-center pt-3 pb-2 w-full" onClick={() => setSelectedApt(null)}>
                <div className="w-12 h-1.5 bg-[#EAEAEA] rounded-full"></div>
              </div>
              <div className="px-5 py-2 flex justify-between items-center shrink-0">
                <h2 className="font-serif text-[20px] font-medium text-[#111111]">Appointment</h2>
                <button onClick={() => setSelectedApt(null)} className="p-2 bg-[#F5F5F5] hover:bg-[#EAEAEA] rounded-full transition-colors"><X className="w-4 h-4 text-[#111111]" /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
                <div>
                  <div className="text-[22px] font-serif font-medium text-[#111111]">{selectedApt.customer}</div>
                  <div className="text-[14px] text-[#666666] font-medium mt-1">{selectedApt.type}</div>
                </div>
                <div className="space-y-4 text-[14px]">
                  <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#888888]"/> <span className="text-[#111111] font-medium">{selectedApt.date} at {selectedApt.time}</span></div>
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#888888]"/> <span className="text-[#111111] font-medium">{selectedApt.location}</span></div>
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-2 block">Notes</span>
                  <p className="bg-[#FAFAF9] p-4 rounded-[12px] text-[13px] text-[#444444] border border-[#EAEAEA] leading-relaxed">{selectedApt.notes || "No notes provided."}</p>
                </div>
              </div>
              <div className="p-4 border-t border-black/5 bg-white shrink-0">
                 <div className="flex gap-2">
                    <button onClick={() => { handleStatusChange('Confirmed'); setSelectedApt(null); }} className={`flex-1 py-3 rounded-[8px] text-[12px] font-bold uppercase tracking-wider transition-colors ${selectedApt.status === 'Confirmed' ? 'bg-[#111111] text-[#E5C158]' : 'bg-[#F5F5F5] text-[#888888]'}`}>Confirm</button>
                    <button onClick={() => { handleStatusChange('Cancelled'); setSelectedApt(null); }} className="flex-1 py-3 rounded-[8px] text-[12px] font-bold uppercase tracking-wider transition-colors bg-white border border-[#EAEAEA] text-[#666666]">Cancel</button>
                  </div>
              </div>
            </motion.div>
          </>
        )}

        {isNewAptModalOpen && (
          <div className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm flex items-end lg:items-center justify-center p-0 lg:p-4 pb-[env(safe-area-inset-bottom)] lg:pb-4">
            <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }} className="bg-white w-full max-w-md rounded-t-[24px] lg:rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col max-h-[90vh]">
              <div className="lg:hidden flex justify-center pt-3 pb-2 w-full">
                <div className="w-12 h-1.5 bg-[#EAEAEA] rounded-full"></div>
              </div>
              <div className="px-6 py-4 lg:py-5 border-b border-black/5 flex justify-between items-center bg-white lg:bg-[#FAFAF9] shrink-0">
                <h2 className="font-serif text-[20px] font-medium text-[#111111]">New Booking</h2>
                <button onClick={() => setIsNewAptModalOpen(false)} className="p-2 bg-[#F5F5F5] hover:bg-[#EAEAEA] rounded-full transition-colors"><X className="w-4 h-4 lg:w-5 lg:h-5 text-[#888888]" /></button>
              </div>
              <div className="p-5 lg:p-6 space-y-4 overflow-y-auto flex-1">
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Customer Name</label>
                  <input type="text" value={newApt.customer} onChange={e => setNewApt({...newApt, customer: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-3 text-[14px] lg:text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                </div>
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Type</label>
                  <input type="text" value={newApt.type} onChange={e => setNewApt({...newApt, type: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-3 text-[14px] lg:text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Date</label>
                    <input type="text" placeholder="e.g. Oct 26" value={newApt.date} onChange={e => setNewApt({...newApt, date: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-3 text-[14px] lg:text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-widest text-[#888888] uppercase block mb-1">Time</label>
                    <input type="text" placeholder="e.g. 10:00 AM" value={newApt.time} onChange={e => setNewApt({...newApt, time: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-3 py-3 text-[14px] lg:text-[13px] text-[#111111] outline-none focus:bg-white focus:border-black/20" />
                  </div>
                </div>
                <button onClick={handleSaveNew} className="w-full mt-6 bg-[#111111] text-[#E5C158] py-3.5 rounded-[8px] text-[14px] lg:text-[13px] font-bold hover:bg-black transition-colors shadow-sm">Save Appointment</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
