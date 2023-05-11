import React from 'react';
import "./volunteer.css"
export default function Volunteer() {
  return (
   <>
   <section class="volunteer">
        <div className="conatiner">
          <div className="heading">
            <h1>Volunteer with Us</h1>
          </div>
          <div className="row">
            <div className="col-12">
              <p>Volunteering is an incredibly rewarding experience that allows individuals to contribute their time and skills towards a worthy cause. At our organisation, we welcome volunteers from all walks of life who share our vision of making a positive impact in our community. Whether you are a student, a working professional, or a retiree, there are numerous opportunities for you to get involved and make a difference</p>

              <p>As a volunteer, you can choose to participate in a variety of programs and activities, including fundraising events, community outreach programs, and education and skill development programs. You can also work with our team to develop and implement new initiatives that align with your interests and skills. Our volunteers play an essential role in helping us achieve our mission, and we are grateful for their dedication and support.
              We believe that volunteering is a two-way street. Not only do our volunteers help us achieve our goals, but they also benefit from the experience by gaining new skills, building their networks, and making a positive impact in their community. We provide our volunteers with training, support, and guidance to ensure that they feel comfortable and confident in their roles.
              </p>

              <p>Join us in our mission to make a difference in the lives of those who need it most. Contact us today to learn more about how you can get involved and make a meaningful contribution to our organisation</p>

            </div>
          </div>
        </div>

   </section>

    {/* impact section   */}
    <section class="impact mt-0">
        <div className="heading my-4">
          <h1>Our Impact to Society</h1>
        </div>
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
