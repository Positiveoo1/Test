import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductL from './components/ProductL';
import Adding from './components/Adding';
import Error from './components/Error';

function App() {
  return (
    <>
    <Router>
    <Routes>

  <Route path='/' element={<ProductL />}/>
  <Route path='adding' element={<Adding />} />
  <Route path='*' element={<Error />} />

</Routes>
    </Router>
   
     

    </>
  );
}

export default App;
