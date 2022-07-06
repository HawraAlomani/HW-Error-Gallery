import React, { useEffect, useState } from "react";
import CardData from "./CardData";
import Button from 'react-bootstrap/Button';

function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
      <Button variant="light" onClick={myRandomEmg} className="ImgBtn">Get a new image</Button>{' '}
      <br/>
      <img className="RandomImage" src={memeImage}></img>
    </div>
  );
}

export default Cards;
