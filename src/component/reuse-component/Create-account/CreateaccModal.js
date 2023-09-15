import React from "react";
import { Offcanvas, Row,Col } from "react-bootstrap";
import { ExternalLink } from 'react-external-link';
// import arrow from '../../../assets/arrow.svg';

function CreateaccModal({ show, handleClose }) {
  return (
    <div>
      <Offcanvas
        className="offcanvas"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h6
              style={{
                color: "white",
                fontSize: 1.8 + "rem",
                fontFamily: "jost",
              }}
            >
              Create an Account
            </h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="cardLink">
          <ExternalLink style={{textDecoration:'none'}} href='https://main.d3lxrnyrcth1za.amplifyapp.com/register'>
            <Row>
              <Col  xs={10} md={10} lg={10}>
              <h6 style={{color:'#ffffff'}}>Adept for Education (A4E)</h6>
              </Col>
              <Col  xs={2} md={2} lg={2}>
              {/* <Image className="arrow" src={arrow} /> */}
              </Col>
            </Row>
            </ExternalLink>
          </div>
          <br/>
          <div className="cardLink">
            <Row>
              <Col  xs={10} md={10} lg={10}>
              <h6 style={{color:'#ffffff'}}>Adept for Education (A4E)</h6>
              </Col>
              <Col  xs={2} md={2} lg={2}>
              {/* <Image className="arrow" src={arrow} /> */}
              </Col>
            </Row>
          </div>
          <br/>
          <div className="cardLink">
            <Row>
              <Col  xs={10} md={10} lg={10}>
              <h6 style={{color:'#ffffff'}}>Adept for Education (A4E)</h6>
              </Col>
              <Col  xs={2} md={2} lg={2}>
              {/* <Image className="arrow" src={arrow} /> */}
              </Col>
            </Row>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default CreateaccModal;
