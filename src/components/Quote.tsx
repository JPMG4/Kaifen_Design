import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="relative">
            <span className="text-6xl md:text-8xl text-primary/20 font-serif absolute -top-8 -left-4">
              "
            </span>
            <p className="heading-italic text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
              No solo imprimimos diseños,
              <br />
              <span className="text-primary">creamos recuerdos que perduran.</span>
            </p>
            <span className="text-6xl md:text-8xl text-primary/20 font-serif absolute -bottom-16 -right-4">
              "
            </span>
          </blockquote>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Cada mug que creamos es una pieza única, hecha con dedicación y los
            mejores materiales. Desde regalos personalizados hasta artículos
            promocionales para tu empresa, transformamos cada idea en algo especial.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
