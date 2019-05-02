import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../directory_home/Home.page";
import CharacterPageSearch from "../directory_character/Character.page";
import ErrorPage from "../directory_home/ErrorPage";

class Rooter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/result-search/:realm/:name/:region" component={CharacterPageSearch} />
                    <Route path="/error" component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Rooter;
