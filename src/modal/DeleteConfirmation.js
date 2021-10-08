import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function DeleteConfirmation({handleClose,handleDelete}) {
    return (
        <div>
           <Modal show={true}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">Do you want to delete?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>  
        </div>
    )
}
