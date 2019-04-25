import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import wowbanner from "../assets/images/wowBanner.svg";

class Banner extends Component {
    render() {
        return (
            <Row>
                <Col>
                    {/* TODO: Fix responsiveness */}
                    {/* TODO : Create a card on Trello */}
                    <Image src={wowbanner} alt="image" className="BannerCss" />
                </Col>
            </Row>
        );
    }
}

export default Banner;
