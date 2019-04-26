import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import "../App.css";

function CharacterSheet(props) {
    const level = ((props || {}).gear || {}).item_level_total;
    return (
        <>
            <Container className="Cardfull">
                <Card className="cardTop" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={props.thumbnail_url} />
                    <Card.Body className="TopCard">
                        <Card.Title className="TopCard">Name : {props.name}</Card.Title>
                        <Card.Text className="TopCard">
                            Race : {props.race} <br />
                            Class : {props.class} <br />
                            Gender : {props.gender} <br />
                            Level : {level}
                        </Card.Text>
                        <Button className="ButtonFooter" variant="primary">
                            <a href={props.profile_url} target="_blank" rel="noopener noreferrer">
                                Link Official Page
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CharacterSheet;
