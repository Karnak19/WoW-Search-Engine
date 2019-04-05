import React, { Component } from "react";
import "./App.css";

import ModalForm from "./ModalForm";
import SearchBar from "./Search-bar.jsx";

import Cardcharacter from "./Character";
import Banner from "./Banner.jsx";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Banner />
                </header>
                <body>
                    <h2 className="Intro">
                        Hello player ! Welcome on WoW-SearchEngine ! Here you're can search for you favorite player or even for yourself ! Try it !
                        Enter the name of a player below and found out more about his stats and other cool stuff !
                    </h2>

                    <SearchBar />

                    <Cardcharacter />
                </body>

                <footer>
                    <ModalForm />
                </footer>
            </div>
        );
    }
}

export default App;
