import React from "react";
import Header from "./component/Header";
import StickyNavbar from "../reuse-component/Navbar/StickyNavbar";
import EducationSec from "./component/EducationSec";
import UtilitySec from "./component/UtilitySec";
import CommerceSec from "./component/CommerceSec";
import Footer from "../homepage/component/Footer";

function OurService() {
  return (
    <>
      <StickyNavbar />
      <Header />
      <EducationSec />
      <UtilitySec />
      <CommerceSec />
      <Footer />
    </>
  );
}

export default OurService;
