import React from "react";
import { Button, Container, Card } from "react-bootstrap";

import styles from "./character.module.css";

function CharacterSheet(props) {
    const level = ((props || {}).gear || {}).item_level_total;
    return (
        <>
            <Container>
                <Card>
                    <Card.Img src={props.thumbnail_url} />
                    <Card.Body className={styles.topCard}>
                        <Card.Title className={styles.topCard}>Name : {props.name}</Card.Title>
                        <Card.Text className={styles.topCard}>
                            Race : {props.race} <br />
                            Class : {props.class} <br />
                            Gender : {props.gender} <br />
                            Level : {level}
                        </Card.Text>
                        <Button className={styles.buttonCharacter}>
                            <a style={{ textDecoration: "none" }} href={props.profile_url} target="_blank" rel="noopener noreferrer">
                                Official Page
                            </a>
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default CharacterSheet;
