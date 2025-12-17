import { useState } from 'react';

export const NewtonThirdLaw = () => {
  const [force, setForce] = useState(0);
  const [isPushing, setIsPushing] = useState(false);

  // Nilai visual untuk animasi pergerakan
  const pushDistance = isPushing ? force * 2 : 0;

  return (
    <section id="law3" className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
      <h3 className="text-2xl font-semibold text-slate-800">Simulasi Hukum III: Aksi & Reaksi</h3>
      <p className="text-sm text-slate-600 mt-2">
        "Untuk setiap aksi, ada reaksi yang sama besar dan berlawanan arah."
      </p>

      <div className="mt-8 flex flex-col items-center">
        {/* Area Simulasi */}
        <div className="relative w-full h-48 bg-slate-50 rounded-xl border-b-4 border-slate-300 flex items-center justify-center overflow-hidden">
          
          {/* Objek A (Memberi Aksi) */}
          <div 
            className="w-16 h-16 bg-rose-500 rounded flex flex-col items-center justify-center text-white font-bold transition-transform duration-500 relative"
            style={{ transform: `translateX(-${pushDistance}px)` }}
          >
            A
            {/* Indikator Nominal Gaya Aksi */}
            {isPushing && force > 0 && (
              <div className="absolute -top-12 flex flex-col items-center">
                <span className="bg-rose-600 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">F-aksi: {force}N</span>
                <div className="w-0.5 h-2 bg-rose-600"></div>
              </div>
            )}
          </div>

          {/* Objek B (Memberi Reaksi) */}
          <div 
            className="w-16 h-16 bg-blue-500 rounded flex flex-col items-center justify-center text-white font-bold transition-transform duration-500 relative"
            style={{ transform: `translateX(${pushDistance}px)` }}
          >
            B
            {/* Indikator Nominal Gaya Reaksi */}
            {isPushing && force > 0 && (
              <div className="absolute -top-12 flex flex-col items-center">
                <span className="bg-blue-600 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">F-reaksi: {force}N</span>
                <div className="w-0.5 h-2 bg-blue-600"></div>
              </div>
            )}
          </div>

          {/* Panah Indikator Arah Gaya */}
          {isPushing && force > 0 && (
            <div className="absolute flex gap-12 text-slate-400 font-bold">
              <span>←</span>
              <span>→</span>
            </div>
          )}
        </div>

        {/* Kontrol Slider */}
        <div className="mt-8 w-full max-w-xs text-center">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-slate-700">Besar Gaya (N)</label>
            {/* Nominal N yang muncul di sebelah label saat toggle ditarik */}
            <span className="text-lg font-bold text-indigo-600">{force} N</span>
          </div>
          
          <input 
            type="range" 
            min="0" 
            max="50" 
            value={force} 
            onChange={(e) => setForce(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />

          <button 
            onMouseDown={() => setIsPushing(true)}
            onMouseUp={() => setIsPushing(false)}
            onMouseLeave={() => setIsPushing(false)}
            // Touch events untuk perangkat mobile
            onTouchStart={() => setIsPushing(true)}
            onTouchEnd={() => setIsPushing(false)}
            className={`mt-6 px-8 py-3 rounded-full font-semibold transition-all shadow-md active:scale-95 ${
              isPushing ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-800 text-white hover:bg-slate-700'
            }`}
          >
            {isPushing ? 'Mendorong...' : 'Klik & Tahan untuk Dorong'}
          </button>
          
          <p className="text-[11px] text-slate-400 mt-3 italic">
            *Semakin besar N, semakin jauh kedua benda terpental (Aksi = Reaksi).
          </p>
        </div>
      </div>
    </section>
  );
};