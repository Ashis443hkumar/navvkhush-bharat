import React from "react";
import Heading from "../../../common/heading/Heading";
import Banner from "../../home/banner/Banner";
import AboutHeroBack from "../../home/hero/AboutHeroback";
import Impact from "../../home/impact/Impact";
import WhoWeAre from "../whoWeAre";
import FounderMessage from "./founderMessage/FounderMessage";

export default function Founder() {

  return (
     <>
     <AboutHeroBack AboutTitle="Abouts Section" />
     <section class="founder_about_sectin py-4">
       <div className="container">
         <Heading title="About us" />
         <div className="row">
           <div className="col-12">
             <p>At the Crime Control & Social Development Organisation (CCSDO), we believe that every woman has the right to live a life of dignity and self-respect. Our registered NGO envisions working towards bringing significant changes in the lives of women across society by providing economic and social support, empowering them with financial independence...</p>
               <p>CCSDO is committed to contributing to society as equal partners in the development of families and communities, with a focus on reducing violence, harassment, and discrimination against women. We believe that by empowering women, we can create a brighter, more equal future for all.</p>

               <p>Our team is made up of dedicated professionals who are passionate about making a difference. From providing education and training to children and women in underserved communities to giving stitching classes to women inmates in Tihar Jail, our programs aim to equip individuals with the knowledge and tools they need to succeed in the modern world.</p> 
               <p>We are proud of our achievements and the impact we have made in the lives of women and children. Our achievements till date include educating 1779 children, providing counselling to over 3000 women, registering over 1250 women with us, and empowering 75 women who are now financially independent. Additionally, we were selected for the Delhi Government </p>

               <p>Project for Digital Literacy Awareness Program in Delhi Government Schools, North East Delhi, and we have received orders from Munjal Showa and AG Industries for uniform and T-shirt stitching, providing employment opportunities to women.</p>

               <p>At CCSDO, we are committed to our mission of creating a more just and equal society. Join us on this journey towards a brighter future for all.</p>
           </div>
         </div>
       </div>
     </section>

     <FounderMessage/>
      {/* <Banner/> */}
     <Impact/>

     
   

     <section class="advisor">
       <div className="container-fluid">
       <Heading title="Advisory Board Members" />
         <div className="row advisor_row">
           <div className="col-md-3">
             <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/advisor-1.jpg" class="card-img-top w-100" alt=""/>
           </div>
           <div className="col-md-9">
             <h3>Mr. Prahlad Godara</h3>
             <p>Mr. Godara did his B.com, LLB & Diploma in Labour Law from University of Rajasthan, Jaipur. His corporate work experience spans across 3 decades , working with world ‘s number one two-wheeler automobile company M/S Hero MotoCorp Ltd (earlier Hero Honda Motors Ltd). Currently he is associated with Government of Haryana and working as Advisor to Chairman, Hon’ble by Chief Minister, Haryana.</p>
           </div>
         </div>
         <div className="row mt-3 advisor_row">
           <div className="col-md-9">
             <h3>Mr. Vijay Sharma</h3>
             <p>Mr. Godara did his B.com, LLB & Diploma in Labour Law from University of Rajasthan, Jaipur. His corporate work experience spans across 3 decades , working with world ‘s number one two-wheeler automobile company M/S Hero MotoCorp Ltd (earlier Hero Honda Motors Ltd). Currently he is associated with Government of Haryana and working as Advisor to Chairman, Hon’ble by Chief Minister, Haryana.</p>
           </div>
           <div className="col-md-3">
             <img src="https://www.navvkhushbharat.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-13-at-11.50.52-AM.jpeg" class="card-img-top w-100" alt=""/>
           </div>
         </div>
         <div className="row mt-3 advisor_row">
           <div className="col-md-3">
             <img src="https://www.navvkhushbharat.com/wp-content/uploads/2023/01/Sandeep_2022_Pic-1024x889.jpg" class="card-img-top w-100" alt=""/>
           </div>
           <div className="col-md-9">
             <h3>Sandeep Bhargava</h3>
             <p>Mr. Godara did his B.com, LLB & Diploma in Labour Law from University of Rajasthan, Jaipur. His corporate work experience spans across 3 decades , working with world ‘s number one two-wheeler automobile company M/S Hero MotoCorp Ltd (earlier Hero Honda Motors Ltd). Currently he is associated with Government of Haryana and working as Advisor to Chairman, Hon’ble by Chief Minister, Haryana.</p>
           </div>
         </div>
         <div className="row mt-3 advisor_row">
           <div className="col-md-9">
             <h3>PARUL KUMAR</h3>
             <p>Mr. Godara did his B.com, LLB & Diploma in Labour Law from University of Rajasthan, Jaipur. His corporate work experience spans across 3 decades , working with world ‘s number one two-wheeler automobile company M/S Hero MotoCorp Ltd (earlier Hero Honda Motors Ltd). Currently he is associated with Government of Haryana and working as Advisor to Chairman, Hon’ble by Chief Minister, Haryana.</p>
           </div>
           <div className="col-md-3">
             <img src="https://www.navvkhushbharat.com/wp-content/uploads/2023/01/Image-2022-09-19-at-15.26.56.jpg" class="card-img-top w-100" alt=""/>
           </div>
         </div>
         <div className="row mt-3 advisor_row">
           <div className="col-md-3">
             <img src="https://www.navvkhushbharat.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-13-at-11.50.52-AM.jpeg" class="card-img-top w-100" alt=""/>
           </div>
           <div className="col-md-9">
             <h3>Ravi Sinha</h3>
             <p>Mr. Godara did his B.com, LLB & Diploma in Labour Law from University of Rajasthan, Jaipur. His corporate work experience spans across 3 decades , working with world ‘s number one two-wheeler automobile company M/S Hero MotoCorp Ltd (earlier Hero Honda Motors Ltd). Currently he is associated with Government of Haryana and working as Advisor to Chairman, Hon’ble by Chief Minister, Haryana.</p>
           </div>
         </div>

       </div>
     </section>
     <WhoWeAre/>

  
     </>
  );
}
