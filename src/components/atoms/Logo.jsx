export const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative">
      {/* Efek Glow di belakang logo */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      {/* Ikon Utama */}
      <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden">
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 transition-transform duration-500 group-hover:scale-110"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tangkai Apel */}
          <path d="M12 2C12 2 12.5 4 14 5" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Badan Apel (Representasi Gravitasi Newton) */}
          <path 
            d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" 
            className="fill-indigo-50 stroke-indigo-600" 
            strokeWidth="1.5"
          />
          
          {/* Inti Massa */}
          <circle cx="12" cy="13" r="2" className="fill-indigo-600 animate-pulse" />
        </svg>
      </div>
    </div>

    {/* Teks Branding */}
    <div className="flex flex-col">
      <h1 className="text-xl font-black leading-none tracking-tight text-slate-800 uppercase">
        Newton<span className="text-indigo-600">Lab</span>
      </h1>
      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">
        Interactive Physics Lab
      </p>
    </div>
  </div>
);