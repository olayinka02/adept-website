import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import featureimage from '../../../assets/featureimage.svg';
import "../../homepage/homepage.css";

function  Features() {
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
          <h2 style={{color:'#515151'}}>
            <strong>Features</strong>
          </h2>
          <ul style={{fontSize:0.85+'rem',lineHeight:205+'%'}} className="Featurelist">
            <li>Interactive, easy to use administrative Dashboard with business analytics tools.</li>
            <li>Efficient reporting tools.</li>
            <li>Audit Trail.</li>
            <li>Centralized Management and support.</li>
            <li>Notifications and Reminders.</li>
            <li>Schedule/generate reports.</li>
            <li>Supports Multiple payment channels</li>
            <li>Manage settlements.</li>
            <li>Instant transaction fulfilment.</li>
          </ul>

    
        </Col>
        <Col className="order-md-1" xs={12} sm={12} md={6} lg={6}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
           
              <Image  src={featureimage} width={100+'%'} />
          
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
