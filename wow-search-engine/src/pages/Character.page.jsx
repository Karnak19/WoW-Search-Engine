import React from "react";
import { Button, Modal, Container, Col, Card, Spinner } from "react-bootstrap";

class PageCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            isLoading: false,
            ViewCharacterProfileResponse: "",
            CharacterGearSchema: ""
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
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
                                <Card.Title className="TopCard">{ViewCharacterProfileResponse.name}</Card.Title>
                                <Card.Text className="TopCard">
                                    Race : {ViewCharacterProfileResponse.race}
                                    Class : {ViewCharacterProfileResponse.class}
                                    Gender : {ViewCharacterProfileResponse.gender}
                                    Level : {CharacterGearSchema.item_level_total}
                                </Card.Text>
                                <Button className="ButtonFooter" variant="primary">
                                    Link Oficial page {ViewCharacterProfileResponse.profile_url}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
                {/* 
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="ModalCharacter">
                        <Modal.Title>Top Five Players</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="TopCard">
                        <Container>
                            <Col>
                                <Card className="TopCard" style={{ width: "25rem" }} onClick={this.handleShow}>
                                    <Card.Img
                                        variant="top"
                                        src="https://vignette.wikia.nocookie.net/wow/images/3/33/Paladin_%28Classe%29.png/revision/latest?cb=20150814164946&path-prefix=fr"
                                    />
                                    <Card.Body className="TopCard">
                                        <Card.Title className="TopCard">Card Title</Card.Title>
                                        <Card.Text className="TopCard">
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>
                    </Modal.Body>
                </Modal> */}
            </>
        );
    }
}

export default PageCharacter;
