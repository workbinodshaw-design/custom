"use client";

import { motion } from "framer-motion";
import { Users, Eye, MousePointerClick, Star, MapPin, Calendar, Clock, ChevronRight, Plus, Upload, Building, Edit3, ArrowRight, Verified } from "lucide-react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function DashboardOverview() {
  
  // Mock Data for Charts
  const performanceData = [
    { name: 'Oct 1', views: 120 }, { name: 'Oct 5', views: 132 },
    { name: 'Oct 10', views: 101 }, { name: 'Oct 15', views: 143 },
    { name: 'Oct 20', views: 190 }, { name: 'Oct 25', views: 160 },
    { name: 'Oct 30', views: 210 },
  ];

  const leadSourcesData = [
    { name: 'Website Search', value: 45, color: '#1C1A17' },
    { name: 'Google', value: 25, color: '#4A4A4A' },
    { name: 'Direct Link', value: 15, color: '#888888' },
    { name: 'Social Media', value: 10, color: '#B8860B' },
    { name: 'Other', value: 5, color: '#E0E0E0' },
  ];

  const recentLeads = [
    { name: "Michael R.", service: "Custom Suit", location: "New York, NY", date: "Oct 15", status: "New" },
    { name: "Sarah L.", service: "Wedding Suit", location: "Brooklyn, NY", date: "Oct 14", status: "Contacted" },
    { name: "David K.", service: "Shirt & Trousers", location: "Manhattan, NY", date: "Oct 12", status: "New" },
    { name: "Emily P.", service: "Custom Jacket", location: "Queens, NY", date: "Oct 10", status: "Replied" },
  ];

  const appointments = [
    { time: "10:30 AM", type: "Studio Consultation", customer: "Michael R.", status: "Confirmed", day: "Today" },
    { time: "2:00 PM", type: "Wedding Suit Fitting", customer: "Sarah L.", status: "Pending", day: "Today" },
    { time: "11:00 AM", type: "Mobile Fitting", customer: "James W.", status: "Confirmed", day: "Tomorrow" },
  ];

  const kpis = [
    { label: "New Leads", value: "12", trend: "+20%", icon: Users },
    { label: "Appointments", value: "8", trend: "+14%", icon: Calendar },
    { label: "Profile Views", value: "1,245", trend: "+32%", icon: Eye },
    { label: "Profile Clicks", value: "87", trend: "+18%", icon: MousePointerClick },
    { label: "Customer Rating", value: "4.8", trend: "24 reviews", icon: Star, isRating: true },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8 pb-10">
      
      {/* 4. DASHBOARD HOME (HERO) */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 bg-white p-8 rounded-[18px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div>
          <h1 className="font-serif text-[28px] lg:text-[32px] font-medium tracking-tight mb-2 text-[#1C1A17]">Good evening, Antonio's Bespoke! 👋</h1>
          <p className="text-[14px] text-black/60">Manage your business, leads and appointments — and create exceptional experiences.</p>
        </div>
        
        <div className="flex items-center gap-6 lg:border-l border-black/10 lg:pl-6">
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-black/70 mb-1">
              <MapPin className="w-3.5 h-3.5" /> New York, NY
            </div>
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-black/70">
              <Clock className="w-3.5 h-3.5" /> Oct 24, 7:15 PM
            </div>
          </div>
          
          <div className="bg-[#1C1A17] text-white px-5 py-3.5 rounded-[14px] flex flex-col justify-center shadow-md">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase">Pro Plan</span>
              <span className="text-[10px] text-white/50">$99/month</span>
            </div>
            <Link href="/vendor/dashboard/subscription">
              <span className="text-[13px] font-medium hover:text-[#D4AF37] transition-colors cursor-pointer flex items-center gap-1">
                Manage Plan <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 5. KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white rounded-[16px] p-5 border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[13px] font-medium text-black/60">{kpi.label}</span>
              <kpi.icon className="w-4 h-4 text-black/40" strokeWidth={1.5} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-[28px] font-medium leading-none">{kpi.value}</span>
            </div>
            <div className="mt-2 text-[12px] font-medium text-black/40">
              {kpi.isRating ? (
                <span>Based on {kpi.trend}</span>
              ) : (
                <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md">{kpi.trend}</span>
              )}
              {!kpi.isRating && <span className="ml-1">vs last month</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Layout: Charts & Conversion */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 6. PROFILE PERFORMANCE */}
        <div className="lg:col-span-2 bg-white rounded-[18px] p-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-[18px] font-medium">Profile Performance</h3>
            <select className="bg-[#F5F4F0] border-none text-[12px] font-medium py-1.5 px-3 rounded-lg outline-none cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontSize: '12px', fontWeight: 500 }}
                  itemStyle={{ color: '#1C1A17' }}
                />
                <Line type="monotone" dataKey="views" stroke="#1C1A17" strokeWidth={2} dot={{ r: 4, fill: '#1C1A17' }} activeDot={{ r: 6, fill: '#D4AF37', stroke: '#fff', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 7. LEAD SOURCES */}
        <div className="bg-white rounded-[18px] p-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="font-serif text-[18px] font-medium mb-6">Lead Sources</h3>
          <div className="flex-1 relative flex items-center justify-center min-h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leadSourcesData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" stroke="none">
                  {leadSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-[24px] font-serif font-medium">100</span>
              <span className="text-[11px] text-black/40 font-bold uppercase tracking-wider">Total</span>
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            {leadSourcesData.slice(0, 4).map((source, i) => (
              <div key={i} className="flex justify-between items-center text-[13px]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }}></div>
                  <span className="text-black/70">{source.name}</span>
                </div>
                <span className="font-medium">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11. CONVERSION FUNNEL */}
      <div className="bg-white rounded-[18px] p-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-x-auto">
        <h3 className="font-serif text-[16px] font-medium mb-6 text-center">Conversion Funnel</h3>
        <div className="flex items-center justify-center min-w-[600px]">
          {[
            { label: "Profile Views", value: "1,245" },
            { label: "Enquiries", value: "48" },
            { label: "Appointments", value: "18" },
            { label: "Converted", value: "9" }
          ].map((step, i, arr) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-8">
                <div className="text-[24px] font-serif font-medium mb-1">{step.value}</div>
                <div className="text-[12px] font-medium text-black/50 uppercase tracking-wider">{step.label}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-12 border-t-2 border-dashed border-black/10 relative">
                  <ArrowRight className="w-4 h-4 text-black/20 absolute -right-2 -top-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Layout: Leads & Appointments & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 8. RECENT LEADS */}
        <div className="lg:col-span-2 bg-white rounded-[18px] border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="p-6 border-b border-black/5 flex justify-between items-center">
            <h3 className="font-serif text-[18px] font-medium">Recent Leads</h3>
            <Link href="/vendor/dashboard/leads">
              <button className="text-[12px] font-bold text-black/50 hover:text-black flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
          
          <div className="overflow-x-auto p-2">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-[11px] font-bold tracking-wider text-black/40 uppercase border-b border-black/5">Customer</th>
                  <th className="px-4 py-3 text-[11px] font-bold tracking-wider text-black/40 uppercase border-b border-black/5">Service</th>
                  <th className="px-4 py-3 text-[11px] font-bold tracking-wider text-black/40 uppercase border-b border-black/5">Location</th>
                  <th className="px-4 py-3 text-[11px] font-bold tracking-wider text-black/40 uppercase border-b border-black/5">Date</th>
                  <th className="px-4 py-3 text-[11px] font-bold tracking-wider text-black/40 uppercase border-b border-black/5">Status</th>
                  <th className="px-4 py-3 text-[11px] font-bold tracking-wider text-black/40 uppercase border-b border-black/5 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, i) => (
                  <tr key={i} className="hover:bg-[#F5F4F0]/50 transition-colors group">
                    <td className="px-4 py-3.5 text-[13px] font-semibold">{lead.name}</td>
                    <td className="px-4 py-3.5 text-[13px] text-black/60">{lead.service}</td>
                    <td className="px-4 py-3.5 text-[13px] text-black/50">{lead.location}</td>
                    <td className="px-4 py-3.5 text-[13px] text-black/50">{lead.date}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${
                        lead.status === 'New' ? 'bg-blue-50 text-blue-700' :
                        lead.status === 'Contacted' ? 'bg-orange-50 text-orange-700' :
                        lead.status === 'Replied' ? 'bg-purple-50 text-purple-700' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button className="text-[12px] font-semibold text-[#B8860B] hover:text-[#1C1A17] transition-colors">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          {/* 9. UPCOMING APPOINTMENTS */}
          <div className="bg-white rounded-[18px] p-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-serif text-[18px] font-medium">Appointments</h3>
              <Link href="/vendor/dashboard/appointments">
                <button className="text-[12px] font-bold text-black/50 hover:text-black flex items-center gap-1 transition-colors">
                  Calendar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {appointments.map((apt, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-[12px] hover:bg-[#F5F4F0]/80 transition-colors cursor-pointer border border-transparent hover:border-black/5">
                  <div className="flex flex-col items-center justify-center w-[50px] shrink-0 bg-[#F5F4F0] rounded-[10px] py-2">
                    <span className="text-[10px] font-bold text-black/40 uppercase leading-none mb-1">{apt.day}</span>
                    <span className="text-[12px] font-bold leading-none">{apt.time.split(' ')[0]}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[13px] font-bold">{apt.type}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[12px] text-black/60">{apt.customer}</span>
                      <span className="w-1 h-1 rounded-full bg-black/20"></span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${apt.status === 'Confirmed' ? 'text-green-600' : 'text-orange-500'}`}>{apt.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10. QUICK ACTIONS */}
          <div className="bg-white rounded-[18px] p-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <h3 className="font-serif text-[18px] font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Add Service", icon: Plus },
                { label: "Upload Work", icon: Upload },
                { label: "Edit Hours", icon: Building },
                { label: "Edit Profile", icon: Edit3 },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center justify-center gap-2 bg-[#F5F4F0] hover:bg-[#EAE8E1] p-4 rounded-[12px] transition-colors group">
                  <action.icon className="w-4 h-4 text-black/60 group-hover:text-black" strokeWidth={2} />
                  <span className="text-[11px] font-semibold text-black/70 group-hover:text-black">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 12. SUBSCRIPTION & VERIFICATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1C1A17] text-white rounded-[18px] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(28,26,23,0.15)]">
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-2">Subscription</h4>
            <div className="flex items-end gap-3 mb-1">
              <span className="font-serif text-[32px] font-medium leading-none">Pro Plan</span>
              <span className="text-[12px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full mb-1">Active</span>
            </div>
            <p className="text-[13px] text-white/60 mt-2">Next billing date: Nov 24, 2026</p>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-auto">
            <button className="bg-white text-black px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-gray-100 transition-colors text-center w-full">Manage Subscription</button>
            <button className="text-[13px] font-medium text-white/50 hover:text-white transition-colors text-center">View Plan Details</button>
          </div>
        </div>

        <div className="bg-white rounded-[18px] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#F9F6ED] rounded-full flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
              <Verified className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase mb-2">Verification</h4>
              <div className="font-serif text-[24px] font-medium leading-tight mb-1 text-[#1C1A17]">Verified Partner</div>
              <p className="text-[13px] text-green-600 font-medium">Your verification is approved.</p>
            </div>
          </div>
          <button className="bg-[#F5F4F0] text-black border border-black/5 px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-[#EAE8E1] transition-colors w-full lg:w-auto">
            View Details
          </button>
        </div>
      </div>

    </motion.div>
  );
}
