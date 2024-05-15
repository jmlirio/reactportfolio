import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Nav from 'react-bootstrap/Nav';
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import fbicon from './fbicon.png';
import yticon from './yticon.png';
import githubicon from './githubicon.png';


import "./App.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Router>
        <Navbar className="fixed-top">
          <Container>
            <Navbar.Brand >LIRS</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link onClick={() => scrollToRef(homeRef)} style={{ marginRight: '10px' }}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToRef(aboutRef)} style={{ marginRight: '10px' }}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToRef(educationRef)} style={{ marginRight: '10px' }}>Education</Nav.Link>
              <Nav.Link onClick={() => scrollToRef(contactRef)} style={{ marginRight: '10px' }}>Contact</Nav.Link>
            </Nav>
            <div className="nav-icons">
           
            <a href="https://www.facebook.com/MatthewLirioo" target="_blank" rel="noopener noreferrer">
              <img  src={fbicon} alt="Icon 1" style={{ marginRight: '10px' }}/>
              </a>

              <a href="https://www.youtube.com/@SikeCodm?si=EMCdcicQa3ZTF4ju" target="_blank" rel="noopener noreferrer">
              <img src={yticon} alt="Icon 2" style={{ marginRight: '10px' }}/>
              </a>

              <a href="https://www.github.com/jmlirio" target="_blank" rel="noopener noreferrer">
              <img src={githubicon} alt="Icon 3" style={{ marginRight: '10px' }}/>
              </a>
              <span className="icon-space"></span>
            </div>
          </Container>
      
        </Navbar>
      

        <Container className="mt">
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

      <div className="section1" ref={homeRef}>
        <Home />
      </div>
      <div className="section2" ref={aboutRef}>
        <About />
      </div>
      <div className="section3" ref={educationRef}>
        <Education />
      </div>
      <div className="section4" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
