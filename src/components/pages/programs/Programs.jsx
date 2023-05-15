import React from "react";
import ChildEducation from "./ChildEducation/ChildEducation";
import SummerCamp from "./summerCamp/SummerCamp";
import WhomenEmpower from "./whomenEmpower/WhomenEmpower";
import {Routes, Route, Outlet} from "react-router-dom"


export default function Programs() {
  return (
     <>

      {/* <WhomenEmpower/>
      <SummerCamp/>
      <ChildEducation/> */}
      <Outlet/>

      {/* <Routes>
        <Route path="/programs/whomen/" element={<WhomenEmpower/>} />
        <Route path="/programs/summercamp" element={<SummerCamp/>} />
        <Route path="/programs/childeducation" element={<ChildEducation/>} />

      </Routes> */}


     </>
  );
}
