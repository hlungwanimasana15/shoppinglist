import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../firestoreRedux/addSlice';


function Add() {

    const [name,setName]= useState("");
    const [descriptions,setDescriptions]=useState("");
    const [quantity,setQuantity]=useState("");

    const dispetch = useDispatch ()

    const handleSubmit = (e) => {
       e.preventDefault()

       dispetch(addItem({
        name:name,
        descriptions:descriptions,
        quantity:quantity
       }))
       
       setName("");
       setDescriptions("");
       setQuantity("");

    }

  return (
    <div>

      <br />

      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
      <Form.Control 
      type="text" 
      onChange={(e) => setName(e.target.value)}
       />
      </FloatingLabel>
      <br /> 
      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
      >
      <Form.Control type="text"  onChange={(e) => setDescriptions(e.target.value)} />
      </FloatingLabel>
      <br /> 
      <FloatingLabel
        controlId="floatingInput"
        label="quantity"
        className="mb-3"
      >
      <Form.Control type="number"  onChange={(e) => setQuantity(e.target.value)}  />
      </FloatingLabel>
      <br /> 

      <Button  variant="dark" onClick={handleSubmit}>Add</Button>
    </div>
  )
}

export default Add