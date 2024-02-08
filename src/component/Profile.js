
import Pimage from "../images/profile.jpg";
import "./Profile.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { Component } from "react";

import AOS from "aos";
import  "aos/dist/aos.css";
class Profile extends Component {
  componentDidMount(){
    AOS.init({duration:2000});
       
      }
  render() {
  
    return (
      <>
        
        <div className="profile" data-aos="fade-up" id="home" onMouseOver={this.props.onMouseEnter("home")}>
        <img src={Pimage} alt="profile_image"></img>
          <div>
            <h5>i'm</h5>
            <h1>ABebayehu Shibru</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span> 
                <Typewriter
                  options={{
                    strings: ["Web Developer", "Web Designer", "App Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
