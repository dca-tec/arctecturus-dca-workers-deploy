import { motion } from "framer-motion";
import { Building2, Factory, Home, Ruler } from "lucide-react";

const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Residencial",
    description: "Lofts, studios e casas de alto padrão com design exclusivo e automação completa.",
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Comercial",
    description: "Escritórios, lojas e espaços corporativos com eficiência energética e tecnologia.",
  },
  {
    icon: <Factory className="w-10 h-10" />,
    title: "Industrial",
    description: "Galpões, fábricas e centros logísticos com estruturas de alta performance.",
  },
  {
    icon: <Ruler className="w-10 h-10" />,
    title: "Personalizado",
    description: "Projetos sob medida para qualquer objetivo. Sua visão, nossa expertise.",
  },
];

const Services = () => {
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
              Serviços
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            SOLUÇÕES PARA CADA <span className="text-gradient">OBJETIVO</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oferecemos projetos padrão prontos para implementação, além de 
            desenvolver soluções personalizadas para cada necessidade.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-background border border-border hover:border-primary transition-all duration-300 text-center"
            >
              <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display tracking-wide mb-3">{service.title.toUpperCase()}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
