import React, { Component } from "react";
import { InputGroup, Container, Row, Col, FormControl, Button } from "react-bootstrap";
import "./App.css";

// TODO: Placer le bouton en CSS ou avec container
// TODO: Ajouter l'auto completion avec la data de l'API
// TODO: modifier en CSS la police; la taille; ce qu'on peut écrire dedans

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchEngine">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup size="lg">
                                <InputGroup.Append>
                                    {/* Si ne fonctionne pas revérifier Appen/Prepend du Imputgroup etc */}
                                    <FormControl
                                        id="searchBar1"
                                        size="lg"
                                        placeholder="Your search"
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-lg"
                                    />
                                    <Button className="ButtonSearch">Search</Button>
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
