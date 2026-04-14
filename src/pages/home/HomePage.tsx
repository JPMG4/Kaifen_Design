import Navbar from "@/features/landing/components/Navbar";
import Hero from "@/features/landing/components/Hero";
import Quote from "@/features/landing/components/Quote";
import Gallery from "@/features/landing/components/Gallery";
import Features from "@/features/landing/components/Features";
import Contact from "@/features/landing/components/Contact";
import Footer from "@/features/landing/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Quote />
      <Gallery />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
