import React from "react";
import { Button, Modal, Container, Col } from "react-bootstrap";

import FormContact from "./Form.jsx";

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
                <Container className="ButtonCSS">
                    <Col className="ButtonCSS" md={{ span: 3, offset: 5 }}>
                        <Button variant="primary" onClick={this.handleShow}>
                            {" "}
                            Contact Us
                        </Button>
                    </Col>
                </Container>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>To contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormContact />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalForm;
