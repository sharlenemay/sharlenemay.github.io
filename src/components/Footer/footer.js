import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr/>
      <Row>
      <Col>
      <h6>
      &copy;Sharlene May Minosa
      <br/>
      <a href="mailto:sharleneminosa@gmail.com/">sharleneminosa@gmail.com</a>
      </h6>
      </Col>
      <Col id="footer-right">
      <a href="https://github.com/sharlenemay" target="_blank">Github</a>
      </Col>
      <Col>
      <a href="https://www.linkedin.com/in/smminosa/" target="_blank">LinkedIn</a>
      </Col>
      <Col>
      <a href="https://drive.google.com/file/d/1OWl53rqO-M5LVg9vxKaawA_LQomjPjHO/view?usp=sharing" target="_blank">Resume</a>
      </Col>
      </Row>
    </div>
  );
}

export default Footer;
