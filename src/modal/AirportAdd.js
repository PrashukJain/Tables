import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { Button,Form,Row,Col} from 'react-bootstrap';
export default function airportAdd({handleClose,handleSubmit,handle,row}) {
    return (
     <>
     <Modal show={true} className="modal" >
       <Modal.Header closeButton onClick={handleClose}>
         <Modal.Title>Airport Info</Modal.Title>
       </Modal.Header>
       <form onSubmit={handleSubmit}>
       <Modal.Body>
      
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">City<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="text" name="city" onChange={(e) => {handle(e);}}  value={row.city} pattern="[a-zA-Z ]*" title='Please enter alphabets only.' required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">Country<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="text" name="country" onChange={(e) => {handle(e);}}  value={row.country} pattern="[a-zA-Z]*" title='Please enter alphabets only.'required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">iata</Form.Label>
    <Col sm="9">
      <Form.Control type="text"  name="iata" onChange={(e) => {handle(e);}} value={row.iata}  />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">icao</Form.Label>
    <Col sm="9">
      <Form.Control type="text"  name="icao" onChange={(e) => {handle(e);}} value={row.icao}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">TimeZone</Form.Label>
    <Col sm="9">
      <Form.Control type="text"  name="timezone" onChange={(e) => {handle(e);}} value={row.timezone}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">Airport Title<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="text"   name="title" onChange={(e) => {handle(e);}} value={row.title} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">valid from<span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="date"   name="validFrom" onChange={(e) => {handle(e);}} value={row.validFrom} required/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" >
    <Form.Label column sm="3">valid to <span className="ml-1 text-danger">*</span></Form.Label>
    <Col sm="9">
      <Form.Control type="date"  name="validTo" onChange={(e) => {handle(e);}} value={row.validTo} required/>
    </Col>
  </Form.Group>
       </Modal.Body>
       <Modal.Footer>
         <Button type="submit" variant="dark" >
           Submit 
         </Button>
       </Modal.Footer>
       </form>
     </Modal>
     </>
    )
}
