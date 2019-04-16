import React, { Component } from "react";
import "./App.css";

import ModalForm from "./ModalForm";
import SearchBar from "./Search-bar.jsx";

import Top5Char from "./top5Char";
import Banner from "./Banner.jsx";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Banner />
                </header>
                <section>
                    <h2 className="Intro">
                        Hello player ! Welcome on WoW-SearchEngine ! Here you're can search for you favorite player or even for yourself ! Try it !
                        Enter the name of a player below and found out more about his stats and other cool stuff !
                    </h2>

                    <SearchBar getUser={this.getUser} />

                    <Top5Char />
                </section>
                <footer>
                    <ModalForm />
                    <p className="FooterCSS">Website by Sylène, Stéphane and Enzo.</p>
                </footer>
            </div>
        );
    }
}

export default App;
