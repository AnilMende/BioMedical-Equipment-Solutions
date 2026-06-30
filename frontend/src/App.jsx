
import About from "./components/sections/About.jsx";
import CallToAction from "./components/sections/CallToAction.jsx";
import Contact from "./components/sections/Contact.jsx";
import Equipment from "./components/sections/Equipment.jsx";
import FAQSection from "./components/sections/FAQSection.jsx";
import Footer from "./components/sections/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Navbar from "./components/sections/Navbar.jsx";
import ServiceProcess from "./components/sections/ServiceProcess.jsx";
import Services from "./components/sections/Services.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import WhyChooseUs from "./components/sections/WhyChooseUs.jsx";


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