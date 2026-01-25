import { Coffee, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/60 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-background">
            <Coffee className="w-9 h-9 text-primary" />
            <span className="font-serif text-xl">Kaifen Design</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-center">
            © 2026 Mugs Personalizados. Hecho con ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
