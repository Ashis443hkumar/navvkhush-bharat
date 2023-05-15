import React, {useState} from "react";
import { NavLink,Link, Outlet } from "react-router-dom";
import HeroButton from "../../pages/home/heroButton/HeroButton";
import "./header.css";

export default function Header() {
  
  const[isMobile, setisMobile] = useState(false)

  return (
    <div>
      <header className="header">
        <div className="logo">
          {/* <img src="https://lh3.googleusercontent.com/Tblz76UwKYGyEoqc4F_imHk5ORBTJK6nlZqU39D8dVKUtDNOkv-uwvuRmSTgElqWUj6GCCFQCGc2Pxsw7luEIOMO6DrHP6ZxdWrxQHb2ng" alt=""  /> */}
          <img src="https://www.navvkhushbharat.com/wp-content/uploads/elementor/thumbs/logo-pzmronjrgqdx9tci7wd8um1iysogmgenu7xx5cd57y.png" alt="" />
          <h3>Navv khush Bharat</h3>
        </div>

        <nav className= {isMobile ? 'mobile-menu-link' : "navigation" } onClick={() => setisMobile(false)} >
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
              <NavLink to="/about">About <i class="fa-solid fa-caret-down"></i></NavLink>
              <ul class="dropdown_menu">
                <li><NavLink to="/about/founder">Founder’s Message</NavLink></li>

              </ul>
            </li>
            <li><NavLink to="/programs/">Programs <i class="fa-solid fa-caret-down"></i></NavLink>
              <ul class="dropdown_menu">
                <li><NavLink to="/programs/whomen/">WOMEN EMPOWERMENT </NavLink></li>
                <li><NavLink to="/programs/childeducation">Child Education</NavLink></li>
                <li><NavLink to="/programs/summercamp">Summer Camp</NavLink></li>   
                      
              </ul>
            </li>
            <li><NavLink to="/media">Media <i class="fa-solid fa-caret-down"></i></NavLink>
              <ul class="dropdown_menu">
                <li><NavLink to="/">Annual report</NavLink></li>
                <li><NavLink to="">NewsLetter</NavLink></li>
                <li><NavLink to="">Gallery</NavLink></li>
                <li><NavLink to="">Upcoming Events</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="donate_btn">
            <HeroButton buttonTitle="Donate Now" />
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
