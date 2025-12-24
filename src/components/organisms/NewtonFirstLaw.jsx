import { useState } from 'react';
import { Button } from '../atoms/Button'; 
import { FormField } from '../molecules/FormField';

export const NewtonFirstLaw = () => {
  const [isPulled, setIsPulled] = useState(false);
  const [coinWeight, setCoinWeight] = useState(""); 
  const [pullForce, setPullForce] = useState("");   
  const [isCoinLeftBehind, setIsCoinLeftBehind] = useState(false);

  const handlePull = () => {
    // Logika Kondisi: 
    // Jika Gaya ditarik cukup besar (misal: > koinWeight), maka koin tertinggal (Inersia).
    // Jika Gaya kecil, koin ikut terseret kertas.
    const inertiaThreshold = coinWeight; 
    const staysPut = pullForce > inertiaThreshold;

    setIsCoinLeftBehind(staysPut);
    setIsPulled(true);

    // Reset posisi setelah animasi selesai (1.5 detik)
    setTimeout(() => {
      setIsPulled(false);
    }, 1500);
  };

  return (
    <section id="law1-sim" className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
      <h3 className="text-2xl font-semibold text-slate-800">Simulasi Hukum I: Inersia</h3>
      <p className="text-sm text-slate-600 mt-2">
        Hukum Inersia menyatakan benda cenderung mempertahankan posisinya. 
        <b> Jika Gaya {'>'} Berat Koin</b>, koin akan tetap di tempat karena percepatan yang sangat singkat.
      </p>
  
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        {/* Form untuk Inputan */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-slate-50">
          <div className="space-y-4">
            <FormField 
              label="Berat Koin (Gram)" 
              type="number" 
              value={coinWeight}
              onChange={(e) => setCoinWeight(Number(e.target.value))}
            />
            <FormField 
              label="Gaya Tarik (N)" 
              type="number" 
              value={pullForce}
              onChange={(e) => setPullForce(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Visualisasi Simulasi */}
        <div className="relative w-full max-w-md h-48 bg-slate-100 rounded-lg flex flex-col justify-end items-center overflow-hidden border-b-4 border-slate-400">
          
          {/* Label Status */}
          {isPulled && (
            <div className="absolute top-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              {isCoinLeftBehind ? "Inersia Bekerja (Koin Diam)" : "Koin Terbawa Gesekan"}
            </div>
          )}

          {/* Koin */}
          <div 
            className={`w-12 h-12 bg-yellow-500 rounded-full border-4 border-yellow-600 flex items-center justify-center font-bold text-yellow-900 z-10 transition-transform duration-700`}
            style={{ 
              transform: isPulled && !isCoinLeftBehind 
                ? 'translateX(250px)'  // Ikut terbawa kertas
                : 'translateX(0px)'    // Tetap di posisi semula
            }}
          >
            $
          </div>

          {/* Kertas */}
          <div 
            className={`w-40 h-2 bg-indigo-400 rounded-t-md transition-transform duration-700`}
            style={{ 
              transform: isPulled ? 'translateX(300px)' : 'none' 
            }}
          ></div>
          
          <div className="w-full h-1 bg-slate-300"></div>x
        </div>
        <div className="pt-2">
          <Button 
            variant="accent" 
            onClick={handlePull}
            disabled={isPulled}
          >
            {isPulled ? 'Sedang Bergerak...' : 'Tarik Kertas'}
          </Button>
        </div>
      </div>
    </section>
  );
};