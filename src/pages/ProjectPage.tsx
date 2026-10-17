import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Maximize, Building2, Waves } from "lucide-react";
import { useState } from "react";
import { getProjectBySlug, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Projeto não encontrado</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            Voltar à galeria
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Voltar à Galeria</span>
            </Link>
          </motion.div>

          {/* Title */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                  {project.categoryLabel}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-4">
                {project.title.toUpperCase()}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.subtitle}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {project.location}
                </span>
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {project.year}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                >
                  <span className="text-sm tracking-wider uppercase">Ver Site do Projeto</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[16/9] overflow-hidden mb-4 group">
              <img
                src={project.gallery[activeImage]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 text-8xl font-display text-gradient opacity-30">
                {project.id}
              </div>
            </div>

            {/* Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-video overflow-hidden transition-all ${
                      activeImage === index 
                        ? "ring-2 ring-primary" 
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {project.specs?.area && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background border border-border"
              >
                <Maximize className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="block text-2xl font-display mb-2">{project.specs.area}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Área Total</span>
              </motion.div>
            )}
            {project.specs?.rooms && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-background border border-border"
              >
                <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="block text-2xl font-display mb-2">{project.specs.rooms}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Acomodações</span>
              </motion.div>
            )}
            {project.specs?.floors && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-background border border-border"
              >
                <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="block text-2xl font-display mb-2">{project.specs.floors}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Pavimentos</span>
              </motion.div>
            )}
            {project.specs?.pool && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-background border border-border"
              >
                <Waves className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="block text-2xl font-display mb-2">{project.specs.pool}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Lazer Aquático</span>
              </motion.div>
            )}
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4">
            {project.features.map((feature, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-background border border-primary/30 text-sm tracking-wider uppercase"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
                  Projetos Relacionados
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display tracking-wide">
                OUTROS <span className="text-gradient">PROJETOS</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/projeto/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden mb-4">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4 text-4xl font-display text-gradient opacity-50">
                        {related.id}
                      </div>
                    </div>
                    <span className="text-primary text-xs tracking-[0.2em] uppercase">
                      {related.categoryLabel}
                    </span>
                    <h3 className="text-xl font-display tracking-wide mt-2 group-hover:text-primary transition-colors">
                      {related.title.toUpperCase()}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProjectPage;
