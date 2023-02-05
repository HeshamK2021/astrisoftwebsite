import "./styles.scss";
import React from "react";
import PageHead from "../PageHead";

import { ReactComponent as Star } from "../../assets/Group 15.svg";
import OurWork1 from "../../assets/missing-assets/ourwork1.png";
import OurWork2 from "../../assets/missing-assets/ourwork2.png";
import OurWork3 from "../../assets/missing-assets/ourwork3.png";
import OurWork4 from "../../assets/missing-assets/ourwork4.png";
import OurWork5 from "../../assets/missing-assets/ourwork5.png";

function OurWork() {
  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="our-work">
      <PageHead
        sentence="A glimpse of some of our creations."
        pageTitle={
          <>
            OUR [<span>WORK</span>]
          </>
        }
      />
      <div className="our-services-names">
      <span>
          <Star /> 
          WEBSITE DEVELOPMENT
        </span>

        <span>
          <Star /> MOBILE DEVELOPMENT
        </span>

        <span>
          <Star /> CUSTOMISED PLATFORMS
        </span>
        <span>
          <Star /> AR/VR
        </span>
        <span>
          <Star /> CYBER SECURITY
        </span>
        <span>
          <Star /> SEO 
        </span>
        <span>
          <Star /> CONTENT CREATION
        </span>
        <span>
          <Star /> MEDIA BUYING
        </span>
        <span>
          <Star /> MODERATION
        </span>
        <span>
          <Star /> SOCIAL MEDIA MANAGEMENT 
        </span>
        <span>
          <Star /> BRAND IDENTITY 
        </span>
        <span>
          <Star /> UI/UX
        </span>
        <span>
          <Star /> PRINT DESIGN
        </span>
        <span>
          <Star /> DIGITAL DESIGN
        </span>
        <span>
          <Star /> MOTION GRAPHICS
        </span>
      </div>
      <div className="container">
        <div className="images">
          <div className="img1">
            <p>text here</p>
            <img className="img1" src={OurWork2} alt="" />
          </div>
          <div className="img2">
            <p>text here</p>

            <img className="img2" src={OurWork1} alt="" />
          </div>
          <div className="img3">
            <p>text here</p>

            <img className="img3" src={OurWork3} alt="" />
          </div>
          <div className="img4">
            <p>text here</p>

            <img className="img4" src={OurWork4} alt="" />
          </div>
          <div className="img5">
            <p>text here</p>

            <img className="img5" src={OurWork5} alt="" />
          </div>
        </div>
        <div className="images mb-5">
          <div className="img1">
            <p>text here</p>
            <img className="img1" src={OurWork2} alt="" />
          </div>
          <div className="img2">
            <p>text here</p>

            <img className="img2" src={OurWork1} alt="" />
          </div>
          <div className="img3">
            <p>text here</p>

            <img className="img3" src={OurWork3} alt="" />
          </div>
          <div className="img4">
            <p>text here</p>

            <img className="img4" src={OurWork4} alt="" />
          </div>
          <div className="img5">
            <p>text here</p>

            <img className="img5" src={OurWork5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
