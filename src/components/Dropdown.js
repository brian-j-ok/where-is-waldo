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
      <ul>
        <li>Waldo</li>
        <li>Yellow Waldo</li>
        <li>Wizard</li>
      </ul>
    </div>
  )
}

export default Dropdown;