import homeImage from "../../assets/homeImage.jpg";

import React from "react";

import "./Home.css";

function Home() {
   return (
      <>
         <div className="homeContainer pt-5">
            <div className="container d-flex gap-5 align-items-center">
               <div className="homeImg text-center">
                  <img src={homeImage} alt="Home Image" />
               </div>
               <div className="homeContent text-center">
                  <h1>Better Life Through Better Treatment</h1>
                  <p>
                     Homeopathic treatment is ideal to optimize the body's
                     natural defenses gainst microbes. With the appropriate
                     homeopathic treatment, people recover from infectious
                     diseases, even the most serious ones gently and rapidly.
                  </p>
                  <p>
                     Homeopathy is safest with more reliable approach for
                     ailments and it has withstood the assaults of established
                     medical practice for over 100 years
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
