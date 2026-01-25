import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573508149949"; // sin +, sin espacios

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message =
      `Hola, quiero cotizar con Kaifen Design.%0A%0A` +
      `Nombre: ${encodeURIComponent(name)}%0A` +
      `Teléfono/WhatsApp: ${encodeURIComponent(phone)}%0A%0A` +
      `¿Qué necesito?: ${encodeURIComponent(details)}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

    // Limpiar formulario
    setName("");
    setPhone("");
    setDetails("");

    // Mostrar confirmación por más tiempo
    setSent(true);
    window.setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contacto" className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Contáctanos
            </span>

            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
              ¿Listo para crear <br />
              <span className="heading-italic text-primary">tu mug perfecto?</span>
            </h2>

            <p className="text-background/70 text-lg mb-8 max-w-md">
              Cuéntanos tu idea y la hacemos realidad. Ya sea un regalo especial o
              un recuerdo único.
            </p>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-background/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-background">WhatsApp</p>
                  <p className="text-sm text-background/60">+57 350 814 9949</p>
                </div>
              </a>

              <a
                href="mailto:kaifendesign@gmail.com"
                className="flex items-center gap-4 text-background/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-background">Email</p>
                  <p className="text-sm text-background/60">
                    kaifendesign@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-background/80">
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-background">Ubicación</p>
                  <p className="text-sm text-background/60">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 md:p-10"
          >
            <h3 className="heading-display text-2xl mb-6">
              Solicita tu cotización
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2 text-background/80">
                  Nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-background/80">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
                  placeholder="+57 300 000 0000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-background/80">
                  ¿Qué necesitas?
                </label>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto: cantidad, tipo de diseño, fecha de entrega..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                Enviar Solicitud
              </button>

              {/* Tarjeta de confirmación */}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <p className="text-sm text-background/90">
                    Solicitud enviada correctamente. En breve te contactaremos.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

