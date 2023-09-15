import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import benefitimage from "../../../assets/benefitimage.svg";

import "../../homepage/homepage.css";

function Benefits() {
  return (
    <Container fluid className="aboutadept">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: -5, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
        viewport={{ once: true }}
      >
        <Row>
          <Col className="aboutadeptright" xs={12} sm={12} md={6} lg={6}>
            <div className="circleradiusdiv">Benefit</div>
            <h2 style={{ color: "#515151" }}>
              <strong>How Adept helps Businesses</strong>
            </h2>
            <br />
            <p>
              By choosing Adept as your preferred payment solutions provider,
              you can easily digitize all your existing payment processes within
              your organization thereby greatly improving upon your current
              architecture for payments. Adept enables you to unify payments and
              provide customers an avenue to easily and conveniently make
              recurrent payments.
            </p>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <Image src={benefitimage} className="all-image" width={100 + "%"} />
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default Benefits;
