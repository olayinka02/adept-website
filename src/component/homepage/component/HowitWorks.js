import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import howitworkimageone from "../../../assets/howitworkimageone.svg";
import howitworkimagetwo from "../../../assets/howitworkimagetwo.svg";
import howitworkimagethree from "../../../assets/howitworkimagethree.svg";
import howitworkimagefour from "../../../assets/howitworkimagefour.svg";

import "../../homepage/homepage.css";

function HowitWorks() {
  return (
    <Container fluid className="howitwork">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
        viewport={{ once: true }}
      >
        <center>
          <h3 className="howitworkhead">How Adept Works</h3>
          <p className="howitworkparagraph">
            The payments ecosystem is digitizing fast and consumers expect
            payments to be fast, seamless and automated. Adept is aimed at
            removing delays in providing service value caused by human
            intervention and manual confirmation.
          </p>
        </center>
      </motion.div>

      <Row className="howitworkrow">
        <Col xs={12} md={6} lg={3}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <div className="howitworkcardbody">
              <Image src={howitworkimageone} fluid />

              <div style={{ marginTop: 1.5 + "rem" }}>
                <p className="howitworkeachparagraph">
                  Adept provides unique NUBAN account numbers that are mapped to
                  each customer or client.
                </p>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <div className="howitworkcardbody">
              <Image src={howitworkimagetwo} fluid />

              <div style={{ marginTop: 1.5 + "rem" }}>
                <p className="howitworkeachparagraph">
                  Payments made to these assigned NUBAN Bank Accounts are
                  verified instantly.
                </p>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8+0.2, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <div className="howitworkcardbody">
              <Image src={howitworkimagethree} fluid />

              <div style={{ marginTop: 1.5 + "rem" }}>
                <p className="howitworkeachparagraph">
                  Payments can be made by bank deposit, USSD/Mobile app, POS
                  agents, Internet Banking, ATM transfer, mobile wallet payment.
                </p>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8+0.4, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <div className="howitworkcardbody">
              <Image src={howitworkimagefour} fluid />

              <div style={{ marginTop: 1.5 + "rem" }}>
                <p className="howitworkeachparagraph">
                  Automated payment receipts are sent to designated phone
                  numbers/email addresses upon receipt of payment.
                </p>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default HowitWorks;
