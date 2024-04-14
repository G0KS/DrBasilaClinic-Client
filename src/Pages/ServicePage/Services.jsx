import allergy from "../../assets/allergy.jpg";
import asthma from "../../assets/asthma.jpg";
import hairfall from "../../assets/hairfall.jpg";
import gastric from "../../assets/gastric.jpg";
import serviceImg from "../../assets/services.jpeg"

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
         <div className="container text-center d-sm-flex py-5">
            <ul className="list-group m-auto">
               <li className="list-group-item pt-3">
                  <h4>Female Complaints</h4>
               </li>
               <li className="list-group-item">
                  <h4>Kidney Disorder</h4>
               </li>
               <li className="list-group-item">
                  <h4>Piles</h4>
               </li>
               <li className="list-group-item">
                  <h4>Migraine</h4>
               </li>
               <li className="list-group-item">
                  <h4>Sinusitis</h4>
               </li>
               <li className="list-group-item">
                  <h4>Infertility</h4>
               </li>
               <li className="list-group-item">
                  <h4>Rheumatic and Degenarative</h4>
               </li>
               <li className="list-group-item">
                  <h4>Skin Diseases</h4>
               </li>
               <li className="list-group-item">
                  <h4>Paediatric Disease</h4>
               </li>
               <li className="list-group-item">
                  <h4>Hormonal Disorders</h4>
               </li>
               <li className="list-group-item">
                  <h4>Blood Disorders</h4>
               </li>
               <li className="list-group-item pb-3">
                  <h4>Life Style Disorders</h4>
               </li>
            </ul>
            <div className="serviceImg ">
               <img src={serviceImg} alt="service" />
            </div>
         </div>
      </section>
   );
}

export default Services;
