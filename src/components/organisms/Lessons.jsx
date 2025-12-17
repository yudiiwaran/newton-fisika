import React from 'react';

const LessonCard = ({ title, formula, description, examples }) => (
  <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
    <div className="mb-4">
      <h4 className="font-bold text-xl text-indigo-700">{title}</h4>
      {formula && (
        <span className="inline-block mt-1 px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-mono rounded">
          {formula}
        </span>
      )}
    </div>
    <p className="text-sm text-slate-600 leading-relaxed mb-4">
      {description}
    </p>
    <div className="mt-auto">
      <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        Contoh Nyata:
      </h5>
      <ul className="space-y-2">
        {examples.map((ex, index) => (
          <li key={index} className="text-sm text-slate-700 flex gap-2">
            <span className="text-indigo-400">•</span>
            {ex}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export const Lessons = () => {
  const dataHukum = [
    {
      title: "Hukum I (Inersia)",
      formula: "ΣF = 0",
      description: "Sebuah benda akan tetap diam atau bergerak lurus beraturan jika tidak ada gaya luar yang bekerja padanya. Benda cenderung mempertahankan keadaannya.",
      examples: [
        "Tubuh terdorong ke depan saat mobil direm mendadak.",
        "Koin tetap diam di atas meja saat taplak ditarik sangat cepat."
      ]
    },
    {
      title: "Hukum II (F = m × a)",
      formula: "F = m · a",
      description: "Percepatan suatu benda sebanding dengan gaya yang diberikan dan berbanding terbalik dengan massanya. Arahnya searah dengan gaya.",
      examples: [
        "Mendorong mobil mainan lebih cepat daripada mendorong mobil asli.",
        "Mendorong troli kosong lebih ringan daripada yang penuh belanjaan."
      ]
    },
    {
      title: "Hukum III (Aksi-Reaksi)",
      formula: "F aksi = -F reaksi",
      description: "Untuk setiap aksi, selalu ada reaksi yang besarnya sama namun berlawanan arah. Gaya ini bekerja pada dua benda yang berbeda.",
      examples: [
        "Semburan gas roket ke bawah mendorong badan roket meluncur ke atas.",
        "Tangan terasa sakit saat memukul meja (meja memukul balik tangan)."
      ]
    }
  ];

  return (
    <section id="lessons" className="mt-12 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-slate-900">Materi Hukum Newton</h3>
          <p className="text-slate-500 mt-2">Pahami prinsip dasar dinamika gerak melalui tiga hukum utama Sir Isaac Newton.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {dataHukum.map((item, index) => (
          <LessonCard 
            key={index}
            title={item.title}
            formula={item.formula}
            description={item.description}
            examples={item.examples}
          />
        ))}
      </div>

      <div className="mt-10 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-md">
        <p className="text-sm text-amber-800">
          <strong>Tips Belajar:</strong> Perhatikan bahwa Hukum I dan II fokus pada gaya yang bekerja pada 1 benda, sedangkan Hukum III selalu melibatkan interaksi antara 2 benda yang berbeda.
        </p>
      </div>
    </section>
  );
};