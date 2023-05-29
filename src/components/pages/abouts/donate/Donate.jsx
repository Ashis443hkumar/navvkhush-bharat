import React from 'react';
import Heading from '../../../common/heading/Heading';
import AboutHeroBack from '../../home/hero/AboutHeroback';
import HeroButton from '../../home/heroButton/HeroButton';
import "./donate.css"

export default function Donate() {
  return (
   <>
   <AboutHeroBack AboutTitle="" cover={"https://media.licdn.com/dms/image/D4D22AQHhw-g9geTIJw/feedshare-shrink_2048_1536/0/1685345817009?e=1687996800&v=beta&t=qkgTtuHwrmhDWwr7BvqSpeEhIUV09R5bB4dShv9sJM8"} />
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


       
      {/*--------------- bank deatsls  model---------- */}
      <section class="my-4">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Click here to banks Details
        </button>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"       aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Bank Details </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <section class="bank_details">
                <div className="container">
                  <div className="heading">
                      <h3>Our Bank details to make donation from net-banking / Internet Banking.</h3>
                      <h2>RBL Bank Limited</h2>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-12 text-start d-flex justify-content-center ">
                    <div className="bank_details_content ">
                      <p>  <strong>Beneficiary/Name: </strong> Crime Control & Social Development Organisation </p>
                      <p> <strong>Type of Account: </strong> Current</p>
                      <p><strong>Account Number: </strong> 408287372178 </p>
                      <p> <strong> Branch Name: </strong> Noida, sector - 18</p>
                      <p> <strong>Branch Code: </strong> 001706</p>
                      <p><strong>IFSC Code: </strong> RATN000114</p>
                      <p><strong>MICR Code: </strong> 110002054</p>
                    </div>
                    </div>
                  </div>
                </div>
             </section>
              </div>
      
            </div>
          </div>
        </div>
      </section> 


     {/* ------------------- donate section ---------------- */}
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
          <HeroButton buttonTitle="Become a Volunteer" />
        </div>
      </section>


   </>
  );
}
