import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A TIP OF <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              Curiocity led to the start of my programming journey, and I have
              been loving it ever since 🤓
              <br />
              <br />I am fluent
              <i>
                <b className="purple"> Javascript React, and Redux. </b>
              </i>
              <br />
              <br />I have interest in building dynamic &nbsp;
              <i>
                <b className="purple">Web Products </b> and also in areas
                related to <b className="purple">Innovation.</b>
              </i>
              <br />
              <br />I also apply my passion for developing products with{" "}
              <b className="purple">Pug</b> and
              <i>
                <b className="purple"> CSS Library</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React Bootstrap and MUI</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BEEP ME ON</h1>
            <p>
              Feel free to <span className="purple">connect! </span> I might be{" "}
              <span className="purple">your next door neigbour</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amehgenius9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/amehgenius9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/victor-ameh-02b678228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
