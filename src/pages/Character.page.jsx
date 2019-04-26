import React from "react";
import Axios from "axios";
import { Spinner } from "react-bootstrap";

import ButtonHome from "../components_home/ButtonLinkHome";
import CharacterComponent from "../components_character/CharacterComponent";
import ModalForm from "../aside/ModalForm";

class ResultSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterSearch: [],
            isLoading: false,
            isError: false,
            button: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    }

    componentDidUpdate() {
        Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=${this.props.target}&fields=gear`)
            .then(res => {
                this.setState({ characterSearch: res.data, isLoading: false });
            })
            .catch({ isError: true });
    }

    render() {
        const { characterSearch, isError, isLoading } = this.state;
        if (isError) {
            return <p>C'est une erreur</p>;
        }
        if (isLoading) {
            return <Spinner animation="border" variant="danger" />;
        }
        return (
            <>
                <ButtonHome />
                <CharacterComponent {...characterSearch} />

                <footer>
                    <ModalForm />
                    <p className="FooterCSS">Website by Sylène, Stéphane and Enzo.</p>
                </footer>
            </>
        );
    }
}
export default ResultSearch;
