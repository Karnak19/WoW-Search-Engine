import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import "../App.css";

function CharacterComponent({ name, race, classE, gender, item_level_total, profile_url }) {
    return (
        <>
            <Container>
                <Card className="cardTop" style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="https://vignette.wikia.nocookie.net/wow/images/3/33/Paladin_%28Classe%29.png/revision/latest?cb=20150814164946&path-prefix=fr"
                    />
                    <Card.Body className="TopCard">
                        <Card.Title className="TopCard">{name}</Card.Title>
                        <Card.Text className="TopCard">
                            Race : {race}
                            Class : {classE}
                            Gender : {gender}
                            Level : {item_level_total}
                        </Card.Text>
                        <Button className="ButtonFooter" variant="primary">
                            Link Official page {profile_url}
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CharacterComponent;
