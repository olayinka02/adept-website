import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logox1 from "../../assets/logox1.svg";

import "../contactus/contactus.css";

function ContactUs() {
  return (
    <Container fluid className="contactus">
      <Row>
      <Col xs={12} md={6} lg={6} className="order-md-2 formmain">
          <Link to="/">
            <Image className="navlogodisplay" src={logo} fluid alt="image" />
          </Link>
        
          <h5 style={{ fontFamily: "jost", fontSize: 2.1 + "rem" }}>
            <strong>Get in touch!</strong>
          </h5>
          <p
            style={{
              fontFamily: "jost",
              fontSize: 0.8 + "rem",
              color: "#3C3C3C",
            }}
          >
            Contact us through any of our available channels or by filling the
            form below.
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formlabel">Fullname</Form.Label>
              <Form.Control
                className="formcontrol"
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formlabel">Password</Form.Label>
              <Form.Control
                className="formcontrol"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formlabel">Message</Form.Label>
              <Form.Control
                as="textarea"
                className="formcontrol"
                placeholder="Enter your message here"
                aria-label="With textarea"
              />
            </Form.Group>
            <br />
            <Button
              variant="primary"
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
                SEND MESSAGE
              </span>
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={6} lg={6} className="order-md-1 formside">
          <Link to="/">
            <Image className="navlogo logoss" src={logox1} fluid alt="image" />
          </Link>
        </Col>
       
      </Row>
    </Container>
  );
}

export default ContactUs;
