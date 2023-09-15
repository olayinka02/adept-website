import React, {useState} from 'react';
import LoginModal from "../Login/LoginModal";
import { Button } from 'react-bootstrap';
import CreateaccModal from "../Create-account/CreateaccModal";

function BottonDiv() {

    const [loginShow, setLoginShow] = useState(false);
    const [createaccShow, setCreateaccShow] = useState(false);
     
    
      const handleLoginClose = () => setLoginShow(false);
      const handleLoginShow = () => setLoginShow(true);
  
      const handleCreateaccClose = () => setCreateaccShow(false);
      const handleCreateaccShow = () => setCreateaccShow(true);

  return (
    <>
    <Button
                variant="outline-primary"
                onClick={handleLoginShow}
                style={{
                  borderColor: "#F14810",
                  color: "#F14810",
                  borderRadius: 0.3 + "rem",
                }}
                className="button"
                size="md"
              >
                <span
                  style={{
                    fontSize: 0.8 + "rem",
                    marginLeft: 0.5 + "rem",
                    marginRight: 0.5 + "rem",
                  }}
                >
                  LOGIN
                </span>
              </Button>{" "}


              <LoginModal show={loginShow} handleClose={handleLoginClose} />

              <Button
                variant="primary"
                onClick={handleCreateaccShow}
                style={{
                  backgroundColor: "#F14810",
                  borderColor: "#F14810",
                  borderRadius: 0.3 + "rem",
                }}
                className="button"
                size="md"
              >
                <span
                  style={{
                    fontSize: 0.8 + "rem",
                    marginLeft: 0.3 + "rem",
                    marginRight: 0.3 + "rem",
                  }}
                >
                  CREATE AN ACCOUNT
                </span>
              </Button>

              <CreateaccModal show={createaccShow} handleClose={handleCreateaccClose} />  
    </>
  )
}

export default BottonDiv
