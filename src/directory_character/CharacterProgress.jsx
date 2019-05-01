import React from "react";
import { Container, Card, ProgressBar } from "react-bootstrap";

import styles from "./character.module.css";

function CharacterProgress(props) {
    return (
        <>
            <Container>
                <Card className={styles.positionCard}>
                    <Card.Title className={styles.titleCard}>{props.title}</Card.Title>
                    <Card.Body className={styles.topCard}>
                        Difficulties Bosses Killed
                        <br />
                        Normal
                        <ProgressBar animated now={props.normal_bosses_killed} max={props.total_bosses} className={styles.sizeBarProgress} />
                        <br />
                        Heroic
                        <ProgressBar animated now={props.heroic_bosses_killed} max={props.total_bosses} className={styles.sizeBarProgress} />
                        <br />
                        Mythic
                        <ProgressBar animated now={props.mythic_bosses_killed} max={props.total_bosses} className={styles.sizeBarProgress} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
export default CharacterProgress;
