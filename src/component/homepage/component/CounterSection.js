import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { easeOut, motion } from "framer-motion";

function CounterSection() {
  return (
    <Container fluid className="counter">
      <Row className="counterRow">
        <Col xs={12} sm={4} md={4} lg={4}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <center>
              <div className="firstcounter" style={{ gap: 0.5 + "rem" }}>
                <center>
                  <div>
                    <h1 className="countervalue">
                      <strong>
                        <CountUp
                          end={100}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                          duration={1}
                        />
                        %
                      </strong>
                    </h1>
                  </div>
                  <div className=" d-flex align-items-center  justify-content-center">
                    <p className="counterparagraph">
                      Digitized, fast seamless and automated payment
                    </p>
                  </div>
                </center>
              </div>
            </center>
          </motion.div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <center>
              <div className="secondcounter" style={{ gap: 0.5 + "rem" }}>
                <center>
                  <div>
                    <h1 className="countervalue">
                      <strong>
                        <CountUp
                          end={60}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                          duration={3}
                        />
                        Sec
                      </strong>
                    </h1>
                  </div>
                  <div className=" d-flex align-items-center  justify-content-center">
                    <p className="counterparagraph">maximum turnaround time</p>
                  </div>
                </center>
              </div>
            </center>
          </motion.div>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, timingFunction: easeOut }}
            viewport={{ once: true }}
          >
            <center>
              <div style={{ gap: 0.5 + "rem" }}>
                <center>
                  <div>
                    <h1 className="countervalue">
                      <strong>Zero</strong>
                    </h1>
                  </div>
                  <div className=" d-flex align-items-center  justify-content-center">
                    <p className="counterparagraph">
                      save with supportive environments
                    </p>
                  </div>
                </center>
              </div>
            </center>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default CounterSection;
