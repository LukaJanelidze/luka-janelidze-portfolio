import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./../ProjectCard/ProjectCard";
import projImg1 from "./../../assets/img/interactive-card-details.png";
import projImg2 from "./../../assets/img/faq-accordion-card.png";
import projImg3 from "./../../assets/img/interactive-rating-component.png";
import projImg4 from "./../../assets/img/project-ailu.png";
import projImg5 from "./../../assets/img/order-summary.png";
import projImg6 from "./../../assets/img/skilled-Elearning.png";
import projImg7 from "./../../assets/img/tip-calculator.png";
import projImg8 from "./../../assets/img/link-sharing-app.png";
import projImg10 from "./../../assets/img/NFR-card.png";
import projImg11 from "./../../assets/img/QR-code.png";
import colorSharp2 from "./../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projectsTSX = [
    {
      title: "Interactive Card Details",
      description: "Design & Development",
      imgUrl: projImg1,
      link: 'https://interactive-card-details-omega.vercel.app/',
    },
    {
      title: "FAQ Accordion Card",
      description: "Design & Development",
      imgUrl: projImg2,
      link: 'https://faq-accordion-card-zeta-mauve.vercel.app/',
    },
    {
      title: "Interactive Rating Component",
      description: "Design & Development",
      imgUrl: projImg3,
      link: 'https://interactive-rating-component-xi-ten.vercel.app/',
    },
  ];

  const projectsJSX = [
    {
      title: "Ailu Website",
      description: "Design & Development",
      imgUrl: projImg4,
      link: 'https://project-sailu.vercel.app/',
    },
    {
      title: "Order Summary",
      description: "Design & Development",
      imgUrl: projImg5,
      link: 'https://order-summary-beryl-nu.vercel.app/',
    },
    {
      title: "Skilled E-Learning",
      description: "Design & Development",
      imgUrl: projImg6,
      link: 'https://skilled-elearning-theta.vercel.app/',
    },
  ];

  const projectsOther = [
    {
      title: "Tip Calculator",
      description: "Design & Development",
      imgUrl: projImg7,
      link: 'https://tip-calculator-ebon-six.vercel.app/',
    },
    {
      title: "Link Sharing App",
      description: "Design & Development",
      imgUrl: projImg8,
      link: 'https://other-side.vercel.app/',
    },
    {
      title: "NFT Card",
      description: "Design & Development",
      imgUrl: projImg10,
      link: 'https://nft-card-murex-six.vercel.app/',
    },
    {
      title: "QR Code",
      description: "Design & Development",
      imgUrl: projImg11,
      link: 'https://qr-code-two-omega.vercel.app/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>// Take a look at my projects!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React.tsx</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React.jsx</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTSX.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsJSX.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsOther.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects