import React from "react";
import "./style.css";

// common commponents 
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"

// routing labiary packege npm 
import {Routes, Route} from "react-router-dom";

// page menu  
import Home from "./components/pages/home/Home"
import Programs from "./components/pages/programs/Programs"
import About from "./components/pages/abouts/About"
import Blog from "./components/pages/blog/Blog"
import Careers from "./components/pages/careers/Careers"
import Contact from "./components/pages/contacts/Contact"


// media page dropdown_menu 
import Media from "./components/pages/media/Media"
import Events from "./components/pages/media/events/Events"
import Gallery from "./components/pages/media/gallery/Gallery"
import NewLetters from "./components/pages/media/newLetters/NewLetters"


// careers pages  dropdown_menu 
import Intership from "./components/pages/careers/intership/Intership"
import Volunteer from "./components/pages/careers/volunteer/Volunteer"
import Career from "./components/pages/careers/career/Career"

// program page dropdown_menu
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
        {/* home about page  */}
        <Route path="/"  element={<Home/>}  />
        <Route path="/about"  element={<About/>}  />

          {/* program pages  */}
        <Route path="/programs/"  element={<Programs/>} >
              <Route path="whomen" element={<WhomenEmpower/>} />
              <Route path="childeducation" element={<ChildEducation/>} />
        </Route>

          {/* media pages  */}
        <Route path="/media"  element={<Media/>} >
           <Route path="events"  element={<Events/>}  />
           <Route path="gallery"  element={<Gallery/>}  />
           <Route path="newletters"  element={<NewLetters/>}  />
        </Route>

          {/* blog pages  */}
        <Route path="/blog"  element={<Blog />}  />
        <Route path="/careers/" element={<Careers/>}>
           <Route path="Intership" element={<Intership/>} />
           <Route path="volunteer" element={<Volunteer/>} />
           <Route path="career" element={<Career/>} />
        </Route>

        {/* contact pages  */}
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/about/donate" element={<Donate/>} />  

      </Routes>
      <Footer/>

    </div>
  );
}
