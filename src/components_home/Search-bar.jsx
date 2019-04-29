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
            realmInput: "",
            realmSearch: "",
            regionEU: "eu",
            regionUS: "us"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleClick() {
        this.setState({
            realmSearch: this.state.realmInput,
            searchValue: this.state.inputValue,
            region: this.state.region
        });
    }

    handleChange1(event) {
        this.setState({
            realmInput: event.target.value
        });
    }

    handleChange2(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        const { realmInput, inputValue, regionEU, regionUS } = this.state;

        // if (inputValue === "") {
        //     return <Redirect to="/" />;
        // }
        return (
            <div className="SearchPosition">
                <InputGroup className="SearchEngine">
                    <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Region" id="input-group-dropdown-1">
                        <Dropdown.Item href={`${regionEU}`}>EU</Dropdown.Item>
                        <Dropdown.Item href={`${regionUS}`}>US</Dropdown.Item>
                    </DropdownButton>
                    <FormControl className="SearchBarForm" placeholder="What realm?" onChange={this.handleChange1} />
                    <FormControl className="SearchBarForm" placeholder="Your Search" onChange={this.handleChange2} />
                </InputGroup>

                <Link to={`/result-search/${realmInput}/${inputValue}/${regionEU || regionUS}`}>
                    <Button className="ButtonSearch" onClick={this.handleClick}>
                        Search
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchBar;
