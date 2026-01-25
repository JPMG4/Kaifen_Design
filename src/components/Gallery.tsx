/*
import { motion } from "framer-motion";
import mugFloral from "@/assets/mug-floral.jpg";
import mugPhoto from "@/assets/mug-photo.jpg";
import mugCorporate from "@/assets/mug-corporate.jpg";

const galleryItems = [
  {
    image: mugFloral,
    title: "Diseños Artísticos",
    description: "Patrones florales, abstractos y creativos para quienes aman lo único.",
  },
  {
    image: mugPhoto,
    title: "Fotos Personalizadas",
    description: "Inmortaliza tus momentos favoritos en cada sorbo de café.",
  },
  {
    image: mugCorporate,
    title: "Empresarial",
    description: "Mugs con tu logo para regalos corporativos y merchandising.",
  },
];

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Nuestro trabajo
          </span>
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mt-3">
            Diseños que <span className="heading-italic text-primary">inspiran</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 card-hover">
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-cream font-medium">Ver más →</span>
                </div>
              </div>
              <h3 className="heading-display text-xl md:text-2xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
*/

const Gallery = () => null;
export default Gallery;