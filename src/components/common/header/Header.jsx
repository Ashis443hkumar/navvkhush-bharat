import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  
  const[isMobile, setisMobile] = useState(false)

  return (
    <div>
      <header className="header">
        <div className="logo">
          <h2>logo</h2>
        </div>
        <nav className= {isMobile ? 'mobile-menu-link' : "navigation" } onClick={() => setisMobile(false)} >
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
              <NavLink to="/about">About <i class="fa-solid fa-caret-down"></i></NavLink>
              <ul class="dropdown_menu">
                <li><NavLink to="/about/founder">Founder </NavLink></li>
                <li><NavLink to="/about/who">Who We Are</NavLink></li>
                <li><NavLink to="">Our Achivements</NavLink></li>
                <li><NavLink to="">awards & recongnition </NavLink></li>
                <li><NavLink to="">Our Approach</NavLink></li>
                <li><NavLink to="">Bank Details</NavLink></li>
                <li><NavLink to="">Our Teams</NavLink></li>
                <li><NavLink to="">Legal Status</NavLink></li>
                <li><NavLink to="">become A volunteer</NavLink></li>
                <li><NavLink to="">Finicials</NavLink></li>
                <li><NavLink to="">Missinon & vision </NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Join</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            
          </ul>
          <div className="donate_btn">
            <button class="hero_button" >Donate Now</button>
          </div>
        </nav>
         <div className="bargar_menu" onClick={() =>setisMobile(!isMobile)}>

           {
             isMobile? ( <i className="fas fa-times"></i>) : <i className="fas fa-bars"></i>
           }
        
            

         </div>
      </header>
    </div>
  );
}
