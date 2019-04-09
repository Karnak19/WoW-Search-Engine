import React from "react";
import { Button, Modal, Container, Col, Card } from "react-bootstrap";

class ModalForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Container className="">
                    <Col className="" md={{ span: 3, offset: 5 }}>
                        <Card className="cardTop" style={{ width: "18rem" }} onClick={this.handleShow}>
                            <Card.Img
                                variant="top"
                                src="https://vignette.wikia.nocookie.net/wow/images/3/33/Paladin_%28Classe%29.png/revision/latest?cb=20150814164946&path-prefix=fr"
                            />
                            <Card.Body className="TopCard">
                                <Card.Title className="TopCard">Card Title</Card.Title>
                                <Card.Text className="TopCard">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Click here !</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Top Five Players</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Col>
                                <Card className="cardTop" style={{ width: "25rem" }} onClick={this.handleShow}>
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
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalForm;
