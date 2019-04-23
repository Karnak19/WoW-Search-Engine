import React, { Component } from "react";
import { InputGroup, Container, Row, Col } from "react-bootstrap";
import "../App.css";

import ButtonSearch from "./ButtonSearchComponent";
import InputCharacter from "./InputCharaterSearch";

// TODO: Ajouter l'auto completion avec la data de l'API

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            researchCharacter: "",
            name: ""
        };
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div className="SearchEngine">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup size="lg">
                                <InputCharacter onChange={inputValue => this.setState({ inputValue })} />
                                <ButtonSearch filter={inputValue} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchBar;
