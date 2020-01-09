import React from 'react';
const NotImportant = ({resetScore}) => {
    return(

    <div className="not-important" onChange={resetScore}>
        <input type="checkbox" value="Not Important"/><div style={{"marginLeft" : "10px"}}>Not important</div>
    </div>
    )
}

export default NotImportant;