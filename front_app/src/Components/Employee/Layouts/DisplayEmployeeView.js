import React from 'react';

import HeaderEmployee from './HeaderEmployee'
import BottomButton from './BottomButton'
import './DisplayEmployeeView.css';


 const DisplayEmployeeView = ({ children, ...rest } ) => {

  return (
    <div id="employees">
      <div className="employee-page">
          <HeaderEmployee />
           {children}
          <BottomButton />
      </div>
    </div>
  );
} ;

export default DisplayEmployeeView ;
