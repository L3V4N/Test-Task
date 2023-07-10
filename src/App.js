import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ServicesSection } from "./components/ServicesSection";
import { Marquee } from "./components/Marquee";
import { WorksSection } from "./components/WorksSection";
import { Animation } from "./components/Animation";

function App() {
  return (
    <div>
      <Header />
      <Animation />
      <ServicesSection />
      <Marquee />
      <WorksSection />
      <Footer />
    </div>
  );
}

export default App;
