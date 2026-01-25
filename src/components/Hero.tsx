import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";
import heroImage from "@/assets/hero-mugs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mugs personalizados con diseños artísticos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Decorative line */}
          <div className="w-16 h-1 bg-primary mb-8" />

          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-2">
            Cada taza cuenta
          </h1>
          <h1 className="heading-italic text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
            una historia única
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cream/80 text-lg md:text-xl mb-10 max-w-xl"
          >
            Transformamos tus ideas, recuerdos y momentos especiales en mugs
            personalizados con la técnica de sublimación de alta calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-3 bg-cta text-cta-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:bg-cta/90 group"
          >
              <Coffee className="w-5 h-5" />
              <span>Hacer Pedido</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/catalogo_kaifen_design.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/60 text-cream px-8 py-4 rounded-full hover:bg-cream hover:text-brown transition-colors group"
            >
              Ver Catálogo
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-cream/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-cream rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
