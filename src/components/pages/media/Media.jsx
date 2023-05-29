import React,{useState} from "react";
import{Outlet} from "react-router-dom"
import Heading from "../../common/heading/Heading";
import AboutHeroBack from "../home/hero/AboutHeroback";

import "./style.css"

export default function Media() {

  return (
     <>
       <Outlet/>

      

     </>
  );
}
