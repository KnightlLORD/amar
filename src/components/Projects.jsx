import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ColorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and Development",
      imgUrl: projImg1,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus deserunt soluta reprehenderit?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus deserunt soluta reprehenderit?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam est amet a velit nobis consequuntur blanditiis harum
                    non eos officia!
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={ColorSharp2} />
    </section>
  );
};

export default Projects;
