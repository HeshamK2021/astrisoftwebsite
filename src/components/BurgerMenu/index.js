import "./styles.scss";
import React from "react";
import Modal from "react-modal";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as FBIcon } from "../../assets/3. Icons/facebook.svg";
import { ReactComponent as INICON } from "../../assets/3. Icons/instagram.svg";
import { ReactComponent as YTICON } from "../../assets/3. Icons/youtube.svg";

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    height: "100vh",
    width: "100vw",
    top: 0,
    left: 0,
    padding: 0,
    border: "none",
  },
  overlay: {
    top: "70px",
    border: "none",
  },
};
Modal.setAppElement("#root");

function BurgerMenu({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  });

  const location = useLocation();
  const renderActiveClass = (path) =>
    path === location.pathname ? "active" : "";

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="burger-content">
        <div className="social-info">
          <p className="text-primary">FOLLOW US</p>
          <FBIcon />
          <INICON />
          <YTICON />
          <FBIcon />
          <INICON />
          <YTICON />
        </div>
        <div className="contact-info bg-primary">
          <div className="links">
            <p>
              <Link
                className={renderActiveClass("/")}
                onClick={closeModal}
                to="/"
              >
                HOME
              </Link>
            </p>
            <p>
              <Link
                className={renderActiveClass("/about")}
                onClick={closeModal}
                to="/about"
              >
                ABOUT US
              </Link>
            </p>
            <p>
              <Link
                className={renderActiveClass("/services")}
                onClick={closeModal}
                to="/services"
              >
                OUR SERVICES
              </Link>
            </p>
            <p>
              <Link
                className={renderActiveClass("/work")}
                onClick={closeModal}
                to="/work"
              >
                OUR WORK
              </Link>
            </p>
            <p>
              <Link
                className={renderActiveClass("/contact-us")}
                onClick={closeModal}
                to="/contact-us"
              >
                CONTACT US
              </Link>
            </p>
          </div>
          <div className="info">
            <div>
              <p>Phone</p>
              <p>+971 50 577 8244</p>
            </div>
            <div>
              <p>Email</p>
              <p>talk@astrisoft.ae</p>
            </div>
            <div>
              <p>Place</p>
              <p>Emirates Towers, DIFC</p>
              <p>Dubai, UAE. </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default BurgerMenu;
