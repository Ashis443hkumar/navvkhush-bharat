import React from "react";
import SocialsIcons from "../../pages/home/heroButton/SocialSIcon";
import "./head.css"
export default function head() {
  return (
    <>
      <section>
        <div className="head">
          <div className="head_left">
              <div className="phone">
                <label htmlFor=""><i class="fa-solid fa-phone"></i> Phone No: </label>
                <span class="number">918287372178</span>
              </div>
              
              <div className="email phone">
                <label htmlFor=""><i class="fa-solid fa-envelope"></i> Email: </label>
                <span> info@thecrimecontrol.com </span>
              </div>
          </div>
          <div className="head_right">
              <SocialsIcons/>
          </div>
        </div>
      </section>
    </>
  );
}
 