import { motion } from "framer-motion";
import { Atom, Shield, Zap, Leaf, Gem, Layers } from "lucide-react";

interface Material {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const materials: Material[] = [
  {
    name: "Titânio",
    description: "Resistência extrema com peso mínimo. Durabilidade superior para estruturas de alto padrão.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: "Grafeno",
    description: "Material do futuro. Condutividade térmica excepcional e resistência 200x maior que o aço.",
    icon: <Atom className="w-6 h-6" />,
  },
  {
    name: "Fibra de Carbono",
    description: "Leveza e rigidez incomparáveis. Perfeito para design contemporâneo e estruturas inovadoras.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    name: "Nióbio",
    description: "Superliga brasileira. Resistência à corrosão e propriedades supercondutoras únicas.",
    icon: <Gem className="w-6 h-6" />,
  },
  {
    name: "Vidro Blindado",
    description: "Vidro duplo temperado com película de segurança. Proteção máxima com transparência total.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Bambu & Madeira",
    description: "Elegância natural e sustentável. Peças decorativas que criam ambientes sofisticados.",
    icon: <Leaf className="w-6 h-6" />,
  },
];

const Materials = () => {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
              Supermateriais
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            MATERIAIS DO <span className="text-gradient">FUTURO</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Utilizamos os materiais mais avançados do mundo para criar 
            ambientes que unem sofisticação, durabilidade e inovação.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {material.icon}
              </div>
              <h3 className="text-xl font-display tracking-wide mb-3">{material.name.toUpperCase()}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {material.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
