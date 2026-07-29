import { CheckCircle2 } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Next-Gen Expertise <br/> For Your <span className="text-blue-600">Enterprise</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
          Cultivate high-performance teams through expert learning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-700">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Tailored Solutions</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Industry Insights</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Expert Guidance</span>
        </div>

        <div className="pt-4 flex justify-center lg:justify-start">
          <button onClick={onOpenModal} className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Enquire Now
          </button>
        </div>
      </div>
      <div className="flex-1 w-full">
        {/* I removed the background color and shadow so the transparent image looks natural */}
        <div className="aspect-[4/3] flex items-center justify-center relative">
          <img 
            src="hero.png" 
            alt="Accredian Business Professionals" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}