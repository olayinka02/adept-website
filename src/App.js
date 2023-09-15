import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/component/homepage/HomePage";
import Notfound from "./component/pagenotfound/Notfound";
import OurService from "./component/ourservices/OurService";


import { useEffect } from "react";
import {  useLocation } from "react-router-dom";
import ContactUs from "./component/contactus/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}





const RootApplication = () => {
  return (
    <>
    
 
      <Routes>
        
        <Route path="/" exact element={<HomePage />} />
        <Route path="/ourservice" exact element={<OurService />} />
        <Route path="/contactus" exact element={<ContactUs />} />
        <Route path="*" element={<Notfound />} />
        
      </Routes>
     
      
    </>
  );
};

function App() {
  return (
    <Router>
          <ScrollToTop />
           <RootApplication />
        
     
    </Router>
  );
}

export default App;
