import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import wowbanner from "../assets/images/wowBanner.svg";

class Banner extends Component {
    render() {
        return (
            <Link to="/">
                <Image src={wowbanner} alt="banner World of Warcraft" className="BannerCss" />
            </Link>
        );
    }
}

export default Banner;
