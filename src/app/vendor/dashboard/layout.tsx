"use client";

import { LayoutDashboard, Users, Calendar, MessageSquare, BarChart2, User, Briefcase, Image as ImageIcon, MapPin, CreditCard, ShieldCheck, Settings, LogOut, Bell, Search, HelpCircle, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VendorProvider, useVendor } from "@/lib/mock/VendorContext";
import { useState } from "react";

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { state, markNotificationsRead } = useVendor();
  const [showNotifications, setShowNotifications] = useState(false);

  const mainNav = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/vendor/dashboard" },
    { name: "Leads", icon: Users, href: "/vendor/dashboard/leads" },
    { name: "Appointments", icon: Calendar, href: "/vendor/dashboard/appointments" },
    { name: "Messages", icon: MessageSquare, href: "/vendor/dashboard/messages" },
    { name: "Analytics", icon: BarChart2, href: "/vendor/dashboard/analytics" },
  ];

  const businessNav = [
    { name: "My Profile", icon: User, href: "/vendor/dashboard/profile/info" },
    { name: "Services", icon: Briefcase, href: "/vendor/dashboard/profile/services" },
    { name: "Portfolio", icon: ImageIcon, href: "/vendor/dashboard/profile/portfolio" },
    { name: "Location & Area", icon: MapPin, href: "/vendor/dashboard/profile/location" },
  ];

  const accountNav = [
    { name: "Subscription", icon: CreditCard, href: "/vendor/dashboard/subscription" },
    { name: "Verification", icon: ShieldCheck, href: "/vendor/dashboard/verification" },
    { name: "Settings", icon: Settings, href: "/vendor/dashboard/settings" },
  ];

  const unreadCount = state.notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-[#FDFDFC] flex font-sans text-[#111111] selection:bg-[#111111] selection:text-white">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-black/5 flex-col hidden lg:flex sticky top-0 h-screen overflow-y-auto custom-scrollbar shadow-[2px_0_15px_rgba(0,0,0,0.01)]">
        <div className="p-6 sticky top-0 bg-white z-10">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group w-max">
              <div className="w-8 h-8 bg-[#111111] text-white flex items-center justify-center font-serif font-bold text-xl rounded-md shadow-sm">T</div>
              <div className="flex flex-col">
                <span className="font-serif text-[16px] font-medium tracking-tight leading-none text-[#111111]">TailorFind</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#A67C00] uppercase mt-1">Vendor</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 pb-6 space-y-8 mt-2">
          
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#888888] uppercase mb-3 px-3">Main</h4>
            <div className="space-y-0.5">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <div className={`flex items-center gap-3 px-3 py-2 rounded-[8px] font-medium text-[13px] transition-all duration-200 ${isActive ? 'bg-[#111111] text-[#E5C158] shadow-[0_2px_8px_rgba(17,17,17,0.1)]' : 'text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5]'}`}>
                      <item.icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#888888] uppercase mb-3 px-3">Business</h4>
            <div className="space-y-0.5">
              {businessNav.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link key={item.name} href={item.href}>
                    <div className={`flex items-center gap-3 px-3 py-2 rounded-[8px] font-medium text-[13px] transition-all duration-200 ${isActive ? 'bg-[#111111] text-[#E5C158] shadow-[0_2px_8px_rgba(17,17,17,0.1)]' : 'text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5]'}`}>
                      <item.icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#888888] uppercase mb-3 px-3">Account</h4>
            <div className="space-y-0.5">
              {accountNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <div className={`flex items-center gap-3 px-3 py-2 rounded-[8px] font-medium text-[13px] transition-all duration-200 ${isActive ? 'bg-[#111111] text-[#E5C158] shadow-[0_2px_8px_rgba(17,17,17,0.1)]' : 'text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5]'}`}>
                      <item.icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </nav>

        <div className="p-4 border-t border-black/5 mt-auto bg-[#FAFAF9]/50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-[8px] font-medium text-[13px] text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors cursor-pointer mb-1">
            <HelpCircle className="w-4 h-4" strokeWidth={1.5} /> Help & Support
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-[8px] font-medium text-[13px] text-red-500/80 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" strokeWidth={1.5} /> Sign Out
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-[68px] bg-white border-b border-black/5 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-40 shrink-0 shadow-[0_2px_15px_rgba(0,0,0,0.01)]">
          
          <div className="flex-1 max-w-[480px]">
            <div className="relative group hidden md:block">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-[#111111] transition-colors" />
              <input 
                type="text" 
                placeholder="Search leads, customers, or anything..." 
                className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] pl-10 pr-4 py-2 text-[13px] font-medium focus:outline-none focus:bg-white focus:border-black/10 focus:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all placeholder:text-[#888888] text-[#111111]"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            
            {/* Notification Bell */}
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 rounded-full hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                <Bell className="w-5 h-5 text-[#444444]" strokeWidth={1.5} />
                {unreadCount > 0 && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                )}
              </button>
              
              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-[320px] bg-white rounded-[12px] border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2 z-50">
                  <div className="px-4 py-2 border-b border-black/5 flex justify-between items-center">
                    <span className="font-semibold text-[13px]">Notifications</span>
                    <button onClick={markNotificationsRead} className="text-[11px] text-[#888888] hover:text-[#111111]">Mark all read</button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {state.notifications.map(n => (
                      <div key={n.id} className={`px-4 py-3 hover:bg-[#F5F5F5] transition-colors cursor-pointer border-b border-black/5 last:border-0 ${!n.read ? 'bg-[#FAFAF9]' : ''}`}>
                        <div className="flex gap-3">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${!n.read ? 'bg-[#A67C00]' : 'bg-transparent'}`}></div>
                          <div>
                            <p className="text-[13px] text-[#111111]">{n.message}</p>
                            <p className="text-[11px] text-[#888888] mt-1 capitalize">{n.type}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="h-5 w-[1px] bg-[#EAEAEA] hidden md:block"></div>
            
            {/* Profile Dropdown */}
            <div className="flex items-center gap-3 cursor-pointer group hover:bg-[#F5F5F5] p-1.5 pr-2 rounded-[8px] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FAFAF9] overflow-hidden border border-black/5 shrink-0">
                <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-[13px] font-semibold leading-tight text-[#111111]">{state.vendorName}</span>
                <span className="text-[11px] text-[#888888] font-medium">Vendor Account</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#888888] hidden md:block" strokeWidth={2} />
            </div>

          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-10 max-w-[1200px] w-full mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <VendorProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </VendorProvider>
  );
}
