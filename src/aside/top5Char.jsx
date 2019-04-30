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
                    <Container className="CardContain">
                        <Card className="CardTop5" style={{ width: "18rem" }} onClick={this.handleShow}>
                            <Card.Img variant="top" src="https://file-cdn.scdkey.com/product/20180222153342_scdk.jpg" />
                            <Card.Body className="CardContent">
                                <Card.Title className="CardContent">Top Five Players</Card.Title>
                                <Card.Text className="CardContent">Here you can see a top five of the best currents players.</Card.Text>
                                <Button className="ButtonFooter">Click here !</Button>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="ModalCharacter">
                        <Modal.Title>Top Five Players</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="CardContent" style={{ padding: "0" }}>
                        <Container>
                            <Col>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th />
                                            <th>Name</th>
                                            <th>Level</th>
                                            <th>Guild</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <img
                                                    src="https://render-eu.worldofwarcraft.com/character/hyjal/16/166233104-avatar.jpg?alt=wow/static/images/2d/avatar/31-0.jpg"
                                                    alt="avatar"
                                                />
                                            </td>
                                            <td>Peterdaddy</td>
                                            <td>421.13</td>
                                            <td>Do It From Behind</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <img
                                                    src="https://render-eu.worldofwarcraft.com/character/hyjal/15/146225423-avatar.jpg?alt=wow/static/images/2d/avatar/10-1.jpg"
                                                    alt="avatar"
                                                />
                                            </td>
                                            <td>Zhelia</td>
                                            <td>421.06</td>
                                            <td>Fail Better</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <img
                                                    src="https://render-eu.worldofwarcraft.com/character/hyjal/250/128973050-avatar.jpg?alt=wow/static/images/2d/avatar/6-0.jpg"
                                                    alt="avatar"
                                                />
                                            </td>
                                            <td>Morreb</td>
                                            <td>421</td>
                                            <td>Mørceaux</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <img
                                                    src="https://render-eu.worldofwarcraft.com/character/hyjal/72/171652680-avatar.jpg?alt=wow/static/images/2d/avatar/10-1.jpg"
                                                    alt="avatar"
                                                />
                                            </td>
                                            <td>Zzda</td>
                                            <td>421</td>
                                            <td>Full Extend</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>
                                                <img
                                                    src="https://render-eu.worldofwarcraft.com/character/hyjal/13/130619149-avatar.jpg?alt=wow/static/images/2d/avatar/10-1.jpg"
                                                    alt="avatar"
                                                />
                                            </td>
                                            <td>Géraldîne</td>
                                            <td>420.38</td>
                                            <td>Attempt</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer className="ModalCharacter">
                        <Button className="ButtonFooter" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Top5Char;
