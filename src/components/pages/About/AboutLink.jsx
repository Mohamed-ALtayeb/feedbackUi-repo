import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutLink = () => {
  return (
    <Link
      className="about-link"
      to={{
        pathname: "/about",
      }}
    >
      <FaQuestion size={30} />
    </Link>
  );
};

export default AboutLink;
