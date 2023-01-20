import { Container, Row, Col, Toast, Button } from "react-bootstrap"
import {useShow} from '../Hook/useShow'
 
function ShowHideMessage () {

  const {show, handleShowMessage } = useShow(false)
/*   const [show, setShow] = useState(false)

  const handleShowMessage = () => {
    setShow(!show)
  } */
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={{span: 6, offset:3}} className='text-center'>
           < Button  onClick={handleShowMessage} variant={show ? "danger" : "primary"}  className="mb-2">
              
              {show ? "Ocultar" : "Mostrar"}<strong> mensaje</strong>
            </Button>
          <Toast show={show}  onClose={handleShowMessage} className="m-auto">
            
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowHideMessage 