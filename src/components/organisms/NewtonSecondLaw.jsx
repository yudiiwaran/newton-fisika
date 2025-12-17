import { useState, useEffect } from 'react';

export const Simulation = () => {
  const [force, setForce] = useState(6);
  const [mass, setMass] = useState(2);
  const [accel, setAccel] = useState(3);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Logika perhitungan a = F/m
    const a = mass > 0 ? force / mass : 0;
    setAccel(a);

    // Hitung posisi visual (translateX)
    const maxShift = 220;
    const norm = Math.max(-10, Math.min(10, a));
    const shift = (norm / 10) * maxShift;
    setPosition(shift);
  }, [force, mass]);

  return (
    <section id="sim" className="mt-12 bg-gradient-to-r from-white to-slate-50 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold">Simulasi Sederhana: Dorong Kotak</h3>
      <p className="text-sm text-slate-600 mt-2">Atur massa dan gaya untuk melihat pergerakan kotak.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-white p-4 rounded shadow-sm">
          <label className="block text-sm text-slate-700">Gaya (N): {force}</label>
          <input 
            type="range" min="-50" max="50" value={force} 
            onChange={(e) => setForce(parseFloat(e.target.value))}
            className="w-full mt-2" 
          />

          <label className="block text-sm text-slate-700 mt-4">Massa (kg): {mass}</label>
          <input 
            type="range" min="0.1" max="20" step="0.1" value={mass} 
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full mt-2" 
          />
          <div className="mt-4 text-sm text-slate-700 font-bold text-indigo-600">
            Percepatan: {accel.toFixed(2)} m/s²
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="h-40 relative overflow-hidden bg-slate-100 rounded">
            <div className="absolute left-4 bottom-6 w-[80%] h-12 bg-white rounded flex items-center px-4 border-b-2 border-slate-300">
              <div 
                className="w-12 h-12 bg-indigo-500 rounded transition-transform duration-500 ease-linear"
                style={{ transform: `translateX(${position}px)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};