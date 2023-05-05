import React from "react";
import "./style.css";
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Programs from "./components/pages/programs/Programs"
import About from "./components/pages/abouts/About"


export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/about"  element={<About/>}  />
        <Route path="/programs"  element={<Programs/>}  />

      </Routes>
      <Footer/>
    </div>
  );
}
