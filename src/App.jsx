import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesAndCoverage from "./components/ServicesAndCoverage";
import FooterAndFloatingBar from "./components/FooterAndFloatingBar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ServicesAndCoverage />
      </main>
      <FooterAndFloatingBar />
    </div>
  );
}
