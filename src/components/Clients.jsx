export default function Clients() {
  const clients = ["Reliance", "HCL", "IBM", "CRIF", "ADP", "BAYER"];

  return (
    <section id="clients" className="py-16 bg-slate-50 px-6 border-y border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Proven <span className="text-blue-600">Partnerships</span></h2>
        <p className="text-slate-500 mb-10">Successful Collaborations With The Industry's Best</p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-300">
          {clients.map((client, index) => (
            <div key={index} className="text-2xl font-bold text-slate-800 tracking-wider">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}