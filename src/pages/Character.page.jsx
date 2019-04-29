import React from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "../App.css";

import CharacterSheet from "../components_character/CharacterSheet";
// import Raids from "../components_character/Raids";
import Layout from "./Layout.jsx";
import CharacterProgress from "../components_character/CharacterProgress";

class ResultSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterSheet: [],
            isLoading: false,
            isError: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { target } = this.props.match.params;
        Axios.all([
            Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=${target}&name=${target}&fields=gear`, {
                headers: { Accept: "application/json" }
            }),
            Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=${target}&name=${target}&fields=raid_progression`, {
                headers: { Accept: "application/json" }
            })
        ])
            .then(
                Axios.spread((sheet, progress) => {
                    this.setState({
                        characterSheet: sheet.data,
                        antorus: progress.data.raid_progression["antorus-the-burning-throne"],
                        bod: progress.data.raid_progression["battle-of-dazaralor"],
                        crucible: progress.data.raid_progression["crucible-of-storms"],
                        emerald: progress.data.raid_progression["the-emerald-nightmare"],
                        nighthold: progress.data.raid_progression["the-nighthold"],
                        sargeras: progress.data.raid_progression["tomb-of-sargeras"],
                        trial: progress.data.raid_progression["trial-of-valor"],
                        uldir: progress.data.raid_progression["uldir"],
                        isLoading: false
                    });
                })
            )
            .catch({ isError: true });
    }

    render() {
        const { characterSheet, uldir, antorus, bod, crucible, emerald, nighthold, sargeras, trial, isError, isLoading } = this.state;
        // let RaidsandSheet = { ...characterSheet, ...uldir, ...bod, ...crucible, ...antorus };
        if (isError) {
            return <Redirect to="/" />;
        }
        if (isLoading) {
            return <Spinner animation="border" variant="danger" />;
        }
        return (
            <Layout>
                <CharacterSheet {...characterSheet} />
                <h3>All Raid Progression</h3>
                <h5>Antorus the burning throne</h5>
                <CharacterProgress {...antorus} />
                <h5>Battle of dazaralor</h5>
                <CharacterProgress {...bod} />
                <h5>Crucible of storms</h5>
                <CharacterProgress {...crucible} />
                <h5>The emerald nightmare</h5>
                <CharacterProgress {...emerald} />
                <h5>The nighthold</h5>
                <CharacterProgress {...nighthold} />
                <h5>Tomb of Sargeras</h5>
                <CharacterProgress {...sargeras} />
                <h5>Trial of valor</h5>
                <CharacterProgress {...trial} />
                <h5>Uldir</h5>
                <CharacterProgress {...uldir} />
                {/* <Raids {...RaidsandSheet} /> */}
            </Layout>
        );
    }
}
export default ResultSearch;
