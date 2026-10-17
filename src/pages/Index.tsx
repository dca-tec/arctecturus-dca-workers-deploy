import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import Materials from "@/components/Materials";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectsGallery />
      <section id="materials">
        <Materials />
      </section>
      <section id="technology">
        <Technology />
      </section>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
