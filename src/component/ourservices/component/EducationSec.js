import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import educationimage from '../../../assets/educationimage.svg';
import "../../homepage/homepage.css";

function  EducationSec() {
  return (
    <Container fluid className="aboutadept">
         <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: -5, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
        viewport={{ once: true }}
      >
      <Row>
        <Col
          className="order-md-2 aboutadeptright"
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <h3 style={{color:'#515151'}}>
            <strong>Adept for Education (A4E)</strong>
          </h3>
          <p>A4E is a payment solution that enables Schools and Institutions to assign 
                unique Nigerian Uniform Bank Account Number (NUBAN) to every student for 
                the purposeof collection of fees and levies. It is designed to simplify 
                and automate payments. Payments made to this account Number automatically 
                generates notifications and receipts that are sent to all stakeholders.
            </p>

            <h5><strong>Benefits</strong></h5>

          <ul style={{fontSize:0.85+'rem',lineHeight:205+'%',marginLeft:-1+'rem'}} className="Featurelist">
            <li>Convenience and Accessibility.</li>
            <li>Instant receipt.</li>
            <li>Reminders and Notification.</li>
            <li>Instant verification.</li>
          </ul>

          <span style={{color:'#F14810', fontSize:0.8+'rem'}}>Read More</span>

    
        </Col>
        <Col className="order-md-1" xs={12} sm={12} md={6} lg={6}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
           
              <Image  src={educationimage} width={100+'%'} />
          
          </motion.div>
        </Col>
      </Row>
      </motion.div>
    </Container>
  );
}

export default EducationSec;
