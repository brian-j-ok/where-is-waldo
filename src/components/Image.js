import React, { useState } from 'react';

import Dropdown from './Dropdown';

import imgURL from '../assets/WaldoBanner.jpg';

const Image = () => {
  const [coords, setCoords] = useState({x: 0, y:0});

  const [menuCoords, setMenuCoords] = useState({x: 0, y:0});
  const [toggleMenu, setToggleMenu] = useState(false);

  const [image] = useState(imgURL);

  const handleMouseMove = (e) => {
    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  }

  const handleInput = () => {
    setMenuCoords({x: coords.x, y: coords.y});
    setToggleMenu(!toggleMenu);
  }

  return (
    <div>
      <img src={image} alt="" onMouseMove={handleMouseMove} onClick={handleInput} />

      {toggleMenu && <Dropdown xCoord={menuCoords.x} yCoord={menuCoords.y} />}
    </div>
  )
}

export default Image;