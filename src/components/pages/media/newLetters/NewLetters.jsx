import React, { useState } from 'react';
import Heading from '../../../common/heading/Heading';
import './style.css';

export default function Newletters() {
  return (
    <>
      <section class="newLetter_section">
        <Heading title="News letters" />
        <article className="summer_camp"> 
          <div className="container">
              <div className="col-md-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjsClYJsvWhcbxMPu7pC_YzCGTaMBmewd_A5h-dMdHw&s"
                  alt=""
                  class=""
                />
            </div>

            {/* summer_camp */}
          <div className="row  summer_bottomm">
           <div className="col-md-6">
                  <div className="summer_content_left">
                    <h3>NAVVKHUSH HELPING FOUNDATION</h3>
                    <p>
                      We are very excited to announce that the School Project
                      that we were working on "NAVVKHUSH HELPING FOUNDATION" has
                      come to it's fruition and is now open. A lot of kids have
                      already started to come and learn from our teachers. We
                      will be providing them with all the necessary facilities
                      like, uniform, meals, books, stationery etc
                    </p>
                  </div>
                </div>
                <div className="col-md-6 summer_content_rightt">
                  <div className="">
                    <h3>SUMMER CAMP</h3>
                    <p class="">
                      As mentioned in the last edition of our newsletter, Crime
                      Control & Social Development Organisation (CCSDO) is
                      excited to announce the launch of our Summer Camp for
                      children. This initiative aims to provide a holistic and
                      engaging experience for children during their summer
                      break. We believe that this camp is not only an
                      opportunity for fun and recreation but also a platform to
                      impart valuable life skills and knowledge. At our Summer
                      Camp, children have the chance to participate in a wide
                      range of activities designed to foster their creativity,
                      physical fitness, and personal development.
                    </p>
                  </div>
                </div>
            </div>


            <div className="row mt-1 summer_bottom">
              <div className="col-md-4 summer_bottom_content ">
                <h3>Jindal steel CSR Project (Apparel)</h3>
                <p>
                  IIn this project, we are providing fashion designing/stitching
                  training absolutely free of cost to women.
                </p>
              </div>
              <div className="col-md-4 summer_bottom_content">
                <h3>Project NIPUN under Ministry of Housing & Urban Affairs</h3>
                <p>
                  his will enable the construction workers to seek better jobs,
                  increased wages and pursue overseas placements.
                </p>
              </div>
              <div className="col-md-4 summer_bottom_content">
                <h3>Sankalp Project</h3>
                <p>
                  This is a capacity building program for women sponsored by
                  NIESBUD. It is a 3-day training Certification Programme where
                  we train small businesses on how to grow their business on
                  online platforms.
                </p>
              </div>
            </div>

          </div>
      </article>

      {/* upcomingProject */}
        <article class="upcomingProject">
          <div className="container">

          <div className="row mt-1 summer_bottom">
              <div className="col-md-12 ">
                <h2>UPCOMING PROJECTS</h2>
              </div>
              <div className="row jhnkjkhkhjn">
                <div className="col-md-6">
                  <h3 class="jindal_text">Jindal Steel CSR Project (Apparel)</h3>
                  <p>
                    Our project will focus on connecting and supporting
                    marginalizing communities, including transgender
                    individuals, disputed women, and individuals involved in the
                    sex work industry. We will provide free fashion designing
                    training to empower them with valuable skills and
                    self-expression opportunities. By promoting inclusivity and
                    breaking stereotypes, we aim to create a more accepting
                    society. Our program will equip participants with the skills
                    needed for employment and sustainable livelihoods. By
                    nurturing creativity, we will help them in building
                    selfconfidence and a sense of identity, enabling
                    participants to achieve their dreams. Our initiative strives
                    to challenge societal prejudices and foster social change
                    towards a more inclusive society.
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                      <img src="https://www.shutterstock.com/image-photo/new-project-word-on-notepad-260nw-293529491.jpg" class="" alt=""/>
                    </div>
                    <div className="col-md-12 ">
                    <h3 class="sfuritschema">SFURTI Scheme</h3>
                    <p>
                    Scheme of Fund for Regeneration of Traditional Industries, a
                    programme by Ministry of Micro Small and Medium Enterprises,
                    Government of India aims to organize the traditional
                    industries and artisans and producers into collectives and
                    provide them with support in order to make quality and
                    competitive products to ensure long-term sustainability of
                    the sector and its artisans.
                  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        
      </section>
    </>
  );
}



      {/* <div className="row mt-1 summer_camp_content">
                <div className="col-md-6">
                  <div className="summer_content_left">
                    <h3>NAVVKHUSH HELPING FOUNDATION</h3>
                    <p>
                      We are very excited to announce that the School Project
                      that we were working on "NAVVKHUSH HELPING FOUNDATION" has
                      come to it's fruition and is now open. A lot of kids have
                      already started to come and learn from our teachers. We
                      will be providing them with all the necessary facilities
                      like, uniform, meals, books, stationery etc
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mr-4">
                  <div className="summer_content_right">
                    <h3>SUMMER CAMP</h3>
                    <p>
                      As mentioned in the last edition of our newsletter, Crime
                      Control & Social Development Organisation (CCSDO) is
                      excited to announce the launch of our Summer Camp for
                      children. This initiative aims to provide a holistic and
                      engaging experience for children during their summer
                      break. We believe that this camp is not only an
                      opportunity for fun and recreation but also a platform to
                      impart valuable life skills and knowledge. At our Summer
                      Camp, children have the chance to participate in a wide
                      range of activities designed to foster their creativity,
                      physical fitness, and personal development.
                    </p>
                  </div>
                </div>
              </div> */}
