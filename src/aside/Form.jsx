import React, { Component } from "react";
import { Form } from "react-bootstrap";

class FormContact extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>First name</Form.Label>
                        <Form.Control placeholder="Your First Name" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Your Last Name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default FormContact;
