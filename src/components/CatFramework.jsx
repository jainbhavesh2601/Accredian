export default function CatFramework() {
  return (
    <section id="cat" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">The <span className="text-blue-600">CAT</span> Framework</h2>
        <p className="text-slate-500 mb-12">Our Proven Approach to Learning Excellence</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {["Concept", "Application", "Tools"].map((title, i) => (
            <div key={i} className="p-8 border-2 border-blue-100 rounded-full aspect-square flex flex-col justify-center items-center hover:bg-blue-50 transition shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
              <p className="text-slate-600 text-sm">Foundational knowledge and practical implementation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}