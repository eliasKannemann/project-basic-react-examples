import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "../Hook/useForm";
import FormTask from "./Form";

function Task() {
  const [inputValue, setInputValue, handleChangeInputsValue, reset] = useForm();
  const refForm = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12} lg={3}>
          <FormTask
            onChange={handleChangeInputsValue}
            inputValue={inputValue}
            onSubmit={handleSubmit}
            refForm={refForm}
          />
        </Col>

        <Col sm={12} lg={9}>
          contenido
        </Col>
      </Row>
    </Container>
  );
}

export default Task;
