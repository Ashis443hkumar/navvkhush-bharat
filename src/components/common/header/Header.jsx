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
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>

            
          </ul>
          <div className="donate_btn">
            <button>Donate Now</button>
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
