import React, { Component } from "react";
import "./App.css";

import Banner from "./Banner.jsx";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Banner />
                </header>
                <body />
                <footer />
            </div>
        );
    }
}

export default App;
