"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, Clock, Search } from "lucide-react";

export default function AdminDashboard() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const res = await fetch("/api/vendors");
      const json = await res.json();
      if (json.success) {
        setVendors(json.data);
      }
    } catch (err) {
      console.error("Failed to fetch vendors", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "approved" ? "pending" : "approved";
    try {
      const res = await fetch(`/api/vendors/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setVendors(vendors.map(v => v.id === id ? { ...v, status: newStatus } : v));
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] p-6 lg:p-12 font-sans text-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold mb-2">Admin Panel</h1>
            <p className="text-sm text-black/60">Manage vendor approvals and platform data.</p>
          </div>
          <div className="bg-[#111111] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider">
            LOCAL DEV MODE
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
          <div className="p-6 border-b border-black/5 flex justify-between items-center bg-[#FAFAF9]">
            <h2 className="font-bold text-lg">Vendor Directory</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
              <input type="text" placeholder="Search vendors..." className="pl-9 pr-4 py-2 text-sm border border-black/10 rounded-lg outline-none focus:border-black/30 w-[250px]" />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-black/50 uppercase">Vendor</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-black/50 uppercase">Location</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-black/50 uppercase">Plan</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-black/50 uppercase">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-black/50 uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={5} className="px-6 py-8 text-center text-sm text-black/50">Loading vendors...</td></tr>
                ) : vendors.length === 0 ? (
                  <tr><td colSpan={5} className="px-6 py-8 text-center text-sm text-black/50">No vendors found.</td></tr>
                ) : (
                  vendors.map(vendor => (
                    <tr key={vendor.id} className="border-b border-black/5 hover:bg-[#FAFAF9]">
                      <td className="px-6 py-4">
                        <div className="font-bold text-sm">{vendor.name}</div>
                        <div className="text-xs text-black/50">{vendor.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-black/70">{vendor.location}</td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] font-bold px-2 py-1 bg-black/5 rounded-md uppercase tracking-wider">{vendor.plan || 'N/A'}</span>
                      </td>
                      <td className="px-6 py-4">
                        {vendor.status === 'approved' ? (
                          <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold bg-green-50 w-max px-2.5 py-1 rounded-md">
                            <CheckCircle className="w-3.5 h-3.5" /> Approved
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold bg-amber-50 w-max px-2.5 py-1 rounded-md">
                            <Clock className="w-3.5 h-3.5" /> Pending
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => toggleStatus(vendor.id, vendor.status)}
                          className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${vendor.status === 'approved' ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-black text-white hover:bg-black/80'}`}
                        >
                          {vendor.status === 'approved' ? 'Revoke' : 'Approve'}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
