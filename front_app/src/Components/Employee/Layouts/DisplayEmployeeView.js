import React from 'react';

import HeaderEmployee from './HeaderEmployee'
import BottomAppBar from './BottomAppBar'
import './DisplayEmployeeView.css';


 const DisplayEmployeeView = ({ children, ...rest } ) => {

  return (
    <div id="employees">
      <div className="employee-page">
          <HeaderEmployee />
           {children}
      </div>
    </div>
  );
} ;

export default DisplayEmployeeView ;
