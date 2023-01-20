import React, { useState } from "react";
import { Button, Col, Container, Row, Toast } from "react-bootstrap";

function ShowHideWide() {
  const [show, setShow]=useState(false)

  const handleShowMessage = () =>{
    setShow(!show)
  }
  return (
    <Container bg='light'>
      <Row className="mt-5">
        <Col xs={12} md={{ span: 6, offset: 3 }} className="mb-2 text-center">
          <Button onClick={handleShowMessage} variant={show ? "danger" : "primary"} >
            {show ?"Ocultar" : "Mostrar" } <strong>MSJ</strong>
          </Button>
          <Toast show={show}  onClose={handleShowMessage} className="m-auto">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">React with Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Aprendiendo a usar la combinacion</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}

export default ShowHideWide;
