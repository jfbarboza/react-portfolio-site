import React, {useEffect} from 'react';
import About from './About/About';
import Experience from './Experience/Experience';
import Header from './Header/Header'
import Nav from './Nav/Nav';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Portfolio from './Portfolio/Portfolio';


const App = () => {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
