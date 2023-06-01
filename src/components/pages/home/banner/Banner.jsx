import React from "react";
import "./banner.css"
import {useNavigate } from "react-router-dom"

export default function Banner({title, buttonTitle}) {

  const navigate =  useNavigate()

  return (
     <>
      <section class="banner">
        <div class="banner_text">
           <h3>{title}</h3>
        </div>
        <div class="banner_button">
           <button>{buttonTitle}</button>
        </div>
      </section>
     

     </>
  );
}
