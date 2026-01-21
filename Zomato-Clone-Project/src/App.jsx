import DownloadSection from "./components/Download/DownloadSection"
import EternalSection from "./components/Eternal/EternalSection"
import FeaturesSection from "./components/Features/FeaturesSection"
import FooterSection from "./components/Footer/FooterSection"
import GoldSection from "./components/Gold/GoldSection"
import HeroSection from "./components/HeroSection"
import OrderSection from "./components/OrderSection"

const App = () => {
  return (
    <div className="relative w-screen">     
      <HeroSection />
      <section id="order-section" className="scroll-mt-55">
        <OrderSection />
      </section>

      <FeaturesSection />
      <GoldSection />
      <EternalSection />
      <DownloadSection />
      <FooterSection />
    </div>
  )
}

export default App
