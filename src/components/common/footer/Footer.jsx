import React from "react";
import HeroButton from "../../pages/home/heroButton/HeroButton";
import SocialsIcons from "../../pages/home/heroButton/SocialSIcon";
import "./footer.css"
import { Link, useNavigate } from "react-router-dom"

export default function Footer() {
  const navigate =  useNavigate()

  return (
    <>
     <footer class="footer">
        <div class="footer_logo">
        <h3>ABOUT US</h3>
          <p>At NavvKhush Bharat-CCSDO, we empower women for a dignified life, providing economic and social support, reducing violence, and fostering equality, with notable achievements in education, counseling, and financial independence for women and children.</p>
          <div class="footer_logo_content">
          <img src="https://media.licdn.com/dms/image/D4D22AQFpF6XnIVilsg/feedshare-shrink_1280/0/1685791142227?e=1688601600&v=beta&t=yA5p52Dgs48ezP6R0iRphLPK7vgh4GknujzgAUW3ySY" alt="" />
          <h1>Navvkhush Bharat ccsdo</h1>
          </div>
        </div>
        
        <div className="footer_links padding_bottom_footer">
          <h3>QUICK LINKS </h3>
          <ul class="footer_menu_link">
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Home</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> About Us</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Programs</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Media</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Blog</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Careers</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Contact Us</a></li>
          </ul>
        </div>
     
        <div className="footer_links addres_link">
          <h3>Office Address</h3>
          <div class="address_bar">
            <span><i class="fa-solid fa-location-dot"></i></span>
            <address class="address"> Head Office : 21/41-42 2nd Floor Kalyan Puri, Delhi -110091</address> 
          </div>
          <div class="address_bar">
            <span><i class="fa-solid fa-location-dot"></i></span>
            <address>Corporate Office : C-314 3rd Floor, Nirvana Courtyard, Sector-50, Gurugram -  122018.</address>
          </div>
          <div class="email footer_email">
            <strong><i class="fa-solid fa-envelope"></i></strong>
            <span>info@thecrimecontrol.com</span>
          </div>
          <div class="email phone footer_phone">
            <strong><i class="fa-solid fa-phone"></i></strong>
            <span>+918287372178</span>
            <span class="hr_number">+91 9971725342</span>
          </div>
        </div>

        <div className="footer_social_links">
          <h3>CONTACT US </h3>
           <div class="">
             <div className="footer_btn">
               <button onClick={() =>navigate("./careers/volunteer")}>
                  <HeroButton buttonTitle="Donate now" />     
               </button>
             </div>
             <ul>
               <li><a href="">Donation</a></li>
               <li><a href="">Terms and Conditions</a></li>
               <li><a href="">Privacy Policy</a></li>
               <li><a href="">Cancellation & Refund Policy</a></li>
             </ul>
              <div>
                <SocialsIcons/>
              </div>
           </div>
        </div>
        
      </footer>
 
      
    </>
  );
}
