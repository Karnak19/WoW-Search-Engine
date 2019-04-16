import React from "react";
import { Button, Container, Card, Spinner } from "react-bootstrap";
import "../App.css";
import Axios from "axios";

class PageCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            isLoading: false,
            ViewCharacterProfileResponse: [""],
            CharacterGearSchema: "",
            name: ""
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        Axios.get(`https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression`, {
            headers: { Accept: "application/json" }
        })
            .then(response => {
                this.setState({
                    ViewCharacterProfileResponse: response.data
                });
            })
            .catch(error => console.log("error"));
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <Spinner animation="border" variant="danger" />
                </div>
            );
        }
        return (
            <>
                <div>
                    <Container>
                        <Card className="cardTop" style={{ width: "18rem" }} onClick={this.handleShow}>
                            <Card.Img
                                variant="top"
                                src="https://vignette.wikia.nocookie.net/wow/images/3/33/Paladin_%28Classe%29.png/revision/latest?cb=20150814164946&path-prefix=fr"
                            />
                            <Card.Body className="TopCard">
                                <Card.Title className="TopCard">{this.state.ViewCharacterProfileResponse.name}</Card.Title>
                                <Card.Text className="TopCard">
                                    Race : {this.state.ViewCharacterProfileResponse.race}
                                    Class : {this.state.ViewCharacterProfileResponse.class}
                                    Gender : {this.state.ViewCharacterProfileResponse.gender}
                                    Level : {this.state.CharacterGearSchema.item_level_total}
                                </Card.Text>
                                <Button className="ButtonFooter" variant="primary">
                                    Link Official page {this.state.ViewCharacterProfileResponse.profile_url}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </>
        );
    }
}

export default PageCharacter;
