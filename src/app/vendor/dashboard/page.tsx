"use client";

import { motion } from "framer-motion";
import { Users, Eye, CalendarCheck, TrendingUp, ArrowUpRight, ArrowRight } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { label: "Profile Views (30d)", value: "1,248", trend: "+12%", icon: Eye },
    { label: "New Leads", value: "24", trend: "+4", icon: Users },
    { label: "Appointments Booked", value: "8", trend: "+2", icon: CalendarCheck },
    { label: "Conversion Rate", value: "18.5%", trend: "+1.2%", icon: TrendingUp },
  ];

  const recentLeads = [
    { name: "Michael Chang", service: "Bespoke Suit", date: "Today, 10:42 AM", status: "New" },
    { name: "David Reynolds", service: "Wedding Tuxedo", date: "Yesterday", status: "Contacted" },
    { name: "James Wilson", service: "Made-to-Measure", date: "Sep 18", status: "Appointment Set" },
    { name: "Oliver Smith", service: "Alterations", date: "Sep 16", status: "Closed" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-serif text-[32px] font-medium tracking-tight mb-2">Welcome back, Antonio.</h1>
          <p className="text-[14px] text-black/60">Here is what is happening with your tailoring business today.</p>
        </div>
        <button className="bg-[#1C1A17] text-white px-6 py-2.5 rounded-full text-[13px] font-medium flex items-center gap-2 hover:bg-black transition-all shadow-sm">
          Update Calendar
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[20px] p-6 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-[#F5F4F0] rounded-full flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-black/70" strokeWidth={2} />
              </div>
              <div className="flex items-center gap-1 text-[12px] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3" strokeWidth={3} /> {stat.trend}
              </div>
            </div>
            <div className="text-[32px] font-serif font-medium leading-none mb-1">{stat.value}</div>
            <div className="text-[13px] font-medium text-black/50">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Split Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-[24px] border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-[22px] font-medium">Recent Leads</h3>
            <button className="text-[13px] font-bold text-black/50 hover:text-black flex items-center gap-1 transition-colors">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="pb-4 text-[12px] font-bold tracking-widest text-black/40 uppercase">Client</th>
                  <th className="pb-4 text-[12px] font-bold tracking-widest text-black/40 uppercase">Service</th>
                  <th className="pb-4 text-[12px] font-bold tracking-widest text-black/40 uppercase">Date</th>
                  <th className="pb-4 text-[12px] font-bold tracking-widest text-black/40 uppercase text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, i) => (
                  <tr key={i} className="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors cursor-pointer">
                    <td className="py-4 text-[14px] font-semibold">{lead.name}</td>
                    <td className="py-4 text-[14px] text-black/70">{lead.service}</td>
                    <td className="py-4 text-[14px] text-black/50">{lead.date}</td>
                    <td className="py-4 text-right">
                      <span className={`inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full ${
                        lead.status === 'New' ? 'bg-blue-50 text-blue-600' :
                        lead.status === 'Contacted' ? 'bg-orange-50 text-orange-600' :
                        lead.status === 'Appointment Set' ? 'bg-green-50 text-green-600' :
                        'bg-gray-100 text-gray-500'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Center */}
        <div className="bg-white rounded-[24px] border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-8">
          <h3 className="font-serif text-[22px] font-medium mb-6">Action Center</h3>
          
          <div className="space-y-4">
            <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-[16px] cursor-pointer hover:bg-blue-50 transition-colors">
              <h4 className="text-[14px] font-bold text-blue-900 mb-1">New Message from David</h4>
              <p className="text-[13px] text-blue-700/70 mb-3">"Hi Antonio, can we move our fitting to 3 PM?"</p>
              <span className="text-[12px] font-bold text-blue-600">Reply →</span>
            </div>

            <div className="p-4 border border-black/5 rounded-[16px] cursor-pointer hover:bg-black/5 transition-colors">
              <h4 className="text-[14px] font-bold mb-1">Complete your profile</h4>
              <p className="text-[13px] text-black/50 mb-3">Add fabric options to attract more bespoke clients.</p>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-[#1C1A17]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </motion.div>
  );
}
