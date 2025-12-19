import { useState, useEffect } from 'react';
import { Button } from '../atoms/Button';
import { FormField } from '../molecules/FormField';

export const Simulation = () => {
  // const [force, setForce] = useState(0);
  const [mass, setMass] = useState(0);
  const [accel, setAccel] = useState(0);
  const [result, setResult] = useState(null);
  const [position, setPosition] = useState(0);

  const calculate = () => setResult((mass * accel).toFixed(2));

  useEffect(() => {
    // Logika perhitungan a = F/m
    // const a = mass > 0 ? force / mass : 0;
    // setAccel();

    // Hitung posisi visual (translateX)
    const maxShift = 220;
    const norm = Math.max(0, Math.min(20, result));
    const shift = (norm / 10) * maxShift;
    setPosition(shift);
  }, [result, mass]);

  return (
    <section id="sim" className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
      <h3 className="text-2xl font-semibold">Simulasi Sederhana: Dorong Kotak</h3>
      <p className="text-sm text-slate-600 mt-2">Atur massa dan gaya untuk melihat pergerakan kotak.</p>

      {/* Form untuk kalkulator F = m × a */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="font-semibold">Kalkulator F = m × a</h3>
        <div className="mt-4 space-y-3">
          <FormField label="Massa (kg)" type="number" value={mass} onChange={(e) => setMass(e.target.value)} />
          <FormField label="Percepatan (m/s²)" type="number" value={accel} onChange={(e) => setAccel(e.target.value)} />
          <div className="flex items-center gap-3">
            <Button variant="accent" onClick={calculate}>Hitung</Button>
            {/* {result && <div className="text-lg font-medium">Gaya = {result} N</div>} */}
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-white p-4 rounded shadow-sm">
          {/* <label className="block text-sm text-slate-700">Gaya (N): {result}</label>
          <input 
            type="range" min="0.1" max="20" step="0.1" value={result} 
            onChange={(e) => setResult(parseFloat(e.target.value))}
            className="w-full mt-2" 
          /> */}

          <label className="block text-sm text-slate-700 mt-4">Massa (kg): {mass}</label>
          <input 
            type="range" min="0.1" max="20" step="0.1" value={mass} 
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full mt-2" 
          />
          <label className="block text-sm text-slate-700 mt-4">Percepatan (m/s²): {accel}</label>
          <input 
            type="range" min="0.1" max="20" step="0.1" value={accel} 
            onChange={(e) => setAccel(parseFloat(e.target.value))}
            className="w-full mt-2" 
          />
          {/* <div className="mt-4 text-sm text-slate-700 font-bold text-indigo-600">
            Percepatan: {accel} m/s²
          </div> */}
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="h-40 relative overflow-hidden bg-slate-100 rounded">
            {result && <div className="flex items-center justify-center text-2xl font-semibold mt-8">Gaya = {result} N</div>}
            <div className="absolute left-4 bottom-6 w-[94%] h-12 bg-white rounded flex items-center px-4 border-b-2 border-slate-300">
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