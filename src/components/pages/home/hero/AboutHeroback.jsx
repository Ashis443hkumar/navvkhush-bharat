import React from "react";
import "./hero.css"

export default function AboutHeroBack({AboutTitle}) {
  return (
     <>
       <section class="about_hero">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <h1>{AboutTitle}</h1>
             </div>
           </div>
         </div>

       </section>
     </>
  );
}
