"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useVendor } from "@/lib/mock/VendorContext";

export default function MessagesPage() {
  const { state } = useVendor();
  const [selectedChat, setSelectedChat] = useState<any>(state.leads.length > 0 ? state.leads[0] : null);
  const [msg, setMsg] = useState("");
  const [chatLog, setChatLog] = useState<{sender: string, text: string}[]>(
    state.leads.length > 0 ? [
      { sender: "customer", text: state.leads[0]?.message || "Hello, I am interested in a suit." },
      { sender: "vendor", text: "Hi there! I would be happy to assist you." }
    ] : []
  );
  const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');

  const handleSend = () => {
    if(!msg.trim()) return;
    setChatLog([...chatLog, { sender: "vendor", text: msg }]);
    setMsg("");
  };

  const selectChat = (lead: any) => {
    setSelectedChat(lead);
    setMobileView('chat');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-140px)] lg:h-[calc(100vh-140px)] flex flex-col -mx-4 lg:mx-0 lg:mt-0 -mt-4">
      
      {/* Mobile Header for List View */}
      <div className={`px-4 pt-4 pb-2 bg-[#FDFDFC] lg:bg-transparent ${mobileView === 'chat' ? 'hidden lg:block' : 'block'}`}>
        <h1 className="font-serif text-[24px] lg:text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Messages</h1>
      </div>
      
      <div className="flex-1 bg-white lg:rounded-[16px] lg:border border-black/5 lg:shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex overflow-hidden">
        
        {/* Chat List (Hidden on mobile if chat is open) */}
        <div className={`w-full lg:w-[320px] lg:border-r border-black/5 flex-col ${mobileView === 'chat' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="p-4 border-b border-black/5 bg-[#FAFAF9]">
            <input type="text" placeholder="Search messages..." className="w-full bg-white border border-[#EAEAEA] rounded-[8px] px-3 py-2 text-[13px] outline-none focus:border-black/20 shadow-sm" />
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
            {state.leads.length > 0 ? (
              state.leads.map(lead => (
                <div 
                  key={lead.id} 
                  onClick={() => selectChat(lead)}
                  className={`p-4 border-b border-black/5 cursor-pointer transition-colors active:bg-[#F5F5F5] ${selectedChat?.id === lead.id ? 'bg-[#FAFAF9] lg:bg-[#F5F5F5]' : 'hover:bg-[#FAFAF9]'}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-[14px] lg:text-[13px] text-[#111111]">{lead.name}</span>
                    <span className="text-[11px] lg:text-[10px] text-[#888888]">{lead.date}</span>
                  </div>
                  <p className="text-[13px] lg:text-[12px] text-[#666666] truncate">{lead.message}</p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-[#888888] text-[13px]">
                No messages yet.
              </div>
            )}
          </div>
        </div>
        
        {/* Chat Window (Hidden on mobile if list is open) */}
        <div className={`flex-1 flex-col bg-[#FAFAF9] ${mobileView === 'list' ? 'hidden lg:flex' : 'flex'}`}>
          {selectedChat ? (
            <>
              <div className="h-[60px] lg:h-[68px] border-b border-black/5 flex items-center px-4 lg:px-6 bg-white shrink-0 shadow-sm z-10">
                <button onClick={() => setMobileView('list')} className="lg:hidden p-2 -ml-2 mr-2 hover:bg-[#F5F5F5] rounded-full">
                  <ChevronLeft className="w-5 h-5 text-[#111111]" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#111111] text-[#E5C158] flex items-center justify-center font-serif text-[14px]">
                    {selectedChat.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[14px] text-[#111111] leading-tight">{selectedChat.name}</div>
                    <div className="text-[11px] text-[#666666]">Custom Suit Enquiry</div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-4">
                {chatLog.map((chat, i) => (
                  <div key={i} className={`flex ${chat.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] lg:max-w-[70%] p-3.5 rounded-[12px] text-[14px] lg:text-[13px] ${chat.sender === 'vendor' ? 'bg-[#111111] text-white rounded-br-none' : 'bg-white border border-[#EAEAEA] text-[#111111] rounded-bl-none shadow-[0_2px_4px_rgba(0,0,0,0.02)]'}`}>
                      {chat.text}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-white border-t border-black/5 pb-[calc(env(safe-area-inset-bottom)+16px)] lg:pb-4">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={msg}
                    onChange={e => setMsg(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..." 
                    className="flex-1 bg-[#F5F5F5] border border-transparent rounded-[8px] px-4 py-3 lg:py-2.5 text-[14px] lg:text-[13px] outline-none focus:bg-white focus:border-black/20"
                  />
                  <button onClick={handleSend} className="bg-[#111111] text-[#E5C158] px-5 py-3 lg:py-2.5 rounded-[8px] font-bold hover:bg-black transition-colors flex items-center justify-center">
                    <Send className="w-4 h-4 lg:w-4 lg:h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-[#888888] text-[13px]">
              Select a conversation to start messaging.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
