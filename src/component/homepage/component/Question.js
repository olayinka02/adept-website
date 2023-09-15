import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { easeOut, motion } from "framer-motion";
import "../../homepage/homepage.css";

const QuestionData = [
  {
    id: "1",
    num:"0.2",
    Question: "What is NUBAN Account Number ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "2",
    num:"0.4",
    Question: "How do I make payment to my NUBAN Account number ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "3",
    num:"0.6",
    Question: "Is there a service charge ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "4",
    num:"0.8",
    Question: "How do I confirm that my payment was successful ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
  {
    id: "5",
    num:"0.9",
    Question: "Do I need to get a unique NUBAN for each payment ?",
    Answer: "Lorem ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas  dolor sit amet consectetur. Vitae tempor tortor tempus egestas  ipsum dolor sit amet consectetur. Vitae tempor tortor tempus egestas ",
  },
];

function Question() {
  return (
    <Container fluid className="FAQ" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: -5, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4, timingFunction: easeOut }}
        viewport={{ once: true }}
      >
        <center>
        <div className="circleradiusdivx1" >Support</div>
        </center>
  
      <h2 style={{fontFamily:'jost',fontSize:2.2+'rem',color:'#515151',textAlign:'center'}} ><strong>Frequently Asked Questions</strong></h2>
      <p style={{textAlign:'center', fontFamily:'jost',fontSize:0.85+'rem'}}>Below are list of frequently asked questions, tap on a question to view the answer.</p>
      </motion.div>
      <br />

      <Accordion className="mainaccordion" defaultActiveKey="0" flush>
        {QuestionData.map((item) => (
           <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: -5, opacity: 1 }}
           transition={{ duration: 0.3, delay: item.num, timingFunction: easeOut }}
           viewport={{ once: true }}
         >
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header>{item.Question}</Accordion.Header>
            <Accordion.Body style={{ justifyContent: 'left' }}>
              {item.Answer}
            </Accordion.Body>
          </Accordion.Item>
          </motion.div>
        ))}
      </Accordion>

    </Container>
  )
}

export default Question;
