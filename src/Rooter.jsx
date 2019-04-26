import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home.page.jsx";
import CharacterPageSearch from "./pages/Character.page.jsx";

class Rooter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/result-search" component={CharacterPageSearch} />
                </Switch>
            </BrowserRouter>
        );
    }
}

// {
//     /* <Route path="/resultat-search/:link" component={CharacterPageSearch} /> */
// }

export default Rooter;
