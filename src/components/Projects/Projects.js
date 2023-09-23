import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import counter from "../../Assets/Projects/CounterImage.jpg";
import landing from "../../Assets/Projects/landing page.webp";
import grid from "../../Assets/Projects/grid component.webp";
import colorPicker from "../../Assets/Projects/rgb1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorPicker}
              isBlog={false}
              title="Color Picker Game"
              description="This is a color picker game that was design to test users ability of their RGB mixture color sense."
              ghLink="https://github.com/amehgenius9/ColorPickerGame"
              demoLink="https://colorpickergamebyameh.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={counter}
              isBlog={false}
              title="Counter App"
              description="Counter app is a simple app that increment, decrement and reset the counter of number."
              ghLink="https://github.com/amehgenius9/Counter-App"
              demoLink="https://icrementanddecrement-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Flyo Landing Page"
              description="A static landing page of flyo in dark mode. Fully responsive."
              ghLink="https://github.com/amehgenius9/SH-CAPSTONE-1"
              demoLink="https://landpage-sh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grid}
              isBlog={false}
              title="Grid Component Card"
              description="A fully responsive grid card component page showing informations in different boxes."
              ghLink="https://github.com/amehgenius9/card-component"
              demoLink="https://app.netlify.com/sites/cardgridcomponent/overview"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
