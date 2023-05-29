import React from 'react';
import Hero from './hero/Hero';
import './home.css';

import { Link, useNavigate } from "react-router-dom"

import ReactPlayer from 'react-player';
import Heading from '../../common/heading/Heading';
import Banner from './banner/Banner';
import Testimonial from './testimonial/Testimonial';
import HeroButton from './heroButton/HeroButton';
import SocialsIcons from './heroButton/SocialSIcon';
import Impact from './impact/Impact';
import Heading from '../../common/heading/Heading';

import Volunteer from '../abouts/valunter/Volunteer';
import Tests from './testimonial/Tests';

export default function Home() {

    const navigate =  useNavigate()

  return (
    <>
      <Hero />
      <Tests/>
      
      <section class="home_founder py-4">
       <div className="container">
         <Heading title="About us" />
         <div className="row">
           <div className="col-12">
           <input id="ch" type="checkbox" />
             <p>CCSDO strives to empower women with dignity and independence through economic and social support, working towards reducing violence and discrimination. Their achievements include education, counseling, and financial empowerment for women and children, as well as collaborations with government projects and employment opportunities. Join CCSDO in creating a more just and equal society.</p>
             <div>
               <button onClick={() =>navigate("./about")}>
                   <HeroButton buttonTitle="ReadMore" />
               </button>
             </div>
           </div>
         </div>
       </div>
     </section>



  {/* founder messages  */}
  <section class="founder_home mt-4">
      <div className="container">
        <Heading title="FOUNDER MESSAGE" />
        <div className="row founder_content">
          <div className="col-md-4 card_content">
          <div className="card">
            <img src="https://media.licdn.com/dms/image/D4D22AQFuyNvq2KJ0ZA/feedshare-shrink_1280/0/1685000870596?e=1687996800&v=beta&t=bgAMJXKAUOx3hlWvLgGvwQWhPCr2m-3amsai7Qu8KPk" class="card-img-top " alt="" />
            
            <div className="card-body text-center">
              <h2>KAVITA RAWAT</h2>
              <h4>FOUNDER, NavvKhush Bharat</h4>
              <div class="home_icons">
                <SocialsIcons/>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-8">
            <div class="founder_content">
            <p class="pt-1">Welcome to Navv Khush Bharat, also known as Crime Control & Social Development Organisation. Our mission is to bring positive change to the lives of women and children in semi-urban slums and villages. As a registered NGO, we are committed to improving the quality of education for children and empowering women to achieve financial independence. </p>

            <p>Through education, we aim to instil an open mindset in children and break the cycle of poverty. For women, we provide skill development programs, along with social and economic support, to help them become self-sufficient. Our current operations are based in Delhi and Gurgaon, but we plan to expand our projects to other parts of India. Join us in our efforts to make a difference in the lives of those who need it most</p>
            <button onClick={() =>navigate("./about")}>
                <HeroButton buttonTitle="ReadMore" />
            </button>
            </div>
          </div>
        </div>
      </div>
       </section>

    
     {/* mission & goals  */}
      <section className="mission_goal my-4">
      <div className="container">
        <Heading title="What we do"  />
        <div className="row">
          <div className="col-md-4 text-center ">
            {/* <img src="https://img.icons8.com/?size=1x&id=x51rXOCxzN33&format=png" alt=""/> */}
            <img src="https://cdn-icons-png.flaticon.com/128/769/769600.png" alt=""/>
            <h3>Child Education</h3>
            <p>
            Every child deserves the opportunity to learn and thrive, and together with our NGO, we are committed to providing quality education and empowering children for a brighter future.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            {/* <img src="https://img.icons8.com/?size=1x&id=64327&format=png" alt=""/> */}
            <img src="https://cdn-icons-png.flaticon.com/128/2558/2558284.png" alt=""/>
            <h3>Fashion Designing Course</h3>
            <p>
            Unleash your creativity and passion for fashion with our Fashion Designing course, empowering aspiring designers to transform their dreams into reality while supporting our NGO's mission.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            {/* <img src="https://img.icons8.com/?size=1x&id=0mcyYaZoPqem&format=png" alt=""/> */}
            <img src="https://cdn-icons-png.flaticon.com/128/952/952228.png" alt="" />
            <h3>Counselling</h3>
            <p>
            Counselling by us, through our NGO, provides a supportive space for individuals to heal, grow, and find resilience in the face of life's challenges.
            </p>
          </div>
        </div>
      </div>
      </section>

    
  

     
      <Impact/>

        {/* Our Contribution to SDG’s */}
        <section class="sdg_section">
        <div className="container">
         <Heading title="CONTRIBUTION TO SDG’s" />

          <div className="row py-4">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-1.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-2.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-3.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-4.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-5.png"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-6.png"
                alt=""
                class="w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <Banner/>
      
       {/* youtube thubnails section */}
       <section class="youtube_thhubanail my-5">
        <div className="container my-3">
        <Heading title="Youtube videos"  class="mt-4" />

          <div className="row my-3 pb-5">
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

      <Testimonial/>


      {/* our partner section  */}
      <section className="Our_partner my-0">
        <div className="container-fluid">
        <Heading title="Our Partners"  />
          <div className="row my-3">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img  ">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/corpet.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/honda.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/hsl.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/munjal.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/shivam.jpg"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
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
      

     
     {/* accodain faq  */}
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="faq_head">
                <h2>HOW YOU CAN HELP</h2>
              </div>
            </div>
            <div className="col-md-8">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Volunteer with Us
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <p>We are looking for enthusiastic individuals who would work for the well-being of others... 
                  <button onClick={() =>navigate("./about")} class="faq_readMore"> Read More </button>

                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Donate Now!
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <p> In order for us to achieve our dream of making India a better place, we would love any monetary or goods’ donations.
                    <button onClick={() =>navigate("./about")} class="faq_readMore"> ..Read More </button>
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Sponsor a Child
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <p>
                  A lack of access to basic necessities like education, nutrition and health care are the leading reasons behind these statistics. You, however, have the power to change this equation! When you sponsor a child, you give them the resources needed to survive and empower them with access to basic necessities, thus helping them to raise the standard of living for his/her families and communities.

                  When you sponsor a child, you’re creating lasting change in their lives and beyond. It is a great way to build on the unique, life-changing bond between you and your sponsored child. 

                  <button onClick={() =>navigate("./about")} class="faq_readMore"> ..Read More </button>
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThre">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Apply for Internships
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThre" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThre">
                <div class="accordion-body">
                  <p>
                  Everyone needs a little inspiration throughout their career. Inspiration is what keeps us motivated and passionate about what we do.

                  During your internship, you’re bound to experience some highs and lows. There will be times when you question everything you’ve learned so far and then there will be times when you feel on top of the world.

                  Wherever you are in your internship, it’s important to stay inspired. Whether it’s your goal to learn something new or share your ideas with your managers, find inspiration that can help you stay motivated during your internship.

                  <button onClick={() =>navigate("./about")} class="faq_readMore"> ..Read More </button>
                  </p>
                </div>
              </div>
            </div>
     
            </div>
          </div>
        </div>
     
      </div>

     




      
    



{/* ----home page end  --- */}

    </>
  );
}
