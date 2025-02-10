import React from "react";
import strap from "../../assets/images/bank-strap.png";

const Contact = () => {
  return (
    <div className="text-center mt-5 mx-3">
      <h1 className="contact_heading">CONTACT US</h1>
      <h4>SETTLE IT, FORGET IT</h4>
      <div className="blog-image-container1 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.360418369503!2d77.0857001!3d28.4261046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2390bd7131eb%3A0xb522e80a13b6a781!2sCredSettle!5e0!3m2!1sen!2sin!4v1707561234567"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="col-md-12 row">
        <div className="col-md-4 mt-3">
          <h2 style={{ textDecoration: "underline" }}>Address</h2>
          <h5>
            <a
              href="https://www.google.com/maps/place/CredSettle/@28.4261046,77.0857001,15.73z/data=!4m16!1m9!3m8!1s0x390d2390bd7131eb:0xb522e80a13b6a781!2sCredSettle!8m2!3d28.4256525!4d77.0878935!9m1!1b1!16s%2Fg%2F11ybcf3vfg!3m5!1s0x390d2390bd7131eb:0xb522e80a13b6a781!8m2!3d28.4256525!4d77.0878935!16s%2Fg%2F11ybcf3vfg?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              4th Floor, 2493AP, Block G, <br /> Sushant Lok 2, Sector 57, <br />
              Gurugram, Haryana 122001
            </a>
          </h5>
        </div>
        <div className="col-md-4 mt-3">
          <h2 style={{ textDecoration: "underline" }}>Email</h2>
          <h5>
            <a
              href="mailto:info@credsettle.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              info@credsettle.com
            </a>
          </h5>
        </div>
        <div className="col-md-4 mt-3">
          <h2 style={{ textDecoration: "underline" }}>Number</h2>
          <h5>
            <a
              href="tel:+918800226635"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              +91 8800226635
            </a>
          </h5>
        </div>
      </div>
      <a href="/form">
        <button className="btn btn-primary get-started-btn my-5">
          Register Now
        </button>
      </a>
    </div>
  );
};

export default Contact;
