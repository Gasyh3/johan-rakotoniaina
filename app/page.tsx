import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Formation } from "@/components/Formation";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";
import { Competences } from "@/components/Competences";
import { Interest } from "@/components/Interest";
import { Contact } from "@/components/Contact";
import { Portfolio } from "@/components/Portfolio";


export default function Home() {
  return (
    <div className="overflow-x-hidden font-display">
      <Header />
      <Hero />
      <About />
      <Formation />
      <Competences />
      <Experience />

      <Portfolio />
      <Interest />
      <div className="flex min-h-screen w-full flex-col">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
