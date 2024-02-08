import "./Quality.css";
import { useEffect } from "react";
import AOS from "aos";
import  "aos/dist/aos.css";
function Quality(props) {
  useEffect(() => {
    AOS.init({duration:2000});
       
      }, []);
  return (
    <>
      <div className="mainContaire" data-aos="fade-up" id="quality" onMouseEnter={props.onMouseEnter("quality")}>
        <div className="container">
          <div className="Title">
            <h1>Quality</h1>
            <h3>EDUCATION & EXPERICENCE</h3>
          </div>
          <div  className="eduANdexpContainer">

            <div>
                <h2>Education

                </h2>
                <div>
                <div className="lines">
                <i className='far fa-dot-circle'></i>
                </div>
                <div className="discribeStatus">
                    <h4>
                    DEGREE in SWE
                    </h4>
                    <h5>Mekelle University <span> | 2019-now</span></h5>
                    <p>  BSC  SOTWARE ENGINEERING 2020 - NOW</p>
                    <p>Studied a programming languages, data structures, algorithms, networking and other relevant courses .<br></br><br></br>
Gained experience in developing web applications and mobile apps using a variety of technologies.</p>
                </div>
                </div>
                
            </div>
            <div>
                <h2>Experience

                </h2>
                <div>
                <div className="lines">
                <i className='far fa-dot-circle'></i>
                </div>
                <div className="discribeStatus">
                    <h4>
                   Web development & App development
                    </h4>
                    <h5><span> | 2019-Now</span></h5>
                    <p>
                    Developed and maintained more than 5 websites , web applications and mobile apps variety of technologies..

<br></br>
<br></br>
Worked closely with clients to understand their needs and deliver solutions that met their expectations. </p>
                </div>
                </div>
                
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Quality;
