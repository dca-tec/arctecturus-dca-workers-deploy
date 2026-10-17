import { motion } from "framer-motion";
import { Brain, Home, Wifi, Smartphone, Shield, Thermometer } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Gestão por IA",
    description: "Inteligência artificial que aprende seus hábitos e otimiza o ambiente automaticamente.",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Automação Total",
    description: "Controle completo de iluminação, climatização, segurança e entretenimento.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Controle EZ",
    description: "Gerencie toda sua casa na palma da mão através do nosso aplicativo intuitivo.",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "IoT Integrado",
    description: "Todos os dispositivos conectados e sincronizados para uma experiência perfeita.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Segurança Avançada",
    description: "Sistema de segurança inteligente com reconhecimento facial e monitoramento 24/7.",
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Clima Perfeito",
    description: "Sensores ambientais que mantêm temperatura e umidade ideais automaticamente.",
  },
];

const Technology = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                Tecnologia
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
              CASAS <span className="text-gradient">INTELIGENTES</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossos projetos integram as mais avançadas tecnologias de automação 
              residencial e gestão por inteligência artificial, criando ambientes 
              que se adaptam às suas necessidades e preferências.
            </p>
            
            <div className="flex items-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-4xl font-display text-gradient mb-2">100%</div>
                <span className="text-muted-foreground">Automatizado</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-display text-gradient mb-2">24/7</div>
                <span className="text-muted-foreground">Monitoramento</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-4xl font-display text-gradient mb-2">IA</div>
                <span className="text-muted-foreground">Gestão Inteligente</span>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg tracking-wide mb-2">{feature.title.toUpperCase()}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
