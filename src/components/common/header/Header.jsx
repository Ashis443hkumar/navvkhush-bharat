import React, {useState} from "react";
import { NavLink,Link, useNavigate, Outlet } from "react-router-dom";
import HeroButton from "../../pages/home/heroButton/HeroButton";
import "./header.css";

export default function Header() {
  
  const[isMobile, setisMobile] = useState(false)

  const navigate = useNavigate()

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="https://www.navvkhushbharat.com/wp-content/uploads/elementor/thumbs/logo-pzmronjrgqdx9tci7wd8um1iysogmgenu7xx5cd57y.png" alt="" />
          <h3>Navvkhush Bharat</h3>
        </div>

        <nav className= {isMobile ? 'mobile-menu-link' : "navigation" } onClick={() => setisMobile(false)} >
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about/">About </NavLink> </li>

            <li><NavLink to="/programs/">Programs <i class="fa-solid fa-caret-down"></i></NavLink>
              <ul class="dropdown_menu">
                <li><NavLink to="/programs/whomen/">WOMEN EMPOWERMENT </NavLink></li>
                <li><NavLink to="/programs/childeducation">Child Education</NavLink></li>                      
              </ul>
            </li>
            <li><NavLink to="/media">Media <i class="fa-solid fa-caret-down"></i></NavLink>
              <ul class="dropdown_menu">
                <li><NavLink to="">NewsLetter</NavLink></li>
                <li><NavLink to="">Gallery</NavLink></li>
                <li><NavLink to="">Events</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/blog">Blog</NavLink></li>

            <li><NavLink to="/careers/">Careers <i class="fa-solid fa-caret-down"></i></NavLink>
             <ul class="dropdown_menu">
                <li><NavLink to="/careers/intership">Internship</NavLink></li>
                <li><NavLink to="/careers/volunteer">Volunteer</NavLink></li>
                <li><NavLink to="/careers/career">Career</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact/">Contacts  </NavLink>  </li>
           </ul>

          <div className="donate_btn">
          <button onClick={() =>navigate("./about/donate")}>
                   <HeroButton buttonTitle="Donate Now" />
          </button>

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
