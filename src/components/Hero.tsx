import { motion } from "framer-motion";
const heroImage = "/images/hero-architecture.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DCA Arcturus Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[8rem] font-display leading-[0.85] mb-8 tracking-wide"
          >
            PROJETOS{" "}
            <span className="text-gradient">INTELIGENTES</span>
            <br />
            PARA O FUTURO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground font-sans font-light max-w-2xl mb-10 leading-relaxed"
          >
            Criamos ambientes sofisticados com automação total, gestão por IA e 
            supermateriais como titânio, grafeno e fibra de carbono. Arquitetura 
            minimalista que transforma sonhos em realidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm tracking-wider px-8 py-6 glow-copper"
              onClick={scrollToProjects}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:text-primary font-sans text-sm tracking-wider px-8 py-6 bg-transparent"
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
            Explorar
          </span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-40 w-20 h-20 border border-primary/10 rounded-full animate-float animation-delay-300 opacity-20" />
    </section>
  );
};

export default Hero;
