import React from 'react';

import './App.css';
import KickOffPage from './Components/employee_surveys/KickOffPage';
import BackOfficePage from './Components/admin_back-office/BackOfficePage';



function App() {

  /*
  c.1 -  KickOffPage displays a kick-off survey for new employee .
  */

  //Rendering_________

  return (

    <div className="App">     
      {/* <KickOffPage/> c.1 */}
      <BackOfficePage/>
    </div>
  );
  
}

export default App;
