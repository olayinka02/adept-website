import React, { useState } from "react";
import { Container, Image, Button, Row, Col, Offcanvas } from "react-bootstrap";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.svg";
import "../Navbar/navbar.css";

function StickyNavbar() {
  const [loginShow, setLoginShow] = useState(false); // Separate state for login Offcanvas
  const [registerShow, setRegisterShow] = useState(false); // Separate state for register Offcanvas

  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);

  const handleRegisterClose = () => setRegisterShow(false);
  const handleRegisterShow = () => setRegisterShow(true);

  const [expanded, setExpanded] = useState(false);
  const Harmburgerstyle = {
    color: "#F14810",
    outline: "none",
    border: 0,
  };

  return (
    <Navbar collapseOnSelect sticky="top" expand="lg"  expanded={expanded} className="sticky-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to="/">
            <Image className="navlogo" src={logo} fluid alt="image" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          className="hamburger"
          aria-controls="basic-navbar-nav"
          style={Harmburgerstyle}
          onClick={() => setExpanded(!expanded)}
        >
          <Hamburger toggled={expanded} duration={0.8} hideOutline={false} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/ourservice">Our Services</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/contactus">Contact Us</Link>
            </Nav.Link>

            {"   "}

            <div className="buttonbody">
              <Button
                variant="outline-primary"
                onClick={handleLoginShow}
                style={{
                  borderColor: "#F14810",
                  color: "#F14810",
                  borderRadius: 0.3 + "rem",
                }}
                className="button"
                size="md"
              >
                <span
                  style={{
                    fontSize: 0.8 + "rem",
                    marginLeft: 0.5 + "rem",
                    marginRight: 0.5 + "rem",
                  }}
                >
                  LOGIN
                </span>
              </Button>{" "}
              <Button
                variant="primary"
                onClick={handleRegisterShow}
                style={{
                  backgroundColor: "#F14810",
                  borderColor: "#F14810",
                  borderRadius: 0.3 + "rem",
                }}
                className="button"
                size="md"
              >
                <span
                  style={{
                    fontSize: 0.8 + "rem",
                    marginLeft: 0.3 + "rem",
                    marginRight: 0.3 + "rem",
                  }}
                >
                  CREATE AN ACCOUNT
                </span>
              </Button>
              </div>



              <Offcanvas
                className="offcanvas"
                placement="end"
                show={loginShow}
                onHide={handleLoginClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h6
                      style={{
                        color: "white",
                        fontSize: 1.8 + "rem",
                        fontFamily: "jost",
                      }}
                    >
                      Login
                    </h6>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="cardLink">
                    <ExternalLink
                      style={{ textDecoration: "none" }}
                      href="https://main.d3lxrnyrcth1za.amplifyapp.com/login"
                    >
                      <Row>
                        <Col xs={10} md={10} lg={10}>
                          <h6 style={{ color: "#ffffff" }}>
                            Adept for Education (A4E)
                          </h6>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                          {/* <Image className="arrow" src={arrow} /> */}
                        </Col>
                      </Row>
                    </ExternalLink>
                  </div>
                  <br />
                  <div className="cardLink">
                    <Row>
                      <Col xs={10} md={10} lg={10}>
                        <h6 style={{ color: "#ffffff" }}>
                          Adept for Education (A4E)
                        </h6>
                      </Col>
                      <Col xs={2} md={2} lg={2}>
                        {/* <Image className="arrow" src={arrow} /> */}
                      </Col>
                    </Row>
                  </div>
                  <br />
                  <div className="cardLink">
                    <Row>
                      <Col xs={10} md={10} lg={10}>
                        <h6 style={{ color: "#ffffff" }}>
                          Adept for Education (A4E)
                        </h6>
                      </Col>
                      <Col xs={2} md={2} lg={2}>
                        {/* <Image className="arrow" src={arrow} /> */}
                      </Col>
                    </Row>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              <Offcanvas
                className="offcanvas"
                placement="end"
                show={registerShow}
                onHide={handleRegisterClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h6
                      style={{
                        color: "white",
                        fontSize: 1.8 + "rem",
                        fontFamily: "jost",
                      }}
                    >
                      Create an Account
                    </h6>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="cardLink">
                    <ExternalLink
                      style={{ textDecoration: "none" }}
                      href="https://main.d3lxrnyrcth1za.amplifyapp.com/register"
                    >
                      <Row>
                        <Col xs={10} md={10} lg={10}>
                          <h6 style={{ color: "#ffffff" }}>
                            Adept for Education (A4E)
                          </h6>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                          {/* <Image className="arrow" src={arrow} /> */}
                        </Col>
                      </Row>
                    </ExternalLink>
                  </div>
                  <br />
                  <div className="cardLink">
                    <Row>
                      <Col xs={10} md={10} lg={10}>
                        <h6 style={{ color: "#ffffff" }}>
                          Adept for Education (A4E)
                        </h6>
                      </Col>
                      <Col xs={2} md={2} lg={2}>
                        {/* <Image className="arrow" src={arrow} /> */}
                      </Col>
                    </Row>
                  </div>
                  <br />
                  <div className="cardLink">
                    <Row>
                      <Col xs={10} md={10} lg={10}>
                        <h6 style={{ color: "#ffffff" }}>
                          Adept for Education (A4E)
                        </h6>
                      </Col>
                      <Col xs={2} md={2} lg={2}>
                        {/* <Image className="arrow" src={arrow} /> */}
                      </Col>
                    </Row>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
