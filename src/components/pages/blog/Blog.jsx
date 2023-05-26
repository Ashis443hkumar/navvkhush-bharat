import React,{useState} from "react";
import Heading from "../../common/heading/Heading";
import AboutHeroBack from "../home/hero/AboutHeroback";

import BlogData from "./BlogData"
import "./blog.css"
// import Model from "./Model"

import ModelBox from "./ModelBox"
import Banner from "../home/banner/Banner";

export default function Blog() {

  const [Model, setModel] = useState(false)
  const [tempdata, settempdata] = useState([])

  
  const getData = (imgData, blogTitle, subtitle, dateTime) =>{

    let tempData = [imgData, blogTitle, subtitle, dateTime];

    settempdata(item => [1, ...tempData])

    return setModel(true)

  }
  return (
     <>
      <AboutHeroBack AboutTitle="Blog"  cover={"https://i.pinimg.com/564x/af/2b/75/af2b758bac3d3b7ca0b228d2e782ba71.jpg"} />

      <section class="blog my-4 py-4">
        <div className="container">
          <Heading  title="Blog" />
          {/*------ Row  ----- */}
          <div className="row mt-4">
            {
              BlogData.map((item, index) =>{
                return(
                  <div class="col-md-4" key={index}>
                    <div className="card">
                      <img src={item.imgData} alt="" class="card-img-top " />
                      <div className="card-body">
                         <h1>{item.blogTitle}</h1>
                         <p>{item.subtitle}</p>
                         <span>{item.dateTime}</span>
                         <button class="btn btn-primary mt-2 ml-0 " onClick={() => getData(item.imgData, item.blogTitle, item.subtitle,item.dateTime)}>Read More</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      {
         Model === true ?  <ModelBox img={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} hide={() => setModel(false)} />: ""
      }

      <Banner/>

     </>
  );
}
