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


export default function Home() {

    const navigate =  useNavigate()


  return (
    <>
      <Hero />

     <section class="home_abouts">
        <div className="container">
          <Heading title="About us" />
          <div className="row">
          <div className="col-md-6">
             <p>CCSDO strives to empower women with dignity and independence through economic and social support, working towards reducing violence and discrimination. Their achievements include education, counseling, and financial empowerment for women and children, as well as collaborations with government projects and employment opportunities. Join CCSDO in creating a more just and equal society.</p>
             <div class="home_about_btn">
               <button onClick={() =>navigate("./about")}>
                   <HeroButton buttonTitle="Read More" />
               </button>
             </div>
           </div>
            <div className="col-md-6 ">
              <img src="https://media.licdn.com/dms/image/D4D22AQFFnkX20jbX_g/feedshare-shrink_2048_1536/0/1685791142446?e=1688601600&v=beta&t=xnH8WAO_d7XCIVDUFYifqFtF75dX4yFLWz50Zl1f6rw" class="w-100 founimage" alt=""/>
            </div>
          </div>
        </div>
      </section>

      {/* founder messages  */}
     <section class="founder_home mt-4">
      <div className="container">
        <Heading title="FOUNDER'S MESSAGE" />
        <div className="row founder_content">
          <div className="col-md-4 card_content">
          <div className="card">
            <div className="founder_image">
            <img src="https://media.licdn.com/dms/image/D4D22AQGVTV2N-rVrQw/feedshare-shrink_800/0/1685791142191?e=1688601600&v=beta&t=-To_qf9YHuOlpX9POTK2Lwx1ZNLg1jqcQiVJSzRBTrw" class="card-img-top " alt="" />
            <div class="home_icons">
                <SocialsIcons/>
              </div>
            </div>
            <div className="card-body text-center">
              <h2>KAVITA RAWAT</h2>
              <h4>FOUNDER, NAVVKHUSH HELPING FOUNDATION</h4>
            </div>
          </div>
          </div>
          <div className="col-md-8">
            <div class="founder_content pt-3">
            <p class="pt-1">Welcome to navvkhush helping foundation,  also known as Crime Control & Social Development Organisation. Our mission is to bring positive change to the lives of women and children in semi-urban slums and villages. As a registered NGO, we are committed to improving the quality of education for children and empowering women to achieve financial independence. </p>

            <p>Through education, we aim to instil an open mindset in children and break the cycle of poverty. For women, we provide skill development programs, along with social and economic support, to help them become self-sufficient. Our current operations are based in Delhi and Gurgaon, but we plan to expand our projects to other parts of India. Join us in our efforts to make a difference in the lives of those who need it most</p>
            <button onClick={() =>navigate("./about")}>
                <HeroButton buttonTitle="ReadMore" />
            </button>
            </div>
          </div>
         </div>
        </div>
      </section>

       {/* Home banner section */}
       <section class="home_banner">
            <Banner title="It's not how much we give, but how much love we put into giving" buttonTitle={<button onClick={() =>navigate("./careers/intership")}>
            <HeroButton buttonTitle="Donate Now" />
         </button>} />
       </section>
          
       
     {/* mission & goals  */}
      <section className="mission_goal my-4">
      <div className="container">
        <Heading title="What we do"  />
        <div className="row">
          <div className="col-md-4 text-center ">
            <img src="https://cdn-icons-png.flaticon.com/128/769/769600.png" alt=""/>
            <h3>Child Education</h3>
            <p>
            Every child deserves the opportunity to learn and thrive, and together with our NGO, we are committed to providing quality education and empowering children for a brighter future.
            </p>
          </div>
          <div className="col-md-4 text-center ">
            <img src="https://cdn-icons-png.flaticon.com/128/2558/2558284.png" alt=""/>
            <h3>Fashion Designing Course</h3>
            <p>
            Unleash your creativity and passion for fashion with our Fashion Designing course, empowering aspiring designers to transform their dreams into reality while supporting our NGO's mission.
            </p>
          </div>
          <div className="col-md-4 text-center ">
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
                src="https://media.licdn.com/dms/image/D4D22AQG8vybjCSL-Rg/feedshare-shrink_800/0/1685944914546?e=1688601600&v=beta&t=gGxnipfgshjSQMa7axLmcg5vHKbh3V35gYwuYz6KjxQ"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQHxUjy64FOgpQ/feedshare-shrink_800/0/1685944914595?e=1688601600&v=beta&t=E6aNF1qmvtqbrUH4x-qkIlgRv817l_xg9_sK3NVU7Ys"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQEEgwUZEt04Hw/feedshare-shrink_800/0/1685944914512?e=1688601600&v=beta&t=MSdsiOtz3V_2lOF7JKEXKRLn19YzVlLk94f-SJc6JVU"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQG8qA_UTi6LqA/feedshare-shrink_800/0/1685944914589?e=1688601600&v=beta&t=5ofDF0rsVIBBBOS7PbXKhOtHecMkUXXEL6DZpzZ73CI"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQHex5YW1dsfMA/feedshare-shrink_800/0/1685944914591?e=1688601600&v=beta&t=_JmR7aKC84xysvzUKWw-vmvAryketjTqpI_E90is5Iw"
                alt=""
                class="w-100"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6  ">
              <img
                src="https://media.licdn.com/dms/image/D4D22AQENxUJe3i0SrQ/feedshare-shrink_800/0/1685944914871?e=1688601600&v=beta&t=AZlcNr5ni731CR4tmhtPJG9DNGpN-Ie8ZdQAyDfCSzo"
                alt=""
                class="w-100"
              />
            </div>
          </div>
        </div>
      </section>

        {/* home banner Volunteer  */}
        <section class="home_vlounterr">
        <Banner title="Start with helping one poor person and pave way for the bigger
            changes!" buttonTitle={<button onClick={() =>navigate("./careers/volunteer")}>
            <HeroButton buttonTitle="Become a Volunteer" />
         </button>} />
        </section>
       
     
      
       {/* youtube thubnails section */}
       <section class="youtube_thhubanail my-2">
        <div className="container my-3">
        <Heading title="Youtube videos"  class="mt-4" />

          <div className="row mb-3 pb-5">
            <div className="col-md-4 ">
              <ReactPlayer
                url="https://youtu.be/f7_OZchjP9s"
                autoplay
                class="w-100"
              />
            </div>
            <div className="col-md-4 video_content">
              <ReactPlayer url="https://youtu.be/wnF8HLbu9VA" class="w-100" />
            </div>
            <div className="col-md-4 video_content">
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
                  src="https://media.licdn.com/dms/image/D4D22AQHFWGqAR3pHVw/feedshare-shrink_800/0/1685792821945?e=1688601600&v=beta&t=uAM19SkN7jNBeLKwyJBPvEMhOC52Uloj6z4Yy5q7EnI"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQEO0YLx_NB5Lg/feedshare-shrink_800/0/1685792821919?e=1688601600&v=beta&t=9PZDW9NSk66HlsOM586_mga_wXuwGN2NQ3-6KJmcteU"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQEb57jIy3ZwdQ/feedshare-shrink_800/0/1685792821798?e=1688601600&v=beta&t=aAt_8UZMhZQYkAN6at9ZeUP7qM3VZrEN7PssHR5ggas"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQEEatFcfQxEKg/feedshare-shrink_800/0/1685792821898?e=1688601600&v=beta&t=HZ6rNRigIJr23oa1Fg7q4LG1x5VhnogfDXAXOWzLlkQ"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQGMS74rnwDbzw/feedshare-shrink_800/0/1685792822135?e=1688601600&v=beta&t=kHLPIFc4aUM2l7yu5it2vhyf8yYaT-6taUm8ulGCHl4"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 partner_img ">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/D4D22AQG70ip95ToVVg/feedshare-shrink_800/0/1685792822073?e=1688601600&v=beta&t=GZu1WVb1uK1NOTzWD0m_F8EsgI_8mDpCBW1KP0IKiwU"
                  className="w-100"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      
     {/* accodain faq  */}
     <section class="faa_section"> 
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
                    <button onClick={() =>navigate("./careers/volunteer/")} class="faq_readMore"> Read More </button>
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
                    <button onClick={() =>navigate("./about/donate")} class="faq_readMore"> ..Read More </button>
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

                  <button onClick={() =>navigate("/programs/childeducation")} class="faq_readMore"> ..Read More </button>
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThre">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThre" aria-expanded="false" aria-controls="panelsStayOpen-collapseThre">
                  Apply for Internships
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThre" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThre">
                <div class="accordion-body">
                  <p>
                  Everyone needs a little inspiration throughout their career. Inspiration is what keeps us motivated and passionate about what we do.

                  During your internship, you’re bound to experience some highs and lows. There will be times when you question everything you’ve learned so far and then there will be times when you feel on top of the world.

                  Wherever you are in your internship, it’s important to stay inspired. Whether it’s your goal to learn something new or share your ideas with your managers, find inspiration that can help you stay motivated during your internship.

                  <button onClick={() =>navigate("./careers/intership/")} class="faq_readMore"> ..Read More </button>
                  </p>
                </div>
              </div>
            </div>
     
            </div>
          </div>
        </div>     
      </div>
   </section>

     {/* cta section  */}
       <form class="form">
         <div>
           <span class="title">Subscribe to our newsletter</span>
         </div>
        <div>
          <input placeholder="Enter your email" type="email" name="email" id="email-address"/>
          <button type="submit">Subscribe</button>
        </div>
      </form>


    </>
  );
}
