import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch } from 'react-redux';
import {  updatefirestoreDocument } from '../firestoreRedux/EditSlice';


function EditB({show,selectItem,setShow}) {


    
    const [name,setName]= useState(selectItem.name);
    const [descriptions,setDescriptions]=useState(selectItem.descriptions);
    const [quantity,setQuantity]=useState(selectItem.quantity);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

  console.log(selectItem);

  // handle update 
  const handleUpdate = (e) =>{
    e.preventDefault()

    const updateItem = {
      id: selectItem.id,
      data: {
        name : name,
        descriptions : descriptions,
        quantity : quantity
      }
    }

    dispatch(updatefirestoreDocument(updateItem));
    setShow(false);
  }

 
    
  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Save your changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
      <Form.Control 
      type="text" 
      onChange={(e) => setName(e.target.value)}
        value={name}/>
      </FloatingLabel>
      <br /> 
      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
      >
      <Form.Control type="text"
       onChange={(e) => setDescriptions(e.target.value)} 
       value={descriptions}/>
      </FloatingLabel>
      <br /> 
      <FloatingLabel
        controlId="floatingInput"
        label="quantity"
        className="mb-3"
      >
      <Form.Control type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}  />
      </FloatingLabel>
      <br /> 

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditB ;