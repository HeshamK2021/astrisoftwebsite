import "./styles.scss";
import React from "react";

import PageHead from "../PageHead";

import { ReactComponent as Star } from "../../assets/Group 15.svg";
import SiteImg from "../../assets/top-graph@3x.png";

function Services() {
  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="services">
      <PageHead
        sentence="HOW WE HELP BRANDS SPEAK AUTHENTICALLY."
        pageTitle={
          <>
            OUR [<span>SERVICES</span>]
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
      <section className="services-1">
        <div className="container">
          <div className="info">
            <p className="num text-secondary">1.</p>
            <p className="name">
              Web Development <Star />
            </p>
            <p className="disc">
              We develop and apply inventive approaches and technological
              advances to one sector that draw on our experiences with another.
              We identify practical opportunities to improve outcomes and works
              in partnership with businesses to implement innovative solutions.
            </p>
            <div className="service-list">
              <div className="a-row">
                <p>1. Logo Design</p>
                <p>2. Brand Manual</p>
                <p>3. Icon Set</p>
              </div>
              <div className="a-row">
                <p>4. Stationary</p>
                <p>5. Business Cards</p>
                <p>6. Company Profile</p>
              </div>
            </div>
          </div>
          <div className="imgs">
            <img src={SiteImg} alt="" />
          </div>
        </div>
      </section>
      <section className="services-1">
        <div className="container">
          <div className="imgs">
            <img src={SiteImg} alt="" />
          </div>
          <div className="info">
            <p className="num text-secondary">2.</p>
            <p className="name">
              Mobile Development <Star />
            </p>
            <p className="disc">
              We develop and apply inventive approaches and technological
              advances to one sector that draw on our experiences with another.
              We identify practical opportunities to improve outcomes and works
              in partnership with businesses to implement innovative solutions.
            </p>
            <div className="service-list">
              <div className="a-row">
                <p>1. Logo Design</p>
                <p>2. Brand Manual</p>
                <p>3. Icon Set</p>
              </div>
              <div className="a-row">
                <p>4. Stationary</p>
                <p>5. Business Cards</p>
                <p>6. Company Profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-1">
        <div className="container">
          <div className="info">
            <p className="num text-secondary">3.</p>
            <p className="name">
              System Development <Star />
            </p>
            <p className="disc">
              We develop and apply inventive approaches and technological
              advances to one sector that draw on our experiences with another.
              We identify practical opportunities to improve outcomes and works
              in partnership with businesses to implement innovative solutions.
            </p>
            <div className="service-list">
              <div className="a-row">
                <p>1. Logo Design</p>
                <p>2. Brand Manual</p>
                <p>3. Icon Set</p>
              </div>
              <div className="a-row">
                <p>4. Stationary</p>
                <p>5. Business Cards</p>
                <p>6. Company Profile</p>
              </div>
            </div>
          </div>
          <div className="imgs">
            <img src={SiteImg} alt="" />
          </div>
        </div>
      </section>
      <section className="services-1">
        <div className="container">
          <div className="imgs">
            <img src={SiteImg} alt="" />
          </div>
          <div className="info">
            <p className="num text-secondary">4.</p>
            <p className="name">
              Smart Solutions <Star />
            </p>
            <p className="disc">
              We develop and apply inventive approaches and technological
              advances to one sector that draw on our experiences with another.
              We identify practical opportunities to improve outcomes and works
              in partnership with businesses to implement innovative solutions.
            </p>
            <div className="service-list">
              <div className="a-row">
                <p>1. Logo Design</p>
                <p>2. Brand Manual</p>
                <p>3. Icon Set</p>
              </div>
              <div className="a-row">
                <p>4. Stationary</p>
                <p>5. Business Cards</p>
                <p>6. Company Profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-1">
        <div className="container">
          <div className="info">
            <p className="num text-secondary">5.</p>
            <p className="name">
              Digital Marketing & SEO <Star />
            </p>
            <p className="disc">
              We develop and apply inventive approaches and technological
              advances to one sector that draw on our experiences with another.
              We identify practical opportunities to improve outcomes and works
              in partnership with businesses to implement innovative solutions.
            </p>
            <div className="service-list">
              <div className="a-row">
                <p>1. Logo Design</p>
                <p>2. Brand Manual</p>
                <p>3. Icon Set</p>
              </div>
              <div className="a-row">
                <p>4. Stationary</p>
                <p>5. Business Cards</p>
                <p>6. Company Profile</p>
              </div>
            </div>
          </div>
          <div className="imgs">
            <img src={SiteImg} alt="" />
          </div>
        </div>
      </section>
      <section className="services-1">
        <div className="container">
          <div className="imgs">
            <img src={SiteImg} alt="" />
          </div>
          <div className="info">
            <p className="num text-secondary">6.</p>
            <p className="name">
              Design & Creation <Star />
            </p>
            <p className="disc">
              We develop and apply inventive approaches and technological
              advances to one sector that draw on our experiences with another.
              We identify practical opportunities to improve outcomes and works
              in partnership with businesses to implement innovative solutions.
            </p>
            <div className="service-list">
              <div className="a-row">
                <p>1. Logo Design</p>
                <p>2. Brand Manual</p>
                <p>3. Icon Set</p>
              </div>
              <div className="a-row">
                <p>4. Stationary</p>
                <p>5. Business Cards</p>
                <p>6. Company Profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
