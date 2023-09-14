import React from 'react'
import StickyNavbar from '../reuse-component/Navbar/StickyNavbar';
import HeroSection from './component/HeroSection';
import CounterSection from './component/CounterSection';
import AboutAdept from './component/AboutAdept';
import HowitWorks from './component/HowitWorks';
import Features from './component/Features';

function HomePage() {
  return (
    <>
      <StickyNavbar />
      <HeroSection />
      <CounterSection />
      <AboutAdept />
      <HowitWorks />
      <Features />
    </>
  )
}

export default HomePage;
