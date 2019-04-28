import React from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";
import "../App.css";

import ButtonHome from "../components_home/ButtonLinkHome";

import CharacterSheet from "../components_character/CharacterSheet";
// import Raids from "../components_character/Raids";
import Layout from "./Layout.jsx";
import CharacterProgress from "../components_character/CharacterProgress";

class ResultSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterSheet: [],
            uldir: [],
            bod: [],
            curcible: [],
            antorus: [],
            isLoading: false,
            isError: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    }

    componentDidUpdate() {
        const { target } = this.props.match.params;
        Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=${target}&fields=gear`)
            .then(res => {
                this.setState({ characterSheet: res.data, isLoading: false });
            })
            .catch({ isError: true });
        Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=${target}&fields=raid_progression`)
            .then(res => {
                this.setState({
                    uldir: res.data.raid_progression["uldir"],
                    bod: res.data.raid_progression["battle-of-dazaralor"],
                    crucible: res.data.raid_progression["crucible-of-storms"],
                    antorus: res.data.raid_progression["antorus-the-burning-throne"],
                    emerald: res.data.raid_progression["the-emerald-nightmare"],
                    trial: res.data.raid_progression["trial-of-valor"],
                    nighthold: res.data.raid_progression["the-nighthold"],
                    sargeras: res.data.raid_progression["tomb-of-sargeras"],
                    isLoading: false
                });
            })
            .catch({ isError: true });
    }

    // axios.all([
    //     axios.get('/api/seat/models'),
    //     axios.get('/api/volkswagen/models')
    //   ])
    //   .then(axios.spread(function (seat, volkswagen) {
    //     let vehicles = seat.data.concat(volkswagen.data);
    //     this.setState({ vehicles: vehicles })
    //   }))
    //   //.then(response => this.setState({ vehicles: response.data }))
    //   .catch(error => console.log(error));

    render() {
        const { characterSheet, uldir, bod, crucible, antorus, emerald, trial, sargeras, nighthold, isError, isLoading } = this.state;
        // let RaidsandSheet = { ...characterSheet, ...uldir, ...bod, ...crucible, ...antorus };
        if (isError) {
            return <p>C'est une erreur</p>;
        }
        if (isLoading) {
            return <Spinner animation="border" variant="danger" />;
        }
        return (
            <Layout>
                <ButtonHome />
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
