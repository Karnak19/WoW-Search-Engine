import React from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";
import "../App.css";

function CharacterProgress(props) {
    // const level = ((props || {}).gear || {}).item_level_total;
    return (
        <>
            <Container>
                <Card className="cardProgress">
                    <Card.Text className="TopCard">
                        Summary: {props.summary} <br />
                        Total Bosses:
                        <ProgressBar animated now={props.normal_bosses_killed} max={props.total_bosses} />
                        {/* <progress max={props.total_bosses} value={props.normal_bosses_killed}>
                            Normal :{props.normal_bosses_killed} / {props.total_bosses}
                        </progress> */}
                    </Card.Text>
                </Card>
            </Container>
        </>
    );
}

export default CharacterProgress;
