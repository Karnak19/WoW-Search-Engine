import React, { Component } from "react";
import { InputGroup, Container, Row, Col } from "react-bootstrap";
import "../App.css";

import ButtonSearch from "./ButtonSearchComponent";
import InputCharacter from "./InputCharaterSearch";
import ResultSearch from "../pages/Character.page";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
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
                                <ButtonSearch nameCharacter={inputValue} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                <ResultSearch target={this.state.inputValue} />
            </div>
        );
    }
}

export default SearchBar;
