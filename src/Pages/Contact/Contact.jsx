import React from "react";

function Contact() {
   return (
      <section className="contactContainer container">
         <div className="py-5 d-sm-flex align-items-center justify-content-between">
            <div
               className="address text-success fw-bold text-center pb-5 w-100"
               style={{ textShadow: "2px 2px rgba(9, 158, 101, 0.219)" }}
            >
               <h3>Our Clinic is located at:</h3>
               <h3>
                  Dr.Basila CK Homoeopathic Clinic, A R K tower,
                  <br /> Thurakkal school road, Opposite galaxy Apartment,
                  <br /> Thurakkal, Manjeri, Manjeri P.O, Malappuram Dist,
                  <br /> Kerala - 676121
               </h3>
            </div>
            <div
               className="map rounded"
               style={{ width:"100%"}}
            >
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9566338482846!2d76.1091829!3d11.116607799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba637f0d310d535%3A0x4f6b411d034efb6f!2sDr.Basila%20CK%20Homoeopathic%20clinic!5e0!3m2!1sen!2sin!4v1712246684078!5m2!1sen!2sin"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-100"
               ></iframe>
            </div>
         </div>
         <div className="whatsapp text-center pb-4">
            <h1 className="text-success fw-bold">Contact us through</h1>
            <h1 className="bg-success rounded p-2">
               <a
                  href="https://api.whatsapp.com/send?phone=918891258353"
                  target="blank"
                  style={{textDecoration:"none",color:"white"}}
               >
                  <i class="fa-brands fa-whatsapp"></i> Whatsapp
               </a>
            </h1>
         </div>
      </section>
   );
}

export default Contact;
