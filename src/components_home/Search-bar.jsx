import React, { Component } from "react";
import { InputGroup, Container, Row, Col, FormControl } from "react-bootstrap";
import "../App.css";

import ButtonSearch from "./ButtonSearchComponent";

// TODO: Ajouter l'auto completion avec la data de l'API

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // search: false,
            researchCharacter: "",
            ViewCharacterProfileResponse: [],
            name: ""
        };
        this.onChange = this.onChange.bind(this);
        // this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const researchCharacter = this.state;
        return (
            <div className="SearchEngine">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup size="lg" onChange={this.onChange}>
                                <InputGroup.Append value={this.state.name}>
                                    {/* Si ne fonctionne pas revérifier Appen/Prepend du Inputgroup etc */}
                                    <FormControl
                                        id="searchBar1"
                                        size="lg"
                                        placeholder="Your search"
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-lg"
                                    />
                                    <ButtonSearch onChange={researchCharacter => this.setState({ researchCharacter })} />
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchBar;
