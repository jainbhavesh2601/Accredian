"use client";
import { useState } from "react";

export default function Faqs() {
  // We use this state to remember which question index is currently open. 
  // 'null' means all of them are closed initially.
  const [openIndex, setOpenIndex] = useState(null);

  // Here we store both the questions and their answers
  const faqs = [
    {
      question: "What is the ideal team size for corporate training?",
      answer: "The ideal team size is typically between 10 to 50 professionals. This ensures personalized attention while maintaining a highly collaborative learning environment."
    },
    {
      question: "How do we get started with Accredian?",
      answer: "Get started by contacting us or requesting a quote on our website. Our team will guide you through the process, from a skill gap analysis to creating a custom program tailored to your needs."
    },
    {
      question: "Can the curriculum be customized?",
      answer: "Absolutely. All our enterprise programs are fully customizable. We work closely with your leadership team to align the curriculum with your specific business goals and tech stack."
    }
  ];

  const toggleFaq = (index) => {
    // If the user clicks the currently open question, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
              
              {/* The clickable Question bar */}
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-slate-50 transition text-left font-medium text-slate-800"
              >
                <span>{faq.question}</span>
                {/* Changes from + to - when open */}
                <span className="text-blue-600 text-2xl font-normal ml-4 leading-none">
                  {openIndex === i ? "-" : "+"}
                </span>
              </button>
              
              {/* The Answer Dropdown (Only renders if openIndex matches this question) */}
              {openIndex === i && (
                <div className="p-5 bg-slate-50 border-t border-slate-200 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}