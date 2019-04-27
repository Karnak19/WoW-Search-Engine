import React from "react";
import { Container, Card } from "react-bootstrap";
import "../App.css";

function CharacterProgress(props) {
    // const level = ((props || {}).gear || {}).item_level_total;
    return (
        <>
            <Container>
                <Card>
                    <Card.Title>All Raid Progression</Card.Title>
                    <Card.Text>
                        Summary: {props.summary} <br />
                        Total Bosses: {props.total_bosses}
                    </Card.Text>
                </Card>
            </Container>
        </>
    );
}

export default CharacterProgress;
