
import Navabr from "./components/layout/Navbar.jsx";
import About from "./components/sections/About.jsx";
import Equipment from "./components/sections/Equipment.jsx";
import Hero from "./components/sections/Hero.jsx";
import Services from "./components/sections/Services.jsx";

const App = () => {

  return (
    <>
      <Navabr />

      <Hero/>

      <About/>

      <Services/>

      <Equipment/>
    </>
  )
}

export default App;