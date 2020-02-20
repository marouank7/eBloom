import React from 'react';

import HeaderManager from './HeaderManager'
// import './DisplayManagerView.css';


 const DisplayManagerView = ({ children, ...rest } ) => {

  return (
    <div id="managers">
          <HeaderManager />
           {children}
    </div>
  );
} ;

export default DisplayManagerView ;
