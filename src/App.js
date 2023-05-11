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

import Founder from  "./components/pages/abouts/Founder"
import WhoWeAre from  "./components/pages/abouts/WhoWeAre"
// import Volunteer from "../../../components/pages/about/valunter/Volunteer"

// import Volunteer from './../../../../abouts/valunter/Volunteer';
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
        <Route path="/programs"  element={<Programs/>}  />
        <Route path="/contact"  element={<Contact />}  />

        <Route path="/about/founder"  element={<Founder />}  />
        <Route path="volunteer" element={<Volunteer/>} />  
        <Route path="/about/donate" element={<Donate/>} />  

      </Routes>
      <Footer/>
    </div>
  );
}
