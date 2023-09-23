import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { TfiCss3 } from "react-icons/tfi";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiMui, SiPug, SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TfiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPug />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
