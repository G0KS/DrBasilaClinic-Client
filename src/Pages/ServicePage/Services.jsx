import allergy from "../../assets/allergy.jpg";
import asthma from "../../assets/asthma.jpg";
import hairfall from "../../assets/hairfall.jpg";
import gastric from "../../assets/gastric.jpg";

import React from "react";
import "./Services.css";

function Services() {
   return (
      <section className="serviceContainer">
         <h1 className="text-center">Services We Provide</h1>
         <div className="container d-flex flex-wrap gap-5 justify-content-center">
            <div class="serviceCard">
               <img src={allergy} alt="vet image" />
               <div class="overlay">
                  <div class="serviceContent">
                     <h1>Allergy</h1>
                  </div>
               </div>
            </div>
            <div class="serviceCard">
               <img src={asthma} alt="vet image" />
               <div class="overlay">
                  <div class="serviceContent">
                     <h1>Asthma</h1>
                  </div>
               </div>
            </div>
            <div class="serviceCard">
               <img src={gastric} alt="vet image" />
               <div class="overlay">
                  <div class="serviceContent">
                     <h1>Gastric Problems</h1>
                  </div>
               </div>
            </div>
            <div class="serviceCard">
               <img src={hairfall} alt="vet image" />
               <div class="overlay">
                  <div class="serviceContent">
                     <h1>Hairfall</h1>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Services;
