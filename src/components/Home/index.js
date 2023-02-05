import "./styles.scss";
import React from "react";

import { ReactComponent as LogoImg } from "../../assets/Group 14.svg";
import { ReactComponent as LogoText } from "../../assets/Group 27.svg";
import WomenEye from "../../assets/missing-assets/Bitmap@3x.png";
import { ReactComponent as Star } from "../../assets/missing-assets/Group 15.svg";
import { ReactComponent as Star2 } from "../../assets/missing-assets/Group 17.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import OurWork1 from "../../assets/missing-assets/ourwork1.png";
import OurWork2 from "../../assets/missing-assets/ourwork2.png";
import OurWork3 from "../../assets/missing-assets/ourwork3.png";
import OurWork4 from "../../assets/missing-assets/ourwork4.png";
import OurWork5 from "../../assets/missing-assets/ourwork5.png";

import Partner1 from "../../assets/missing-assets/sssss@3x.png";
import Partner2 from "../../assets/missing-assets/apple@3x.png";
import Partner3 from "../../assets/missing-assets/asddas@3x.png";
import Partner4 from "../../assets/missing-assets/logo_2 2@3x.png";
import Partner5 from "../../assets/missing-assets/logo_3@3x.png";
import Partner6 from "../../assets/missing-assets/logo_11@3x.png";
import ScrollImg from "../../assets/Scroll Icon.svg";
import { Link } from "react-router-dom";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const scrollToRef = (ref) =>
  window.scrollTo({
    behavior: "smooth",
    top: ref.current.offsetTop,
  });

function Home() {
  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const myRef = React.useRef("null");
  const executeScroll = () => scrollToRef(myRef);

  const [sectionTwotext, setSectionTwoText] = React.useState(1);

  const renderSectionTwoText = () => {
    switch (sectionTwotext) {
      case 1:
        return (
          <>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste
              exercitationem sapiente iusto rerum quo quibusdam perferendis
              quaerat sit eveniet atque sed explicabo adipisci id ipsum, soluta
              ut ipsa repellendus fuga deserunt labore quis quasi nesciunt!
              Molestias quas ipsa ducimus?
            </p>
            <br />
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ex
              enim, quod consequatur consequuntur laudantium totam quia vitae
              consectetur minima voluptatum. Odio asperiores sit non dolore
              natus, minima perferendis nihil. Itaque blanditiis aspernatur
              beatae molestias voluptatem excepturi. Est, nulla et!
            </p>
          </>
        );
      case 2:
        return (
          <>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae quisquam debitis officia architecto, repellat beatae
              iusto cumque animi adipisci placeat autem quasi unde, nostrum,
              porro nobis harum accusamus doloribus aliquid libero est labore ad
              odit. Molestias ex ipsum earum expedita.
            </p>
            <br />
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, minima voluptatem nemo accusantium blanditiis ratione
              repellat ad a debitis quos doloremque ipsam rerum pariatur, sit
              nulla praesentium autem nisi quisquam sed atque eligendi nam.
              Blanditiis ex atque at a necessitatibus!
            </p>
          </>
        );

      case 3:
        return (
          <>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              illo iusto perferendis eveniet quo reprehenderit est voluptatem
              ipsam quaerat ratione sit hic dolore cum deserunt voluptate.
              Voluptatem sapiente iste, sit enim natus dolorum maxime expedita
              voluptas rerum at numquam beatae.
            </p>
            <br />
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ducimus vel sit neque libero reiciendis numquam
              corrupti quia, iure provident esse, quae quisquam placeat,
              reprehenderit ipsa doloremque voluptatibus nesciunt eveniet soluta
              ratione ut animi dicta! Minus porro dolor esse laborum!
            </p>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <div className="home">
        <section className="home-1 bg-secondary">
          <div className="container">
            <div className="top">
              <div className="left">
                <LogoText />
                <p>/­ ‘astrisof(t)’/</p>
                <p className="text-primary">noun</p>
                <p className="lead">
                  The combination of the symbol (*), used in text as a pointer
                  to an annotation or footnot, and software, the programs and
                  other operating information used by a computer.
                </p>
              </div>
              <div className="right">
                <LogoImg />
              </div>
            </div>
            <div onClick={executeScroll} className="bottom">
              <img src={ScrollImg} alt="" />
              <p>SCROLL TO KNOW MORE</p>
            </div>
          </div>
        </section>
        <section ref={myRef} className="home-2">
          <div className="container">
            <h3 className="section-title mb-5">
              WE CREATE <span className="text-secondary">TAILORED</span> MADE
              <span className="text-secondary"> DIGITAL EXPERIENCES</span>{" "}
              <br />
              WE ARE
              <span className="text-secondary"> [</span>
              <span className="text-primary">DEVELOPERS</span>
              <span className="text-secondary">]</span>
            </h3>
            <div className="content">
              <div className="left">
                <p className="section-head-line"></p>
                <p className="font-weight-bold">
                  <span className="text-secondary">Astrisoft</span>
                  <span className="text-primary"> Dubai</span>
                </p>
                {renderSectionTwoText()}
                <div className="footer">
                  <Star onClick={() => setSectionTwoText(1)} />
                  <Star onClick={() => setSectionTwoText(2)} />
                  <Star onClick={() => setSectionTwoText(3)} />
                </div>
              </div>
              <div className="right">
                <img src={WomenEye} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="home-3">
          <div className="container">
            <div className="section-title">
              <span className="text-secondary">[</span>
              <span className="text-primary">OUR SERVICES</span>
              <span className="text-secondary">]</span>
            </div>
          </div>
          <div className="d-flex justify-content-around service-types">
            <p>
              <Star />
              WEBSITE DEVELOPMENT
            </p>
            <p>
              <Star /> MOBILE DEVELOPMENT
            </p>
            <p>
              <Star />
              CUSTOMISED PLATFORMS
            </p>
            <p>
              <Star />
              AR/VR 
            </p>
            <p>
              <Star />
              CYBER SECURITY 
            </p>
            <p>
              <Star />
              SEO 
            </p>
            <p>
              <Star />
              CONTENT CREATION 
            </p>
            <p>
              <Star />
              MEDIA BUYING 
            </p>
            <p>
              <Star />
              MODERATION 
            </p>
            <p>
              <Star />
              SOCIAL MEDIA CREATION MANAGEMENT 
            </p>
            <p>
              <Star />
              BRAND IDENTITY 
            </p>
            <p>
              <Star />
              UI/UX 
            </p>
            <p>
              <Star />
              PRINT DESIGN 
            </p>
            <p>
              <Star />
              DIGITAL DESIGN 
            </p>
            <p>
              <Star />
              MOTION GRAPHICS 
            </p>
            {/* <img
              src="./assets/missing-assets/section3back.png"
              alt=""
              className="background"
            /> */}
          </div>
        </section>
        <section className="home-4">
          <div className="container">
            <div className="section-head">
              <span className="text-secondary">[</span>
              <span className="text-primary">OUR WORK</span>
              <span className="text-secondary">]</span>
            </div>
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
            <div className="section-footer">
              Check out more work
              <Link to="/work">
                <RightArrow />
              </Link>
            </div>
          </div>
        </section>
        <section className="home-5">
          <div className="container">
            <div className="section-head">
              <span className="text-secondary">[</span>
              <span className="text-primary">OUR WORLD</span>
              <span className="text-secondary">]</span>
            </div>
          </div>
          <div className="imgs">
            <img src={Partner1} alt="" />
            <img src={Partner2} alt="" />
            <img src={Partner3} alt="" />
            <img src={Partner4} alt="" />
            <img src={Partner5} alt="" />
            <img src={Partner6} alt="" />
          </div>
        </section>
        <section className="home-6">
          <p className="lead">
            Trusted by some of the most innovative businesses – big and small
          </p>
          <p className="para">
            “Comprehensive set of startup tools for all imaginable
            entrepreneurial needs. Create landing pages, send emails, find
            freelancers. Perfect for sales, marketing, and support”
          </p>
          <p className="name text-secondary">Hesham Said</p>
          <div className="job text-primary">CEO</div>
        </section>
      </div>
    </>
  );
}

export default Home;
