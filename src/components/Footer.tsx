import { Coffee, Instagram } from "lucide-react";

// URL de Instagram
const INSTAGRAM_URL = "https://www.instagram.com/kaifendesign";

// Plausible (sin cookies). Si no está cargado, no rompe nada.
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void;
  }
}

const Footer = () => {
  const trackInstagramClick = () => {
    window.plausible?.("Social Click", {
      props: {
        network: "instagram",
        location: "footer",
      },
    });
  };

  return (
    <footer className="bg-foreground text-background/60 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-background">
            <Coffee className="w-9 h-9 text-primary" />
            <span className="font-serif text-xl">Kaifen Design</span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              onClick={trackInstagramClick}
              className="
                group inline-flex items-center justify-center
                rounded-full p-2
                transition-all duration-300
                hover:bg-background/10
                focus:outline-none
                focus-visible:ring-2 focus-visible:ring-primary/50
              "
            >
              <Instagram
                className="
                  w-5 h-5
                  text-[#E1306C]
                  transition-transform duration-300
                  group-hover:animate-pulse
                  group-hover:scale-110
                "
              />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center">
            © 2026 Kaifen Design. Hecho con ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

