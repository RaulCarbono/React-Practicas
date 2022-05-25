import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/pokemon" element={<Pokemon />}/>
        <Route path='/*' element = {<h1>No encontrado</h1>} />
      </Routes>
    </div>
    
  );
}

export default App;
