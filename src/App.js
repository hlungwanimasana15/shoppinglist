import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Display from './Components/Display'
import store from './app/store';
import Add from './Components/Add';
import EditB from './Components/EditButton';


function App() {
  return (
    <div >
      <Provider store={store}>
        <Routes>
            <Route path='/add' element={<Add />} />
            <Route path="/" element={<Display />} />
            <Route path="/edit" element={<EditB />} />
        </Routes>
      </Provider>
    </div >
  );
}

export default App;
