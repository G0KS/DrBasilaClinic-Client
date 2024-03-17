import heroImage from "../../assets/homeImage.jpg";

import React from "react";

import "./Home.css";

function Home() {
   return (
      <>
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
            <div className="banner">
               <h1 className="text-center">
                  Better Life Through Better Treatment
               </h1>
            </div>
         </section>
      </>
   );
}

export default Home;
