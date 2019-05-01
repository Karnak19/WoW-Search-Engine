import React from "react";
import { Container, Card } from "react-bootstrap";

import styles from "./character.module.css";

function CharacterDungeon(props) {
    return (
        <>
            <Container className={styles.styleTab}>
                <thead>
                    <tr>
                        <th className={styles.sizeTab}>Dungeon</th>
                        <th className={styles.sizeTab}>Score</th>
                        <th className={styles.sizeTab}>Mythic Level</th>
                        <th className={styles.sizeTab}>Upgrade</th>
                    </tr>
                </thead>
                <tbody className={styles.sizeTab}>
                    <tr>
                        <td className={styles.sizeTab}>{props.dungeon}</td>
                        <td className={styles.sizeTab}>{props.score}</td>
                        <td className={styles.sizeTab}>{props.mythic_level}</td>
                        <td className={styles.sizeTab}>{props.num_keystone_upgrades}</td>
                    </tr>
                </tbody>
            </Container>
        </>
    );
}

export default CharacterDungeon;
