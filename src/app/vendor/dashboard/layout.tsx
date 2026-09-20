"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, Calendar, User, Settings, LogOut, Bell, Search, MessageSquare, BarChart2, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/vendor/dashboard" },
    { name: "Leads", icon: Users, href: "/vendor/dashboard/leads" },
    { name: "Appointments", icon: Calendar, href: "/vendor/dashboard/appointments" },
    { name: "Messages", icon: MessageSquare, href: "/vendor/dashboard/messages" },
    { name: "Analytics", icon: BarChart2, href: "/vendor/dashboard/analytics" },
  ];

  const profileItems = [
    { name: "Business Info", href: "/vendor/dashboard/profile/info" },
    { name: "Services", href: "/vendor/dashboard/profile/services" },
    { name: "Portfolio", href: "/vendor/dashboard/profile/portfolio" },
    { name: "Location & Area", href: "/vendor/dashboard/profile/location" },
  ];

  const settingItems = [
    { name: "Subscription", href: "/vendor/dashboard/subscription" },
    { name: "Verification", href: "/vendor/dashboard/verification" },
    { name: "Settings", href: "/vendor/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex font-sans text-[#1C1A17] selection:bg-[#1C1A17] selection:text-white">
      
      {/* Sidebar - Compact and Elegant */}
      <aside className="w-[260px] bg-white border-r border-black/5 flex-col hidden lg:flex sticky top-0 h-screen overflow-y-auto custom-scrollbar">
        <div className="p-6 pb-8 sticky top-0 bg-white z-10">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group w-max">
              <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-md shadow-sm">T</div>
              <div className="flex flex-col">
                <span className="font-serif text-[18px] font-medium tracking-tight leading-none">TailorFind</span>
                <span className="text-[9px] font-bold tracking-widest text-[#B8860B] uppercase mt-1">Vendor</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 pb-6">
          <div className="space-y-1 mb-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <div className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] font-medium text-[13.5px] transition-all duration-200 ${isActive ? 'bg-[#1C1A17] text-[#D4AF37] shadow-sm' : 'text-black/60 hover:bg-black/5 hover:text-black'}`}>
                    <item.icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mb-8">
            <h4 className="text-[10px] font-bold tracking-wider text-black/40 uppercase mb-2 px-3">My Profile</h4>
            <div className="space-y-1">
              {profileItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <div className={`flex items-center gap-3 px-3 py-2 rounded-[10px] font-medium text-[13px] transition-all duration-200 ${isActive ? 'bg-[#1C1A17] text-[#D4AF37]' : 'text-black/60 hover:text-black hover:bg-black/5'}`}>
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-wider text-black/40 uppercase mb-2 px-3">Account</h4>
            <div className="space-y-1">
              {settingItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <div className={`flex items-center gap-3 px-3 py-2 rounded-[10px] font-medium text-[13px] transition-all duration-200 ${isActive ? 'bg-[#1C1A17] text-[#D4AF37]' : 'text-black/60 hover:text-black hover:bg-black/5'}`}>
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-black/5 mt-auto sticky bottom-0 bg-white">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] font-medium text-[13px] text-black/50 hover:bg-black/5 hover:text-black transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" strokeWidth={1.5} />
            Sign Out
          </div>
          <div className="px-3 mt-4 text-[11px] text-black/40 text-center hover:text-black cursor-pointer transition-colors">
            Help / Contact Support
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-[#FAFAF9]">
        
        {/* Top Header */}
        <header className="h-[72px] bg-white border-b border-black/5 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-40 shrink-0">
          
          <div className="flex-1 max-w-[400px]">
            <div className="relative group hidden md:block">
              <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-black transition-colors" />
              <input 
                type="text" 
                placeholder="Search leads, customers, or anything..." 
                className="w-full bg-black/5 border border-transparent rounded-full pl-10 pr-4 py-2 text-[13px] focus:outline-none focus:bg-white focus:border-black/20 focus:ring-4 focus:ring-black/5 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="relative p-2 rounded-full hover:bg-black/5 transition-colors cursor-pointer">
              <Bell className="w-5 h-5 text-black/60" strokeWidth={1.5} />
              <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            </button>
            
            <div className="h-6 w-[1px] bg-black/10 hidden md:block"></div>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-gray-100 overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-[13px] font-semibold leading-tight group-hover:text-black/70 transition-colors">Antonio's Bespoke</span>
                <span className="text-[11px] text-black/40 font-medium">Vendor Account</span>
              </div>
              <ChevronDown className="w-4 h-4 text-black/40 hidden md:block" strokeWidth={2} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-10 max-w-[1400px] w-full mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}
