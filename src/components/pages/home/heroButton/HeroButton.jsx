import React from "react";
import "./style.css"

export default function HeroButton({buttonTitle}) {
  return (
     <>
       <section>
         <div class="">
           <button class="heroBtn">{buttonTitle}</button>
         </div>
       </section>
     </>
  );
}
