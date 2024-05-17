import React from "react";
import "./App.css";
import matty from './matty.png';

function Home() {
  return (
   
      <div className="intro-text">
        
    <p className="greet">Hello, I'm</p>
    <p className="name">Matthew</p>
    <p className="description">A BSCS student and figma designer.</p>


    <div className="man popup">
      <img src={matty} alt="Matthew's Image"/>
    </div>



      </div>
    
  );
}

export default Home;
