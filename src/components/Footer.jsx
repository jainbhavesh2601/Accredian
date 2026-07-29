export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold text-xl text-white">Accredian<span className="text-blue-500">Enterprise</span></div>
        <p className="text-sm">© {new Date().getFullYear()} Accredian. All rights reserved.</p>
      </div>
    </footer>
  );
}