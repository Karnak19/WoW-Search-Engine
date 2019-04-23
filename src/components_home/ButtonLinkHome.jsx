import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParticleEffectButton from "react-particle-effect-button";

class ButtonHome extends Component {
    state = {
        hidden: false
    };

    render() {
        return (
            <Link to="/">
                <ParticleEffectButton color="#121019" hidden={this.state.hidden}>
                    Back Home
                </ParticleEffectButton>
            </Link>
        );
    }
}

export default ButtonHome;
