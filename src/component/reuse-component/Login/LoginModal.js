import React from 'react'
import { Offcanvas, Form, Button } from 'react-bootstrap'

function LoginModal( { show, handleClose }) {

    
  return (
    <div>
        <Offcanvas
              placement="end"
              show={show} onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Login</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formlabel">Email address</Form.Label>
                    <Form.Control
                      className="formcontrol"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formlabel">Password</Form.Label>
                    <Form.Control
                      className="formcontrol"
                      type="Enter Password"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <br />
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: "#0D6EFD",
                      borderColor: "#0D6EFD",
                    }}
                    className="button"
                    size="md"
                  >
                    <span
                      style={{
                        fontSize: 0.85 + "rem",
                        marginLeft: 0.8 + "rem",
                        marginRight: 0.8 + "rem",
                      }}
                    >
                      Login
                    </span>
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>
    </div>
  )
}

export default LoginModal
