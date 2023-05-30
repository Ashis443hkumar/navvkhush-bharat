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
      <section class="">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        CLICK HERE FOR BANK DETAILS
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

      <label class="cyberpunk-checkbox-label">
        <input class="cyberpunk-checkbox" type="checkbox" />
        Check me</label>

      <label class="container">
       <input type="checkbox" checked="checked" />
        <div class="checkmark">
           <p>sdfdsjf kjhou km jhh  </p>
        </div>
      </label>


     {/* ------------------- donate section ---------------- */}
      <section class="tabs_donate">
        <div className="container-fluid">
          <div className="row rretry">
            <div className="col-md-12">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">SPONSOR A CHILD</button>

                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">SUPPORT WOMEN EMPOWERMENT</button>

                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">PAY WHAT YOU WANT</button>

              </div>
            </nav>
            {/* div1 */}
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row ">
                  <div className="col-md-6 pt-2 tbs_checkboxes">
                    <ul>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1">2,500 INR (Support a child for 1 months)</label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1">7,500 INR (Support a child for 3 months) </label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1">15,00 INR (Support a child for 6 months) </label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1">30,00 INR (Support a child for 1 year) </label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1"> 1,50,000 INR (Support a child for 5 year) </label>
                    </li>
                    </ul>
                    <div class="eewrewr mt-2 pt-2">
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
              {/* div 2 */}
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                  <div className="col-md-6 fggefr">
                    <div class="">
                    <ul class="freerert">
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1">15000 INR (For menstrual hygiene requirements of 50 females for a year) </label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1"> 3000 INR (For menstrual hygiene requirements of 10 females for a year)</label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1"> 1500 INR (Support a woman for 2 months)</label>
                    </li>
                    <li>
                      <input type="checkbox" id="answer-1" name="answer-1" />
                      <label for="answer-1"> 4000 INR (For a skill training session)</label>
                    </li>
                  </ul>
                    <div class="eewrewr mt-4 ">
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

              {/* div3  */}
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div class="row ergtryrty">
              <div class="col-75">
                <div class="container ">
                  <form action="/action_page.php">
                    <div class="row">
                      <div class="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="john@example.com"/>
                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                        <label for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="New York"/>

                        <div class="row">
                          <div class="col-50">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY"/>
                          </div>
                          <div class="col-50">
                            <label for="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="10001"/>
                          </div>
                        </div>
                      </div>

                      <div class="col-50 ">
                        <h3 class="">Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <div class="icon-container">
                          <i class="fa-brands fa-cc-visa" style={{color:"navy"}} ></i>
                          <i class="fa-brands fa-cc-amex" style={{color:"blue",  paddingLeft: "10px"}}></i>
                          <i class="fa-brands fa-cc-mastercard" style={{color: "red",  paddingLeft: "10px"}}></i>
                          <i class="fa-brands fa-cc-discover" style={{color: "orange", paddingLeft: "10px"}}></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                        <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                        <label for="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

                        <div class="row">
                          <div class="col-50">
                            <label for="expyear">Exp Year</label>
                            <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                          </div>
                          <div class="col-50">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="352"/>
                          </div>
                        </div>
                      </div>

                    </div>
                    <label>
                      <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as payments
                    </label>
                    <input type="submit" value="Continue to Payment" class="btn"/>
                  </form>
                </div>
              </div>

            

            </div>
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
