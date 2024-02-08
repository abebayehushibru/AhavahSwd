import "./skills.css";
import { useEffect } from "react";
import AOS from "aos";
import  "aos/dist/aos.css";
function Skills(props) {
    useEffect(() => {
        AOS.init({duration:2000});
           
          }, []);
      return (
        <>
          <div className="mainContaire" data-aos="fade-up" id="skills" onMouseEnter={props.onMouseEnter("skills")}>
        <div className="container">
          <div className="Title">
            <h1>Skills</h1>
            <h3>Skills</h3>
          </div>
          <div className="skils">
            <div>
              <p >
                <span  style={{ width: "100%" }}>
                  <span>HTML</span>
                  <span  data-aos="fade-right" >html</span>
                </span>
                <span style={{ width: "0%" }}> 100%</span>
              </p>
              <p>
                
                <span  style={{ width: "100%" }}>
                  <span>CSS</span>
                  <span   data-aos="fade-right"> css</span>
                </span>
                 <span style={{ width: "0%" }}> 100%</span>
              </p>
              <p>
              
                <span style={{ width: "90%" }}>
                  <span>JS</span>
                  <span data-aos="fade-right"> JS</span>
                </span>
                <span style={{ width: "10%" }}> 90%</span>
              </p>
              <p>
              <span style={{ width: "80%" }}>
                  <span>Java</span>
                  <span data-aos="fade-right"> Java</span>
                </span>
                <span style={{ width: "20%" }}> 80%</span>
              </p>
            </div>
            <div>
              <p>
              <span style={{ width: "60%" }}>
                  <span>REACT</span>
                  <span> REACT</span>
                </span>
                 <span style={{ width: "40%" }}> 60%</span>
              </p>
              <p>
              <span style={{ width: "80%" }}>
                  <span>PHP</span>
                  <span data-aos="fade-right"> PHP</span>
                </span>
                 <span style={{ width: "20%" }}> 90%</span>
              </p>
              <p>
              <span style={{ width: "50%" }}>
                  <span>Node Js</span>
                  <span data-aos="fill-right"> Node Js</span>
                </span>
                 <span style={{ width: "50%" }}> 50%</span>
              </p>
              <p>
              <span style={{ width: "70%" }}>
                  <span>MYsql</span>
                  <span data-aos="fill-right"> MYsql</span>
                </span>
                 <span style={{ width: "30%" }}> 70%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
