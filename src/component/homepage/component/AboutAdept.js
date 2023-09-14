import React from "react";
import { Image, Row, Col, Container, Button } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import flowimage from "../../../assets/flowimage.png";
import payment from "../../../assets/payment.png";
import organisation from "../../../assets/organisation.png";
import institution from "../../../assets/institution.png";

function AboutAdept() {
  return (
    <Container fluid className="aboutadept">
      <Row>
        <Col
          className="order-md-2 aboutadeptright"
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <h2>
            <strong>What is Adept?</strong>
          </h2>
          <p>
            The payments ecosystem is digitizing fast and consumers expect
            payments to be fast, seamless and automated. Adept is aimed at
            removing delays in providing service value caused by human
            intervention and manual confirmation.
          </p>

          <p>
            Adept is a unique payment solution that provides public and private
            billing agencies and organization such as Discos, Schools,
            Hospitals, wholesalers etc. with a fully automated payment
            alternative for their customers by integrating payments into the
            electronic banking channels.It enables organizations assign unique
            Nigerian Uniform Bank Account Number (NUBAN) to every
            client/customer (old and new) for the purpose of receiving recurring
            payments.Payments made to this account Number automatically
            generates notifications which trigger relevant actions for the
            payment. The system is customized for each client based on their
            needs with a maximum turnaround time of 60 seconds.
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
              CREATE AN ACCOUNT
            </span>
          </Button>
        </Col>
        <Col className="order-md-1" xs={12} sm={12} md={6} lg={6}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <div className="aboutadeptimagecontainer">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.9 + 0.4,
                  timingFunction: easeOut,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={institution}
                  width={210}
                  className="institutionimage"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.9 + 0.8,
                  timingFunction: easeOut,
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={organisation}
                  width={210}
                  className="organisationimage"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.9 + 0.8 + 0.4,
                  timingFunction: easeOut,
                }}
                viewport={{ once: true }}
              >
                <Image src={payment} width={210} className="paymentimage" />
              </motion.div>
              <Image className="flowimage" src={flowimage} width={320} />
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutAdept;
