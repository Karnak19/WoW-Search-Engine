import React from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";

import ButtonHome from "../components_home/ButtonLinkHome";

import CharacterSheet from "../components_character/CharacterSheet";
import ModalForm from "../aside/ModalForm";
//import Layout from './Layout.jsx'

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
    }

    render() {
        const { characterSheet, isError, isLoading } = this.state;
        if (isError) {
            return <p>C'est une erreur</p>;
        }
        if (isLoading) {
            return <Spinner animation="border" variant="danger" />;
        }
        return (
            <div>
                <ButtonHome />

                <CharacterSheet {...characterSheet} />

                <footer>
                    <ModalForm />
                    <p className="FooterCSS">Website by Sylène, Stéphane and Enzo.</p>
                </footer>
            </div>
        );
    }
}
export default ResultSearch;
