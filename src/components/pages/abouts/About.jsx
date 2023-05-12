import React from "react";
import "./abouts.css"
// import Founder from "./Founder";
import OurAdvisior from "./OurAdvisior";
import WhoWeAre from "./whoWeAre";
import {Routes, Route} from "react-router-dom"
import Volunteer from "./valunter/Volunteer";
import Founder from "./founders/Founder";


export default function About() {
  return (
     <>
    
    <Founder/>
    <Routes>
      <Route path="/about/volunteer" element={<Volunteer/>} />
    </Routes>




       <WhoWeAre/>
      
       <OurAdvisior/>

     
       
     </>
  );
}
