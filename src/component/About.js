import "./About.css";
import Pimage from "../images/profile.jpg";
import { useEffect } from "react";
import AOS from "aos";
import  "aos/dist/aos.css";
function About(props) {
  useEffect(() => {
    AOS.init({duration:2000});
      }, []);
  return (
    <>
      <div className="mainContaire" data-aos="fade-up"  id="about" style={{marginTop:"80px"}}   onMouseEnter={props.onMouseEnter("about")}>
        <div className="container">
          <div className="Title">
            <h1>About</h1>
            <h3>About me</h3>
          </div>
          <div className="discripion">
            <img src={Pimage} alt="myimage"></img>
            <div>
              <h3>Web Developer and App Developer</h3>
              <p>
              Hi, I'm Abebayehu Shibru, a website developer based in Dilla. With over two years of experience in the industry, I have developed lots of projects. My expertise includes web development and application development in many different stacks. Beside that I am familiar with the recent technologies and frameworks.
              </p>

              <div className="aboutmyself">
                <div>
                  <p>
                    Name : <span>Abebayehu Shibru</span>
                  </p>
                  <p>
                    Email : <span>abeaba64@gmail.com </span>
                  </p>
                  <p>
                    Phone : <span>+251-964-799-523 </span>
                  </p>
                </div>
                <div>
                  <p>
                    Degree : <span>Bachelor of Science</span>
                  </p>
                  <p>
                    Experience: <span>2 year </span>
                  </p>
                  <p>
                    Address : <span> Illicho,Dilla,Ethiopia</span>
                  </p>
                </div>
              </div>
              <a href="#contact" className="contactme">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
