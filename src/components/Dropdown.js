import React, { useState } from 'react';

import "../styles/Dropdown.css";

const Dropdown = (props) => {
  const [active, setActive] = useState([true, true, true]);

  const handleInput = (e) => {
    const character = props.characterCoords.find(({character}) => character === e.target.innerHTML.toLowerCase());

    console.log(props.xCoord);
    console.log(props.yCoord);
    console.log(character);

    if ((character.xCoord + 50) >= props.xCoord && (character.xCoord - 50) <= props.xCoord) {
      if ((character.yCoord + 50) >= props.yCoord && (character.yCoord - 50) <= props.yCoord) {
        const index = props.characterCoords.findIndex(({character}) => character === e.target.innerHTML.toLowerCase())
        const temp = active;
        temp[index] = false;
        setActive(temp);
      }
    }
  }

  return (
    <div 
      style = {{
        top: `${props.yCoord}px`,
        left: `${props.xCoord}px`,
      }}
    >
      <ul>
        <li onClick={handleInput} class={active[0] ? 'none' : 'disabled'}>Waldo</li>
        <li onClick={handleInput} class={active[0] ? 'none' : 'disabled'}>Yellow Waldo</li>
        <li onClick={handleInput} class={active[0] ? 'none' : 'disabled'}>Wizard</li>
      </ul>
    </div>
  )
}

export default Dropdown;