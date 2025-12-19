// src/components/organisms/Header.jsx
import { Logo } from '../atoms/Logo';

export const Header = () => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
    <div className="container mx-auto px-6 py-3 flex items-center justify-between">
      <a href="/" className="hover:opacity-90 transition-opacity">
        <Logo />
      </a>
      
      {/* Navigasi tetap sama */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
        <a href="#lessons" className="hover:text-indigo-600 transition-colors">Pelajaran</a>
        <a href="#law1-sim" className="hover:text-indigo-600 transition-colors">Simulasi</a>
      </nav>
    </div>
  </header>
);