import React from "react";
import HeroButton from "../../pages/home/heroButton/HeroButton";
import SocialsIcons from "../../pages/home/heroButton/SocialSIcon";
import "./footer.css"

export default function Footer() {
  return (
    <>
     <footer class="footer">
        <div class="footer_logo">
        <h3>ABOUT US</h3>
          <p>At NavvKhush Bharat-CCSDO, we empower women for a dignified life, providing economic and social support, reducing violence, and fostering equality, with notable achievements in education, counseling, and financial independence for women and children.</p>
          <div class="footer_logo_content">
          <img src="https://www.navvkhushbharat.com/wp-content/uploads/elementor/thumbs/logo-pzmronjrgqdx9tci7wd8um1iysogmgenu7xx5cd57y.png" alt="" />
          <h1>Navv khush Bharat</h1>
          </div>
        </div>
        
        <div className="footer_links">
          <h3>QUICK LINKS </h3>
          <ul>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Home</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> About Us</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Programs</a></li>
            <li><a href=""><i class="fa-solid fa-greater-than"></i> Media</a></li>
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
          <div class="email">
            <strong><i class="fa-solid fa-envelope"></i></strong>
            <span>info@thecrimecontrol.com</span>
          </div>
          <div class="email phone">
            <strong><i class="fa-solid fa-phone"></i></strong>
            <span>+918287372178</span>
          </div>
        </div>

        <div className="footer_social_links">
          <h3>CONTACT US </h3>
           <div class="">
               <HeroButton buttonTitle="Donate now" />             
             <ul>
               <li><a href="">Donation</a></li>
               <li><a href="">Terms and Conditions</a></li>
               <li><a href="">Privacy Policy</a></li>
               <li><a href="">Cancellation & Refund Policy</a></li>
             </ul>
              <div>
                <h6>Social icons</h6>
                <SocialsIcons/>
              </div>
           </div>
        </div>
        
      </footer>
 
      
    </>
  );
}
