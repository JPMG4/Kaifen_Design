import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
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

export default Index;
