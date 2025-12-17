import { useState } from 'react';
import { Button } from '../atoms/Button';
import { FormField } from '../molecules/FormField';

export const Calculator = () => {
  const [mass, setMass] = useState(2);
  const [accel, setAccel] = useState(3);
  const [result, setResult] = useState(null);

  const calculate = () => setResult((mass * accel).toFixed(2));

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="font-semibold">Kalkulator F = m × a</h3>
      <div className="mt-4 space-y-3">
        <FormField label="Massa (kg)" type="number" value={mass} onChange={(e) => setMass(e.target.value)} />
        <FormField label="Percepatan (m/s²)" type="number" value={accel} onChange={(e) => setAccel(e.target.value)} />
        <div className="flex items-center gap-3">
          <Button variant="accent" onClick={calculate}>Hitung</Button>
          {result && <div className="text-lg font-medium">Gaya = {result} N</div>}
        </div>
      </div>
    </div>
  );
};