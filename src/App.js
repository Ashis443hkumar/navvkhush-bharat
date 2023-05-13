import React from "react";
import "./style.css";
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Programs from "./components/pages/programs/Programs"
import About from "./components/pages/abouts/About"
import Contact from "./components/pages/contacts/Contact"

import Founder from  "./components/pages/abouts/founders/Founder"


// import WhoWeAre from  "./components/pages/abouts/WhoWeAre"
// import Volunteer from "../../../components/pages/about/valunter/Volunteer"
// import Volunteer from "../../../components/pages/programs/whomenEmpower/WhomenEmpower"
// import Volunteer from './../../../../abouts/valunter/Volunteer';


// page router program   
import Programs from "./components/pages/programs/Programs"
import WhomenEmpower from "./components/pages/programs/whomenEmpower/WhomenEmpower"
import ChildEducation from "./components/pages/programs/ChildEducation/ChildEducation"
import SummerCamp from "./components/pages/programs/summerCamp/SummerCamp"



import Volunteer from  "./components/pages/abouts/valunter/Volunteer"
import Donate from  "./components/pages/abouts/donate/Donate"


export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/about"  element={<About/>} />
            <Route path="/about/founder"  element={<Founder />}  />

        <Route path="/programs/"  element={<Programs/>} >
              <Route path="whomen" element={<WhomenEmpower/>} />
              <Route path="childeducation" element={<ChildEducation/>} />
              <Route path="summercamp" element={<SummerCamp/>} />
        </Route>

        <Route path="/contact"  element={<Contact />}  />

        
        <Route path="volunteer" element={<Volunteer/>} />  
        <Route path="/about/donate" element={<Donate/>} />  

      </Routes>
      <Footer/>

    </div>
  );
}
