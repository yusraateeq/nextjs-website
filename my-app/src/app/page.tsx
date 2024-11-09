import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Facilities from './Components/Facilities'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
export default function Home() {
  return (
   <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Facilities/>
      <Contact/>
      <Footer/>
   </div>
  );
}
