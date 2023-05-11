import React from 'react';

export default function Donate() {
  return (
   <>
  <section class="volunteer">
        <div className="conatiner">
          <div className="heading">
            <h1>Donate Now</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <p>Donating to our organisation is an excellent way to support our mission and help us make a positive impact in our community. Your generous donations enable us to provide essential services and programs to those in need, including education and skill development programs, healthcare services, and community outreach programs</p>

            </div>
          </div>
        </div>

   </section>

      {/* banner section  */}
      <section class="banner">
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
      
   </>
  );
}
