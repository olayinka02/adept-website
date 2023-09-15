import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import "../../homepage/homepage.css";
import heroimage from "../../../assets/heroimage.png";
import accbal from "../../../assets/accbal.png";
import graph from "../../../assets/graph.png";

function HeroSection() {
  return (
    <Container fluid id="hero" className="herosection">
      <Row>
        <Col xs={12} md={6} lg={6} className="herosectionleft">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2, timingFunction: easeOut }}
          >
            <div className="heroText">
              <h2>
                <strong>
                  Customized{" "}
                  <span style={{ color: "#F14810" }}>
                    Cross-Functional payments
                  </span>{" "}
                  through the banking system
                </strong>
              </h2>
              <p>
                Receive, track, and monitor recurring payments from all your
                clients. No human intervention, No paper confirmation.
              </p>
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
                  LEARN MORE
                </span>
              </Button>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} lg={6} className="herosectionright">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, timingFunction: easeOut }}
          >
            <center>
              <div className="image-container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.8,
                    timingFunction: easeOut,
                  }}
                >
                  <Image src={accbal} className="accbal" width={300} fluid />
                </motion.div>
                <Image src={heroimage} width={410} fluid />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.96,
                    timingFunction: easeOut,
                  }}
                >
                  <Image src={graph} className="graph" width={200} fluid />
                </motion.div>
              </div>
            </center>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
