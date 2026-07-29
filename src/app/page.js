"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import Features from "../components/Features";
import CatFramework from "../components/CatFramework";
import HowItWorks from "../components/HowItWorks";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import LeadCapture from "../components/LeadCapture";
import Footer from "../components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white scroll-smooth relative">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      {/* Page Content */}
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Stats />
      <Clients />
      <Features />
      <CatFramework />
      <HowItWorks />
      <Faqs />
      <Testimonials />
      
      {/* The Popup Modal */}
      <LeadCapture isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <Footer />
    </main>
  );
}