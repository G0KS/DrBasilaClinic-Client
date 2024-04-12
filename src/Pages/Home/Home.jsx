import heroImage from "../../assets/homeImage.jpg";
import introImage from "../../assets/logo.png";
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
         <section className="introContainer">
            <div className="container d-sm-flex py-5">
               <div className="introImg w-100">
                  <img src={introImage} alt="intro" />
               </div>
               <div className="introText">
                  <h2>
                  Welcome to Dr. Basila's Homoepathic Clinic, your destination for holistic healing through homeopathy.
                  </h2>
               </div>
            </div>
            <div className="banner">
               <h1 className="text-center">
                  Better Life Through Better Treatment
               </h1>
            </div>
         </section>
         <section className="heroContainer">
            <div className="container py-5 d-flex gap-5 align-items-center">
               <div className="heroContent text-center d-flex align-items-center">
                  <h2>
                     Homeopathy is safest with more reliable approach for
                     ailments and it has withstood the assaults of established
                     medical practice for over 100 years
                  </h2>
               </div>
               <div className="heroImg text-center">
                  <img src={heroImage} alt="Hero" />
               </div>
            </div>
         </section>
         <section className="aboutContainer">
            <h1 className="aboutText text-center fw-bold">
               Healing naturally with homeopathy
            </h1>
            <div className="imgGrp container">
               <img src={img1} alt="img 1" />
               <img src={img2} alt="img 2" />
               <img src={img3} alt="img 3" />
               <img src={img4} alt="img 4" />
               <img src={img5} alt="img 5" />
               <img src={img6} alt="img 6" />
            </div>
         </section>
      </>
   );
}

export default Home;
