import React from "react";
import Heading from "../../common/heading/Heading";
import AboutHeroBack from "../home/hero/AboutHeroback";

import "./blog.css"

export default function Blog() {
  return (
     <>
      <AboutHeroBack AboutTitle="Blog"  cover={"https://i.pinimg.com/564x/af/2b/75/af2b758bac3d3b7ca0b228d2e782ba71.jpg"} />
      <section class="blog my-4 py-4">
        <div className="container">
          <Heading  title="Blog" />
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/skill.jpg" class="card-img-top" alt=""/>
                <div className="card-body">
                  <h3 class="text-center">Charity</h3>
                  <p>Skill Development Program</p>
                  <div class="date_time">
                  <p>Date: 12April 2023 </p>
                  <p>time: 20:38 Pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/skill.jpg" class="card-img-top" alt=""/>
                <div className="card-body">
                  <h3 class="text-center">Charity</h3>
                  <p>Skill Development Program</p>
                  <div class="date_time">
                  <p>Date: 12April 2023 </p>
                  <p>time: 20:38 Pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/skill.jpg" class="card-img-top" alt=""/>
                <div className="card-body">
                  <h3 class="text-center">Charity</h3>
                  <p>Skill Development Program</p>
                  <div class="date_time">
                  <p>Date: 12April 2023 </p>
                  <p>time: 20:38 Pm</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


     </>
  );
}
