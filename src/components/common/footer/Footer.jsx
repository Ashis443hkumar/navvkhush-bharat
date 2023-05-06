import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <>
          <footer className="footer">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-md-3">
                <h3>About </h3>
                <p>Nearly 1.73 million children die in India every year due to lack of treatment. We work with communities to ensure that everyone receives adequate nutrition and healthcare services.</p>
              </div>
              <div className="col-md-2">
                <h3>Main Links </h3>
                <ul>
                  <li>Our Approach</li>
                  <li>Blood Donation</li>
                  <li>Bag Donation</li>
                  <li>Become a Volunteer</li>
                  <li>Champions</li>
                  <li>HoNational Calamitiesme</li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3>Office Address</h3>
                <ul>
                  <li>Gallery</li>
                  <li>Press Releases</li>
                  <li>Testimonials</li>
                  <li>Current Beneficiaries</li>
                  <li>Successful Stories</li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3>Office Address</h3>
                <div>
                <address>
                  <p>Head Office : 21/41-42 2nd Floor Kalyan Puri, Delhi -110091</p>
                </address>
                <address>
                  <p>Corporate Office : C-809 8th Floor Nirvana Courtyard Sector ,50 Gurugram</p>
                </address>
              </div>
              </div>
             <div className="col-md-3">
             <div className="contact_footer">
               <h3>CONTACT US</h3>
             <div className="footer_content">
               <div className="donate_btn">
                <button class="hero_button">Donate Now</button>
               </div>
               <div>
                 <ul>
                   <li><i class="fa-solid fa-arrow-right"></i> Privacy Policy</li>
                   <li><i cla ss="fa-solid fa-arrow-right"></i>Terms & Conditions</li>
                   <li><i class="fa-solid fa-arrow-right"></i> Refund & Cancellation Policy</li>
                 </ul>
               </div>
              <div className="head_right">
              <div className="social_link">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </div>
             </div>
            </div>
           </div>
          </div>

          </div>
          </div>
      </footer>
     
      
    </>
  );
}
