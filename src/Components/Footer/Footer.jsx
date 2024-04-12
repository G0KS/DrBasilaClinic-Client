import React from "react";
import logo from "../../assets/logo.png";

import "./Footer.css";

function Footer() {
   return (
      <>
         <div className="footerContainer d-flex">
            <div className="logoContainer container">
               <img src={logo} alt="logo" />
            </div>
            <div className="addressContainer container">
               <div className="d-flex">
                  <i className="fa-solid fa-location-dot text-light fs-5 me-2"></i>
                  <a
                     href="https://www.google.com/maps/place/Dr.Basila+CK+Homoeopathic+clinic/@11.116963,76.1066614,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba637f0d310d535:0x4f6b411d034efb6f!8m2!3d11.116963!4d76.1092363!16s%2Fg%2F11t2z3tq69?entry=ttu"
                     target="blank"
                  >
                     Dr.Basila CK Homoeopathic Clinic, A R K tower,
                     <br /> Thurakkal school road, Opposite galaxy Apartment,
                     <br /> Thurakkal, Manjeri, Manjeri P.O, Malappuram Dist,
                     Kerala <br />
                     Pincode - 676121
                  </a>
               </div>
               <div className="d-flex">
                  <i className="fa-solid fa-phone text-light fs-5 me-2"></i>
                  <a
                     href="https://api.whatsapp.com/send?phone=918891258353"
                     target="blank"
                  >
                     +91 8891258353
                  </a>
               </div>
               <div className="d-flex">
                  <i className="fa-brands fa-instagram text-light fs-5 me-2"></i>
                  <a
                     href="https://www.instagram.com/dr_basila_clinic/"
                     target="blank"
                  >
                     @dr_basila_clinic
                  </a>
               </div>
               <div className="d-flex">
                  
               </div>
            </div>
         </div>
      </>
   );
}

export default Footer;
