import React from 'react';
import './App.css';
import TexteDescriptif from'./TexteDescriptif.js';
import KickOffPage from './Components/employee_surveys/KickOffPage';

function App() {

  //RRRRRRRRRRRRRRRR___  Rendering  ___RRRRRRRRRRRRRRRRRRR
  return (

    <div className="App">
      <TexteDescriptif/>
      <KickOffPage/>
    </div>
  );
  //RRRRRRRRRRRRRRRRRRRR__ __RRRRRRRRRRRRRRRRRRRRRRRRRR
}

export default App;
