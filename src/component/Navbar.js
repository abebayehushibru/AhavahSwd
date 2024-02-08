import React, {  useState } from "react";
import "./Navbar.css";
import cv from "../cv/CV.pdf"

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavClick = (e) => {
    setActive({ e });
  };

  window.onclick=function (e) {
    if (e.target1!==document.querySelector("nav")) {
      
    }
  }

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    setClicked(false);
    if (currentScrollPos > prevScrollpos) {
      setVisible(false);
     
      
      
   ;
    } else {
      
      setVisible(true);
        
         

    }
    setPrevScrollpos( currentScrollPos );
    
  };

  return (
    <>
      <nav className={!visible?"moveup":""}>
        <a href="index.html" className="logo">
          Ahavah <span style={{ color: "black" }}> SWD</span>
        </a>
        <div>
          <ul
            id="Navbar"
            className={clicked ? "navbar active" : "navbar"}
          >
            <li>
              <a
                href="#home"
                className={props.hover === "home" ? "active" : ""}
                onClick={() => handleNavClick(1)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={props.hover === "about"  ? "active" : ""}
                onClick={() => handleNavClick(2)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#quality"
                className={props.hover === "quality"  ? "active" : ""}
                onClick={() => handleNavClick(3)}
              >
                Quality
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={props.hover === "skills"  ? "active" : ""}
                onClick={() => handleNavClick(4)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#service"
                className={props.hover === "service"  ? "active" : ""}
                onClick={() => handleNavClick(5)}
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={props.hover === "portfolio" ? "active" : ""}
                onClick={() => handleNavClick(6)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={props.hover === ""? "active" : ""}
                onClick={() => handleNavClick(6)}
              >
                Contact
              </a>
            </li>

            <a href={cv} className="supportme" download="Abebayehu shibru cv pdf" target="_bank">
             Download CV
            </a>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
