import React,{useState} from "react";
import Heading from "../../../common/heading/Heading";
import Banner from "../../home/banner/Banner";
import "./style.css"

export default function Gallery() {

  return (
     <>
      <section class="gallery mt-4">
        <Heading title="Gallery" />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQE-DQ-7SX1GxQ/feedshare-shrink_800/0/1685347814729?e=1687996800&v=beta&t=645O5lHXnq_oPGtnUnZDgYmby7pQ74vyHAcJbAuvfZc" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQEZtDlVSgzKtw/feedshare-shrink_2048_1536/0/1685347815259?e=1687996800&v=beta&t=YDl3YlqInEvjfp5XZnyVHOTP9DKI04q8R_zMiITivF0" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image" gallery_image>
              <img src="https://media.licdn.com/dms/image/D4D22AQEzuZhI7v14LA/feedshare-shrink_800/0/1685347814068?e=1687996800&v=beta&t=KRU-rnTzny0v36_QSutfG29OwnlX78q0pVGNwlEeFfc" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQFPMLsC2PbbBQ/feedshare-shrink_2048_1536/0/1685347815512?e=1687996800&v=beta&t=QkSFVUoIwmW9JJrk2UxfjhizKLsMnWur8MdSWSZLCs4" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQEgiH85sRoROA/feedshare-shrink_800/0/1685347814529?e=1687996800&v=beta&t=19il7yfqbNq9qnmFordDjTKR7ZTsa_mqSXR_EIuMWJM" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/IMG-20220927-WA0021-1.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQHAsOOzTRxo5A/feedshare-shrink_1280/0/1685347815329?e=1687996800&v=beta&t=FbVgn4PsnClcXeDFDgmCZhSho0K7Iiex9ukn_ugXIDk" alt=""/>
            </div>
            
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQHavgCFYQnTYA/feedshare-shrink_800/0/1685347814648?e=1687996800&v=beta&t=kBRpASwjfrTCHjNJbLINW-PqNGu60Um0A-1IDzmmeM8" alt=""/>
            </div>
               
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_7_2022-3_20_48-PM.jpg" alt=""/>
            </div>

            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_27_2022-12_41_26-PM-2-1-scaled.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/IMG-20220818-WA0010-1.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_19_2022-7_30_29-PM-4.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_19_2022-7_30_31-PM-6.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_19_2022-7_30_31-PM-7.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_7_2022-3_07_45-PM.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_7_2022-3_44_54-PM-scaled.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_12_2022-12_00_42-PM-1.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_12_2022-12_00_42-PM-1.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/9_12_2022-12_00_43-PM.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/IMG_20221207_161043-1-scaled.jpg" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://www.navvkhushbharat.com/wp-content/uploads/2022/12/IMG-20220927-WA0022-3.jpg" alt=""/>
            </div>

          </div>
        </div>
      </section>

      <Banner/>

     </>
  );
}
