"use client";

import { LayoutDashboard, Users, Calendar, MessageSquare, BarChart2, User, Briefcase, Image as ImageIcon, MapPin, CreditCard, ShieldCheck, Settings, LogOut, Bell, Search, HelpCircle, ChevronDown, Check, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { VendorProvider, useVendor } from "@/lib/mock/VendorContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { state, loading, setVendorId, markNotificationsRead } = useVendor();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMore, setShowMobileMore] = useState(false);

  // Close mobile menus on route change
  useEffect(() => {
    setShowMobileMore(false);
    setShowNotifications(false);
  }, [pathname]);

  useEffect(() => {
    if (!loading && !state.vendorId) {
      router.push('/vendor/register');
    }
  }, [loading, state.vendorId, router]);

  const handleSignOut = () => {
    setVendorId(null);
    router.push('/vendor/register');
  };

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
    <div className="min-h-screen bg-[#FDFDFC] flex font-sans text-[#111111] selection:bg-[#111111] selection:text-white pb-[70px] lg:pb-0">
      
      {/* DESKTOP SIDEBAR */}
      <aside className="w-[260px] bg-white border-r border-black/5 flex-col hidden lg:flex sticky top-0 h-screen overflow-y-auto custom-scrollbar shadow-[2px_0_15px_rgba(0,0,0,0.01)] shrink-0">
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
          <div onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2 rounded-[8px] font-medium text-[13px] text-red-500/80 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" strokeWidth={1.5} /> Sign Out
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* MOBILE & DESKTOP HEADER */}
        <header className="h-[60px] lg:h-[68px] bg-white border-b border-black/5 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 shrink-0 shadow-[0_2px_15px_rgba(0,0,0,0.01)]">
          
          <div className="flex items-center gap-3 lg:hidden">
            <div className="w-8 h-8 bg-[#111111] text-white flex items-center justify-center font-serif font-bold text-[16px] rounded-md shadow-sm">T</div>
            <span className="font-serif text-[15px] font-medium text-[#111111]">TailorFind</span>
          </div>

          <div className="flex-1 max-w-[480px] hidden lg:block">
            <div className="relative group">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-[#111111] transition-colors" />
              <input 
                type="text" 
                placeholder="Search leads, customers, or anything..." 
                className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] pl-10 pr-4 py-2 text-[13px] font-medium focus:outline-none focus:bg-white focus:border-black/10 focus:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all placeholder:text-[#888888] text-[#111111]"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-5 ml-auto">
            
            <button className="p-2 lg:hidden text-[#111111]"><Search className="w-5 h-5" /></button>

            {/* Notification Bell */}
            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="relative p-2 rounded-full hover:bg-[#F5F5F5] transition-colors cursor-pointer">
                <Bell className="w-5 h-5 text-[#444444]" strokeWidth={1.5} />
                {unreadCount > 0 && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-[280px] lg:w-[320px] bg-white rounded-[12px] border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-2 z-50">
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
                    {state.notifications.length === 0 && (
                      <div className="px-4 py-6 text-center text-[#888888] text-[12px]">No notifications.</div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="h-5 w-[1px] bg-[#EAEAEA] hidden lg:block"></div>
            
            {/* Profile Dropdown */}
            <div className="flex items-center gap-3 cursor-pointer group hover:bg-[#F5F5F5] p-1 lg:p-1.5 lg:pr-2 rounded-[8px] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FAFAF9] overflow-hidden border border-black/5 shrink-0">
                <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-[13px] font-semibold leading-tight text-[#111111]">{state.vendorName}</span>
                <span className="text-[11px] text-[#888888] font-medium">Vendor Account</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#888888] hidden lg:block" strokeWidth={2} />
            </div>

          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 lg:p-8 max-w-[1200px] w-full mx-auto overflow-x-hidden">
          {children}
        </div>
      </main>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 z-40 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
        <div className="flex justify-around items-center h-[60px] px-2">
          
          <Link href="/vendor/dashboard" className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative">
            <LayoutDashboard className={`w-[22px] h-[22px] ${pathname === '/vendor/dashboard' ? 'text-[#111111]' : 'text-[#888888]'}`} strokeWidth={pathname === '/vendor/dashboard' ? 2 : 1.5} />
            <span className={`text-[10px] font-medium ${pathname === '/vendor/dashboard' ? 'text-[#111111]' : 'text-[#888888]'}`}>Home</span>
          </Link>
          
          <Link href="/vendor/dashboard/leads" className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative">
            <Users className={`w-[22px] h-[22px] ${pathname === '/vendor/dashboard/leads' ? 'text-[#111111]' : 'text-[#888888]'}`} strokeWidth={pathname === '/vendor/dashboard/leads' ? 2 : 1.5} />
            <span className={`text-[10px] font-medium ${pathname === '/vendor/dashboard/leads' ? 'text-[#111111]' : 'text-[#888888]'}`}>Leads</span>
          </Link>

          <Link href="/vendor/dashboard/appointments" className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative">
            <Calendar className={`w-[22px] h-[22px] ${pathname === '/vendor/dashboard/appointments' ? 'text-[#111111]' : 'text-[#888888]'}`} strokeWidth={pathname === '/vendor/dashboard/appointments' ? 2 : 1.5} />
            <span className={`text-[10px] font-medium ${pathname === '/vendor/dashboard/appointments' ? 'text-[#111111]' : 'text-[#888888]'}`}>Calendar</span>
          </Link>

          <Link href="/vendor/dashboard/profile/info" className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative">
            <User className={`w-[22px] h-[22px] ${pathname.startsWith('/vendor/dashboard/profile') ? 'text-[#111111]' : 'text-[#888888]'}`} strokeWidth={pathname.startsWith('/vendor/dashboard/profile') ? 2 : 1.5} />
            <span className={`text-[10px] font-medium ${pathname.startsWith('/vendor/dashboard/profile') ? 'text-[#111111]' : 'text-[#888888]'}`}>Profile</span>
          </Link>

          <button onClick={() => setShowMobileMore(true)} className="flex-1 flex flex-col items-center justify-center gap-1 h-full relative">
            <Menu className="w-[22px] h-[22px] text-[#888888]" strokeWidth={1.5} />
            <span className="text-[10px] font-medium text-[#888888]">More</span>
          </button>

        </div>
      </nav>

      {/* MOBILE MORE MENU (FULL SCREEN SHEET) */}
      <AnimatePresence>
        {showMobileMore && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: "100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#FAFAF9] flex flex-col lg:hidden"
          >
            <div className="h-[60px] flex items-center justify-between px-4 border-b border-black/5 bg-white shrink-0 pt-[env(safe-area-inset-top)]">
              <span className="font-serif text-[20px] font-medium text-[#111111]">Menu</span>
              <button onClick={() => setShowMobileMore(false)} className="p-2 bg-[#F5F5F5] rounded-full"><X className="w-5 h-5 text-[#111111]" /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8 pb-10">
              
              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-4 pl-2">Communication</h4>
                <div className="bg-white rounded-[12px] border border-black/5 overflow-hidden shadow-sm">
                  <Link href="/vendor/dashboard/messages" className="flex items-center gap-3 p-4 border-b border-black/5">
                    <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"><MessageSquare className="w-4 h-4 text-[#111111]" /></div>
                    <span className="font-medium text-[15px] text-[#111111]">Messages</span>
                  </Link>
                  <Link href="/vendor/dashboard/analytics" className="flex items-center gap-3 p-4">
                    <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"><BarChart2 className="w-4 h-4 text-[#111111]" /></div>
                    <span className="font-medium text-[15px] text-[#111111]">Analytics</span>
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-4 pl-2">Business</h4>
                <div className="bg-white rounded-[12px] border border-black/5 overflow-hidden shadow-sm">
                  {businessNav.map((item, i) => (
                    <Link key={item.name} href={item.href} className={`flex items-center gap-3 p-4 ${i !== businessNav.length -1 ? 'border-b border-black/5' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"><item.icon className="w-4 h-4 text-[#111111]" /></div>
                      <span className="font-medium text-[15px] text-[#111111]">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-[#888888] uppercase mb-4 pl-2">Account</h4>
                <div className="bg-white rounded-[12px] border border-black/5 overflow-hidden shadow-sm">
                  {accountNav.map((item, i) => (
                    <Link key={item.name} href={item.href} className={`flex items-center gap-3 p-4 ${i !== accountNav.length -1 ? 'border-b border-black/5' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center"><item.icon className="w-4 h-4 text-[#111111]" /></div>
                      <span className="font-medium text-[15px] text-[#111111]">{item.name}</span>
                    </Link>
                  ))}
                  <div onClick={handleSignOut} className="flex items-center gap-3 p-4 border-t border-black/5 text-red-600 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><LogOut className="w-4 h-4 text-red-500" /></div>
                    <span className="font-medium text-[15px]">Sign Out</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
