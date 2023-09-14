import React from "react";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import "../../homepage/homepage.css";

const Firstset = [
  {
    id: "1",
    imageUrl: "/assets/startime.png",
  },
  {
    id: "2",
    imageUrl: "/assets/sterling.png",
  },
  {
    id: "3",
    imageUrl: "/assets/aedc.png",
  },
  {
    id: "4",
    imageUrl: "/assets/wema.png",
  },
];

const Secondset = [
  {
    id: "1",
    imageUrl: "/assets/electricity.png",
  },
  {
    id: "2",
    imageUrl: "/assets/aedc.png",
  },
  {
    id: "3",
    imageUrl: "/assets/tstv.png",
  },
  {
    id: "4",
    imageUrl: "/assets/ibedc.png",
  },
];

const FirstsetBrand = () => {
  return (
    <Container>
      <Row>
        {Firstset.map((item) => (
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="image-container">
              <center>
                <Image id="imagex" width={190} src={item.imageUrl} />
              </center>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const SecondsetBrand = () => {
  return (
    <Container>
      <Row>
        {Secondset.map((item) => (
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="image-container">
              <center>
                <Image id="imagex" width={190} src={item.imageUrl} />
              </center>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

function Partner() {
  return (
    <Container
      fluid
      className="partner"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{ fontFamily: "jost", fontSize: 2.5 + "rem", color: "#515151" }}
      >
        <strong>Partners</strong>
      </h2>
      <p
        style={{
          textAlign: "center",
          fontFamily: "jost",
          fontSize: 0.85 + "rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus
        egestas dolor sit amet consectetur. Vitae tempor tortor tempus egestas
        ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas
      </p>
      <br />
      <div className="carousel-container">
        <Carousel style={{width:100+'%'}} className="mt-auto">
          <Carousel.Item>
            <div>
            <FirstsetBrand />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
            <SecondsetBrand />
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div>
            <FirstsetBrand />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Partner;
