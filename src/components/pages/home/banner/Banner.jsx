import React from "react";
import HeroButton from "../heroButton/HeroButton";
import "./banner.css"

export default function Banner() {
  return (
     <>
        {/* banner section  */}
        <section class="banner">
        <div class="banner_text">
          <h3>
            Start with helping one poor person and pave way for the bigger
            changes!
          </h3>
        </div>
        <div class="banner_button">
          <HeroButton buttonTitle="Become a Volunteer" />
        </div>
      </section>
     

     </>
  );
}
