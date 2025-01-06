import React from 'react';
import './comingsoon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ComingSoon = () => {
  return (
    <div className="container">
      {/* Background */}
      <div className="background"></div>

      {/* Middle content */}
      <div className="content">
        <h1>COMING SOON</h1>
        {/* Social Icons below "COMING SOON" */}
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" className="socials" /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" className="socials" /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" className="socials" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" className="socials" /></a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
