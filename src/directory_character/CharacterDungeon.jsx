import React from "react";
import { Card } from "react-bootstrap";

import styles from "./character.module.css";

function CharacterDungeon(props) {
    return (
        <Card className={styles.cardDungeon}>
            <Card.Title className={styles.titleCard}>{props.dungeon}</Card.Title>
            <Card.Body className={styles.topCard}>
                Score : {props.score}
                <br />
                Mythic Level : {props.mythic_level}
                <br />
                Upgrade : {props.num_keystone_upgrades}
            </Card.Body>
        </Card>
    );
}

export default CharacterDungeon;
