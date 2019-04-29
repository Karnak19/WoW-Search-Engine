import React from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";

import { styles } from "./character.module.css";

function CharacterProgress(props) {
    return (
        <>
            <Container>
                <Card className={styles.cardProgress}>
                    <Card.Body className={styles.topCard}>
                        Summary: {props.summary} <br />
                        Total Bosses:
                        <ProgressBar animated now={props.normal_bosses_killed} max={props.total_bosses} className={styles.sizeBarProgress} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CharacterProgress;
