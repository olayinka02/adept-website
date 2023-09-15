import React from "react";
import { Container, Image } from "react-bootstrap";
import bagmoney from "../../../assets/bagmoney.svg";

import "../../ourservices/ourservice.css";

function Header() {
  return (
    <Container id="hero" fluid className="header">
      <center>
        <div className="circleradiusdiv">
          <Image src={bagmoney} />
          Adept Product
        </div>
        <h2 style={{fontSize:2.2+'rem',color:'#2E2E2E',fontFamily:'jost'}}>
          <strong>How you can use Adept</strong>
        </h2>
        <p className="paragraph">
          Adept is a customizable solution that can be tailored around any
          organizations payment collection needs. The top 3 use cases, however,
          are;
        </p>
      </center>
    </Container>
  );
}

export default Header;
