import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoBar from "./components/InfoBar";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <InfoBar />
      <MenuSection />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}