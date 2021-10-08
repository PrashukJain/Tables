import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { Button,Form,Row,Col} from 'react-bootstrap';
export default function TimezoneAdd({handleClose,handleSubmit,handle,object}) {
    return (
     <>
     <Modal show={true}  >
       <Modal.Header closeButton onClick={handleClose}>
         <Modal.Title>Timezone Info</Modal.Title>
       </Modal.Header>
       <Form onSubmit={handleSubmit}>
       <Modal.Body>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">UTC <span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="text"  onChange={(e) => {handle(e);}} name="utc" value={object.utc} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">valid from <span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="date" name="validFrom" value={object.validFrom} onChange={(e) => {handle(e);}}  required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">valid to<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="date" name="validTo" value={object.validTo} onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="dark"  type="submit">
           Submit 
         </Button>
       </Modal.Footer>
       </Form>
     </Modal>
     </>
    )
}