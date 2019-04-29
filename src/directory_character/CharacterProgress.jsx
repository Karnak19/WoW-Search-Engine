import React from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";
import "../App.css";

function CharacterProgress(props) {
    return (
        <>
            <Container>
                <Card className="CardProgress">
                    <Card.Body className="TopCard">
                        Summary: {props.summary} <br />
                        Total Bosses:
                        <ProgressBar animated now={props.normal_bosses_killed} max={props.total_bosses} className="SizeBarProgress" />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CharacterProgress;
