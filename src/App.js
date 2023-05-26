import React from "react";
import "./style.css";
// common commponents 
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"

import {Routes, Route} from "react-router-dom";
// page menu  
import Home from "./components/pages/home/Home"
import Programs from "./components/pages/programs/Programs"
import About from "./components/pages/abouts/About"
import Blog from "./components/pages/blog/Blog"
import Careers from "./components/pages/careers/Careers"
import Contact from "./components/pages/contacts/Contact"


// dropdown_menu 
import Intership from "./components/pages/careers/intership/Intership"
import Volunteer from "./components/pages/careers/volunteer/Volunteer"


// page router program   
import Programs from "./components/pages/programs/Programs"
import WhomenEmpower from "./components/pages/programs/whomenEmpower/WhomenEmpower"
import ChildEducation from "./components/pages/programs/ChildEducation/ChildEducation"

import Donate from  "./components/pages/abouts/donate/Donate"

export default function App() {
  return (
    <div>
      <Head/>
      <Header/>

      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/about"  element={<About/>} />

        <Route path="/programs/"  element={<Programs/>} >
              <Route path="whomen" element={<WhomenEmpower/>} />
              <Route path="childeducation" element={<ChildEducation/>} />
        </Route>


        <Route path="/blog"  element={<Blog />}  />
        <Route path="/careers/" element={<Careers/>}>
           <Route path="Intership" element={<Intership/>} />
           <Route path="volunteer" element={<Volunteer/>} />
        </Route>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/about/donate" element={<Donate/>} />  

      </Routes>
      <Footer/>

    </div>
  );
}
