import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Cardcharacter = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 3, offset: 4 }}>
                    <div>
                        <Card className="cardTop" style={{ width: "18rem" }}>
                            <Card.Img
                                variant="top"
                                src="https://vignette.wikia.nocookie.net/wow/images/3/33/Paladin_%28Classe%29.png/revision/latest?cb=20150814164946&path-prefix=fr"
                            />
                            <Card.Body className="TopCard">
                                <Card.Title className="TopCard">Card Title</Card.Title>
                                <Card.Text className="TopCard">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Cardcharacter;
