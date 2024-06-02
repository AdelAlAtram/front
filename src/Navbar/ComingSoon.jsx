import React from "react";
import "./comingSoon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ComingSoon = () => {
  return (
    <>
      <h6>.</h6>

      <h2 className="h1">
        The page is under development <br />{" "}
        <span className="span">For more information contact us on</span> <br />{" "}
        <FontAwesomeIcon icon={faEnvelope} className="email2" />{" "}
        <span className="email">info@accounting_academy_research.com</span>{" "}
      </h2>
    </>
  );
};

export default ComingSoon;
