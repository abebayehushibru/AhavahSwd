import "./App.css";

import Profile  from "./component/Profile";
import About from "./component/About";
import Quality from "./component/Quality";
import Skills from "./component/Skills";
import Myservice from "./component/Myservices";
import PORTFOLIO from "./component/portfolio";
import Contactus from "./component/contact";
import Footer from "./component/foooter";
import Navbar  from "./component/Navbar";
import { useState } from "react";
function App() {
  const [hover,setNavbar]=useState("home")
  
  return (
    <div className="App">
      
      <Profile  onMouseEnter={(e) => {setNavbar(e);
       console.log(e);}}
       ></Profile>
      <About  onMouseEnter={(e) => {setNavbar(e);
       console.log(e);}}/>
      <Quality onMouseEnter={(e) => setNavbar(e)}/>
      <Skills onMouseEnter={(e) => setNavbar(e)}/>
      <Myservice  onMouseEnter={(e) => setNavbar(e)}/>
      <PORTFOLIO  onMouseEnter={(e) => setNavbar(e)}/>
      <Contactus  onMouseEnter={(e) => setNavbar(e)}/>
      <Footer/>
      <Navbar hover={hover} />
    </div>
  );
}

export default App;
