import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { Button,Form,Row,Col} from 'react-bootstrap';
export default function ErrorMessageAdd({handleClose,handleSubmit,handle,object}) {
    return (
     <>
     <Modal show={true}  >
       <Modal.Header closeButton onClick={handleClose}>
         <Modal.Title>Error</Modal.Title>
       </Modal.Header>
       <Form onSubmit={handleSubmit}>
       <Modal.Body>
       <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Code<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text"  name="errorCode" value={object.errorCode}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Language<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text"  name="language" value={object.language}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Error Message<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text"  name="errorMessage" value={object.errorMessage}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Severity<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text" name="severity" value={object.severity}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="dark" type="submit">
           Submit 
         </Button>
       </Modal.Footer>
       </Form>
     </Modal>
     </>
    )
}