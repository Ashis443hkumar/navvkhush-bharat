import React from "react";
import {Outlet} from "react-router-dom"
import ChildEducation from "./ChildEducation/ChildEducation";
import SummerCamp from "./summerCamp/SummerCamp";
import WhomenEmpower from "./whomenEmpower/WhomenEmpower";


export default function Programs() {
  return (
     <>

      <Outlet/>
      <WhomenEmpower/>
      <SummerCamp/>
      <ChildEducation/>

     </>
  );
}
