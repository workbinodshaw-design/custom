"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Plan = "FREE" | "PRO" | "PRO_VERIFIED";
export type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Closed";
export type AppointmentStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";

export interface Lead {
  id: string;
  vendorId?: string;
  name: string;
  service: string;
  location: string;
  date: string;
  status: LeadStatus;
  budget: string;
  message: string;
  email: string;
  phone: string;
  notes: string[];
}

export interface Appointment {
  id: string;
  customer: string;
  type: string;
  date: string;
  time: string;
  location: string;
  status: AppointmentStatus;
  notes: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  startingPrice: number;
  enabled: boolean;
}

interface VendorState {
  vendorId: string;
  vendorName: string;
  plan: Plan;
  verificationStatus: "Not Applied" | "Pending" | "Approved" | "Rejected";
  leads: Lead[];
  appointments: Appointment[];
  services: Service[];
  notifications: any[];
}

interface VendorContextType {
  state: VendorState;
  loading: boolean;
  updateLeadStatus: (id: string, status: LeadStatus) => void;
  addLeadNote: (id: string, note: string) => void;
  updateAppointmentStatus: (id: string, status: AppointmentStatus) => void;
  addAppointment: (apt: Appointment) => void;
  toggleService: (id: string) => void;
  updatePlan: (plan: Plan) => void;
  markNotificationsRead: () => void;
}

const defaultState: VendorState = {
  vendorId: "v1", // Hardcoded for this testing simulation to auto-login to the first vendor
  vendorName: "Loading...",
  plan: "FREE",
  verificationStatus: "Pending",
  leads: [],
  appointments: [],
  services: [],
  notifications: []
};

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export function VendorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VendorState>(defaultState);
  const [loading, setLoading] = useState(true);

  // Fetch from the Local API DB
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch specific vendor data
        const vendorRes = await fetch(`/api/vendors/${state.vendorId}`);
        const vendorJson = await vendorRes.json();
        
        // Fetch leads for this vendor
        const leadsRes = await fetch(`/api/leads?vendorId=${state.vendorId}`);
        const leadsJson = await leadsRes.json();

        if (vendorJson.success) {
          const vendor = vendorJson.data;
          setState(prev => ({
            ...prev,
            vendorName: vendor.name,
            plan: vendor.plan,
            verificationStatus: vendor.status === 'approved' ? 'Approved' : 'Pending',
            services: vendor.services || [],
            leads: leadsJson.success ? leadsJson.data : [],
            appointments: vendor.appointments || [],
            notifications: [
              { id: 1, type: "system", message: "Welcome back! Your dashboard is now synced with the local API.", read: false }
            ]
          }));
        }
      } catch (err) {
        console.error("Failed to fetch vendor data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [state.vendorId]);

  const updateLeadStatus = async (id: string, status: LeadStatus) => {
    setState(prev => ({
      ...prev,
      leads: prev.leads.map(l => l.id === id ? { ...l, status } : l)
    }));
    
    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addLeadNote = async (id: string, note: string) => {
    const lead = state.leads.find(l => l.id === id);
    if (!lead) return;
    
    const newNotes = [...(lead.notes || []), note];
    
    setState(prev => ({
      ...prev,
      leads: prev.leads.map(l => l.id === id ? { ...l, notes: newNotes } : l)
    }));

    try {
      await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: newNotes })
      });
    } catch (e) {
      console.error(e);
    }
  };

  const updateAppointmentStatus = (id: string, status: AppointmentStatus) => {
    setState(prev => ({
      ...prev,
      appointments: prev.appointments.map(a => a.id === id ? { ...a, status } : a)
    }));
  };

  const addAppointment = (apt: Appointment) => {
    setState(prev => ({ ...prev, appointments: [...prev.appointments, apt] }));
  };

  const toggleService = (id: string) => {
    setState(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s)
    }));
  };

  const updatePlan = (plan: Plan) => {
    setState(prev => ({ ...prev, plan }));
  };

  const markNotificationsRead = () => {
    setState(prev => ({
      ...prev,
      notifications: prev.notifications.map(n => ({ ...n, read: true }))
    }));
  };

  return (
    <VendorContext.Provider value={{ state, loading, updateLeadStatus, addLeadNote, updateAppointmentStatus, addAppointment, toggleService, updatePlan, markNotificationsRead }}>
      {children}
    </VendorContext.Provider>
  );
}

export function useVendor() {
  const context = useContext(VendorContext);
  if (context === undefined) {
    throw new Error("useVendor must be used within a VendorProvider");
  }
  return context;
}
