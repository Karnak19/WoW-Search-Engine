import React from "react";
import Axios from "axios";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "../App.css";

import styles from "./displayCharacter.module.css";
import CharacterSheet from "./CharacterSheet";
import Layout from "../aside/Layout";
import CharacterProgress from "./CharacterProgress";
import CharacterDungeon from "./CharacterDungeon";

class ResultSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterSheet: [],
            uldir: [],
            antorus: [],
            bod: [],
            crucible: [],
            emerald: [],
            nighthold: [],
            sargeras: [],
            trial: [],
            mplus: [],
            isLoading: false,
            isError: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { realm, name, region } = this.props.match.params;
        Axios.all([
            Axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=gear`, {
                headers: { Accept: "application/json" }
            }),
            Axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=raid_progression`, {
                headers: { Accept: "application/json" }
            }),
            Axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_best_runs`, {
                headers: { Accept: "application/json" }
            })
        ])
            .then(([sheet, progress, mplus]) => {
                let mplusRuns = mplus.data["mythic_plus_best_runs"];
                this.setState({
                    characterSheet: sheet.data,
                    antorus: progress.data.raid_progression["antorus-the-burning-throne"],
                    bod: progress.data.raid_progression["battle-of-dazaralor"],
                    crucible: progress.data.raid_progression["crucible-of-storms"],
                    emerald: progress.data.raid_progression["the-emerald-nightmare"],
                    nighthold: progress.data.raid_progression["the-nighthold"],
                    sargeras: progress.data.raid_progression["tomb-of-sargeras"],
                    trial: progress.data.raid_progression["trial-of-valor"],
                    uldir: progress.data.raid_progression["uldir"],
                    mplus: mplusRuns,
                    isLoading: false
                });
            })
            .catch(error => {
                this.setState({
                    isError: true
                });
            });
    }

    render() {
        const { characterSheet, uldir, antorus, bod, crucible, emerald, nighthold, sargeras, trial, isError, isLoading } = this.state;
        const { realm, name, region } = this.props.match.params;
        if (isError) {
            return <Redirect to="/error" />;
        }
        if (isLoading) {
            return <Spinner animation="grow" variant="warning" />;
        }
        return (
            <Layout>
                <Container fluid>
                    <Col className={styles.positionTitle}>
                        <h3>All Raid Progression</h3>
                    </Col>
                    <Row className={styles.positionContainer}>
                        <Col sm={2} md={2} className={styles.positionCardCharacter}>
                            <CharacterSheet {...characterSheet} region={region} realm={realm} name={name} />
                        </Col>
                        <Col sm={2} md={2}>
                            <CharacterProgress title="Antorus the Burning Throne" {...antorus} />
                            <CharacterProgress title="Crucible of Storms" {...crucible} />
                        </Col>
                        <Col sm={2} md={2}>
                            <CharacterProgress title="Battle of Dazaralor" {...bod} />
                            <CharacterProgress title="The Nighthold" {...nighthold} />
                        </Col>
                        <Col sm={2} md={2}>
                            <CharacterProgress title="Uldir" {...uldir} />
                            <CharacterProgress title="Tomb of Sargeras" {...sargeras} />
                        </Col>
                        <Col sm={2} md={2}>
                            <CharacterProgress title="The Emerald Nightmare" {...emerald} />
                            <CharacterProgress title="Trial of Valor" {...trial} />
                        </Col>
                    </Row>
                    <Col className={styles.positionTitle}>
                        <h3>Top three Dungeons</h3>
                    </Col>
                    <Row>
                        <Col sm={3} md={3} />
                        {this.state.mplus.map((dungeon, i) => {
                            return (
                                <Col sm={3} md={3}>
                                    <CharacterDungeon key={i} {...dungeon} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default ResultSearch;
