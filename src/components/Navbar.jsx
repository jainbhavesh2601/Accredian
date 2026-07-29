"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Stats", "Clients", "Accredian Edge", "CAT", "How It Works", "FAQs", "Testimonials"];

  return (
    <nav className="fixed w-full bg-white border-b border-slate-200 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl text-blue-600 tracking-tight">accredian<span className="text-slate-900 text-sm block -mt-1 font-normal">credentials that matter</span></div>
        
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {navLinks.map((link) => (
            <Link key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600">
              {link}
            </Link>
          ))}
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
           {navLinks.map((link) => (
            <Link key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsOpen(false)}>
              {link}
            </Link>
          ))}
          <button onClick={() => { setIsOpen(false); onOpenModal(); }} className="mt-2 py-2 bg-blue-600 text-white rounded-md font-medium">
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
}