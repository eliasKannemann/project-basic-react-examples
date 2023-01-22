import { useRef, useState } from "react"
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form, Modal } from "react-bootstrap"
import ProgressBar2 from "./ProgressBar2"

export const ProgressBar= () => {
    const [now, setNow] = useState(0)
    const [intervalState, setIntervalState] = useState(null)
    const inputRef = useRef(null)
    const [btnDisable, setBtnDisable] = useState(true)
    const [showModal, setShowModal]= useState(true)

    const handleDownload = () => {
        const valueInput = +inputRef.current?.value
        const isValueValid = !isNaN(valueInput ) && valueInput > 0  && valueInput <= 100
        setShowModal(!isValueValid)

        if(intervalState){
          clearInterval(intervalState)
        }

        if(isValueValid){
          const interval = setInterval(() => {         
                      setNow((now) => {
                          if(now === valueInput){
                                  clearInterval(interval)
                                  return now
                          }
                              return now + 1
                      })
                  }, 1000);
                  setIntervalState(interval)
              
        }else{
          handleReset()
        }

      }

    const handleReset = () => {
        clearInterval(intervalState)
        setNow(0)
    }

    const handleChange = ({target:{value}}) => {
        setBtnDisable(!!+value)
    }

    const handleShow = () => {
      setShowModal(false)
    }
    return(
        <Container> 
        <Row className="mt-5">
          <Col xs={12} md={{span: 8, offset:2}} className='text-center'>
          <Card style={{ width: '18rem' }} className='m-auto'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Progress Bar</Card.Title>
                <BarProgress animated now={now} label={`${now}%`} variant='danger' />

                <ProgressBar2 now={now} label={`${now}%`}/>

                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Form.Control 
                    ref={inputRef}
                    placeholder='ingresar porcentaje de carga'
                    className='my-3'
                    onChange={handleChange}
                    type='number'
                ></Form.Control>
                <Button variant="primary" onClick={handleDownload} className='mx-1' disable={btnDisable}>Descargar</Button>
                <Button variant="danger" onClick={handleReset}>
                    Reiniciar
                </Button>
            </Card.Body>
            </Card>
                     
          </Col>
          

        </Row>
         
      <Modal  show={showModal} onHide={handleShow} >
        <Modal.Header closeButton>
          <Modal.Title>Mensaje...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className="text-danger text-center py-8">
          ❗⛔  ERROR... ❌💀
          </h2>
          <p className="text-muted fs-8 text-center">
            Solo se acepta valores numericos. 📌
            El valor debe ser mayor a 0 y menor = a 100❗
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow} >
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      </Container>
    )
}