import heroImage from "../../assets/homeImage.jpg";
import introImage from "../../assets/logo-nobg.png";
import img1 from "../../assets/Image 1.jpeg";
import img2 from "../../assets/Image 2.jpeg";
import img3 from "../../assets/Image 4.jpg";
import img4 from "../../assets/Image 3.jpeg";
import img5 from "../../assets/Image 5.jpeg";
import img6 from "../../assets/Image 6.jpeg";

import React from "react";

import "./Home.css";

function Home() {
   return (
      <>
         <section className="introContainer container py-3">
            <div className="introImg">
               <img src={introImage} alt="intro" />
            </div>
            <div className="introText">
               <h2 className="fs-1">
                  Welcome to Dr. Basila's Homoeopathic Clinic, your destination
                  for holistic healing through homoeopathy.
               </h2>
            </div>
         </section>
         <div className="banner">
            <h1 className="text-center">
               Better Life Through Better Treatment
            </h1>
         </div>
         <section className="heroContainer my-5">
            <div className="heroBox container gap-5">
               <div className="heroContent text-center d-flex align-items-center">
                  <h2 className="fs-1 pb-5">
                     Homoeopathy is safest with more reliable approach for
                     ailments
                  </h2>
               </div>
               <div className="heroImg text-center">
                  <img src={heroImage} alt="Hero" />
               </div>
            </div>
         </section>
         <section className="aboutContainer">
            <h1 className="aboutText text-center fw-bold">
               Healing naturally with homoeopathy
            </h1>
            <div className="imgGrp container">
               <div className="imgDiv">
                  <img src={img1} alt="img 1" />
               </div>
               <div className="imgDiv">
                  <img src={img2} alt="img 2" />
               </div>
               <div className="imgDiv">
                  <img src={img3} alt="img 3" />
               </div>{" "}
               <div className="imgDiv">
                  <img src={img4} alt="img 4" />
               </div>
               <div className="imgDiv">
                  <img src={img5} alt="img 5" />
               </div>
               <div className="imgDiv">
                  <img src={img6} alt="img 6" />
               </div>{" "}
            </div>
         </section>
      </>
   );
}

export default Home;
