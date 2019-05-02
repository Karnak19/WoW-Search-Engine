import React, { Component } from "react";
import "../App.css";

import SearchBar from "../directory_home/Search-bar";
import Top5Char from "../aside/top5Char";
import Layout from "../aside/Layout";

class Home extends Component {
    render() {
        return (
            <Layout>
                <h2 className="Intro d-none d-sm-block">
                    Hello player ! Welcome on WoW-SearchEngine ! Here you can search for your favorite player or even for yourself ! Try it ! Choose
                    your region, then enter the name and the realm of a player below and find out more about his stats and other cool stuff !
                </h2>
                <h2 className="Intro d-block d-sm-none">Welcome !</h2>
                <SearchBar />
                <Top5Char />
            </Layout>
        );
    }
}

export default Home;
