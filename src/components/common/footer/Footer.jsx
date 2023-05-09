import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <>
     <footer class="footer">
        <div class="footer_logo">
        <h3>ABOUT US</h3>
          <p>Nearly 1.73 million children die in India every year due to lack of treatment. We work with communities to ensure that everyone receives adequate nutrition and healthcare services.</p>
          <img src="https://www.navvkhushbharat.com/wp-content/uploads/elementor/thumbs/logo-pzmronjrgqdx9tci7wd8um1iysogmgenu7xx5cd57y.png" alt="" />
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
            <address>Corporate Office : C-314 3th Floor, Nirvana Courtyard, Sector-50, Gurugram -  122018.</address>
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
             <button>Donate now</button>
             <ul>
               <li><a href="">Donation</a></li>
               <li><a href="">Terms and Conditions</a></li>
               <li><a href="">Privacy Policy</a></li>
               <li><a href="">Cancellation & Refund Policy</a></li>
             </ul>
             <div className="social_link">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </div>
           </div>
        </div>
        
      </footer>
 
      
    </>
  );
}
