import { useRef, useState } from "react"
import { Button, Card, Col, Container, Row, ProgressBar as BarProgress, Form } from "react-bootstrap"

export const ProgressBar= () => {
    const [now, setNow] = useState(0)
    const inputRef = useRef(null)

    const handleDownload = () => {

        setInterval(() => {
            /* setNow(now + 1) */
            const valueInput = inputRef.current?.value
            const interval = setNow((now) => {
                if(now === +valueInput){
                        clearInterval(interval)
                        return now
                }
                    return now + 1
            })
        }, 1000);
    }

    return(
        <Container> 
        <Row className="mt-5">
          <Col xs={12} md={{span: 8, offset:2}} className='text-center'>
          <Card style={{ width: '18rem' }} className='m-auto'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Progress Bar</Card.Title>
                <BarProgress animated now={now} label={`${now}%`} variant='danger' />;
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Form.Control 
                    ref={inputRef}
                    placeholder='ingresar porcentaje de carga'
                    className='my-3'
                ></Form.Control>
                <Button variant="primary" onClick={handleDownload}>Descargar</Button>
            </Card.Body>
            </Card>
                     
          </Col>
        </Row>
      </Container>
    )
}