"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useVendor } from "@/lib/mock/VendorContext";

export default function MessagesPage() {
  const { state } = useVendor();
  const [selectedChat, setSelectedChat] = useState(state.leads[0]);
  const [msg, setMsg] = useState("");
  const [chatLog, setChatLog] = useState<{sender: string, text: string}[]>([
    { sender: "customer", text: state.leads[0]?.message || "Hello, I am interested in a suit." },
    { sender: "vendor", text: "Hi there! I would be happy to assist you." }
  ]);

  const handleSend = () => {
    if(!msg.trim()) return;
    setChatLog([...chatLog, { sender: "vendor", text: msg }]);
    setMsg("");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-140px)] flex flex-col">
      <div className="mb-4">
        <h1 className="font-serif text-[28px] font-medium tracking-tight mb-1 text-[#111111]">Messages</h1>
      </div>
      
      <div className="flex-1 bg-white rounded-[16px] border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex overflow-hidden">
        {/* Chat List */}
        <div className="w-[300px] border-r border-black/5 flex flex-col hidden md:flex">
          <div className="p-4 border-b border-black/5 bg-[#FAFAF9]">
            <input type="text" placeholder="Search messages..." className="w-full bg-white border border-[#EAEAEA] rounded-[8px] px-3 py-2 text-[12px] outline-none focus:border-black/20" />
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {state.leads.map(lead => (
              <div 
                key={lead.id} 
                onClick={() => setSelectedChat(lead)}
                className={`p-4 border-b border-black/5 cursor-pointer transition-colors ${selectedChat?.id === lead.id ? 'bg-[#F5F5F5]' : 'hover:bg-[#FAFAF9]'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-[13px] text-[#111111]">{lead.name}</span>
                  <span className="text-[10px] text-[#888888]">{lead.date}</span>
                </div>
                <p className="text-[12px] text-[#666666] truncate">{lead.message}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-[#FAFAF9]">
          <div className="h-[60px] border-b border-black/5 flex items-center px-6 bg-white shrink-0">
            <span className="font-semibold text-[14px] text-[#111111]">{selectedChat?.name}</span>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {chatLog.map((chat, i) => (
              <div key={i} className={`flex ${chat.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] p-3 rounded-[12px] text-[13px] ${chat.sender === 'vendor' ? 'bg-[#111111] text-white rounded-br-none' : 'bg-white border border-[#EAEAEA] text-[#111111] rounded-bl-none'}`}>
                  {chat.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-white border-t border-black/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={msg}
                onChange={e => setMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                className="flex-1 bg-[#F5F5F5] border border-transparent rounded-[8px] px-4 py-2.5 text-[13px] outline-none focus:bg-white focus:border-black/20"
              />
              <button onClick={handleSend} className="bg-[#111111] text-[#E5C158] px-5 py-2.5 rounded-[8px] font-bold hover:bg-black transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
