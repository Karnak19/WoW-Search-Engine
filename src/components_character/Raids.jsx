import React from "react";
import CharacterProgress from "./CharacterProgress";

function Raids({ raids = [] }) {
    return (
        <ul>
            {raids.map((raid, i) => (
                <li key={i}>
                    <CharacterProgress summary={raid.summary} total_bosses={raid.total_bosses} />
                </li>
            ))}
        </ul>
    );
}

export default Raids;
