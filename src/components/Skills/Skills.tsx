import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import JavaScript from './../../assets/img/js.png'
import HTML from './../../assets/img/html.png'
import CSS from './../../assets/img/css.png'
import SASS from './../../assets/img/sass.png'
import NODE from './../../assets/img/node.png'
import TypeScript from './../../assets/img/typescript.png'
import REACT from './../../assets/img/reactLogo.png'
import StyledComponents from './../../assets/img/styled-components.png'
import RESTAPI from './../../assets/img/rest-api.png'
import GIT from './../../assets/img/git.png'
import Cpp from './../../assets/img/c++.png'
import SQL from './../../assets/img/sql.png'
import colorSharp from './../../assets/img/color-sharp.png'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              // I excel in a variety of technologies. My expertise includes :
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={HTML} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CSS} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={SASS} alt="Image" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={JavaScript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={NODE} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={TypeScript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={REACT} alt="Image" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={StyledComponents} alt="Image" />
                  <h5>Styled <br />
                  Components</h5>
                </div>
                <div className="item">
                  <img src={RESTAPI} alt="Image" />
                  <h5>REST API</h5>
                </div>
                <div className="item">
                  <img src={GIT} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={Cpp} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={SQL} alt="Image" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
