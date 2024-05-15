import React, { useEffect, useState } from "react";
import "./App.css";
import MIB from './MIB.png';

function About() {
  return (
    <div>
      <div className="man1">
      <img src={MIB}/>
      </div>

      <div className="big-M">
        <p>M</p>
      </div>

      <div className="about-text">
        <p>y name is John Matthew J. Lirio, I’m a BSCS 3rd Year<br></br> student and a self taught web and mobile designer.</p>
        <p>I always want to do design for mobile or web because<br></br> this is where I am entertained and happy. I started<br></br> designing when there was a typhoon and there was no<br></br> electricity, so I did it so I wouldn't be bored, I made my<br></br> own wallpaper for my phone and that's it, in one day I<br></br> made 15 minimalistic wallpapers.</p>
        <p>That's the reason why I love such activities so I choose<br></br> this field.</p>
      </div>
    </div>
  );
}

export default About;
