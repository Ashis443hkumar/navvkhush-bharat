import React from "react";
import "./style.css"

export default function HeroButton({buttonTitle}) {
  return (
     <>
         <div class="buttonComponents">
           <button class="heroBtn">{buttonTitle}</button>
         </div>
     </>
  );
}
