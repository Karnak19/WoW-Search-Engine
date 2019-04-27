import React from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";

import ButtonHome from "../components_home/ButtonLinkHome";

import CharacterSheet from "../components_character/CharacterSheet";
import Raids from "../components_character/Raids";
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
                    isLoading: false
                });
            })
            .catch({ isError: true });
    }

    render() {
        const { characterSheet, uldir, bod, crucible, antorus, isError, isLoading } = this.state;
        let RaidsandSheet = { ...characterSheet, ...uldir, ...bod, ...crucible, ...antorus };
        if (isError) {
            return <p>C'est une erreur</p>;
        }
        if (isLoading) {
            return <Spinner animation="border" variant="danger" />;
        }
        return (
            <Layout>
                <ButtonHome />
                <CharacterSheet {...RaidsandSheet} />
                <CharacterProgress {...RaidsandSheet} />
                {/* <Raids {...RaidsandSheet} /> */}
            </Layout>
        );
    }
}
export default ResultSearch;
