import React from "react";
import Heading from "../../../common/heading/Heading";
import HeroButton from "../../home/heroButton/HeroButton";

export default function Intership() {
  return (
     <>
     <section class="my-5">
       <Heading title="Intership" />
       <div className="container">
         <div className="row">
         <div className="col-md-6">
               <h1>Intership</h1>
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
                <div class="submit_btn">
                   {/* <button type="submit" class="hero_button">Submit</button> */}
                   <HeroButton buttonTitle="Submit" />
                </div>
               </form>
         </div>
         <div className="col-md-6">
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
                <div class="submit_btn">
                   {/* <button type="submit" class="hero_button">Submit</button> */}
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
