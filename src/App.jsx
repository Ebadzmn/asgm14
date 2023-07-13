import React from 'react';

import Header from './components/header';
import Content from './components/Content';
import Ffooter from './components/Footer'
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <div>
      <Header Title="Name React APP" />
      <Content />

      <Ffooter />
  
      
    </div>
  );
};

export default App;