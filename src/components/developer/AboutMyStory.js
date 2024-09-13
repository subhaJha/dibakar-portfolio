import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutMyStory.css'; // Assuming you'll create a CSS file for styling

const AboutMyStory = () => {
    return (
        <Container fluid className="my-story-container">
            <Row className="align-items-center">
                <Col md={8}>
                    <h1 className="title">My Story</h1>
                    <p className="intro-text">
                        Hello there, I'm Subha Jha, hailing from the charming city of Malda, West Bengal, India. Armed with a
                        B.C.A & M.C.A degree. I'm more interested in software development.
                    </p>
                    <p className="skills-text">
                        I've honed my skills in a variety of languages and technologies, including JavaScript, C, HTML, CSS3,
                        Bootstrap, MySQL, Vue, ReactJS, NodeJS, Postman, Certified in Databricks. and more.
                    </p>
                    <p className="ambition-text">
                        Now, I'm on the lookout for an opportunity as a Fullstack/Software Developer to further my career in this
                        dynamic field.
                    </p>
                </Col>
                <Col md={4}>
                    <img src="path_to_your_graphic_image_or_svg" alt="Coding Graphic" className="coding-graphic"/>
                </Col>
                hello\
            </Row>
        </Container>
    );
};

export default AboutMyStory;
