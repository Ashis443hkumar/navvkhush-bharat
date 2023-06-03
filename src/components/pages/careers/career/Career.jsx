
import React from "react"
import {Outlet} from "react-router-dom"
import Heading from "../../../common/heading/Heading"
import AboutHeroBack from "../../home/hero/AboutHeroback"
import "./career.css"
export default function Career(){
  return(
    <>
    
      <AboutHeroBack AboutTitle="" cover="https://media.licdn.com/dms/image/D4D22AQHYDiUYhdUcvA/feedshare-shrink_20/0/1685703253296?e=1688601600&v=beta&t=PlBvMd8BEOx3CyOyVEiCIHzBLcwQDxjHq_I0prgqimU" />
      
      {/* <section class="careers">
        <Heading title="Job Openings" />
        <div className="container">
          <div className="row mt-4 ">
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>

          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>

          </div>

          <div className="row mt-5">
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>

          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p ><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>
          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>

          <div className="col-md-3 career_job_details">
            <h3 class="jobsrole"><strong class="profile">Profile:-</strong> Web Developer</h3>
            <h5> <strong>Expericence: </strong>2 years  </h5>
            <p><strong>Job Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laudantium ex molestias   harum explicabo in quisquam. Minus eius consequatur aspernatur temporibus! </p>
            <div className="job_date_time">
               <span> <strong>Date:</strong> - 12-05-2023</span>
            </div>
            <span><strong>Location: </strong> kalyan Puri, delhi ncr</span>
          </div>

          </div>

          
      </div>
    </section> */}


   
   {/* ------------ job form  --------- */}
       <section class="mt-5 user_jobs">
            <Heading title="Job Details" />
            <div className="container my-5">
            <form class="row ">
                <div className="row">
                <div class="col-md-4">
                  <label for="validationDefault01" class="form-label">First name</label>
                  <input type="text" class="form-control" id="validationDefault01" placeholder="Enter first Name" required />
                </div>
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="validationDefault02" placeholder="Enter last Name" required />
                </div>
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Phone Nubmer</label>
                  <input type="number" class="form-control" id="validationDefault02" placeholder="Enter your number" required />
                </div>
                </div>

               <div className="row mt-4">
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
                    <option>Fresher</option>
                    <option>Expericence:1 to 2Years</option>
                    <option>Expericence:2 to 3Years</option>
                    <option>Expericence:3 to 5Years</option>
                  </select>
                </div>

                <div class="mb-3 col-md-12 mt-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Job description*</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>

               <div className="row mt-3">
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
                  <input type="number" class="form-control" id="validationDefault02" placeholder="1,60,000 lakh" required />
                </div>
               </div>
               
              
              <div className="row mt-4">
                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label">Expectec Ctc</label>
                  <input type="number" class="form-control" id="validationDefault02" placeholder="1,60,000 lakh" required />
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

              <div className="row mt-4">
                <div class="col-md-4">
                  <label for="validationDefault05" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="validationDefault05" required />
                </div>
                <div class="mb-3 col-md-4 ">
                  <label for="validationDefault06" class="form-label">Share your Cv</label>
                  <input type="file" class="form-control" aria-label="file example" id="validationDefault06" required />
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
