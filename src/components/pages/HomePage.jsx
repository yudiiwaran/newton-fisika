import { MainLayout } from "../susunan/MainLayout";
// import { Calculator } from "../organisms/Calculator";
import { NewtonFirstLaw } from "../organisms/NewtonFirstLaw";
import { Simulation } from "../organisms/NewtonSecondLaw";
import { NewtonThirdLaw } from "../organisms/NewtonThirdLaw";
import { Lessons } from "../organisms/Lessons";
import { Button } from "../atoms/Button";

const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Pahami Hukum Newton — Satu per satu, dengan contoh nyata</h2>
          <p className="mt-4 text-slate-600">Pelajari Hukum Newton I, II, III lewat penjelasan singkat, contoh soal, dan simulasi interaktif yang mudah diikuti.</p>
          <div className="mt-6 flex gap-3">
            <Button onClick={() => document.getElementById("law1-sim").scrollIntoView()}>Coba Simulasi</Button>
            <Button variant="secondary" onClick={() => document.getElementById("lessons").scrollIntoView()}>
              Lihat Pelajaran
            </Button>
          </div>
        </div>
        {/* <Calculator /> */}
      </section>

      <Lessons />
      <NewtonFirstLaw />
      <Simulation />
      <NewtonThirdLaw />
    </MainLayout>
  );
};

export default HomePage;
