import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';
import './index.css';

function App() {
  return (

      <Router>
          <Routes>
              <Route path="/display" element={<DisplayPage/>}/>
              <Route path="/" element={<FormPage/>}/>
          </Routes>
      </Router>
  );
};

export default App;

