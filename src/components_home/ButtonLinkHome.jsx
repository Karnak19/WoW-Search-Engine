import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ButtonHome extends Component {
    render() {
        return (
            <Button className="ButtonHome">
                <Link to="/">Back Home</Link>
            </Button>
        );
    }
}

export default ButtonHome;
