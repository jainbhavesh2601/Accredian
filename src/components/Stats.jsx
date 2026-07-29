export default function Stats() {
  const stats = [
    { number: "10K+", label: "Professionals Trained For Exceptional Career Success" },
    { number: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
    { number: "5K+", label: "Active Learners Engaged In Dynamic Courses" }
  ];

  return (
    <section id="stats" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our <span className="text-blue-600">Track Record</span></h2>
        <p className="text-slate-500 mb-12">The Numbers Behind Our Success</p>
        
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center pt-8 md:pt-0 px-4">
              <div className="text-blue-600 font-bold text-4xl mb-4 bg-blue-50 px-6 py-2 rounded-full border border-blue-100">
                {stat.number}
              </div>
              <p className="text-slate-700 text-sm font-medium leading-relaxed max-w-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}