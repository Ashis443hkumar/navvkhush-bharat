import React from "react";
import Heading from "../../common/heading/Heading";


export default function Founder() {
  return (
     <>

     <section class="founder_about_sectin py-4">
       <div className="container">
         {/* <div className="heading">
           <h1>Abouts</h1>
         </div> */}
         <Heading title="About us" />
         <div className="row">
           <div className="col-12">
             <p>Since my childhood, I have been drawn towards  community development and serving those in need. Witnessing the struggles and hardships that many individuals and families face on a daily basis, I developed a deep sense of empathy and a strong desire to help make a.</p>
           </div>
         </div>
       </div>
     </section>

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
  <section class="banner mt-0">
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

      {/* impact  */}

       <section class="impact">
          <div class="imapct_banner">
      <div class="impact_content">
       <i class="fa-solid fa-face-smile"></i>
        <p>Dry snacks packets provided to migrant labourers</p>
        <h2>7000+</h2>
      </div>
      <div class="impact_content">
        <i class="fa-solid fa-face-smile"></i>
        <p>Families provided with Ration kits (during Covid19)</p>
        <h2>3000++</h2>
      </div>
      <div class="impact_content">
       <i class="fa-solid fa-face-smile"></i>
       <p>Patients treated</p>
       <h2>250+</h2>
      </div>
      <div class="impact_content">
       <i class="fa-solid fa-face-smile"></i>
       <p>People Fed</p>
       <h2>1250000+</h2>
      </div>
      <div class="impact_content">
        <i class="fa-solid fa-face-smile"></i>
        <p>480+ underprivileged children had been provided education</p>                
        <h2>7000+</h2>
      </div>
    </div>

  </section>

     </>
  );
}
