import React from 'react';
import { Container, Button} from 'react-bootstrap';
import "../../homepage/homepage.css";

import Avatarone from '../../../assets/Avatarone.png';
import Avatartwo from '../../../assets/Avatartwo.svg';
import Avatarthree from '../../../assets/Avatarthree.png';



const CircularCard = ({ imageSrc }) => {
  return (
    <div className="circular-card">
      <div className="circular-image">
        <img src={imageSrc} alt="Card" />
      </div>
    </div>
  );
};


function Contactus() {


  const buttonstyle = {
    paddingTop: 0.6 + 'rem',
    paddingBottom: 0.6 + 'rem',
    paddingLeft: 1.1 + 'rem',
    paddingRight: 1.1 + 'rem',
    fontWeight: '400',
    backgroundColor:'#F14810'
    
  }



  return (
    <Container fluid id="contact" >
      <Container className="Contactus">
        <center>
          <div className="card-stack">
            <div className="middle-card">
              <img src={Avatartwo} alt="Middle Card" />
            </div>
            <CircularCard imageSrc={Avatarone} alt="Avatarimage" />
            <CircularCard imageSrc={Avatarthree} alt="Avatarimage" />
          </div><br />
          <div style={{ marginTop: 2 + 'rem' }}>
            <h5 style={{ color: '#101828', fontSize: 1.4 + 'rem', fontWeight: '500', }}>Contact Us</h5>
            <p style={{ color: '#667085', fontSize: 0.86 + 'rem' }}>
            Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet </p>
            <Button style={buttonstyle}  variant="primary" className="button" size="md" >
              Get in touch
            </Button>
          </div>



          
        </center>
      </Container>
    </Container>
  );
}

export default Contactus;