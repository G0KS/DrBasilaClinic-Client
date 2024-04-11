import React from "react";

function Contact() {
   return (
      <>
         <div className="map" style={{ textAlign: "center" }}>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9566338482846!2d76.1091829!3d11.116607799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba637f0d310d535%3A0x4f6b411d034efb6f!2sDr.Basila%20CK%20Homoeopathic%20clinic!5e0!3m2!1sen!2sin!4v1712246684078!5m2!1sen!2sin"
               width="600"
               height="450"
               allowfullscreen=""
               loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
      </>
   );
}

export default Contact;
