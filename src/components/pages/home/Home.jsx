import React from "react";
import Hero from "./hero/Hero";
import "./home.css"

export default function Home() {
  return (
     <>
      <Hero/>

      <section className="feature_hme">
        <div className="container-fluid">
          <div className="heading">
            <h3>Asscioation and partner</h3>
          </div>
          <div className="row my-3">
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/corpet.jpg" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/honda.jpg" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/hsl.jpg" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/munjal.jpg" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/shivam.jpg" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/trust.jpg" className="w-100" alt=""/></figure>
            </div>
            {/* <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/trust.jpg" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/ag.jpg" className="w-100" alt=""/></figure>
            </div> */}
          </div>
        </div>
      </section>

      <section className="container my-4 py-4">
         <div className="row">
           <div className="col-md-6">
             <h3>WHO WE ARE</h3>
             <p>National Organisation for Social Empowerment (NOFSE) is a registered NGO working for the differently abled and underprivileged of our community. We are a group of dreamers with a collective vision; ‘Inclusiveness’. We believe that a world without barriers should not be a luxury but a right. We are doing our bit to ensure that disability does not entail disadvantage. At National NGO we are working to advance the rights of persons with disabilities (PWDs) in our society and in the larger scheme of national development, through micro level social intervention.

             Established in 2012, National NGO has been continually working for social integration of persons with disability. Although we work with a small set of people, we go all the way in supporting them to become self-sufficient. Through these years, we have assumed the role of facilitators, counselors, friends and teachers amongst others</p>
             <button>Free a Hungry Child</button>
           </div>
           <div className="col-md-6">
             <figure>
               <img src="https://nationalngo.org/assets/images/who-we-are-main.png" alt="" className="w-100" />
             </figure>
           </div>
         </div>
      </section>

      <section className="container  mission_goal my-4" >
        <div className="heading pt-4">
          <h2>Mission & Goals</h2>
          <p>The revolution is here, where are you? Poverty is removed not by sharing but by eradicating!</p>
        </div>
        <div className="row">
          <div className="col-md-4 text-center ">
             <i class="fa-solid fa-face-smile"></i>
             <h3>Education for All</h3>
             <p>To help and educate socially deprived people and children to achieve their fullest potential. Our aim is to provide education and training to persons with disabilities.</p>
          </div>
          <div className="col-md-4 text-center ">
             <i class="fa-solid fa-face-smile"></i>
             <h3>Education for All</h3>
             <p>To help and educate socially deprived people and children to achieve their fullest potential. Our aim is to provide education and training to persons with disabilities.</p>
          </div>
          <div className="col-md-4 text-center ">
             <i class="fa-solid fa-face-smile"></i>
             <h3>Education for All</h3>
             <p>To help and educate socially deprived people and children to achieve their fullest potential. Our aim is to provide education and training to persons with disabilities.</p>
          </div>
        </div>
      </section>

      <section classsName="recen_case my-4">
        <div className="container">
        <div className="heading">
          <h2>Our Recent Causes</h2>
          <p>Leaving people in poverty is like clipping wings of a bird! START WITH A SMALL CHANGE TODAY!</p>
        </div>
          <div className="row">
            <div className="col-md-4">
              <figure>
                <img src="https://www.nationalngo.net/assets/images/05.png" className="w-100" alt="" />
                <div>
                  <h3>Feeding the Hungry</h3>
                  <p>Empty stomachs and no roof on the head often lead to undesirable acts!
                    In the dominant response to COVID-19, National NGO have been providing cooked meals, Dry Rashan and other essentials to the needy with support of Delhi Government. So far we have fed more than 4, 00,000 people in Delhi by consistently providing food without any failure every day ... <a href="">Read More</a> </p>
                </div>
              </figure>
            </div>
            <div className="col-md-4">
              <figure>
                <img src="https://www.nationalngo.net/assets/images/05.png" className="w-100" alt="" />
                <div>
                  <h3>Feeding the Hungry</h3>
                  <p>Empty stomachs and no roof on the head often lead to undesirable acts!
                    In the dominant response to COVID-19, National NGO have been providing cooked meals, Dry Rashan and other essentials to the needy with support of Delhi Government. So far we have fed more than 4, 00,000 people in Delhi by consistently providing food without any failure every day ... <a href="">Read More</a> </p>
                </div>
              </figure>
            </div>
            <div className="col-md-4">
              <figure>
                <img src="https://www.nationalngo.net/assets/images/05.png" className="w-100" alt="" />
                <div>
                  <h3>Feeding the Hungry</h3>
                  <p>Empty stomachs and no roof on the head often lead to undesirable acts!
                    In the dominant response to COVID-19, National NGO have been providing cooked meals, Dry Rashan and other essentials to the needy with support of Delhi Government. So far we have fed more than 4, 00,000 people in Delhi by consistently providing food without any failure every day ... <a href="">Read More</a> </p>
                </div>
              </figure>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="row">
            <div className="col-md-2">
              <figure><img src="" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="" className="w-100" alt=""/></figure>
            </div>
            <div className="col-md-2">
              <figure><img src="" className="w-100" alt=""/></figure>
            </div>
            
          </div>
        </div>
      </section>

    <section class="current_beneficials">
     <div className="container">
      <div className="headerr">
      <h3>SUCCESSFUL STORIES</h3>
      <button>All cases</button>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" class="img-top w-100" alt="" />
            <div className="card-body">
              <h3>Manav Kumar (5 Years)</h3>
              <p>PLEASE HELP SAVE MANAV’S LIFE BY DONATING TO HIS MEDICAL TREATMENT Meet Manav</p>
              <div class="htfhgjk">
                <button> Heart Disease</button>
                <button>MEDICAL DOCUMENTS</button>
              </div>
              <div class="dsfsd">
                <h3>Goal: ₹700000</h3>
                <h3>Raised: ₹50000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" class="img-top w-100" alt="" />
            <div className="card-body">
              <h3>Manav Kumar (5 Years)</h3>
              <p>PLEASE HELP SAVE MANAV’S LIFE BY DONATING TO HIS MEDICAL TREATMENT Meet Manav</p>
              <div class="htfhgjk">
                <button> Heart Disease</button>
                <button>MEDICAL DOCUMENTS</button>
              </div>
              <div class="dsfsd">
                <h3>Goal: ₹700000</h3>
                <h3>Raised: ₹50000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" class="img-top w-100" alt="" />
            <div className="card-body">
              <h3>Manav Kumar (5 Years)</h3>
              <p>PLEASE HELP SAVE MANAV’S LIFE BY DONATING TO HIS MEDICAL TREATMENT Meet Manav</p>
              <div class="htfhgjk">
                <button> Heart Disease</button>
                <button>MEDICAL DOCUMENTS</button>
              </div>
              <div class="dsfsd">
                <h3>Goal: ₹700000</h3>
                <h3>Raised: ₹50000</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
     </div>
    </section>

  <section class="current_beneficials">
    <div className="container">
      <div className="headerr">
      <h3>CURRENT BENEFICIARIES</h3>
      <button>All cases</button>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" class="img-top w-100" alt="" />
            <div className="card-body">
              <h3>Manav Kumar (5 Years)</h3>
              <p>PLEASE HELP SAVE MANAV’S LIFE BY DONATING TO HIS MEDICAL TREATMENT Meet Manav</p>
              <div class="htfhgjk">
                <button> Heart Disease</button>
                <button>MEDICAL DOCUMENTS</button>
              </div>
              <div class="dsfsd">
                <h3>Goal: ₹700000</h3>
                <h3>Raised: ₹50000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" class="img-top w-100" alt="" />
            <div className="card-body">
              <h3>Manav Kumar (5 Years)</h3>
              <p>PLEASE HELP SAVE MANAV’S LIFE BY DONATING TO HIS MEDICAL TREATMENT Meet Manav</p>
              <div class="htfhgjk">
                <button> Heart Disease</button>
                <button>MEDICAL DOCUMENTS</button>
              </div>
              <div class="dsfsd">
                <h3>Goal: ₹700000</h3>
                <h3>Raised: ₹50000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" class="img-top w-100" alt="" />
            <div className="card-body">
              <h3>Manav Kumar (5 Years)</h3>
              <p>PLEASE HELP SAVE MANAV’S LIFE BY DONATING TO HIS MEDICAL TREATMENT Meet Manav</p>
              <div class="htfhgjk">
                <button> Heart Disease</button>
                <button>MEDICAL DOCUMENTS</button>
              </div>
              <div class="dsfsd">
                <h3>Goal: ₹700000</h3>
                <h3>Raised: ₹50000</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  

  <section className="arawd_new">
    <div class="container">
       <div className="headerr">
        <div>
         <h2>LATEST NEWS</h2>
        </div>
        <div class="hbvb">
         <h3>AWARDS</h3>
         <button>VIEW ALL</button>
        </div>
      </div>
       <hr/>
     {/* row  */}
        <div className="row">
          <div className="col-md-6">
            {/* row 2 */}
            <div class="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 bg-warning"><h3>19may, 2021</h3></div>
                </div>
              </div>
              <div className="col-md-9 lates_new_post">
                <h6> The Times of India</h6>
                <h5>Food, ration, O2: NGO reaches out to Poor</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quam quod illum!</p>
              </div>
            </div>
            <hr/>
            {/* .row end */}
            <div class="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 bg-warning"><h3>19may, 2021</h3></div>
                </div>
              </div>
              <div className="col-md-9 lates_new_post">
                <h6> The Times of India</h6>
                <h5>Food, ration, O2: NGO reaches out to Poor</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quam quod illum!</p>
              </div>
            </div>
            <hr/>
            {/* row -end  */}
            <div class="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 bg-warning"><h3>19may, 2021</h3></div>
                </div>
              </div>
              <div className="col-md-9 lates_new_post">
                <h6> The Times of India</h6>
                <h5>Food, ration, O2: NGO reaches out to Poor</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quam quod illum!</p>
              </div>
            </div>
            <hr/>
          </div>
          <div className="col-md-6 bg-danger text-center">
            <img src="https://www.nationalngo.net/assets/images/NCT_Award.png" alt=""/>
          </div>
        </div>
        </div>
      </section>


      <section className="trust">
            <div className="container">
              <div className="heading">
                <h3>GIVING YOU CAN TRUST</h3>
                <p></p>
              </div>
              <div className="row">
                <div className="col-md-6 trust_content">
                 <img src="" alt="" />
                 <p>National OrganisationFor Social Empowerment was established in 2012, we have been continually working for social    integration of underprivileged children & people, persons with special ability and women & girls of our community. We are a group of positive thinkers with a mutual vision. We believe that a world without barriers is a right not luxury.</p>
                </div>

                <div className="col-md-6 trust_people">
                  <div className="row">
                    <div className="col-md-6">
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


      <section className="event">
        <div className="">
        <div className="row">
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/807361_IMG_0103_6fe53f5264_1476e383db.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/38288153146106_2371957943034568_6104911268093624320_n_0014bf7161_8b7ca277ad.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/32722155793542_2391366957760333_5528121289367093248_n_82d7fd641c_9406a6a2e4.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/60556148372436_2325324877697875_68205278956355584_n_08da8ba648_ea00b572e9.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/50927141215879_2262072324023131_1571373760164921344_n_0ac60f76ba_0ea17fac79.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/96870145576509_2296943713869325_2741727819766693888_n_58300448bf_e3748b8ca6.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/nationalngopic1_907b9a30a3_71ffd46b7f.jpg" className="w-100" alt=""/></figure>
          </div>
          <div className="col-md-3 ">
            <figure><img src="https://api.nationalngo.net/uploads/45419143952177_2282887211941642_6293387429613142016_n_6438fa69a6_c5200ea47c.jpg" className="w-100" alt=""/></figure>
          </div>
        </div>
        </div>
      </section>


      {/* LATEST NEWS  award  */}
  
  

  
 
 
 
 
 
 






     </>
  );
}
