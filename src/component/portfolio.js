import { Fragment } from "react";
import "./portfolio.css";
import Pimage from "../images/abc.png";
import Pimage2 from "../images/baranto.jpg";
import Pimage3 from "../images/family.jpg";
import {useState} from "react";
import { useEffect } from "react";
import AOS from "aos";
import  "aos/dist/aos.css";

function PORTFOLIO (props){
 const [showItems,setShowItems]=useState (1)
 const handclicked =(e) =>{
  
    setShowItems(e);
  };

  useEffect(() => {
    AOS.init({duration:2000});
       
      }, []);
  return (
    <Fragment>
      <div className="mainContaire" data-aos="fade-up"  id="portfolio" onMouseEnter={props.onMouseEnter("portfolio")}>
          <div className="container">
            <div className="Title">
              <h1>portfolio</h1>
              <h3>My portfolio</h3>
            </div>

            <div >
              <ul className="portfolioselection">
                <span className={showItems===1 ? "active" :""} onClick={()=>handclicked(1)}>
                  All
                </span>
                <span className={showItems===2 ? "active" :""} onClick={()=>handclicked (2)}>App </span>
                <span className={showItems===3 ? "active" :""} onClick={()=>handclicked (3)}>Website</span>
              </ul>
            </div>
            <div className="portfolios">
              <div className="Items" id={showItems!==2 ? "active" :""} data-aos="fade-left">
                <img src={Pimage} alt="myimage"></img>
                <div>
                  <a href="http://alenbezacharity.epizy.com/">
                    <i className="fa fa-external-link"></i> View
                  </a>
                </div>
              </div>
              <div className="Items two"  id={showItems!==3 ? "active" :""} data-aos="fade-right">
                <img src={Pimage2} alt="myimage"></img>
                <div>
                  <a href="index.html">
                    <i className="fa fa-external-link"></i> View 
                  </a>
                </div>
              </div>
              <div className="Items two"  id={showItems!==2 ? "active" :""} data-aos="fade-left">
                <img src={Pimage3} alt="myimage"></img>
                <div>
                  <a href="index.html">
                    <i className="fa fa-external-link"></i> View 
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </Fragment>
    );

}
export default PORTFOLIO;
