import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NCS1 from './NCS1.jpg';
import NCF1 from './NCF1.png';
import NCF2 from './NCF2.png';

import "./App.css";

function Education() {
    return (

    

      <div className="images-educ">
        <div className="image-container">
          <img src={NCS1} alt="NCS1" style={{ marginRight: '20px' }}/>
          <div className="educ-description">
            <h3 className="educ-text">NAGA CENTRAL SCHOOL 1</h3>
            <p>I started studying here when I<br></br> was in grade 1 until grade 6. I also<br></br> finished elementary here.</p>
          </div>
        </div>
        
        <div className="image-container">
          <img src={NCF1} alt="NCF1" style={{ marginRight: '20px' }}/>
          <div className="educ-description">
            <h3 className="educ-text">NAGA COLLEGE FOUNDATION</h3>
            <p>I started studying here when I<br></br> was in grade 7 in 2015 until I was<br></br> a senior in high school. I also<br></br> finished senior high school here,<br></br> my track was TVL and we were in<br></br> Computer hardware servicing.</p>
          </div>
        </div>
        
        <div className="image-container">
          <img src={NCF2} alt="NCF2" style={{ marginRight: '20px' }}/>
          <div className="educ-description">
            <h3 className="educ-text">NAGA COLLEGE FOUNDATION</h3>
            <p>This is the school I attended for<br></br> college and the course I took was<br></br> BSCS and I am now in my 3rd<br></br> year at this school.</p>
          </div>
        </div>

      
      </div>
    );
}

export default Education;
