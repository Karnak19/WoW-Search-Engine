import React from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import ButtonHome from "../components_home/ButtonLinkHome";
import CharacterComponent from "../components_character/CharacterComponent";
import ModalForm from "../components_home/ModalForm.jsx";
import Fetch from "../components_home/Fetch";

function CharacterPageView({ characterNameFilter, character }) {
    return (
        <div>
            <ButtonHome />
            <h1>Researched Character {characterNameFilter}</h1>
            <CharacterComponent character={character.filter(character.includes(characterNameFilter))} />
        </div>
    );
}

function CharacterPageSearch({ match }) {
    return (
        <div>
            <Fetch
                requestUrl={() => Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=gear`)}
                renderLoading={() => <Spinner animation="border" variant="danger" />}
                renderError={() => <Redirect to="/" />}
                renderSuccess={response => <CharacterPageView character={response.data} characterNameFilter={match.params.filter} />}
            />
            <footer>
                <ModalForm />
                <p className="FooterCSS">Website by Sylène, Stéphane and Enzo.</p>
            </footer>
        </div>
    );
}

export default CharacterPageSearch;

// render() {
//     // const characterNamefilter = this.props.match.params.filter;
//     const { characterSearch, isError, isLoading } = this.state;
//     if (isError) {
//         return <Redirect to="/" />;
//     }
//     if (isLoading) {
//         return <Spinner animation="border" variant="danger" />;
//     }
//     return (
//         <>
//             <ButtonHome />
//             <CharacterComponent {...characterSearch} />

//
//         </>
//     );
// }
