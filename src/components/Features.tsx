import { motion } from "framer-motion";
import { Palette, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "100% Personalizable",
    description: "Tu diseño, tus colores, tu estilo. Cada mug es tan único como tú.",
  },
  /*{
    icon: Clock,
    title: "Entrega Rápida",
    description: "Producimos y entregamos tu pedido en tiempo récord.",
  },*/
  {
    icon: Shield,
    title: "Alta Calidad",
    description: "Sublimación profesional que resiste el uso diario y lavado.",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada pieza es cuidadosamente elaborada para superar tus expectativas.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            ¿Por qué elegirnos?
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mt-3">
            Lo que nos hace <span className="heading-italic text-primary">diferentes</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:bg-secondary transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="heading-display text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
