import React, { Component } from "react";
import { InputGroup, Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

// import PageCharacter from "./PageCharacter";

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

    // submitForm(e) {
    //     e.preventDefault();
    //     Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression`, {
    //         headers: { Accept: "application/json" }
    //     })
    //         .then(response => {
    //             this.setState({
    //                 ViewCharacterProfileResponse: response.data
    //             });
    //         })
    //         .catch(error => console.log("error"));
    // }

    render() {
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
                                    <Link to="/resultat-search">
                                        <Button onSubmit={this.submitForm} className="ButtonSearch">
                                            Search
                                        </Button>
                                    </Link>
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
