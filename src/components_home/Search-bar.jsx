import React, { Component } from "react";
import { InputGroup, Container, Row, Col, Button, FormControl } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

// import errorPopover from "../errorPopover";

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

        // if (inputValue === "") {
        //     return <Redirect to="/" />;
        // }
        return (
            <div className="SearchPosition">
                <InputGroup className="SearchEngine">
                    <FormControl className="SearchBarForm" placeholder="Your Search" onChange={this.handleChange} />
                </InputGroup>

                <Link to={`/result-search/${inputValue}`}>
                    <Button className="ButtonSearch" onClick={this.handleClick}>
                        Search
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchBar;
