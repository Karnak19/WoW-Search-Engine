import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

class NavLink extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavLink exact to="/">
                    {" "}
                    Home{" "}
                </NavLink>
            </BrowserRouter>
        );
    }
}

export default NavLink;
