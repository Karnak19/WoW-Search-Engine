import React from "react";
import { Button, Modal, Container, Col, Card, Table } from "react-bootstrap";

class Top5Char extends React.Component {
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
                <div>
                    <Container className="Cardfull">
                        <Card className="cardTop" style={{ width: "18rem" }} onClick={this.handleShow}>
                            <Card.Img
                                variant="top"
                                src="https://vignette.wikia.nocookie.net/wow/images/3/33/Paladin_%28Classe%29.png/revision/latest?cb=20150814164946&path-prefix=fr"
                            />
                            <Card.Body className="TopCard">
                                <Card.Title className="TopCard">Top Five Players</Card.Title>
                                <Card.Text className="TopCard">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button className="ButtonFooter" variant="primary">
                                    Click here !
                                </Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="ModalCharacter">
                        <Modal.Title>Top Five Players</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="TopCard">
                        <Container>
                            <Col>
                                <Card className="TopCard" style={{ width: "25rem" }} onClick={this.handleShow}>
                                    <Card.Body className="TopCard">
                                        <Table striped bordered hover variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Level</th>
                                                    <th>Guild</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer className="ModalCharacter">
                        <Button className="ButtonFooter" variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Top5Char;
