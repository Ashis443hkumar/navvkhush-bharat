
import React from "react"
import {Outlet} from "react-router-dom"
import Heading from "../../common/heading/Heading"
import AboutHeroBack from "../home/hero/AboutHeroback"
import "./careers.css"
export default function Careers(){
  return(
    <>
      <AboutHeroBack AboutTitle="Careers"  />
      
      <section class="careers">
        <Heading title="Jobs opeaning" />
        <div className="container">
          <div className="row">
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          </div>

          <div className="row">
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2years  </h5>
            <div className="job_date_time">
               <span>Date:- 12-05-2023</span>
               <span>Time:- 12:30 Am</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
          
          </div>
         </div>
      </div>
    </section>


   
          <section class="mt-5 user_jobs">
            <Heading title="jobs Details" />
            <div className="container my-5">
            <form class="row g-3">
                <div className="row">
                <div class="col-md-4">
                  <label for="validationDefault01" class="form-label">First name</label>
                  <input type="text" class="form-control" id="validationDefault01" placeholder="Enter first Name" required />
                </div>
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Enter first Name" required />
                </div>
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Phone Nubmer</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Enter your number" required />
                </div>
                </div>

               <div className="row mt-5">
               <div class="mb-3 col-md-4">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label">Desiganation</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Content ritter</option>
                    <option>Socail Media </option>
                    <option>Data Operater</option>
                    <option>seo Spacelist</option>
                    <option>web Desigining</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label">experience</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option selected disabled value="">Fresher</option>
                    <option>Expericence:1 to 2Years</option>
                    <option>Expericence:2 to 3Years</option>
                    <option>Expericence:3 to 5Years</option>
                  </select>
                </div>
                <div class="mb-3 col-md-12">
                  <label for="exampleFormControlTextarea1" class="form-label">Job description*</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

               <div className="row mt-5">
                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label">Current Organazition</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Softkingo technology</option>
                    <option>Hcl </option>
                    <option>tcl </option>
                    <option>Amazone</option>
                    <option>Facebook</option>
                  </select>
                </div>
                
                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label">Your Qualifications</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>BCA</option>
                    <option>MCA</option>
                    <option>Diploma</option>
                    <option>B.Tech</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Current Ctc</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Enter first Name" required />
                </div>
               </div>
               
              
              <div className="row mt-5">
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Expectec Ctc</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Enter first Name" required />
                </div>

                <div class="col-md-4">
                  <label for="validationDefault03" class="form-label">City</label>
                  <input type="text" class="form-control" id="validationDefault03" required />
                </div>

                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label">State</label>
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Noida</option>
                    <option>Delhi ncr</option>
                    <option>Bihar</option>
                    <option>Bhopal</option>
                    <option>Haryana</option>
                  </select>
                </div>
              </div>

              <div className="row mt-5">
                <div class="col-md-4">
                  <label for="validationDefault05" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="validationDefault05" required />
                </div>
                <div class="mb-3 col-md-4 mt-5">
                  <input type="file" class="form-control" aria-label="file example" required />
                  <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
              </div>

              
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                    <label class="form-check-label" for="invalidCheck2">
                      Agree to terms and conditions
                    </label>
                  </div>
                </div>
              
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
            </div>
          </section>


      <Outlet/>
    </>
  )
}
