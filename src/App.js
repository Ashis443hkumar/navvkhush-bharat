import React from "react";
import "./style.css";
import Head from "./components/common/head/Head"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"

export default function App() {
  return (
    <div>
      <Head/>
      <Header/>
      <Footer/>
    </div>
  );
}
