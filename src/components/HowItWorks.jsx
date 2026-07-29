export default function HowItWorks() {
  const steps = ["Skill Gap Analysis", "Customized Training Plan", "Flexible Program Delivery"];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How We Deliver Results</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 border-l-4 border-blue-600 shadow-md rounded-r-lg">
              <div className="text-blue-600 font-bold mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-bold text-slate-900">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}