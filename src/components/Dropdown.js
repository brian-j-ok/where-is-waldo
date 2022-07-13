import React from 'react';

import "../styles/Dropdown.css";

const Dropdown = (props) => {


  return (
    <div 
      style = {{
        top: `${props.yCoord}px`,
        left: `${props.xCoord}px`,
      }}
    >
      <h1>Coord: {props.xCoord} {props.yCoord}</h1>
    </div>
  )
}

export default Dropdown;