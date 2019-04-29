import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

export default class ButtonUp extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton ShowAtPosition={11} AnimationDuration={1000} />
            </div>
        );
    }
}
