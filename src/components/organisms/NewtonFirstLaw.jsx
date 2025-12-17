import { useState } from 'react';

export const NewtonFirstLaw = () => {
  const [isPulled, setIsPulled] = useState(false);
  const [speed, setSpeed] = useState('slow');

  const handlePull = () => {
    setIsPulled(true);
    setTimeout(() => setIsPulled(false), 1500);
  };

  return (
    <section id="law1-sim" className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
      <h3 className="text-2xl font-semibold text-slate-800">Simulasi Hukum I: Inersia</h3>
      <p className="text-sm text-slate-600 mt-2">
        Benda cenderung mempertahankan posisinya. Jika kertas ditarik <b>cepat</b>, koin akan tetap di tempat.
      </p>

      <div className="mt-8 flex flex-col items-center">
        <div className="relative w-full max-w-md h-40 bg-slate-100 rounded-lg flex flex-col justify-end items-center overflow-hidden border-b-4 border-slate-400">
          
          {/* Koin (Benda yang punya inersia) */}
          <div 
            className={`w-12 h-12 bg-yellow-500 rounded-full border-4 border-yellow-600 flex items-center justify-center font-bold text-yellow-900 z-10 transition-transform ${isPulled && speed === 'fast' ? 'duration-700' : 'duration-300'}`}
            style={{ transform: isPulled && speed === 'slow' ? 'translateX(150px)' : 'none' }}
          >
            $
          </div>

          {/* Kertas yang ditarik */}
          <div 
            className={`w-40 h-2 bg-indigo-400 rounded-t-md transition-transform ${speed === 'fast' ? 'duration-150' : 'duration-700'}`}
            style={{ transform: isPulled ? 'translateX(300px)' : 'none' }}
          ></div>
        </div>

        <div className="mt-6 flex gap-4 items-center">
          <select 
            className="px-3 py-2 border rounded shadow-sm text-sm"
            onChange={(e) => setSpeed(e.target.value)}
          >
            <option value="slow">Tarik Lambat (Ada Gaya Gesek)</option>
            <option value="fast">Tarik Cepat (Inersia Dominan)</option>
          </select>
          <button 
            onClick={handlePull}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 active:scale-95 transition-all"
          >
            Tarik Kertas!
          </button>
        </div>
      </div>
    </section>
  );
};