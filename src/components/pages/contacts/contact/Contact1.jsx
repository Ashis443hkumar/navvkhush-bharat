import React from "react";
import AboutHeroBack from "../../home/hero/AboutHeroback";
import HeroButton from "../../home/heroButton/HeroButton";

export default function Contact1() {
  return (
     <>
     <AboutHeroBack AboutTitle="Contat Us " cover={"https://media.istockphoto.com/id/1312566254/photo/contact-us-concept-icon-telephone-address-and-email-on-blue-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=ibxUaAea878l9MU53W-3RB0Tkj9i-MIbCOu0LwIHz9c="} />
       <section class="user_info my-5 py-3">
         <div className="container">
           <div className="row my-4">
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
                <div class="user_form">
                  <label htmlFor="">Subject</label>
                  <input type="text" placeholder="Subjects" />
                </div>

                <div class="submit_btn">
                   <HeroButton buttonTitle="Submit" />
                </div>
               </form>
             </div>
             <div className="col-md-6">
                <div class="contact_info">
                    <p>
                      <i class="fa fa-quote-left fg"></i> 
                         A man's true wealth is the good he does in this world. 
                      <i class="fa fa-quote-right fg"></i>
                    </p>
                    <p>Just A Little Help Can Make Their Hearts Happier!</p>
 
                    <HeroButton buttonTitle="Donate Now" />
  
                </div>
             </div>
           </div>
         </div>
       </section>

        <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.81444330601!2d77.37862263197052!3d28.58616566897591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7a49645dab%3A0x47ce831dfafdb6f1!2sSarfabad%2C%20Sector%2073%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1683368252773!5m2!1sen!2sin" width="100%" height="400" style={{}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </section>
     
  
     </>



  );
}
