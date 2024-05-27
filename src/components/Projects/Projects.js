import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import crypto from "../../Assets/Projects/crypto.png";
import todo from "../../Assets/Projects/todo.png";
import fmportal from "../../Assets/Projects/fmportal.png";
import suicide from "../../Assets/Projects/suicide.png";
import cmdPortal from "../../Assets/Projects/cmdPortal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fmportal}
              isBlog={false}
              title="FM PORTAL"
              description="Developed an internal project for current company where users can access all information related to surveys conducted in the field. Provided live survey counts per person, time-wise, team-wise, and date-wise"
              ghLink="https://github.com/algomanaxis/FMPortal-test-16May"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cmdPortal}
              isBlog={false}
              title="BYTEBRIDGE Portal"
              description="Build an internal website catering to the needs of  and clients, facilitating administrative tasks such as document uploading, deletion, printing, and PDF saving. Users(client) are restricted to viewing only."
              ghLink="https://github.com/ALGO-MANISH/ByteBridge"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="DYNAMIC WEATHER WEBSITE"
              description="Developed a dynamic web application allowing users to access real-time weather information for any city or popular place"
              ghLink="https://github.com/ALGO-MANISH/WeathProject"
              demoLink="https://weathproject.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO DO LIST"
              description="Implemented a user-friendly feature allowing individuals to effortlessly add or remove specific to-do tasks, Developed using Hooks and State in Reactjs, Html, Css and javaScript"
              ghLink="https://github.com/ALGO-MANISH/ToDoReact"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="CRYPTOGRAPHY"
              description=" Developed a Java GUI application enabling users to encrypt and decrypt various file types securely.Ensured user-friendly
              interaction through graphical user interface design.Build with java, java GUI and implemented XOR Cipher"
              ghLink="https://github.com/ALGO-MANISH/Cryptography"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
