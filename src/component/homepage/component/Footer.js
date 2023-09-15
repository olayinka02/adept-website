import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { Link as LinkRoll } from "react-scroll";
import footerlogo from "../../../assets/footerlogo.svg";
import "../../homepage/homepage.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs={12} md={4} lg={4}>
          <div>
          <Nav.Link >
            <LinkRoll
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              <Image src={footerlogo} width={140} />
            </LinkRoll>
            </Nav.Link>

            <p
              style={{
                fontSize: 0.8 + "rem",
                marginTop: 0.5 + "rem",
                color: "#ffffff",
                lineHeight: 207 + "%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus
              egestas dolor sit amet consectetur. Vitae tempor tortor tempus
              egestas
            </p>
          </div>
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Row>
            <Col xs={6} md={3} lg={3} className="servicecontainer">
              <h6 style={{ fontSize: 0.9 + "rem", color: "#F14810" }}>
                <strong>OUR SERVICES</strong>
              </h6>
              <ul
                style={{
                  listStyleType: "none",
                  marginLeft: -2 + "rem",
                  fontSize: 0.82 + "rem",
                  lineHeight: 180 + "%",
                }}
              >
                <li>Education (A4E)</li>
                <li>Utilities (A4U)</li>
                <li>Commerce (A4C)</li>
              </ul>
            </Col>
            <Col xs={6} md={3} lg={3} className="linkcontainer">
              <h6 style={{ fontSize: 0.9 + "rem", color: "#F14810" }}>
                <strong>USEFULL LINKS</strong>
              </h6>
              <ul
                style={{
                  listStyleType: "none",
                  marginLeft: -2 + "rem",
                  fontSize: 0.82 + "rem",
                  lineHeight: 180 + "%",
                }}
              >
                <li>Privacy Policy</li>
                <li>Term of Use</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={6} className="contactusx">
              <h6 style={{ fontSize: 0.9 + "rem", color: "#F14810" }}>
                <strong>CONTACT US</strong>
              </h6>
              <p style={{ fontSize: 0.84 + "rem", color: "#ffffff" }}>
                No. 4 Madiana Close, Off Dar Es-Salaam Street, Wuse 2 , Abuja.
              </p>
              <p
                style={{
                  marginTop: -0.5 + "rem",
                  fontSize: 0.84 + "rem",
                  color: "#ffffff",
                }}
              >
                096244444
              </p>
              <p
                style={{
                  marginTop: -0.5 + "rem",
                  fontSize: 0.84 + "rem",
                  color: "#ffffff",
                }}
              >
                hello@adept.ng
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
