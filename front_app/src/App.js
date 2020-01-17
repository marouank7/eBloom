import React from 'react';

import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import BackOfficePage from './Components/admin_back-office/BackOfficePage';
import MyButton from "./Components/admin_back-office/MyButton";



function App() {

  /*
  c.1 -  KickOffPage displays a kick-off survey for new employee .
  */

  //Rendering_________

  return (

    <div className="App"> 
    <MyButton/>    
      {/* <KickOffPage/> c.1 */}
      {/* <BackOfficePage/> */}
      
    </div>
  );
  
}

export default App;
