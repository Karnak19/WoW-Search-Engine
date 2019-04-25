import React, { Component } from "react";
import { Link } from "react-router-dom";

class ButtonHome extends Component {
    render() {
        return (
            <button>
                <Link to="/">Back Home</Link>
            </button>
        );
    }
}

export default ButtonHome;
