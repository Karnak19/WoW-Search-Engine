import React, { Component } from "react";
import "../App.css";

import ModalForm from "../components_home/ModalForm";
import SearchBar from "../components_home/Search-bar";
import Top5Char from "../components_home/top5Char";
import Banner from "../components_home/Banner";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Banner />
                </header>

                <section>
                    <h2 className="Intro">
                        Hello player ! Welcome on WoW-SearchEngine ! Here you can search for your favorite player or even for yourself ! Try it !
                        Enter the name of a player below and found out more about his stats and other cool stuff !
                    </h2>
                    <SearchBar />
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

export default Home;
