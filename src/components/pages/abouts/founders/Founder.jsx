import React from "react";
import Heading from "../../../common/heading/Heading";
import Banner from "../../home/banner/Banner";
import FounderMessage from "./founderMessage/FounderMessage";

export default function Founder() {

  return (
     <>
     <section class="founder_about_sectin py-4">
       <div className="container">
         <Heading title="About us" />
         <div className="row">
           <div className="col-12">
           <input id="ch" type="checkbox" />
             <p>At the Crime Control & Social Development Organisation (CCSDO), we believe that every woman has the right to live a life of dignity and self-respect. Our registered NGO envisions working towards bringing significant changes in the lives of women across society by providing economic and social support, empowering them with financial independence...</p>
             <span class="content">
               <p>CCSDO is committed to contributing to society as equal partners in the development of families and communities, with a focus on reducing violence, harassment, and discrimination against women. We believe that by empowering women, we can create a brighter, more equal future for all.</p>

               <p>Our team is made up of dedicated professionals who are passionate about making a difference. From providing education and training to children and women in underserved communities to giving stitching classes to women inmates in Tihar Jail, our programs aim to equip individuals with the knowledge and tools they need to succeed in the modern world.</p> 
               <p>We are proud of our achievements and the impact we have made in the lives of women and children. Our achievements till date include educating 1779 children, providing counselling to over 3000 women, registering over 1250 women with us, and empowering 75 women who are now financially independent. Additionally, we were selected for the Delhi Government </p>

               <p>Project for Digital Literacy Awareness Program in Delhi Government Schools, North East Delhi, and we have received orders from Munjal Showa and AG Industries for uniform and T-shirt stitching, providing employment opportunities to women.</p>

               <p>At CCSDO, we are committed to our mission of creating a more just and equal society. Join us on this journey towards a brighter future for all.</p>

             <label class="label_read" htmlFor="ch" >Read Less</label>
            </span>
            <label  class="label_read" htmlFor="ch" >Read More</label>
           </div>
         </div>
       </div>
     </section>

     <FounderMessage/>



      <Banner/>

   {/* impact section   */}
      <section class="impact mt-0">
        <div className="heading my-4">
          <h1>OUR ACHIEVEMENTS</h1>
        </div>
        <div class="imapct_banner">
          <div class="impact_content">
            <i class="fa-solid fa-face-smile"></i>
            <h2>1,779</h2>
            <p>Children Educated</p>
          </div>
          <div class="impact_content">
            <i class="fa-solid fa-face-smile"></i>
            <h2>3000</h2>
            <p>Women Counselled</p>
          </div>
          <div class="impact_content">
            <i class="fa-solid fa-face-smile"></i>
            <h2>1,250+</h2>
            <p>Women Registered</p>
          </div>
          <div class="impact_content">
            <i class="fa-solid fa-face-smile"></i>
            <h2>75</h2>
            <p>Women Financially Independent <br/> After Our Programs</p>
          </div>
        </div>
      </section>
     </>
  );
}
