import "./styles.scss";
import React from "react";
import { Link } from "react-router-dom";

import ContactUsModal from "../ContactUsModal";

import { ReactComponent as FbIcon } from "../../assets/3. Icons/facebook.svg";
import { ReactComponent as INIcon } from "../../assets/3. Icons/instagram.svg";
import { ReactComponent as TWICon } from "../../assets/3. Icons/twitter.svg";
import { ReactComponent as YTICon } from "../../assets/3. Icons/youtube.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/Next Big colored Icon.svg";

function Footer() {
  const [contactUsModalIsOpen, setContactUsModal] = React.useState(false);

  return (
    <>
      <ContactUsModal
        modalIsOpen={contactUsModalIsOpen}
        setIsOpen={setContactUsModal}
      />
      <footer className="bg-secondary">
        <div className="container">
          <p className="ready">READY TO TALK ABOUT</p>
          <p className="ready">YOUR PROJECT ?</p>
          <p className="lets-talk">
            LET'S [{" "}
            <span
              onClick={() => setContactUsModal(true)}
              className="text-primary"
            >
              TALK
            </span>{" "}
            ]
          </p>
          <div className="split">
            <div className="left">
              <p className="subscribe">Subscribe to our newsletter</p>
              <div className="email-input">
                <input type="text" placeholder="talk@astrisoft.ae" />
                <RightArrowIcon />
              </div>
            </div>
            <div className="right">
              <div className="links">
                <Link to="/about">ABOUT US</Link>
                <Link to="/work">OUR WORK</Link>
                <Link to="/services">OUR SERVICES</Link>
                <Link to="/contact-us">CONTACT US</Link>
              </div>
            </div>
          </div>
          <div className="footer-footer">
            <p className="social-icons">
              <a target="_blank" href="http://facebook.com">
                <FbIcon />
              </a>
              <a target="_blank" href="http://facebook.com">
                <INIcon />
              </a>
              <a target="_blank" href="http://facebook.com">
                <TWICon />
              </a>
              <a target="_blank" href="http://facebook.com">
                <YTICon />
              </a>
              <a target="_blank" href="http://facebook.com">
                <INIcon />
              </a>
              <a target="_blank" href="http://facebook.com">
                <TWICon />
              </a>
            </p>
            <p className="footer-text">© 2021 Astrisoft, All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
