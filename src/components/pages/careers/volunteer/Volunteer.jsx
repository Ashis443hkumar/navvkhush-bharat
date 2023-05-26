import React from "react";
import Heading from "../../../common/heading/Heading";
import AboutHeroBack from "../../home/hero/AboutHeroback";
import HeroButton from "../../home/heroButton/HeroButton";

import "./style.css"

export default function Volunteer() {
  return (
     <>

import React from "react";
import Heading from "../../../common/heading/Heading";
import AboutHeroBack from "../../home/hero/AboutHeroback";
import HeroButton from "../../home/heroButton/HeroButton";

import "./style.css"

export default function Volunteer() {
  return (
     <>

     <AboutHeroBack AboutTitle="Volunteer with Us" cover={"https://thumbs.dreamstime.com/b/volunteer-black-blackboard-highlighted-45867177.jpg"} />

      <section class=" volunteer">
        <Heading title="Volunteer"  />
       <div className="container mt-5">
         <div className="row">
           <div className="col-md-7 volunteer_content">
             <h3>Volunteer with Us</h3>
             <p>Volunteering is an incredibly rewarding experience that allows individuals to contribute their time and skills towards a worthy cause. At our organisation, we welcome volunteers from all walks of life who share our vision of making a positive impact in our community. Whether you are a student, a working professional, or a retiree, there are numerous opportunities for you to get involved and make a difference.</p>

             <p>As a volunteer, you can choose to participate in a variety of programs and activities, including fundraising events, community outreach programs, and education and skill development programs. You can also work with our team to develop and implement new initiatives that align with your interests and skills. Our volunteers play an essential role in helping us achieve our mission, and we are grateful for their dedication and support.
             We believe that volunteering is a two-way street. Not only do our volunteers help us achieve our goals, but they also benefit from the experience by gaining new skills, building their networks, and making a positive impact in their community. We provide our volunteers with training, support, and guidance to ensure that they feel comfortable and confident in their roles. </p>

             <p>Join us in our mission to make a difference in the lives of those who need it most. Contact us today to learn more about how you can get involved and make a meaningful contribution to our organisation</p>

           </div>
         <div className="col-md-5 volunteer_info">
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
       

          
         </div>
       </div>
     </section>
     
 
     </>



  );
}

 
     </>



  );
}
