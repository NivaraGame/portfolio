import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import arrow1 from "../assets/img/arrow1.svg"
import arrow2 from "../assets/img/arrow2.svg"
// import colorSharp from "../assets/img/color-sharp2.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Sint enim consequat mollit dolore do qui qui. Dolor ipsum nulla nostrud voluptate est dolore sit elit officia sunt dolor. Adipisicing officia culpa anim cupidatat deserunt tempor anim non eu labore nulla dolore. Do nulla voluptate dolor aute ullamco sint magna. Laboris labore cillum nostrud tempor laboris duis sunt consequat. Pariatur ea minim exercitation duis pariatur minim id consequat eu excepteur. Laborum fugiat commodo adipisicing ut cillum ullamco laboris aute nostrud est pariatur ad laborum mollit.</p>
                        </div>
                    </Col>
                </Row>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={meter1} alt="" />
                        <h5>Front-end Development</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Web Development</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Web Development</h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="" />
                        <h5>Web Development</h5>
                    </div>
                </Carousel>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}

export default Skills