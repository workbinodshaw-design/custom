"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Plan = "FREE" | "PRO" | "PRO_VERIFIED";
export type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Closed";
export type AppointmentStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";

export interface Lead {
  id: string;
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
  updateLeadStatus: (id: string, status: LeadStatus) => void;
  addLeadNote: (id: string, note: string) => void;
  updateAppointmentStatus: (id: string, status: AppointmentStatus) => void;
  addAppointment: (apt: Appointment) => void;
  toggleService: (id: string) => void;
  updatePlan: (plan: Plan) => void;
  markNotificationsRead: () => void;
}

const initialState: VendorState = {
  vendorName: "Elegant Stitch Tailors",
  plan: "PRO_VERIFIED",
  verificationStatus: "Approved",
  leads: [
    { id: "L-101", name: "Michael Reynolds", service: "Bespoke Suit", location: "New York, NY", date: "Oct 15", status: "New", budget: "$1,500+", message: "Looking for a navy bespoke suit for an upcoming gala.", email: "michael.r@example.com", phone: "+1 (555) 123-4567", notes: [] },
    { id: "L-102", name: "Sarah Lin", service: "Wedding Suit", location: "Brooklyn, NY", date: "Oct 14", status: "Contacted", budget: "$2,000+", message: "Need a wedding tuxedo for December.", email: "slin@example.com", phone: "+1 (555) 987-6543", notes: ["Called her today, waiting for callback."] },
    { id: "L-103", name: "David Kim", service: "Shirts", location: "Manhattan, NY", date: "Oct 12", status: "Qualified", budget: "$800", message: "Need 5 custom dress shirts for work.", email: "dkim@example.com", phone: "+1 (555) 456-7890", notes: [] },
    { id: "L-104", name: "Emily Parker", service: "Custom Jacket", location: "Queens, NY", date: "Oct 10", status: "Replied" as LeadStatus, budget: "$900", message: "Can you do a velvet smoking jacket?", email: "eparker@example.com", phone: "+1 (555) 234-5678", notes: [] }
  ],
  appointments: [
    { id: "A-201", customer: "Michael Reynolds", type: "Studio Consultation", date: "Today", time: "10:30 AM", location: "Studio", status: "Confirmed", notes: "First consultation" },
    { id: "A-202", customer: "Sarah Lin", type: "Mobile Fitting", date: "Tomorrow", time: "2:00 PM", location: "123 Brooklyn Ave", status: "Pending", notes: "Bring fabric swatches" }
  ],
  services: [
    { id: "S-1", name: "Custom Suit", category: "Suit", startingPrice: 1200, enabled: true },
    { id: "S-2", name: "Bespoke Suit", category: "Suit", startingPrice: 2500, enabled: true },
    { id: "S-3", name: "Wedding Suit", category: "Suit", startingPrice: 1800, enabled: true },
    { id: "S-4", name: "Shirts", category: "Separates", startingPrice: 150, enabled: true },
    { id: "S-5", name: "Virtual Consultation", category: "Consultation", startingPrice: 0, enabled: false }
  ],
  notifications: [
    { id: 1, type: "lead", message: "New lead received from Michael Reynolds", read: false },
    { id: 2, type: "appointment", message: "Sarah Lin requested a Mobile Fitting", read: false },
    { id: 3, type: "system", message: "Your verification application was approved.", read: true }
  ]
};

const VendorContext = createContext<VendorContextType | undefined>(undefined);

export function VendorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VendorState>(initialState);

  const updateLeadStatus = (id: string, status: LeadStatus) => {
    setState(prev => ({
      ...prev,
      leads: prev.leads.map(l => l.id === id ? { ...l, status } : l)
    }));
  };

  const addLeadNote = (id: string, note: string) => {
    setState(prev => ({
      ...prev,
      leads: prev.leads.map(l => l.id === id ? { ...l, notes: [...l.notes, note] } : l)
    }));
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
    <VendorContext.Provider value={{ state, updateLeadStatus, addLeadNote, updateAppointmentStatus, addAppointment, toggleService, updatePlan, markNotificationsRead }}>
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
