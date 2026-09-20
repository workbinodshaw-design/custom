"use client";

import { motion } from "framer-motion";
import { Users, Eye, MousePointerClick, Star, Calendar, ArrowRight, Verified, AlertCircle } from "lucide-react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useVendor, Lead, Appointment } from "@/lib/mock/VendorContext";

export default function DashboardOverview() {
  const { state } = useVendor();

  // Mock Analytics Data
  const performanceData = [
    { name: 'Oct 1', views: 120 }, { name: 'Oct 5', views: 132 },
    { name: 'Oct 10', views: 101 }, { name: 'Oct 15', views: 143 },
    { name: 'Oct 20', views: 190 }, { name: 'Oct 25', views: 160 },
    { name: 'Oct 30', views: 210 },
  ];

  const leadSourcesData = [
    { name: 'Website Search', value: 45, color: '#111111' },
    { name: 'Google', value: 25, color: '#444444' },
    { name: 'Direct Link', value: 15, color: '#888888' },
    { name: 'Social Media', value: 10, color: '#C2A34F' },
    { name: 'Other', value: 5, color: '#EAEAEA' },
  ];

  const kpis = [
    { label: "New Leads", value: state.leads.filter(l => l.status === 'New').length.toString(), trend: "This month", icon: Users },
    { label: "Appointments", value: state.appointments.length.toString(), trend: "Next 30 days", icon: Calendar },
    { label: "Profile Views", value: "1,245", trend: "Last 30 days", icon: Eye },
    { label: "Profile Clicks", value: "87", trend: "Last 30 days", icon: MousePointerClick },
    { label: "Customer Rating", value: "4.8", trend: "24 reviews", icon: Star },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-50 text-blue-700 border border-blue-100';
      case 'Contacted': return 'bg-amber-50 text-amber-700 border border-amber-100';
      case 'Qualified': return 'bg-purple-50 text-purple-700 border border-purple-100';
      case 'Converted': return 'bg-green-50 text-green-700 border border-green-100';
      case 'Closed': return 'bg-[#F5F5F5] text-[#666666] border border-[#EAEAEA]';
      case 'Confirmed': return 'bg-green-50 text-green-700 border border-green-100';
      case 'Pending': return 'bg-amber-50 text-amber-700 border border-amber-100';
      default: return 'bg-[#F5F5F5] text-[#666666] border border-[#EAEAEA]';
    }
  };

  const unreadLeads = state.leads.filter(l => l.status === 'New').length;
  const pendingApts = state.appointments.filter(a => a.status === 'Pending').length;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8 pb-10">
      
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-serif text-[28px] lg:text-[32px] font-medium tracking-tight mb-2 text-[#111111]">Good evening, {state.vendorName}.</h1>
          <p className="text-[14px] text-[#666666]">Here's what's happening with your business.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-white border border-black/5 px-4 py-2.5 rounded-[12px] shadow-sm flex items-center gap-3">
            <div>
              <span className="block text-[11px] font-bold tracking-widest text-[#111111] uppercase leading-none mb-1">{state.plan === 'PRO' || state.plan === 'PRO_VERIFIED' ? 'PRO PLAN' : 'FREE PLAN'}</span>
              <span className="block text-[11px] text-[#888888] font-medium leading-none">{state.plan === 'FREE' ? '$0/month' : '$99/month'}</span>
            </div>
            {state.plan === 'PRO_VERIFIED' && (
              <>
                <div className="w-[1px] h-6 bg-black/10 mx-1"></div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#A67C00] uppercase">
                  <Verified className="w-3.5 h-3.5" /> Verified
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* NEEDS YOUR ATTENTION */}
      {(unreadLeads > 0 || pendingApts > 0) && (
        <div className="bg-[#FAFAF9] border border-[#E5C158]/30 rounded-[16px] p-5 shadow-[0_2px_10px_rgba(229,193,88,0.05)]">
          <h3 className="text-[11px] font-bold tracking-widest text-[#A67C00] uppercase mb-4 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Needs Your Attention
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unreadLeads > 0 && (
              <div className="flex items-center justify-between bg-white border border-[#EAEAEA] p-3.5 rounded-[10px]">
                <span className="text-[13px] font-medium text-[#111111]">• {unreadLeads} new leads waiting for response</span>
                <Link href="/vendor/dashboard/leads"><span className="text-[12px] font-semibold text-[#A67C00] hover:text-[#111111] transition-colors cursor-pointer">View Leads</span></Link>
              </div>
            )}
            {pendingApts > 0 && (
              <div className="flex items-center justify-between bg-white border border-[#EAEAEA] p-3.5 rounded-[10px]">
                <span className="text-[13px] font-medium text-[#111111]">• {pendingApts} pending appointment requests</span>
                <Link href="/vendor/dashboard/appointments"><span className="text-[12px] font-semibold text-[#A67C00] hover:text-[#111111] transition-colors cursor-pointer">View Appointments</span></Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white rounded-[16px] p-5 border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[13px] font-medium text-[#666666]">{kpi.label}</span>
              <kpi.icon className="w-4 h-4 text-[#888888]" strokeWidth={1.5} />
            </div>
            <div className="font-serif text-[28px] font-medium leading-none text-[#111111] mb-2">{kpi.value}</div>
            <div className="text-[11px] font-medium text-[#888888]">{kpi.trend}</div>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-white rounded-[16px] p-6 border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-[18px] font-medium text-[#111111]">Profile Performance</h3>
            <select className="bg-[#F5F5F5] border-none text-[12px] font-medium py-1.5 px-3 rounded-[8px] outline-none cursor-pointer text-[#111111]">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAEAEA" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #EAEAEA', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px', fontWeight: 500 }}
                  itemStyle={{ color: '#111111' }}
                />
                <Line type="monotone" dataKey="views" stroke="#111111" strokeWidth={2} dot={{ r: 4, fill: '#111111' }} activeDot={{ r: 6, fill: '#A67C00', stroke: '#fff', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-[16px] p-6 border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="font-serif text-[18px] font-medium mb-6 text-[#111111]">Lead Sources</h3>
          <div className="flex-1 relative flex items-center justify-center min-h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leadSourcesData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={2} dataKey="value" stroke="none">
                  {leadSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {leadSourcesData.slice(0, 4).map((source, i) => (
              <div key={i} className="flex justify-between items-center text-[12px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: source.color }}></div>
                  <span className="text-[#666666]">{source.name}</span>
                </div>
                <span className="font-semibold text-[#111111]">{source.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONVERSION FUNNEL */}
      <div className="bg-white rounded-[16px] p-6 border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-x-auto">
        <h3 className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-6 text-center">Conversion Funnel</h3>
        <div className="flex items-center justify-center min-w-[600px]">
          {[
            { label: "Profile Views", value: "1,245" },
            { label: "Enquiries", value: "48" },
            { label: "Appointments", value: "18" },
            { label: "Converted", value: "9" }
          ].map((step, i, arr) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-8">
                <div className="text-[20px] font-serif font-medium mb-1 text-[#111111]">{step.value}</div>
                <div className="text-[11px] font-bold text-[#888888] uppercase tracking-widest">{step.label}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-16 border-t border-dashed border-[#CCCCCC] relative">
                  <ArrowRight className="w-3.5 h-3.5 text-[#CCCCCC] absolute -right-2 -top-1.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* RECENT LEADS */}
        <div className="lg:col-span-2 bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden">
          <div className="p-6 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
            <h3 className="font-serif text-[18px] font-medium text-[#111111]">Recent Leads</h3>
            <Link href="/vendor/dashboard/leads">
              <button className="text-[12px] font-semibold text-[#888888] hover:text-[#111111] flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Customer</th>
                  <th className="px-5 py-3 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Service</th>
                  <th className="px-5 py-3 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Location</th>
                  <th className="px-5 py-3 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Date</th>
                  <th className="px-5 py-3 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5">Status</th>
                  <th className="px-5 py-3 text-[10px] font-bold tracking-widest text-[#888888] uppercase border-b border-black/5 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {state.leads.slice(0, 4).map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#F5F5F5] transition-colors border-b border-black/5 last:border-0">
                    <td className="px-5 py-3.5 text-[13px] font-semibold text-[#111111]">{lead.name}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#666666]">{lead.service}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#888888]">{lead.location}</td>
                    <td className="px-5 py-3.5 text-[13px] text-[#888888]">{lead.date}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-[4px] ${getStatusStyle(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <Link href="/vendor/dashboard/leads">
                        <button className="text-[12px] font-semibold text-[#A67C00] hover:text-[#111111] transition-colors">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* UPCOMING APPOINTMENTS */}
        <div className="bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="p-6 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
            <h3 className="font-serif text-[18px] font-medium text-[#111111]">Upcoming Appointments</h3>
            <Link href="/vendor/dashboard/appointments">
              <button className="text-[12px] font-semibold text-[#888888] hover:text-[#111111] flex items-center gap-1 transition-colors">
                Calendar <ArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
          
          <div className="p-5 space-y-3">
            {state.appointments.slice(0, 3).map((apt) => (
              <div key={apt.id} className="flex gap-4 p-3 border border-[#EAEAEA] rounded-[10px] hover:border-[#CCCCCC] transition-colors cursor-pointer bg-white">
                <div className="flex flex-col items-center justify-center w-[44px] shrink-0 bg-[#F5F5F5] rounded-[6px] py-1.5">
                  <span className="text-[9px] font-bold text-[#888888] uppercase leading-none mb-1">{apt.date}</span>
                  <span className="text-[11px] font-bold text-[#111111] leading-none">{apt.time.split(' ')[0]}</span>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <span className="text-[13px] font-semibold text-[#111111] truncate">{apt.type}</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] text-[#666666] truncate">{apt.customer}</span>
                    <span className="w-1 h-1 rounded-full bg-[#EAEAEA] shrink-0"></span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider shrink-0 ${apt.status === 'Confirmed' ? 'text-green-600' : 'text-amber-600'}`}>{apt.status}</span>
                  </div>
                </div>
              </div>
            ))}
            {state.appointments.length === 0 && (
              <div className="text-center py-6">
                <p className="text-[13px] text-[#888888]">No upcoming appointments</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
