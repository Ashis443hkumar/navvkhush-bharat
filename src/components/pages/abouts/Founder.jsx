import React from "react";
import Heading from "../../common/heading/Heading";


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

     {/* <img src="https://lh3.googleusercontent.com/Tblz76UwKYGyEoqc4F_imHk5ORBTJK6nlZqU39D8dVKUtDNOkv-uwvuRmSTgElqWUj6GCCFQCGc2Pxsw7luEIOMO6DrHP6ZxdWrxQHb2ng" alt=""/> */}

     {/* founder messages  */}
       <section class="founder mb-0">
         <div className="container">
           <div className="heading">
             <h1 class="founder my-4">FOUNDER MESSAGE</h1>
           </div>
           <div className="row founder_content">
             <div className="col-md-4">
               <div className="card">
               <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/trustee.jpg" class="card-img-top" alt="" />
               <div className="card-body">
                  <h2>KAVITA RAWAT</h2>
                  <p> Since my childhood, I was inclined towards Community development and helping the needy.</p>
                  <div className="social_link">
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                 </div>
               </div>
               </div>
             </div>
             <div className="col-md-8">
               <div class="founder_content pt-5">
                  <p>
                  Since my childhood, I was inclined towards Community development and helping the needy. I always had a dream to start my own foundation and work for women empowerment.</p>
                  <p>” This would allow me to help them fight against increasing Crime and injustice in our society. CCSDO is a dream and passion project of mine. I will put in my 100% and give my best to serve the society.”</p>
               </div>
             </div>
           </div>
         </div>
       </section>


  {/* banner section  */}
      <section class="banner foubderbanner mt-0">
        <div class="banner_text">
          <h3>
            Start with helping one poor person and pave way for the bigger
            changes!
          </h3>
        </div>
        <div class="banner_form">
          <button class="hero_button">Become a Volunteer</button>
        </div>
      </section>

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
