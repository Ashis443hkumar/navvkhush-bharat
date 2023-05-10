import React from 'react';
import Hero from './hero/Hero';
import './home.css';

import ReactPlayer from 'react-player'

export default function Home() {
  return (
    <>
      <Hero />

      {/* WHO WE ARE */}
      <section class="whoAeAre_section">
        <div className="container my-4 py-4">
        <div className="row">
          <div className="col-md-6">
            <h3>WHO WE ARE</h3>
            <p>
              National Organisation for Social Empowerment (NOFSE) is a
              registered NGO working for the differently abled and
              underprivileged of our community. We are a group of dreamers with
              a collective vision; ‘Inclusiveness’. We believe that a world
              without barriers should not be a luxury but a right. We are doing
              our bit to ensure that disability does not entail disadvantage. At
              National NGO we are working to advance the rights of persons with
              disabilities (PWDs) in our society has been continually working for
              social integration of persons with disability. Although we work
              with a small set of people, we go all the way in supporting them
              to become self-sufficient. Through these years, we have assumed
              the role of facilitators, counselors, friends and teachers amongst
              others
            </p>
            <button class="hero_button">Free a Hungry Child</button>
          </div>
          <div className="col-md-6">
            <figure>
              <img
                src="https://nationalngo.org/assets/images/who-we-are-main.png"
                alt=""
                className="w-100"
              />
            </figure>
          </div>
        </div>
        </div>
      </section>

      {/* mission & goals  */}
      <section className="container  mission_goal my-4">
        <div className="heading pt-4">
          <h2>Mission & Goals</h2>
          <p>
            The revolution is here, where are you? Poverty is removed not by
            sharing but by eradicating!
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 text-center ">
            <i class="fa-solid fa-face-smile"></i>
            <h3>Education for All</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            <i class="fa-solid fa-face-smile"></i>
            <h3>Education for All</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            <i class="fa-solid fa-face-smile"></i>
            <h3>Education for All</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
        </div>
      </section>

    
 
   {/* youtube thubnails section */}
     <section class="youtube_thhubanail my-5">
       <div className="container my-3">
         <div className="heading">
           <h1>Video</h1>
         </div>
         <div className="row my-3">
           <div className="col-md-4">
             <ReactPlayer url='https://youtu.be/f7_OZchjP9s' autoplay  class="w-100" />
           </div>
           <div className="col-md-4">
             <ReactPlayer url='https://youtu.be/wnF8HLbu9VA' class="w-100"  />
           </div>
           <div className="col-md-4">
           <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' class="w-100" />
           </div>
  
         </div>
       </div>
     </section>

 {/* recent cases */}
   <section classsName="recen_case my-4 py-4">
        <div className="container">
          <div className="heading">
            <h2>Our Recent Causes</h2>
            <p>
              Leaving people in poverty is like clipping wings of a bird! START
              WITH A SMALL CHANGE TODAY!
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
             <div className="card">
             <img src="https://www.nationalngo.net/assets/images/05.png" className="w-100" alt=""/>
              <div className="card-body">
                <h3>Feeding the Hungry</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam tempora asperiores, autem sequi veritatis a. Aut aliquam necessitatibus veniam officiis dicta?</p>
              </div>
             </div>
            </div>
            <div className="col-md-4">
             <div className="card">
             <img src="https://www.nationalngo.net/assets/images/05.png" className="w-100" alt=""/>
              <div className="card-body">
                <h3>Feeding the Hungry</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam tempora asperiores, autem sequi veritatis a. Aut aliquam necessitatibus veniam officiis dicta?</p>
              </div>
             </div>
            </div>

            <div className="col-md-4">
             <div className="card">
             <img src="https://www.nationalngo.net/assets/images/05.png" className="w-100" alt=""/>
              <div className="card-body">
                <h3>Feeding the Hungry</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ullam tempora asperiores, autem sequi veritatis a. Aut aliquam necessitatibus veniam officiis dicta?</p>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* lates News & award  */}
      <section className="arawd_new mt-4">
        <div class="container">
          <div className="headerr">
            <div>
              <h2>LATEST NEWS</h2>
            </div>
            <div class="award_btn">
              <h3>AWARDS</h3>
              <button>VIEW ALL</button>
            </div>
          </div>
          <hr />
          {/* row  */}
          <div className="row">
            <div className="col-md-6">
              {/* row 2 */}
              <div class="row">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-12 bg-warning">
                      <h3>19may, 2021</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 lates_new_post">
                  <h6> The Times of India</h6>
                  <h5>Food, ration, O2: NGO reaches out to Poor</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem quam quod illum!
                  </p>
                </div>
              </div>
              <hr />
           
              {/* row -end  */}
              <div class="row">
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-12 bg-warning">
                      <h3>19may, 2021</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-9 lates_new_post">
                  <h6> The Times of India</h6>
                  <h5>Food, ration, O2: NGO reaches out to Poor</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorem quam quod illum!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://www.nationalngo.net/assets/images/NCT_Award.png"
                alt=""
              />
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

      {/* trust section  */}
      <section className="trust">
        <div className="container">
          <div className="heading">
            <h3>GIVING YOU CAN TRUST</h3>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 pt-3 trust_content">
              <p>
                National OrganisationFor Social Empowerment was established in
                2012, we have been continually working for social integration of
                underprivileged children & people, persons with special ability
                and women & girls of our community. We are a group of positive
                thinkers with a mutual vision. We believe that a world without
                barriers is a right not luxury.
              </p>
            </div>

            <div className="col-md-6 p-4 trust_people">
              <div className="row">
                <div className="col-md-6 ">
                  <h2>70M+</h2>
                  <p>Raised for nonprofits</p>
                </div>
                <div className="col-md-6">
                  <h2>2.3M+</h2>
                  <p>Donors have contributed to causes</p>
                </div>
                <div className="col-md-6">
                  <h2>10M+</h2>
                  <p>Live impacted</p>
                </div>
                <div className="col-md-6">
                  <h2>Trusted</h2>
                  <p>by 150+ corporates and brands</p>
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

      {/* testimonial section  */}

      <section class="home-testimonial">
        <div class="container-fluid">
        <div class="row d-flex justify-content-center testimonial-pos">
            <div class="col-md-12 pt-4 d-flex justify-content-center">
                <h3>Testimonials</h3>
            </div>
            <div class="col-md-12 d-flex justify-content-center">
                <h2>Explore the students experience</h2>
            </div>
        </div>
        <section class="home-testimonial-bottom">
            <div class="container testimonial-inner">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo; I am so grateful for the work that this NGO does to empower women and educate children. Their commitment to creating a better future for vulnerable communities is truly inspiring.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Seema Yadav</div>
                                <div class="link-position d-flex justify-content-center">Hr</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;I have seen firsthand the impact that this NGO has on the lives of women and children. Their dedication to providing education and resources has transformed communities and given hope.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Student</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;As a mother, I cannot express enough how important it is for children to have access to quality education. This NGO is doing incredible work to ensure that all children have the opportunity to learn and succeed..&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Student</div>
                            </div>
                        </div>
                    </div>

                 </div>
                </div>
        </section>
        </div>
      </section>
      {/* testimonial  end  */}


      {/* our partner section  */}
      <section className="Our_partner">
        <div className="container-fluid">
          <div className="heading">
            <h3>Our Partners</h3>
          </div>
          <div className="row my-3">
            <div className="col-md-2 partner_img ">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/corpet.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/honda.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/hsl.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/munjal.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/shivam.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/trust.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
          
          </div>
        </div>
      </section>

      {/* ------------ marq --------- */}
      <div class = "main">
      <marquee class="marq" bgcolor = "Green" direction = "left" loop="" >
         <div class="dsfdfsdf">
         <div class="rwetewte">
            <h2>Hello Good Evening</h2>
          </div>
          <div class="rwetewte">
            <h2>Hello Good Evening</h2>
          </div>
          <div class="rwetewte">
            <h2>Hello Good Evening</h2>
          </div>
          <div class="rwetewte">
            <h2>Hello Good Evening</h2>
          </div>
          <div class="rwetewte">
            <h2>Hello Good Evening</h2>
          </div>
          <div class="rwetewte">
            <h2>Hello Good Evening</h2>
          </div>
         </div>
      </marquee>
      </div>


     {/* our award section  */}
       <section className="Our_partner arard_partner">
        <div className="container-fluid">
          <div className="heading">
            <h3>Our Award</h3>
          </div>
          <div className="row my-3">
            <div className="col-md-2 partner_img ">
              <figure>
                <img
                  src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Scopup.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/world-csr-congress.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/hsl.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Zee-Business.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/shivam.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-2 partner_img">
              <figure>
                <img
                  src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/UTV-Bindass-logo.png"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
          
          </div>
        </div>
      </section>


      {/* event section  */}
      <section className="event">
        <div className="">
          <div className="headeer">
            <h3>Our Events</h3>
            <button>View All Events</button>
          </div>
          <div className="row">
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/807361_IMG_0103_6fe53f5264_1476e383db.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/38288153146106_2371957943034568_6104911268093624320_n_0014bf7161_8b7ca277ad.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/32722155793542_2391366957760333_5528121289367093248_n_82d7fd641c_9406a6a2e4.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/60556148372436_2325324877697875_68205278956355584_n_08da8ba648_ea00b572e9.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 m-0 p-0">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/50927141215879_2262072324023131_1571373760164921344_n_0ac60f76ba_0ea17fac79.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/96870145576509_2296943713869325_2741727819766693888_n_58300448bf_e3748b8ca6.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-md-3 ">
              <figure>
                <img
                  src="https://api.nationalngo.net/uploads/45419143952177_2282887211941642_6293387429613142016_n_6438fa69a6_c5200ea47c.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

  
    </>
  );
}
