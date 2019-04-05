import React from "react";
import { Button, Modal } from "react-bootstrap";

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
                <Button variant="primary" onClick={this.handleShow} className="ButtonCSS">
                    Contact Us
                </Button>

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
