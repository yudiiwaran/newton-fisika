import { NavLink } from '../atoms/NavLink';

export const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-md flex items-center justify-center text-white font-bold">N</div>
        <div>
          <h1 className="text-lg font-semibold">Hukum Newton</h1>
          <p className="text-sm text-slate-500">Belajar Hukum Newton dengan cepat dan praktis</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6">
        <NavLink href="#lessons">Pelajaran</NavLink>
        <NavLink href="#sim">Simulasi</NavLink>
        <NavLink href="#quiz">Kuis</NavLink>
      </nav>
    </div>
  </header>
);