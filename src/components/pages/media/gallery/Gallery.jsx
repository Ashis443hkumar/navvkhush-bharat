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
              <img src="https://media.licdn.com/dms/image/D4D22AQFztjdowcWbKA/feedshare-shrink_1280/0/1685347815745?e=1687996800&v=beta&t=CpXqBUUQfKxgUcA_2GTbqifHYBehDg53XxZF9xuq9qw" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQHAsOOzTRxo5A/feedshare-shrink_1280/0/1685347815329?e=1687996800&v=beta&t=FbVgn4PsnClcXeDFDgmCZhSho0K7Iiex9ukn_ugXIDk" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQHavgCFYQnTYA/feedshare-shrink_800/0/1685347814648?e=1687996800&v=beta&t=kBRpASwjfrTCHjNJbLINW-PqNGu60Um0A-1IDzmmeM8" alt=""/>
            </div>

          </div>
        </div>
      </section>

      <Banner/>

     </>
  );
}
