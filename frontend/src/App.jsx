
import Navabr from "./components/layout/Navbar.jsx";
import About from "./components/sections/About.jsx";
import Equipment from "./components/sections/Equipment.jsx";
import Hero from "./components/sections/Hero.jsx";
import ServiceProcess from "./components/sections/ServiceProcess.jsx";
import Services from "./components/sections/Services.jsx";
import WhyChooseUs from "./components/sections/WhyChooseUs.jsx";


const App = () => {

  return (
    <>
      <Navabr />

      <Hero />

      <About />

      <Services />

      <Equipment />

      <WhyChooseUs />

      <ServiceProcess />
    </>
  )
}

export default App;