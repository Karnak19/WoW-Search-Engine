import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import wowbanner from "./assets/images/wowBanner.png";

class Banner extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Image src={wowbanner} alt="image" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Banner;
