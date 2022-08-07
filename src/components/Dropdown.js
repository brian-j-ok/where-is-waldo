import React from 'react';

import "../styles/Dropdown.css";

const Dropdown = (props) => {

  const handleInput = (e) => {
    console.log(e.target.innerHTML);

    const character = props.characterCoords.find(({character}) => character === e.target.innerHTML.toLowerCase());

    console.log(character);

    console.log(props.xCoord);
    console.log(props.yCoord);
    console.log(props.characterCoords);
  }

  return (
    <div 
      style = {{
        top: `${props.yCoord}px`,
        left: `${props.xCoord}px`,
      }}
    >
      <ul>
        <li onClick={handleInput}>Waldo</li>
        <li>Yellow Waldo</li>
        <li>Wizard</li>
      </ul>
    </div>
  )
}

export default Dropdown;