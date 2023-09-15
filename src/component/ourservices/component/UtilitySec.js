import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import { easeOut, motion } from "framer-motion";
import utilityimage from '../../../assets/utilityimage.svg';
import "../../homepage/homepage.css";

function  UtilitySec() {
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
          className="aboutadeptright"
          xs={12}
          sm={12}
          md={7}
          lg={7}
        >
          <h3 style={{color:'#515151'}}>
            <strong>Adept for Utilities (A4U)</strong>
          </h3>
          <p>A4U enables Utility Providers such as Electricity Discos, Solar companies, 
             TV providers and other billers assign unique Nigerian Uniform Bank Account 
             Numbers(NUBAN) to every customer as a means of bill payments. NUBANs are 
             paired with the unique reference for the service such as Meter number, 
             Smartcard number e.t.c Payments made to these assigned NUBAN Bank Accounts 
             are verified instantly while automated payment receipts are sent to customers. 
             A4U ushers in a robust and seamless solution that goes beyond the current bill 
             payment challenges, to incorporating more access channels, instant transaction 
             verification, automated and tailored reporting, reconciliation and settlement. 
             In certain situations, it is even able to remind customers when they need to make 
             payments to prevent service interruptions.
            </p>

            <h5><strong>Benefits</strong></h5>

          <ul style={{fontSize:0.85+'rem',lineHeight:205+'%',marginLeft:-1+'rem'}} className="Featurelist">
            <li>Convenience and Accessibility.</li>
            <li>Transaction security.</li>
            <li>Instant receipt.</li>
            <li>Instant verification.</li>
            <li>Instant verification.</li>
          </ul>

          <span style={{color:'#F14810', fontSize:0.8+'rem'}}>Read More</span>

    
        </Col>
        <Col  xs={12} sm={12} md={5} lg={5}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: -5, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
           
              <Image  src={utilityimage} className="all-image" width={100+'%'} />
          
          </motion.div>
        </Col>
      </Row>
      </motion.div>
    </Container>
  );
}

export default UtilitySec;
