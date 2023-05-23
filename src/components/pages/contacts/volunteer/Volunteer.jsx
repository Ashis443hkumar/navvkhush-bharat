import React from "react";
import Heading from "../../../common/heading/Heading";
import HeroButton from "../../home/heroButton/HeroButton";

import "./style.css"

export default function Volunteer() {
  return (
     <>

      <section class=" volunteer">
        <Heading title="Volunteer"  />
       <div className="container">
         <div className="row">
         <div className="col-md-6 volunteer_info">
               <h1>Register as Volunteer</h1>
               <form action="">
                <div class="user_form">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Email Address</label>
                  <input type="text" placeholder="Enter Your Email Address" />
                </div>

                <div class="user_form">
                  <label htmlFor="">Contact Number</label>
                  <input type="text" placeholder="67 6577 788 7788 " />
                </div>
                <div class="user_form">
                  <label htmlFor="">City</label>
                  <input type="text" placeholder="city " />
                </div>
                <div class="user_form">
                  <label htmlFor="">Occupation</label>
                  <input type="text" placeholder=" Occupation" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Address " />
                </div>
                <div class="user_form">
                  <label htmlFor="">Remraks</label>
                  <input type="text" placeholder=" Remraks" />
                </div>
                <div class="volunteer_button">
                   <div class="submitt">
                      <HeroButton buttonTitle="Submit" />
                   </div>
                   <div class="cancelfr">
                     <HeroButton buttonTitle="Cancel" />
                   </div>
                </div>
               </form>
         </div>
         <div className="col-md-6 volunteer_form ">
               <h3>We'd love to hear from you</h3>
               <form action="">
                <div class="user_form">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Email Address</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Contact Number</label>
                  <input type="text" placeholder="256 565 665 44" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Subject</label>
                  <input type="text" placeholder="Subjects" />
                </div>

                <div class="submit_btn">
                   <HeroButton buttonTitle="Submit" />
                </div>
               </form>
             </div>
          
         </div>
       </div>
     </section>
     
 
     </>



  );
}
