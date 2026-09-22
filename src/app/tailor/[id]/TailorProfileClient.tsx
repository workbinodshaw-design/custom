import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, CheckCircle, Calendar, Clock, ChevronLeft, Heart, Share, Scissors, Ruler, PenTool, X, Send } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Awwwards-style ease
const ease = [0.85, 0, 0.15, 1] as const;

export default function TailorProfile({ params }: { params: { id: string } }) {
  const [vendor, setVendor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`/api/vendors/${params.id}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setVendor(json.data);
        }
        setLoading(false);
      });
  }, [params.id]);

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vendorId: params.id,
          name: leadForm.name,
          email: leadForm.email,
          service: leadForm.service || (vendor.services && vendor.services[0]?.name) || "Custom Inquiry",
          budget: leadForm.budget || "Not Specified",
          message: leadForm.message
        })
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  if (loading) {
    return <div className="min-h-screen bg-[#F5F4F0] flex items-center justify-center font-serif text-[24px]">Loading Profile...</div>;
  }

  if (!vendor) {
    return <div className="min-h-screen bg-[#F5F4F0] flex items-center justify-center font-serif text-[24px]">Tailor Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#1C1A17] font-sans selection:bg-[#1C1A17] selection:text-[#F5F4F0]">
      <Navbar />
      
      {/* Consultation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-white rounded-[24px] w-full max-w-[500px] overflow-hidden shadow-2xl">
              {success ? (
                <div className="p-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#F5F4F0] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#111111]" />
                  </div>
                  <h3 className="font-serif text-[24px] font-medium text-[#111111] mb-2">Request Sent!</h3>
                  <p className="text-[14px] text-black/60">{vendor.name} has been notified and will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="px-6 py-4 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
                    <h3 className="font-serif text-[20px] font-medium text-[#111111]">Request Consultation</h3>
                    <button onClick={() => setShowModal(false)} className="p-2 bg-[#F5F5F5] rounded-full hover:bg-[#EAEAEA] transition-colors"><X className="w-4 h-4" /></button>
                  </div>
                  <form onSubmit={handleSubmitLead} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-bold text-[#888888] uppercase tracking-widest mb-1.5">Your Name</label>
                        <input required type="text" value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-4 py-3 text-[14px] outline-none focus:bg-white focus:border-black/20" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#888888] uppercase tracking-widest mb-1.5">Your Email</label>
                        <input required type="email" value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-4 py-3 text-[14px] outline-none focus:bg-white focus:border-black/20" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#888888] uppercase tracking-widest mb-1.5">Service</label>
                      <select value={leadForm.service} onChange={e => setLeadForm({...leadForm, service: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-4 py-3 text-[14px] outline-none focus:bg-white focus:border-black/20">
                        <option value="">Select a service...</option>
                        {vendor.services?.map((s: any) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#888888] uppercase tracking-widest mb-1.5">Message</label>
                      <textarea required value={leadForm.message} onChange={e => setLeadForm({...leadForm, message: e.target.value})} className="w-full bg-[#F5F5F5] border border-transparent rounded-[8px] px-4 py-3 text-[14px] outline-none focus:bg-white focus:border-black/20 min-h-[100px] resize-none" placeholder="What are you looking for?"></textarea>
                    </div>
                    <button disabled={submitting} type="submit" className="w-full bg-[#111111] text-white py-4 rounded-full text-[14px] font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 mt-2">
                      {submitting ? 'Sending...' : <><Send className="w-4 h-4" /> Send Request</>}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 lg:pt-32 pb-20">
        
        {/* Breadcrumb & Top Actions */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6 flex justify-between items-center relative z-20">
          <Link href="/">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease }} className="flex items-center gap-2 text-black/60 hover:text-black transition-colors font-medium text-[13px]">
              <ChevronLeft className="w-4 h-4" />
              Back to Search
            </motion.div>
          </Link>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease }} className="flex gap-4">
            <button className="flex items-center gap-2 text-[13px] font-semibold hover:opacity-70 transition-opacity">
              <Share className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 text-[13px] font-semibold hover:opacity-70 transition-opacity">
              <Heart className="w-4 h-4" /> Save
            </button>
          </motion.div>
        </div>

        {/* Hero Gallery */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
          <motion.div 
            initial={{ scale: 0.95, clipPath: "inset(10% 10% 10% 10% round 32px)" }} 
            animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0% round 32px)" }} 
            transition={{ duration: 1.4, ease }}
            className="w-full h-[400px] lg:h-[550px] relative overflow-hidden bg-black/10 lg:rounded-[32px]"
          >
            <img src={vendor.coverImage || "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1600"} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column - Details */}
          <div className="flex-1 lg:max-w-[700px]">
            
            {/* Profile Header */}
            <div className="relative -mt-24 lg:-mt-36 mb-12 z-20">
              <motion.div 
                initial={{ y: 40, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.3, ease }}
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-[#F5F4F0] overflow-hidden mb-6 bg-white shadow-xl"
              >
                <img src={vendor.profileImage || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400"} alt={vendor.name} className="w-full h-full object-cover" />
              </motion.div>
              
              <div className="overflow-hidden mb-2">
                <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease }} className="font-serif text-[40px] lg:text-[56px] font-medium tracking-tight leading-tight flex items-center gap-4">
                  {vendor.name}
                  {vendor.verified && <CheckCircle className="w-8 h-8 text-[#B8860B] fill-[#B8860B]/10" strokeWidth={2} />}
                </motion.h1>
              </div>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6, ease }} className="flex flex-wrap items-center gap-4 text-[14px] font-medium text-black/70">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {vendor.location || "Location not set"}</span>
                <span className="w-1 h-1 bg-black/20 rounded-full"></span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-black text-black" /> {vendor.rating || 5.0} ({vendor.reviews || 0} reviews)</span>
              </motion.div>
            </div>

            {/* About Section */}
            <section className="mb-16">
              <h3 className="font-serif text-[24px] mb-6">About the Tailor</h3>
              <p className="text-[15px] leading-[1.8] text-black/70">
                {vendor.about || `Welcome to the profile of ${vendor.name}. We provide exceptional tailoring services focused on craftsmanship and fit.`}
              </p>
            </section>

            <hr className="border-black/10 mb-16" />

            {/* Services */}
            <section className="mb-16">
              <h3 className="font-serif text-[24px] mb-8">Specialties & Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(vendor.services?.length ? vendor.services : [
                  { name: "Custom Tailoring", description: "Expert tailoring and alterations for all types of garments." },
                ]).map((service: any, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1, ease }} className="flex items-start gap-4 p-6 bg-white/50 border border-black/5 rounded-[20px]">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0">
                      <Scissors className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] mb-1">{service.name}</h4>
                      <p className="text-[13px] text-black/60 leading-relaxed">{service.description || "Premium service."}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            <hr className="border-black/10 mb-16" />

            {/* Portfolio Grid */}
            <section className="mb-16">
              <h3 className="font-serif text-[24px] mb-8 flex justify-between items-end">
                Recent Work
                <span className="font-sans text-[13px] font-bold tracking-wide uppercase text-black/40 cursor-pointer hover:text-black transition-colors">View All</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {(vendor.portfolio?.length ? vendor.portfolio : [
                  "https://images.unsplash.com/photo-1594938298598-70f70fc67120?q=80&w=600",
                  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=600"
                ]).map((img: string, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease }} className="aspect-[3/4] rounded-[16px] overflow-hidden group cursor-pointer">
                    <img loading="lazy" src={img} alt="Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column - Sticky Booking Widget */}
          <div className="w-full lg:w-[420px] relative">
            <div className="sticky top-32 bg-white rounded-[32px] p-8 lg:p-10 shadow-[0_24px_48px_rgba(0,0,0,0.06)] border border-black/5">
              
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-[12px] font-bold tracking-widest text-black/40 uppercase mb-2">Starting at</div>
                  <div className="font-serif text-[36px] leading-none">${vendor.services?.[0]?.startingPrice || 500}</div>
                </div>
                <div className="text-[13px] font-medium text-[#B8860B] bg-[#B8860B]/10 px-4 py-2 rounded-full">
                  Available this week
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="border border-black/10 rounded-[16px] p-4 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-black/50" />
                    <div className="text-[14px] font-semibold">Select Date</div>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-black/30 rotate-180" />
                </div>
                
                <div className="border border-black/10 rounded-[16px] p-4 flex items-center justify-between cursor-pointer hover:border-black/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-black/50" />
                    <div className="text-[14px] font-semibold">Select Time</div>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-black/30 rotate-180" />
                </div>
              </div>
              
              <button onClick={() => setShowModal(true)} className="w-full bg-[#1C1A17] text-white py-5 rounded-full text-[15px] font-bold hover:bg-black hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_8px_24px_rgba(28,26,23,0.2)] mb-4">
                Request Consultation
              </button>
              
              <p className="text-center text-[12px] text-black/40 font-medium">You won't be charged yet</p>
              
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
