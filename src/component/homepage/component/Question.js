import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import "../../homepage/homepage.css";

const QuestionData = [
  {
    id: "1",
    Question: "What is NUBAN Account Number ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "2",
    Question: "How do I make payment to my NUBAN Account number ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "3",
    Question: "Is there a service charge ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "4",
    Question: "How do I confirm that my payment was successful ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "5",
    Question: "Do I need to get a unique NUBAN for each payment ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
];

function Question() {
  return (
    <Container fluid className="FAQ" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>

      <div className="circleradiusdiv">Support</div>
      <h2 style={{fontFamily:'jost',fontSize:2.2+'rem',color:'#515151',textAlign:'center'}} ><strong>Frequently Asked Questions</strong></h2>
      <p style={{textAlign:'center', fontFamily:'jost',fontSize:0.85+'rem'}}>Below are list of frequently asked questions, tap on a question to view the answer.</p>
      <br />

      <Accordion className="mainaccordion" defaultActiveKey="0" flush>
        {QuestionData.map((item) => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.Question}</Accordion.Header>
            <Accordion.Body style={{ justifyContent: 'left' }}>
              {item.Answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

    </Container>
  )
}

export default Question;
