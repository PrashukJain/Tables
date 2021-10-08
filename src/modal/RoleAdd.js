import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { Button,Form,Row,Col} from 'react-bootstrap';
export default function RoleAdd({handleClose,handleSubmit,handle,object}) {
  return (
     <>
     <Modal show={true}  >
       <Modal.Header closeButton onClick={handleClose}>
         <Modal.Title>Role Info</Modal.Title>
       </Modal.Header>
       <Form onSubmit={handleSubmit}>
       <Modal.Body>
       <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Role <span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text" name="role" value={object.role}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Scope<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text"  name="scope" value={object.scope}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="4">Function Role<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="8">
      <Form.Control type="text"  name="functionRole" value={object.functionRole}  onChange={(e) => {handle(e);}} required/>
    </Col>
  </Form.Group>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="dark" type="submit" >
           Submit 
         </Button>
       </Modal.Footer>
       </Form>
     </Modal>
     </>
    )
}
