

import About from "./pages/About.jsx";
import Hero from "./pages/Hero.jsx";
import Navbar from "./pages/Navbar.jsx";
import Services from "./pages/Services.jsx";
import Equipment from "./pages/Equipment.jsx";
import WhyChooseUs from "./pages/WhyChooseUs.jsx";
import ServiceProcess from "./pages/ServiceProcess.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import CallToAction from "./pages/CallToAction.jsx";
import FAQSection from "./pages/FAQSection.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";

const App = () => {

  return (
    <>
      <Navbar/>

      <Hero />

      <About />

      <Services />

      <Equipment />

      <WhyChooseUs />

      <ServiceProcess />

      <Testimonials />

      <CallToAction />

      <FAQSection />

      <Contact />

      <Footer />
    </>
  )
}

export default App;