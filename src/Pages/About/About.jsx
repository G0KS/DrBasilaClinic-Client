import aboutImg from "../../assets/about.jpeg";

import React from "react";

import "./About.css";
function About() {
   return (
      <section className="aboutSection py-5">
         <div className="container d-sm-flex mb-5">
            <div>
               <h2 className="fw-bold text-success text-center p-5 d-flex align-items-center h-100">
                  We provide treatments for all acute and chronic diseases
                  including allergic problems, gastric problems, male and female
                  complaints, paediatric complaints etc. We also provide German
                  and Non-German medicines.
               </h2>
            </div>
            <div className="aboutImg w-75 m-auto">
               <img src={aboutImg} className="w-100 rounded" alt="aboutImage" />
            </div>
         </div>
         <h1 className="text-center pt-5 fw-bold text-light">
            Nurturing Health Naturally: Your Trusted Partner in Homoeopathic Care
         </h1>
      </section>
   );
}

export default About;
