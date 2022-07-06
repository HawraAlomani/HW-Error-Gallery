import React from "react";
import {useEffect} from "react";
import {useState} from "react";

function About() {
  function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
    if(count >= 30){
    return <h1 className="ans">Yousef</h1>;
    }
  }
  return (
    <div className="aboutDiv">
      <h4 className="aboutText"> This simple gallery was designed with ♥ <br/>by the help of my MacBook Pro.</h4>
      <div className="guessDiv">
      <h5 className="aboutText"> By the way, could you guess my son's name?</h5>
      <p className="aboutText"> Hint: it starts with Y. The answer will appear after 1/2 min.</p>
      </div>
      <Timer/>
    </div>
  );
}

export default About;
