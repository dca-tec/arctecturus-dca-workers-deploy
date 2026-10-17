import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
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
                Contato
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
              VAMOS CRIAR <span className="text-gradient">JUNTOS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Entre em contato para discutir seu projeto. Oferecemos consultoria 
              gratuita para entender suas necessidades e criar a solução perfeita.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Email</span>
                  <p className="text-foreground">contato@dca-arcturus.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Telefone</span>
                  <p className="text-foreground">+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Localização</span>
                  <p className="text-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8 lg:p-10"
          >
            <h3 className="text-2xl font-display tracking-wide mb-6">SOLICITE UM ORÇAMENTO</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Nome
                  </label>
                  <Input 
                    placeholder="Seu nome"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Tipo de Projeto
                </label>
                <Input 
                  placeholder="Residencial, Comercial, Industrial..."
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto..."
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm tracking-wider py-6 glow-copper"
              >
                Enviar Mensagem
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
