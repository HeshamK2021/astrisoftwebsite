import "./styles.scss";
import React from "react";

import { ReactComponent as LogoImg } from "../../assets/logo.svg";

function PageHead({ sentence, pageTitle }) {
  return (
    <div className="page-head">
      <LogoImg className="logo" />
      <p className="sentence">{sentence}</p>
      <p className="page-title">{pageTitle}</p>
    </div>
  );
}

export default PageHead;
