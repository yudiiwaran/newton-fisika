import { Header } from '../organisms/Header';

export const MainLayout = ({ children }) => (
  <div className="bg-slate-50 min-h-screen text-slate-900 antialiased">
    <Header />
    <main className="container mx-auto px-6 py-12">
      {children}
    </main>
    <footer className="bg-white border-t py-6 mt-12">
      <div className="container mx-auto px-6 text-sm text-slate-500">
        © Hukum Newton — Dibuat untuk penyelesaian tugas UAS FISIKA. Versi prototipe.
      </div>
    </footer>
  </div>
);