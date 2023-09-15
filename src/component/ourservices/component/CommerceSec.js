import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import commerceimage from '../../../assets/commerceimage.svg';
import "../../homepage/homepage.css";

function  CommerceSec() {
  return (
    <Container fluid style={{marginBottom:6+'rem'}} className="aboutadept">
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
            <strong>Adept for Commerce (A4C)</strong>
          </h3>
          <p>A4C provides organizations with an interface to generate NUBAN Account numbers to be 
            paired with their clients and distributors, which canbe used to settle all recurring 
            payments. The interface helps keeps record of every transaction, manages each client’s 
            payment, sends automated reminders to clients before and after due date. It also allows 
            the administrators create, allocate, and charge custom payment structure for different 
            clients.
            </p>

            <h5><strong>Benefits</strong></h5>

          <ul style={{fontSize:0.85+'rem',lineHeight:205+'%',marginLeft:-1+'rem'}} className="Featurelist">
            <li>Deepens Collection through the use of all financial channels for collections.</li>
            <li>24/7 customer support.</li>
            <li>Automated Reporting.</li>
            <li>Reminders and Notification.</li>
            <l1>Payment splitting.</l1>
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
           
              <Image  src={commerceimage} className="all-image commerce-image" />
          
          </motion.div>
        </Col>
      </Row>
      </motion.div>
    </Container>
  );
}

export default CommerceSec;
