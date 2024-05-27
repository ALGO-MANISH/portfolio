import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiDocker,
  SiKubernetes
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";


const style={
  ptag:{
    fontSize:"1.3rem",    
  }
}





function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={1} md={2} className="tech-icons">
        <DiJava />
        <p style={style.ptag}>Java</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={style.ptag}>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons"> 
        <CgCPlusPlus />
        <p style={style.ptag}>C++</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={style.ptag}>Reactjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={style.ptag}>Nodejs</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        < SiExpress />
        <p style={style.ptag}>Expressjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={style.ptag}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={style.ptag}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={style.ptag}>CSS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql  />
        <p style={style.ptag}>Mysql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring/>
        <p style={style.ptag}>Spring Boot</p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={style.ptag}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker/>
        <p style={style.ptag}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes/>
        <p style={style.ptag}>Kubernetes</p>
      </Col>

    </Row>
  );
}

export default Techstack;
