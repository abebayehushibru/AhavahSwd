import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profile from "./component/Profile";
import About from "./component/About";
import Quality from "./component/Quality";
import Skills from "./component/Skills";
import Myservice from "./component/Myservices";
import PORTFOLIO from "./component/portfolio";
import Contactus from "./component/contact";
import Footer from "./component/foooter";
import Navbar from "./component/Navbar";

import { useState } from "react";
import APKPage from "./component/ApkPage";

function App() {
  const [hover, setNavbar] = useState("home");
const Home=()=>{
  return <>
  <Profile onMouseEnter={(e) => { setNavbar(e); console.log(e); }} />
            <About onMouseEnter={(e) => { setNavbar(e); console.log(e); }} />
            <Quality onMouseEnter={(e) => setNavbar(e)} />
            <Skills onMouseEnter={(e) => setNavbar(e)} />
            <Myservice onMouseEnter={(e) => setNavbar(e)} />
            <PORTFOLIO onMouseEnter={(e) => setNavbar(e)} />
            <Contactus onMouseEnter={(e) => setNavbar(e)} /></>
}
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/Baranto" Component={APKPage} />
          <Route path="/" Component={Home}>
            
          </Route>

      </Routes>
          
      
        <Footer />
        <Navbar hover={hover} />
      </div>
    </Router>
  );
}

export default App;
