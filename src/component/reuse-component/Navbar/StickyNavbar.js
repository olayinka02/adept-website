import React,{useState} from "react";
import { Container, Image, Button } from "react-bootstrap";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../../assets/logo.svg';
import '../Navbar/navbar.css'

function StickyNavbar() {

  const [expanded, setExpanded] = useState(false);
  const Harmburgerstyle = {
    color: "#F14810",
    outline: "none",
    border: 0,
  };


  return (
    <Navbar collapseOnSelect  sticky="top" expand="lg" className="sticky-navbar">
      <Container fluid >
        <Navbar.Brand href="#home">
          <Image className="navlogo" src={logo} fluid alt="image" />
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
            <Link to="./">
              <Nav.Link >Home</Nav.Link>
            </Link>

            <Nav.Link>Our Services</Nav.Link>
            <Nav.Link >Contact Us</Nav.Link>
            {"   "}

            <div className="buttonbody">
              <Button
                variant="outline-primary"
                style={{ borderColor: "#F14810", color: "#F14810", borderRadius:0.3+'rem' }}
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
                style={{ backgroundColor: "#F14810", borderColor: "#F14810", borderRadius:0.3+'rem' }}
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;
