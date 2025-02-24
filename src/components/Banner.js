import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg"
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, fullText.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting)
            setDelta(prevDelta => prevDelta / 2)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(prevLoopNum => prevLoopNum + 1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    // return (
    //     <section>
    //         <Container>
    //             <Row className="align-items-center">
    //                 <Col xs={12} md={6} xl={7}>
    //                     <span>Welcome to my Portfolio</span>
    //                     <h1>(`Hi I`m webdecoder`)<span className="wrap">web developer</span></h1>
    //                     <p>In ipsum minim nostrud aliquip.In adipisicing magna velit veniam cillum ea cillum ad adipisicing ullamco adipisicing.</p>
    //                     <button onClick={() => console.log("connect")}>Let`s connect</button>
    //                 </Col>
    //                 <Col xs={12} md={6} xl={5}>
    //                     <img src={headerImg} alt="Header Img" />
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </section>
    // )
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi!`} <span className="txt-rotate" dataPeriod={period} data-rotate={toRotate}><span className="wrap">{text}</span></span></h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner