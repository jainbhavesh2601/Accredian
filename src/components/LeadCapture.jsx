"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function LeadCapture({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", domain: "" });
  const [status, setStatus] = useState("idle");

  if (!isOpen) return null; // Don't render if modal is closed

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => { onClose(); setStatus("idle"); }, 2000); // Close after success
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-700">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Enquire Now</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" required placeholder="Enter Name"
              className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-sm placeholder-slate-400"
              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input 
              type="email" required placeholder="Enter Email"
              className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-sm placeholder-slate-400"
              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input 
              type="text" required placeholder="Enter company name"
              className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-sm placeholder-slate-400"
              value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <select 
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 outline-none text-sm text-slate-600"
              value={formData.domain} onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
            >
              <option value="" disabled>Select Domain</option>
              <option value="IT">IT / Software</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Other">Other</option>
            </select>

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 disabled:opacity-70 transition mt-2"
            >
              {status === "loading" ? "Submitting..." : status === "success" ? "Submitted Successfully!" : "Submit"}
            </button>
            {status === "error" && <p className="text-red-500 text-center text-sm mt-2">Error submitting. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}