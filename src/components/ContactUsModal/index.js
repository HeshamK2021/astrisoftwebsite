import "./styles.scss";
import React from "react";
import Modal from "react-modal";

import { ReactComponent as Logo } from "../../assets/Group 222.svg";
import { ReactComponent as CloseIcon } from "../../assets/x.svg";
import { ReactComponent as Star } from "../../assets/missing-assets/Group 15.svg";

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    minHeight: "90vh",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 0,
    margin: 0,
    overflow: "auto",
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
      document.querySelector("nav").style.zIndex = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.querySelector("nav").style.zIndex = "2";
    };
  });

  const [choice, setChoice] = React.useState([]);

  const renderStar = (num) => {
    if (choice.includes(num)) return <Star />;
    return `${"  "}${"  "}`;
  };

  const renderChoiceClass = (num) =>
    choice.includes(num) ? "choice" : "choice not-selected";

  const [step, setStep] = React.useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="question">I'm primarly looking for...</div>
            <div className="choices">
              <div
                onClick={() => setChoice((prev) => [...prev, 1])}
                className={renderChoiceClass(1)}
              >
                <span className="text-secondary font-weight-bold">[</span>
                {renderStar(1)}
                <span className="text-secondary font-weight-bold ">]</span>{" "}
                Branding
              </div>
              <div
                onClick={() => setChoice((prev) => [...prev, 2])}
                className={renderChoiceClass(2)}
              >
                <span className="text-secondary font-weight-bold">[</span>
                {renderStar(2)}
                <span className="text-secondary font-weight-bold">]</span>{" "}
                Website/App
              </div>
              <div
                onClick={() => setChoice((prev) => [...prev, 3])}
                className={renderChoiceClass(3)}
              >
                <span className="text-secondary font-weight-bold">[</span>
                {renderStar(3)}
                <span className="text-secondary font-weight-bold">]</span>{" "}
                Digital Marketing & SEO
              </div>
              <div
                onClick={() => setChoice((prev) => [...prev, 4])}
                className={renderChoiceClass(4)}
              >
                <span className="text-secondary font-weight-bold">[</span>
                {renderStar(4)}
                <span className="text-secondary font-weight-bold">]</span>{" "}
                Design & Creation
              </div>
              <div
                onClick={() => setChoice((prev) => [...prev, 5])}
                className={renderChoiceClass(5)}
              >
                <span className="text-secondary font-weight-bold">[</span>
                {renderStar(5)}
                <span className="text-secondary font-weight-bold">]</span> Just
                saying Hello ;)
              </div>
            </div>
            <button onClick={() => setStep(2)} className="btn btn-secondary">
              GREAT, TELL US MORE
            </button>
          </>
        );
      case 2:
        return (
          <>
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Company*" />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Phone" />
            <button onClick={closeModal} className="btn btn-secondary">
              Send Message
            </button>
          </>
        );
      default:
        break;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="contact-us-modal">
        <div className="header">
          <Logo className="logo" />
          <CloseIcon className="close-icon" onClick={closeModal} />
        </div>
        <div className="grid">
          <div className="left">
            <div className="question text-secondary">
              READY TO TALK ABOUT YOUR PROJECT ?
            </div>
            <div className="lets-talk text-primary">
              LET'S <span className="text-secondary">[ </span>
              TALK
              <span className="text-secondary"> ]</span>
            </div>
          </div>
          <div className="right">{renderStep()}</div>
        </div>
      </div>
    </Modal>
  );
}

export default BurgerMenu;
