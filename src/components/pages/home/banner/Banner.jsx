import React from "react";
import HeroButton from "../heroButton/HeroButton";
import "./banner.css"
import { Link, useNavigate } from "react-router-dom"


export default function Banner() {

  const navigate =  useNavigate()


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
          <button onClick={() =>navigate("./careers/volunteer")}>
             <HeroButton buttonTitle="Become a Volunteer" />
          </button>
        </div>
      </section>
     

     </>
  );
}
