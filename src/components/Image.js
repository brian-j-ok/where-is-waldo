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

  const [correct, setCorrect] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, []);

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

  const addToCorrect = (character) => {
    setCorrect([...correct, character]);
    console.log(correct);
  }

  return (
    <div>
      <img src={image} alt="" onMouseMove={handleMouseMove} onClick={handleInput} />

      {/* {characterCoords.map(character => {
        if(correct.includes(character.character)) {
          return <h1>{character.character}</h1>
        }
      })} */}

      {toggleMenu && 
        <Dropdown xCoord={menuCoords.x} yCoord={menuCoords.y} characterCoords={characterCoords} addToCorrect={addToCorrect} correct={correct}/>}
      
      {(correct.length === 3) && <h1>You Win!</h1>}
    </div>
  )
}

export default Image;