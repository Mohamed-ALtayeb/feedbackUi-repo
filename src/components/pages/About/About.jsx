import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

const About = () => {
  return (
    <Card className="about">
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product of serivce</p>
      <p>Version 1.0.0</p>
      <Link to={"/"}>Back To Home</Link>
    </Card>
  );
};

export default About;
