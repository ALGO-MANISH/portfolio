import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manish Kr Poddar </span>
            from <span className="purple"> Guwahati, India.</span>
            <br />
            Currently I am working as a software Developer at AxisMyIndia ltd.
            <br />
            I have done my B Tech from NIT silchar in Electrical Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Creating
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>

          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manish</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
