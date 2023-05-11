import React from 'react';
import Hero from './hero/Hero';
import './home.css';

import ReactPlayer from 'react-player';
import Heading from '../../common/heading/Heading';
// import Volunteer from '../abouts/valunter/Volunteer';

export default function Home() {
  return (
    <>
      <Hero />

      <section class="about my-4">
         <div className="container">
          
           <Heading title="About us" />
           <div className="row">
             <div className="col-12">
               <p>At the Crime Control & Social Development Organisation (CCSDO), we believe that every woman has the right to live a life of dignity and self-respect. Our registered NGO envisions working towards bringing significant changes in the lives of women across society by providing economic and social support, empowering them with financial independence.

                CCSDO is committed to contributing to society as equal partners in the development of families and communities, with a focus on reducing violence, harassment, and discrimination against women. We believe that by empowering women, we can create a brighter, more equal future for all.

                Our team is made up of dedicated professionals who are passionate about making a difference. From providing education and training to children and women in underserved communities to giving stitching classes to women inmates in Tihar Jail, our programs aim to equip individuals with the knowledge and tools they need to succeed in the modern world.

                We are proud of our achievements and the impact we have made in the lives of women and children. Our achievements till date include educating 1779 children, providing counselling to over 3000 women, registering over 1250 women with us, and empowering 75 women who are now financially independent. Additionally, we were selected for the Delhi Governmen
                </p>
             </div>
           </div>
         </div>
       </section>


    
    
      {/* WHO WE ARE */}
      <section class="whoAeAre_section">
        <div className="container my-4 py-0">
          <div className="row">
            <div className="col-md-6">
              <h3>What we do</h3>
              <p>
                National Organisation for Social Empowerment (NOFSE) is a
                registered NGO working for the differently abled and
                underprivileged of our community. We are a group of dreamers
                with a collective vision; ‘Inclusiveness’. We believe that a
                world without barriers should not be a luxury but a right. We
                are doing our bit to ensure that disability does not entail
                disadvantage. At National NGO we are working to advance the
                rights of persons with disabilities (PWDs) in our society has
                been continually working for social integration of persons with
                disability. Although we work with a small set of people, we go
                all the way in supporting them to become self-sufficient.
                Through these years, we have assumed the role of facilitators,
                counselors, friends and teachers amongst others
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
    <section className="mission_goal my-4">
      <div className="container">
        <Heading title="Mission & Goals"  />
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
            <h3>Fashion Design</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            <i class="fa-solid fa-face-smile"></i>
            <h3>Medical Facilities</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Our Contribution to SDG’s */}
      <section class="sdg_section">
        <div className="container">
         <Heading title="Mission & Goals" />

          <div className="row py-4">
            <div className="col-2">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-1.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-2">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-2.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-2">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-3.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-2">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-4.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-2">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-5.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-2">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-5.png"
                alt=""
                class="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* youtube thubnails section */}
      <section class="youtube_thhubanail my-5">
        <div className="container my-3">
        <Heading title="Youtube videos"  />

          <div className="row my-3">
            <div className="col-md-4">
              <ReactPlayer
                url="https://youtu.be/f7_OZchjP9s"
                autoplay
                class="w-100"
              />
            </div>
            <div className="col-md-4">
              <ReactPlayer url="https://youtu.be/wnF8HLbu9VA" class="w-100" />
            </div>
            <div className="col-md-4">
              <ReactPlayer
                url="https://www.youtube.com/embed/XKifONoiJDQ"
                class="w-100"
              />
            </div>
          </div>
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
                      <div class="tour-text color-grey-3 text-center">
                        &ldquo; I am so grateful for the work that this NGO does
                        to empower women and educate children. Their commitment
                        to creating a better future for vulnerable communities
                        is truly inspiring.&rdquo;
                      </div>
                      <div class="d-flex justify-content-center pt-2 pb-2">
                        {/* <img
                          class="tm-people"
                          src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                          alt=""
                        /> */}
                      </div>
                      <div class="link-name d-flex justify-content-center">
                        Seema Yadav
                      </div>
                      <div class="link-position d-flex justify-content-center">
                        Hr
                      </div>
                      
                    </div>
                  </div>
                </div>

                <div class="col-md-4 style-3">
                  <div class="tour-item ">
                    <div class="tour-desc bg-white">
                      <div class="tour-text color-grey-3 text-center">
                        &ldquo;I have seen firsthand the impact that this NGO
                        has on the lives of women and children. Their dedication
                        to providing education and resources has transformed
                        communities and given hope.&rdquo;
                      </div>
                      <div class="d-flex justify-content-center pt-2 pb-2">
                        {/* <img
                          class="tm-people"
                          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        /> */}
                      </div>
                      <div class="link-name d-flex justify-content-center">
                        Balbir Kaur
                      </div>
                      <div class="link-position d-flex justify-content-center">
                        Student
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 style-3">
                  <div class="tour-item ">
                    <div class="tour-desc bg-white">
                      <div class="tour-text color-grey-3 text-center">
                        &ldquo;As a mother, I cannot express enough how
                        important it is for children to have access to quality
                        education. This NGO is doing incredible work to ensure
                        that all children have the opportunity to learn and
                        succeed..&rdquo;
                      </div>
                      <div class="d-flex justify-content-center pt-2 pb-2">
                        {/* <img
                          class="tm-people"
                          src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                        /> */}
                      </div>
                      <div class="link-name d-flex justify-content-center">
                        Balbir Kaur
                      </div>
                      <div class="link-position d-flex justify-content-center">
                        Student
                      </div>
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
      <section className="Our_partner my-0">
        <div className="container-fluid">
        <Heading title="Our Partners"  />
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
      {/* <div class="main">
        <marquee class="marq" bgcolor="Green" direction="left" loop="">
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
      </div> */}

      {/* our award section  */}
      <section className="Our_partner arard_partner">
        <div className="container-fluid">
        <Heading title="Our Award"  />

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

    



    </>
  );
}
