
import "./myservice.css"
import { useEffect } from "react";
import AOS from "aos";
import  "aos/dist/aos.css";
function Myservice(props) {
    useEffect(() => {
        AOS.init({duration:2000});
           
          }, []);
      return (
        <>
          <div className="mainContaire" data-aos="fade-up" id="service" onMouseEnter={props.onMouseEnter("service")}>
        <div className="container">
          <div className="Title">
            <h1>SErvice</h1>
            <h3>My Service</h3>
          </div>
          <div className="myservice">
            <div >
                <div><i className="fa fa-2x fa-laptop-code"></i>
                <h2> Web Development</h2> 
                 </div>
                 <p> I can develop custom websites for businesses of all sizes. I can also help you to improve your existing website by adding new features or optimizing its performance.</p>
             
            </div>
            <div>
                <div><i className="fa fa-android"></i>
                <h2> App Development</h2> 
                 </div>
                 <p> I can develop custom mobile apps for both iOS and Android devices. I can also help you to update or maintain your existing mobile app.</p>
             
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Myservice;
