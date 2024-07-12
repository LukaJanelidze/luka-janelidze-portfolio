import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import navIcon1 from './../../assets/img/nav-icon1.svg';
import navIcon3 from './../../assets/img/nav-icon3.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-center justify-content-between p-3">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <p>// Thank you!</p>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luka-janelidze-a04874248/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/LukaJanelidze"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
