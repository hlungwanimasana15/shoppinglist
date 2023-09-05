import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import NavBar from './NavBar'
import { ImSmile } from 'react-icons/im'
import { db } from '../config/firestoredb'
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '../firestoreRedux/Getdata'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import EditB from './EditButton';
import { fetchData } from '../firestoreRedux/Data';
import Add from './Add';
import { deleteItems } from '../firestoreRedux/addSlice';

function Display() {


  const [show, setShow] = useState(false);
  const [selectItem, setSelectItems] = useState("")
  const dispatch = useDispatch()

  // handles edit
  const handleEdit = (id) => {

    const [item] = data.filter(item => item.id === id)
    setSelectItems(item)
    setShow(true)

  }

  //the delete
  const { loading, error, data } = useSelector((state) => state.data);

  useEffect(() => {

    dispatch(fetchData())

  }, [])

  return (
    <div className='container'>
      <NavBar />
      <br></br>
      <h1>Happy Shopping <ImSmile /> </h1>

      < Add />
      <br></br>
      <Card style={{ width: '18rem' }}>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.descriptions}</p>
            <p>{item.quantity}</p>

            <Button onClick={() => handleEdit(item.id)}><AiOutlineEdit /></Button>
            <Button onClick={() => dispatch(deleteItems(item.id))}>< AiOutlineDelete /></Button>
          </li>
        ))}
      </Card>

      {show && < EditB show={show} selectItem={selectItem} setShow={setShow} />}

    </div>
  )
}

export default Display