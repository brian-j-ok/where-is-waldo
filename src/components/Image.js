import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import db from '../firebase/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import imgURL from '../assets/WaldoBanner.jpg';

const Image = () => {
  const [coords, setCoords] = useState({x: 0, y:0});

  const [menuCoords, setMenuCoords] = useState({x: 0, y:0});
  const [toggleMenu, setToggleMenu] = useState(false);

  const [image] = useState(imgURL);

  const [characterCoords, setCharacterCoords] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const querySnapshot = await getDocs(collection(db, "characterCoords"));
      const characterArr = [];

      querySnapshot.forEach((doc) => {
        characterArr.push({
          character: doc.id,
          xCoord: doc.data().xCoord,
          yCoord: doc.data().yCoord,
        })
      });

      setCharacterCoords(characterArr);
    }

    fetchData();

  }, [characterCoords]);



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