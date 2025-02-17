import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import colorSharp from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import { useState } from "react"

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    const [isVisible, setIsVisible] = useState(true)

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ut pariatur nulla velit laborum ea. Tempor incididunt commodo deserunt excepteur reprehenderit pariatur Lorem laborum irure nostrud. Tempor dolor eu consectetur ex cupidatat mollit exercitation Lorem pariatur aliqua minim. Cupidatat adipisicing pariatur sit culpa nisi nostrud pariatur amet cupidatat adipisicing ea proident nostrud eiusmod. Cupidatat cillum irure culpa ad ut dolor. Aute cillum veniam aliquip do sit quis et tempor eu consectetur.</p>
                    </Col>
                </Row>
                <Tab.Container id="project-tabs" defaultActiveKey={"first"}>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey={"first"}>
                            <Row>

                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={"second"}>
                            <p>Eu laborum consequat aliqua nisi esse veniam amet nostrud voluptate consectetur eu cupidatat aute. Sit id ullamco ex ad nisi. Sint anim veniam minim commodo culpa deserunt do.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey={"third"}>
                            <p>Duis deserunt irure duis dolore ut ea proident irure amet in ipsum id amet sint. Ipsum nostrud esse dolor dolore aute dolore duis deserunt qui. Nulla fugiat sunt duis ea cillum veniam. Commodo anim velit sit nisi labore officia minim tempor.</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
            <img className="background-image-right" src={colorSharp} />
        </section>
    )
}

export default Projects