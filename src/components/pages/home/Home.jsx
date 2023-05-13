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
import FounderMessage from '../abouts/founders/founderMessage/FounderMessage';
// import Volunteer from '../abouts/valunter/Volunteer';

export default function Home() {
    const navigate =  useNavigate()
  return (
    <>
      <Hero />
      
      <section class="founder_about_sectin py-4">
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
              {/* <button class="hero_button"></button> */}
              <HeroButton buttonTitle="Free a Hungry Child " />
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
            <img src="https://img.icons8.com/?size=1x&id=x51rXOCxzN33&format=png" alt=""/>
            <h3>Education for All</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            {/* <i class="fa-solid fa-face-smile"></i> */}
            <img src="https://img.icons8.com/?size=1x&id=64327&format=png" alt=""/>
            <h3>Fashion Design</h3>
            <p>
              To help and educate socially deprived people and children to
              achieve their fullest potential. Our aim is to provide education
              and training to persons with disabilities.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            {/* <i class="fa-solid fa-face-smile"></i> */}
            <img src="https://img.icons8.com/?size=1x&id=0mcyYaZoPqem&format=png" alt=""/>
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
         <Heading title="CONTRIBUTION TO SDG’s" />

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
                src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-6.png"
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

     <Impact/>
     

      <Banner/>
      <Testimonial/>


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

      <FounderMessage/>
    



    </>
  );
}
