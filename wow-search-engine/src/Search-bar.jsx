import React, { Component } from "react";
import { InputGroup /*, Container, Row, Col*/ } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

// TODO: Placer le bouton en CSS ou avec container
// TODO: Ajouter l'auto completion avec la data de l'API
// TODO: modifier en CSS la police; la taille; ce qu'on peut écrire dedans

class SearchBar extends Component {
    render() {
        return (
            <div className="App">
                <InputGroup className="mb-3">
                    <InputGroup.Append>
                        {/* Si ne fonctionne pas revérifier Appen/Prepend du Imputgroup etc */}
                        <FormControl placeholder="Your search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default SearchBar;
