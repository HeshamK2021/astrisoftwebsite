import "./styles.scss";
import React from "react";

import PageHead from "../PageHead";

import MapImg from "../../assets/map@3x.png";

function ContacUS() {
  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contact-us">
      <PageHead
        sentence="DID WE SPARK YOUR 
INTREST YET?"
        pageTitle={
          <>
            CONTACT [<span>US</span>]
          </>
        }
      />
      <div className="contact-info">
        <div className="container">
          <p className="text-primary mb-0">REACH US ON</p>
          <p className="big-text mb-0">
            Still have <span className="text-secondary">any questions?</span>
          </p>
          <p className="big-text">Get in touch with us…</p>
          <div className="phone-mail">
            <div>
              <p className="text-primary font-weight-bold mb-0">phone</p>
              <p className="text-secondary">+971 55 900 8880</p>
            </div>
            <div>
              <p className="text-primary font-weight-bol mb-0">email</p>
              <p className="text-secondary">info@astrisoft.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-img">
        <img src={MapImg} alt="" />
      </div>
      <section className="our-locations bg-primary">
        <div className="title">
          <span className="text-secondary">[</span>
          OUR LOCATIONS
          <span className="text-secondary">]</span>
        </div>
        <div className="locations">
          <div className="location">
            <div className="city font-weight-bold">Dubai Office</div>
            <div className="address text-secondary">
              Emirates Towers, Sheikh Zayed Road, Dubai, UAE.
            </div>
          </div>
          <div className="location">
            <div className="city font-weight-bold">Dubai Office 2</div>
            <div className="address text-secondary">
              Emirates Towers, Sheikh Zayed Road, Dubai, UAE.
            </div>
          </div>
          <div className="location">
            <div className="city font-weight-bold">Cairo Office</div>
            <div className="address text-secondary">
              Emirates Towers, Sheikh Zayed Road, Dubai, UAE.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContacUS;
