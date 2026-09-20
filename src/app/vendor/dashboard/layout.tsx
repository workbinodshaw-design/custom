"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, Calendar, User, Settings, LogOut, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/vendor/dashboard" },
    { name: "Leads", icon: Users, href: "/vendor/dashboard/leads" },
    { name: "Appointments", icon: Calendar, href: "/vendor/dashboard/appointments" },
    { name: "Profile", icon: User, href: "/vendor/dashboard/profile" },
    { name: "Settings", icon: Settings, href: "/vendor/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0] flex font-sans text-[#1C1A17] selection:bg-[#1C1A17] selection:text-[#F5F4F0]">
      
      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-black/5 flex flex-col hidden lg:flex sticky top-0 h-screen">
        <div className="p-8 pb-10">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group w-max">
              <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm">T</div>
              <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={`flex items-center gap-3 px-4 py-3.5 rounded-[12px] font-medium text-[14px] transition-colors ${isActive ? 'bg-[#1C1A17] text-white' : 'text-black/60 hover:bg-black/5 hover:text-black'}`}>
                  <item.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-black/5">
          <div className="flex items-center gap-3 px-4 py-3.5 rounded-[12px] font-medium text-[14px] text-red-500/80 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer">
            <LogOut className="w-5 h-5" strokeWidth={1.5} />
            Sign Out
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen relative">
        {/* Top Header */}
        <header className="h-[88px] bg-white/80 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="font-serif text-[24px] font-medium tracking-tight">Dashboard</h2>
          
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer hover:opacity-70 transition">
              <Bell className="w-5 h-5 text-black/70" strokeWidth={1.5} />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="flex items-center gap-3 pl-6 border-l border-black/10">
              <div className="text-right hidden md:block">
                <div className="text-[13px] font-bold">Antonio's Bespoke</div>
                <div className="text-[11px] text-black/50 font-medium uppercase tracking-wider">Pro + Verified</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}
