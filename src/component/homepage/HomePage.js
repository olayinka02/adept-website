import React from 'react'
import StickyNavbar from '../reuse-component/Navbar/StickyNavbar';
import HeroSection from './component/HeroSection';
import CounterSection from './component/CounterSection';
import AboutAdept from './component/AboutAdept';
import HowitWorks from './component/HowitWorks';
import Features from './component/Features';
import Benefits from './component/Benefits';
import Question from './component/Question';
import Contactus from './component/Contactus';
import Partner from './component/Partner';
import Footer from './component/Footer';


function HomePage() {
  return (
    <>
      <StickyNavbar />
      <HeroSection />
      <CounterSection />
      <AboutAdept />
      <HowitWorks />
      <Features />
      <Benefits />
      <Question />
      <Contactus />
      <Partner />
      <Footer />
    </>
  )
}

export default HomePage;
