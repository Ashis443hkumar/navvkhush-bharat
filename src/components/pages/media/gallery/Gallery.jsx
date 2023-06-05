import React,{useState} from "react";
import Heading from "../../../common/heading/Heading";
import Banner from "../../home/banner/Banner";
import HeroButton from "../../home/heroButton/HeroButton";
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
              <img src="https://media.licdn.com/dms/image/D4D22AQG769umklDoGQ/feedshare-shrink_1280/0/1685684250599?e=1688601600&v=beta&t=TC5ZDv-HiJuzRRKhZjfHeRqp3b3HxNXsKqsl6BDtbww" alt=""/>

            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQHAsOOzTRxo5A/feedshare-shrink_1280/0/1685347815329?e=1687996800&v=beta&t=FbVgn4PsnClcXeDFDgmCZhSho0K7Iiex9ukn_ugXIDk" alt=""/>
            </div>
            
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQGp8U8i5cST0g/feedshare-shrink_1280/0/1685947253150?e=1688601600&v=beta&t=NjwjBkhRDHkjnmSwOea4PNV1AP4xWU2zUs-PDEQu-PA" alt=""/>
            </div>
               
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQE8VYBKZRo-FA/feedshare-shrink_2048_1536/0/1685684251236?e=1688601600&v=beta&t=lpEuT7Dgc6LznwlRTgZBdNSQu6kgnqmAUAGlaclkmwE" alt=""/>
            </div>

            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQEhrzyrFs7h2A/feedshare-shrink_800/0/1685684251244?e=1688601600&v=beta&t=ehXWzv-DwLJpTgThN7hGzc-mVvgc8xpIENMCooj0RgQ" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQFVJN16Qov_mQ/feedshare-shrink_1280/0/1685684251181?e=1688601600&v=beta&t=fl7-ZYWId6EktJ4BrGEpMu6M2xPiA2Bc1qcA-ASrvKI" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQEU3DgPR6cdtA/feedshare-shrink_1280/0/1685684251209?e=1688601600&v=beta&t=poqxMjSiDIUtwlkGjX_1rznD_vSBa2ijwHnHKeDeGuk" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQEOvFF-Phcj_g/feedshare-shrink_1280/0/1685947254008?e=1688601600&v=beta&t=1cezrhoUwJNZ3O_SBWzt4K9lAaXXi2eQ0Pq4CFXkNB0" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQGp8U8i5cST0g/feedshare-shrink_1280/0/1685947253150?e=1688601600&v=beta&t=NjwjBkhRDHkjnmSwOea4PNV1AP4xWU2zUs-PDEQu-PA" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQGzEdmg6rgPag/feedshare-shrink_1280/0/1685947254838?e=1688601600&v=beta&t=gd65sOkbLNAqmFy3KV1pmGQFKwpBfYconrMbiazCC6Q" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQFFnkX20jbX_g/feedshare-shrink_2048_1536/0/1685791142446?e=1688601600&v=beta&t=xnH8WAO_d7XCIVDUFYifqFtF75dX4yFLWz50Zl1f6rw" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQEOvFF-Phcj_g/feedshare-shrink_1280/0/1685947254008?e=1688601600&v=beta&t=1cezrhoUwJNZ3O_SBWzt4K9lAaXXi2eQ0Pq4CFXkNB0" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQH1xunuqkoghA/feedshare-shrink_800/0/1685355472111?e=1688601600&v=beta&t=3L27BJYVUqE1bx218EeuA-0M3Dw5JNdM2csfeZSIU4A" alt=""/>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-6 gallery_image">
              <img src="https://media.licdn.com/dms/image/D4D22AQE-DQ-7SX1GxQ/feedshare-shrink_800/0/1685347814729?e=1688601600&v=beta&t=48z7oCFcq8XHyuuusC7495nASwW8i_lLRQR4LmyxgtU" alt=""/>
            </div>
          

          </div>
        </div>
      </section>

      {/* <Banner title="" /> */}
        {/* home banner Volunteer  */}
        <section class="home_vlounterr">
        <Banner title="Start with helping one poor person and pave way for the bigger
            changes!" buttonTitle={<button onClick={() =>navigate("./careers/volunteer")}>
            <HeroButton buttonTitle="Become a Volunteer" />
         </button>} />
        </section>
       

     </>
  );
}
