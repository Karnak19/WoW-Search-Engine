import React, { Component } from "react";
import { InputGroup, Container, Row, Col, FormControl, Button } from "react-bootstrap";
import "./App.css";

// TODO: Placer le bouton en CSS ou avec container
// TODO: Ajouter l'auto completion avec la data de l'API
// TODO: modifier en CSS la police; la taille; ce qu'on peut écrire dedans

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: " "
        };
        this.getUser = this.getUser.bind(this);
    }
    getUser = e => {
        e.preventDefault();
        const user = e.target.elements.username.value;
        this.setState({
            username: " "
        });
        console.log(user);
    };

    render() {
        const { getUser, username } = this.props;
        return (
            <div className="SearchEngine">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup size="lg">
                                <InputGroup.Append>
                                    {/* Si ne fonctionne pas revérifier Appen/Prepend du Imputgroup etc */}
                                    <FormControl
                                        type="text"
                                        value={username}
                                        id="searchBar1"
                                        size="lg"
                                        placeholder="Your search"
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-lg"
                                    />
                                    <Button
                                        className="ButtonSearch"
                                        onClick={() => {
                                            this.setState({ username: getUser });
                                        }}
                                    >
                                        Search
                                    </Button>
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
