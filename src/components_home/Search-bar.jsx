import React, { Component } from "react";
import { InputGroup, Button, FormControl, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../App.css";

// import errorPopover from "../errorPopover";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            searchValue: "",
            region: "",
            realmInput: "",
            realmSearch: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState({
            realmSearch: this.tate.realmInput,
            searchValue: this.state.inputValue,
            region: this.state.region
        });
    }

    handleChange(event) {
        this.setState({
            realmInput: event.target.value,
            inputValue: event.target.value
        });
    }

    render() {
        const { realmInput, inputValue, region } = this.state;

        // if (inputValue === "") {
        //     return <Redirect to="/" />;
        // }
        return (
            <div className="SearchPosition">
                <InputGroup className="SearchEngine">
                    {/* <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Region" id="input-group-dropdown-1">
                        <Dropdown.Item href={({ region } = "eu")}>EU</Dropdown.Item>
                        <Dropdown.Item href={({ region } = "us")}> US</Dropdown.Item>
                    </DropdownButton> */}
                    <FormControl className="SearchBarForm" placeholder="What realm?" onChange={this.handleChange} />
                    <FormControl className="SearchBarForm" placeholder="Your Search" onChange={this.handleChange} />
                </InputGroup>

                <Link to={`/result-search/${realmInput}/${inputValue}`}>
                    <Button className="ButtonSearch" onClick={this.handleClick}>
                        Search
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchBar;
