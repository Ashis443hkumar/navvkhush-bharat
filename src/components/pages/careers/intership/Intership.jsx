import React from "react";
import Heading from "../../../common/heading/Heading";
import AboutHeroBack from "../../home/hero/AboutHeroback";
import HeroButton from "../../home/heroButton/HeroButton";
import "./style.css"

export default function Intership() {
  return (
     <>
     <AboutHeroBack  AboutTitle=""  cover={"https://media.licdn.com/dms/image/D4D22AQG3mAJRJAUMAA/feedshare-shrink_1280/0/1685703253352?e=1688601600&v=beta&t=aTfMz_BH41I-oVE4NNiVHpr1k3r9M1qQa4oo4pGAkdo"} />

     <section class="Internship mt-4">
     <Heading title="Apply for Internship" />
       <div className="container mt-4">
         <div className="row">
         <div className="col-md-6 intershop_content">
           <h1>Brief Summary of Internship Program</h1>
           <p>We offer internships to students and recent graduates who are passionate about making a positive impact in their community. Our internships provide a unique opportunity to gain hands-on experience and develop new skills while working alongside our dedicated team of professionals</p>

           <p>As an intern with our organisation, you will have the opportunity to contribute to meaningful projects and initiatives, learn from experienced professionals in the field, and gain valuable experience in your area of interest. Our internships are designed to be challenging, engaging, and rewarding, providing you with the opportunity to make a significant impact in your community</p>

           <p>We offer internships in a variety of areas, including program development, community outreach, fundraising and development, marketing and communications, and more. We also offer both in-person and remote internships to accommodate different schedules and preferences.</p>

           <p>To apply for an internship with our organisation, please visit our website and complete the online application form. Be sure to include your resume, cover letter, and any other relevant documents or materials. Our team will review your application and contact you if you are selected for an interview.</p>

           <p>We value diversity, equity, and inclusion and encourage applicants from all backgrounds and experiences to apply. Join us in our mission to make a positive impact in our community and gain valuable experience through an internship with our organisation.</p>
               
         </div>

         <div className="col-md-6 intership_form">
               <h4> Internship Form</h4>
               <form action="">
                 <div className="row d-flex align-items-center">
                   <div className="col-md-3">
                     <label htmlFor="" class="dfre">Your Name</label>
                   </div>
                 <div className="col-md-9 inter_suser_form">
                  <div class="">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="" />
                  </div>
                 </div>
                </div>

                {/* <label for="data" class="lb">Date:</label>
                 <input name="data" id="data" type="date" 
                 class="infos" /> */}

                {/* gender   */}
                <div className="row d-flex align-items-center mt-2">
                   <div className="col-md-3">
                     <label htmlFor="" class="dfre">Gender</label>
                   </div>
                 <div className="col-md-9 inter_suser_form">
                  <div class="radio-container">
                  <div class="radio-wrapper">
                    <label class="radio-button">
                      <input type="radio" name="radio-group" id="option1" />
                      <span class="radio-checkmark"></span>
                      <span class="radio-label">Male</span>
                    </label>
                  </div>
                  <div class="radio-wrapper">
                    <label class="radio-button">
                      <input type="radio" name="radio-group" id="option2" />
                      <span class="radio-checkmark"></span>
                      <span class="radio-label">Female</span>
                    </label>
                  </div>
                  <div class="radio-wrapper">
                    <label class="radio-button">
                      <input type="radio" name="radio-group" id="option3" />
                      <span class="radio-checkmark"></span>
                      <span class="radio-label">Other</span>
                    </label>
                  </div>
                </div>
               </div>
              </div>

                <div className="row d-flex align-items-center mt-3">
                   <div className="col-md-3">
                     <label htmlFor="" class="dfre">Date OF Birth</label>
                   </div>
                 <div className="col-md-9 date_of_birth">
                  <div class="date_day">
                    <label htmlFor="">Day</label>
                    <select name="" id="">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option>
                      {/* <option value="">10</option> */}
                      {/* <option value="">11</option>
                      <option value="">12</option>
                      <option value="">13</option>
                      <option value="">14</option>
                      <option value="">15</option>
                      <option value="">16</option>
                      <option value="">17</option>
                      <option value="">18</option>
                      <option value="">19</option>
                      <option value="">20</option>
                      <option value="">21</option>
                      <option value="">22</option>
                      <option value="">23</option>
                      <option value="">24</option>
                      <option value="">25</option>
                      <option value="">26</option>
                      <option value="">27</option>
                      <option value="">28</option>
                      <option value="">29</option>
                      <option value="">30</option>
                      <option value="">31</option> */}

                    </select>
                  </div>
                  <div class="date_day date_of_month">
                    <label htmlFor="">Month</label>
                    <select name="" id="">
                      <option value="">January</option>
                      <option value="">February</option>
                      <option value="">March</option>
                      <option value="">April</option>
                      <option value="">may</option>
                      <option value="">June</option>
                      <option value="">July</option>
                      <option value="">August</option>
                      <option value="">September</option>
                      <option value="">October</option>
                      <option value="">November</option>
                      <option value="">December</option>
                    </select>
                  </div>
                  <div class="date_day">
                    <label htmlFor="">years</label>
                    <select name="" id="">
                      <option value="">2001</option>
                      <option value="">2002</option>
                      <option value="">2003</option>
                      <option value="">2004</option>
                      <option value="">2005</option>
                      <option value="">2006</option>
                      <option value="">2007</option>
                      <option value="">2008</option>
                    </select>
                  </div>
                 </div>
                </div>

                <div className="row d-flex align-items-center mt-4">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">School Name:</label>
                   </div>
                 <div className="col-md-8 input_form">
                  <div class="">
                    <input type="text" placeholder="school name" />
                  </div>
                 </div>
                </div>


                <div className="row d-flex align-items-center mt-2">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">Phone Number:</label>
                   </div>
                 <div className="col-md-8 input_form">
                  <div class="">
                    <input type="text" placeholder=" " />
                  </div>
                 </div>
                </div>

                <div className="row d-flex align-items-center mt-2 ">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">E-mail Address:</label>
                   </div>
                 <div className="col-md-8 input_form">
                  <div class="">
                    <input type="text" placeholder="name:example@gmail.com" />
                  </div>
                 </div>
                </div>

                <div className="row d-flex align-items-flex-start  pb-1">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">Address:</label>
                   </div>
                 <div className="col-md-8 input_form">
                    <div className="row">
                      <div className="col-md-12">
                      <div class="">
                        <label htmlFor="">City</label>
                        <input type="text" placeholder="" />
                      </div>
                      </div>
                      <div className="col-md-12 mt-1">
                      <div class="">
                        <label htmlFor="">Postal / Zip Code</label>
                        <input type="text" placeholder="" />
                      </div>
                      </div>

                    </div>
                 </div>
                </div>

                <div class="intership_submit_btn" >
                   <HeroButton buttonTitle="Submit" />
                </div>
               </form>
             </div>
          
         </div>
       </div>
     </section>
     
  

  
     </>
  );
}
