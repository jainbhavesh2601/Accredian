import { Target, TrendingUp, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Tailored Learning Paths",
      desc: "Customized curriculum aligning with your company's specific data and AI goals.",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Actionable Analytics",
      desc: "Track employee progress and ROI with comprehensive administrative dashboards.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Expert Mentorship",
      desc: "1-on-1 guidance from top industry professionals from product-based companies.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section id="accredian-edge" className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Choose Accredian Enterprise?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}