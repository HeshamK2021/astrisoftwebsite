import "./styles.scss";
import React from "react";
import PageHead from "../PageHead";

import { ReactComponent as Star } from "../../assets/missing-assets/Group 15.svg";
import { ReactComponent as ClosedBox } from "../../assets/Group 411.svg";
import { ReactComponent as OpenedBox } from "../../assets/Group.svg";
import { ReactComponent as MissionIcon } from "../../assets/Group 9.svg";
import PersonPic from "../../assets/person.jpeg";

function About() {
  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [section3Text, setSection3Text] = React.useState("");

  return (
    <div className="about">
      <PageHead
        sentence="A TECH-DESIGN DRIVEN PASSIONATE HUB"
        pageTitle={
          <>
            ABOUT [<span>US</span>]
          </>
        }
      />
      <section className="who-we-are">
        <div className="container">
          <p className="section-title text-primary">WHO WE ARE</p>
          <p className="site-name text-secondary">Astrisoft</p>
          <p className="para-title">
            We develops innovative approaches to solve the toughest challenges &
            problems.
          </p>
          <p className="actucal-para">
            We develop and apply inventive approaches and technological advances
            to one sector that draw on our experiences with another. We identify
            practical opportunities to improve outcomes and works in partnership
            with businesses to implement innovative solutions.
          </p>
          <p className="actucal-para">
            We offer a full suite of services that includes training for
            personnel to ensure solutions are sustainable and empower businesses
            to make further improvements themselves.
          </p>
        </div>
      </section>
      <section className="words">
        Quality <Star /> Time <Star />
        Efficiency <Star /> Quality <Star /> Time <Star /> Efficiency
      </section>
      <section className="design-develop-create">
        <div className="boxes">
          <div className="line"></div>
          <div
            className="box"
            onMouseEnter={() =>
              setSection3Text(
                "We see design as the most inventive form of problem-solving. We start by working with you to identify the issues you’re facing, then come up with the most appropriate creative response to it."
              )
            }
            // onMouseLeave={() => setSection3Text("")}
          >
            <div className="name">Design</div>
            <ClosedBox />
          </div>
          <div className="line"></div>
          <div
            className="box"
            onMouseEnter={() =>
              setSection3Text(
                "We see develop as the most inventive form of problem-solving. We start by working with you to identify the issues you’re facing, then come up with the most appropriate creative response to it."
              )
            }
            // onMouseLeave={() => setSection3Text("")}
          >
            <div className="name">Develop</div>

            <OpenedBox />
          </div>
          <div className="line"></div>
          <div
            className="box"
            onMouseEnter={() =>
              setSection3Text(
                "We create as the most inventive form of problem-solving. We start by working with you to identify the issues you’re facing, then come up with the most appropriate creative response to it."
              )
            }
            // onMouseLeave={() => setSection3Text("")}
          >
            <div className="name">Create</div>

            <OpenedBox />
          </div>
          <div className="line"></div>
        </div>
        <div className="container">
          <p className="section-text">{section3Text}</p>
        </div>
      </section>
      <section className="core-values">
        <div className="container">
          <div className="section-title">
            <span className="text-secondary">[ </span>
            <span className="text-primary">CORE VALUES</span>
            <span className="text-secondary"> ]</span>
          </div>
          <div className="values">
            <div className="value">
              <div className="num">
                <span className="text-secondary">[ </span>
                <span className="text-primary">1</span>
                <span className="text-secondary"> ]</span>
              </div>
              <div className="content">
                We develops innovative approaches to solve the toughest
                challenges & problems. We’re masters of craft with an eagle eye
                for all the details.
              </div>
            </div>
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>
        </div>
      </section>
      <section className="mission-vision">
        <div className="container">
          <div className="vision">
            <div className="icon">
              <MissionIcon />
            </div>
            <div className="title text-primary">vision</div>
            <div className="disc">
              We’re masters of craft with an eagle eye for all the details that
              elevate good design into something truly stand-out.
            </div>
          </div>
          <div className="vision">
            <div className="icon">
              <MissionIcon />
            </div>
            <div className="title text-primary">Mission</div>
            <div className="disc">
              We’re masters of craft with an eagle eye for all the details that
              elevate good design into something truly stand-out.
            </div>
          </div>
        </div>
      </section>
      <section className="about-6 bg-primary">
        <p>
          We’re a principal-run company built on our core values of{" "}
          <span>ho-nesty</span>, <span>hard work</span>, and <span>trust</span>.
        </p>
      </section>
      <section className="our-people">
        <div className="container">
          <div className="section-title">
            <span className="text-secondary">[ </span>
            <span className="text-primary">OUR PEOPLE</span>
            <span className="text-secondary"> ]</span>
          </div>
          <div className="pics">
            <img src={PersonPic} alt="" />
            <img src={PersonPic} alt="" />
            <img src={PersonPic} alt="" />
          </div>
          <p className="person-info">
            <div className="name text-secondary">Hesham Elshazly</div>
            <div className="job text-primary">CEO</div>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
