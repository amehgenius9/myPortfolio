import React from "react";
import Card from "react-bootstrap/Card";
import { VscCheckAll } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple"> Victor Ameh </span>
            from <span className="purple"> Nigeria.</span>
            <br /> I got my first degree in Building Technology, and will be
            starting a MSc degree in Computing coming January 2023.
            <br />
            Additionally, I'm a Frontend Developer and a QA Engineer for
            BrandDrive, Nigeria.
            <br />
            <br />
            Outside coding I love;
          </p>
          <ul>
            <li className="about-activity">
              <VscCheckAll /> Making Music
            </li>
            <li className="about-activity">
              <VscCheckAll /> Playing Games
            </li>
            <li className="about-activity">
              <VscCheckAll /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Little is a enough to make it count!"{" "}
          </p>
          <footer className="blockquote-footer">Amehgenius9</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
