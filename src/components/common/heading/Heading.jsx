import React from "react";
import "./heading.css"

export default function Heading({ title, subtitle }) {
  return (
     <>
     <section class="heading">
       <h2>{title}</h2>
       <p>{subtitle}</p>
     </section>
     </>
  );
}

