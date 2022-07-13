import React, { useEffect, useState } from 'react';

import imgURL from '../assets/WaldoBanner.jpg'

const Image = () => {
  const [coords, setCoords] = useState({x: 0, y:0});

  const [image, setImage] = useState(imgURL);

  const handleMouseMove = (e) => {
    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  }

  return (
    <div>
      <img src={image} alt="" onMouseMove={handleMouseMove} />
      <h2>Coords: {coords.x} {coords.y}</h2>
    </div>
  )
}

export default Image;