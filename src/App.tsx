export default function App() {
  return (
    <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center text-white p-6">
      <div className="border border-hud/40 bg-gunmetal/50 p-8 rounded-lg max-w-md text-center shadow-[0_0_25px_rgba(0,217,255,0.25)] backdrop-blur-sm">
        <h1 className="text-hud text-3xl font-bold font-display tracking-widest uppercase mb-4">
          OPTIMUS PRIME
        </h1>
        <p className="text-gray-300 font-body mb-6 text-sm">
          AUTOBOT SYSTEMS INITIALIZED. CORE SYSTEMS ONLINE.
        </p>
        <div className="inline-block px-4 py-2 border border-oxblood bg-oxblood/20 text-red-400 text-xs font-mono tracking-wider rounded">
          SYSTEM STATUS: OPTIMAL
        </div>
      </div>
    </div>
  );
}