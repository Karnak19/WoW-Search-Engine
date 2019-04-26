import React, { Component } from "react";
import { InputGroup, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            searchValue: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState({
            searchValue: this.state.inputValue
        });
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div className="SearchEngine">
                <Container>
                    <Row>
                        <Col>
                            <InputGroup size="lg">
                                <input placeholder="Search here" onChange={this.handleChange} />
                            </InputGroup>
                            <Link to={`/result-search/${inputValue}`}>
                                <Button className="ButtonSearch" onClick={this.handleClick}>
                                    Search
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchBar;
