import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, ProjectCategory } from "@/data/projects";

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("todos");

  const filteredProjects = activeCategory === "todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-sans text-sm tracking-[0.3em] uppercase">
              Portfólio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-8">
            NOSSOS <span className="text-gradient">PROJETOS</span>
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/projeto/${project.slug}`}
                  className="group block relative"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Project Number */}
                    <div className="absolute top-4 left-4 text-5xl font-display text-gradient opacity-50">
                      {project.id}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm">
                      <span className="text-xs tracking-wider uppercase text-primary">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-16">
                      <h3 className="text-xl md:text-2xl font-display tracking-wide text-foreground mb-1">
                        {project.title.toUpperCase()}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs tracking-wider uppercase"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs tracking-wider">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
