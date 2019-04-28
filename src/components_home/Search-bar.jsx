import React, { Component } from "react";
import { InputGroup, Container, Row, Col, Button, FormControl } from "react-bootstrap";
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
                        <Col sm={9}>
                            <InputGroup size="lg">
                                <FormControl id="searchBar1" placeholder="Your Search" onChange={this.handleChange} />
                            </InputGroup>
                        </Col>
                        <Col sm={3}>
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
