import React from 'react';
import Heading from '../../../common/heading/Heading';
import HeroButton from '../../home/heroButton/HeroButton';
import "./donate.css"

export default function Donate() {
  return (
   <>
  <section class="volunteer">
        <div className="conatiner">
          {/* <div className="heading">
            <h1>Donate Now</h1>
          </div> */}
          <Heading title="Donate Now" />

          <div className="row">
            <div className="col-12">
              <p>Donating to our organisation is an excellent way to support our mission and help us make a positive impact in our community. Your generous donations enable us to provide essential services and programs to those in need, including education and skill development programs, healthcare services, and community outreach programs</p>

            </div>
          </div>
        </div>
    </section>

     {/* donate section  */}
      <section class="tabs_donate">
        {/* <div class="rwerer">
          <HeroButton buttonTitle="Donate Now" />
          <HeroButton buttonTitle="Donate Now " />
        </div> */}
        <div className="container-fluid">
          <div className="row rretry">
            <div className="col-md-12">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">SPONSOR A CHILD</button>

                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">SUPPORT WOMEN EMPOWERMENT</button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">TOY LIBRARY</button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">NAVVKHUSH BHARAT </button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">PAY WHAT YOU WANT</button>
                
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row ">
                  <div className="col-md-6 pt-5">
                    <ul>
                      <li>2,500 INR (Support a child for 1 months)</li>
                      <li>7,500 INR (Support a child for 3 months)</li>
                      <li>15,00 INR (Support a child for 6 months)</li>
                      <li>30,00 INR (Support a child for 1 year)</li>
                      <li>1,50,000 INR (Support a child for 5 year)</li>
                    </ul>
                    <div class="eewrewr mt-5 pt-5">
                      <p>Choose from above options</p>
                      <p class="paragraph_or">or</p>
                      <p>Pay what you want</p>
                      <div class="donate_peple">
                        <input type="nubmer" placeholder="47,000" />
                        <div>
                          <HeroButton buttonTitle="Donate" />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/IMG-20220816-WA0011-2.jpg" alt="" class="w-100 "  />
                    
                  </div>
                </div>
                
            
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div class="">
                    <ul>
                      <p> 15000 INR (For menstrual hygiene requirements of 50 females for a year)</p>
                      <p> 3000 INR (For menstrual hygiene requirements of 10 females for a year)</p>
                      <p>1500 INR (Support a woman for 2 months)</p>
                      <p> 4000 INR (For a skill training session)</p>
                    </ul>
                    <div class="eewrewr">
                        <p>Choose from above options</p>
                        <p class="paragraph_or">or</p>
                        <p>Pay what you want</p>
                        <div class="donate_peple">
                          <input type="nubmer" placeholder="47,000" />
                          <div>
                            <HeroButton buttonTitle="Donate" />
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                  <div className="col-md-6">
                    <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_7_2022-3_07_45-PM.jpg" class="w-100" alt=""/>
                  </div>
                </div>

              </div>

              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_7_2022-3_07_47-PM.jpg" alt="" class="w-100" />
              </div>
            </div>
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
