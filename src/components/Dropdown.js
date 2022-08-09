import React from 'react';

import "../styles/Dropdown.css";

const Dropdown = (props) => {

  const handleInput = (e) => {
    const character = props.characterCoords.find(({character}) => character === e.target.innerHTML.toLowerCase());

    console.log(props.xCoord);
    console.log(props.yCoord);
    console.log(character);

    if ((character.xCoord + 50) >= props.xCoord && (character.xCoord - 50) <= props.xCoord) {
      if ((character.yCoord + 50) >= props.yCoord && (character.yCoord - 50) <= props.yCoord) {
        props.addToCorrect(character.character);
        alert("You found " + character.character + "!");
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
        <li onClick={handleInput} class={props.correct.includes("waldo") ? 'disabled' : 'none'}>Waldo</li>
        <li onClick={handleInput} class={props.correct.includes("odlaw") ? 'disabled' : 'none'}>Odlaw</li>
        <li onClick={handleInput} class={props.correct.includes("wizard") ? 'disabled' : 'none'}>Wizard</li>
      </ul>
    </div>
  )
}

export default Dropdown;