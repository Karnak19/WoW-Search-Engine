import React, { Component } from "react";
import { InputGroup, Button, FormControl, Dropdown, DropdownButton } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import styles from "./search.module.css";
// import errorPopover from "./errorPopover";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            searchValue: "",
            realmInput: "",
            realmSearch: "",
            region: ""
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
            realmInput: event.target.value.toLowerCase()
        });
    }

    handleChange2(event) {
        this.setState({
            inputValue: event.target.value.toLowerCase()
        });
    }

    render() {
        const { realmInput, inputValue, region } = this.state;

        // if (inputValue === "") {
        //     return <Redirect to="/" />;
        // }

        // if ({ regionEU }) {
        return (
            <div className={styles.searchPosition}>
                <InputGroup className={styles.searchEngine}>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={region != "" ? region.toUpperCase() : "Region"}
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item
                            onSelect={event => {
                                this.setState({ region: "us" });
                            }}
                        >
                            US
                        </Dropdown.Item>
                        <Dropdown.Item
                            onSelect={event => {
                                this.setState({ region: "eu" });
                            }}
                        >
                            EU
                        </Dropdown.Item>
                    </DropdownButton>
                    <FormControl className={styles.searchBarForm} placeholder="What realm?" onChange={this.handleChange1} />
                    <FormControl className={styles.searchBarForm} placeholder="Your Search" onChange={this.handleChange2} />
                </InputGroup>

                <Link to={`/result-search/${realmInput}/${inputValue}/${region}`}>
                    <Button className={styles.buttonSearch} onClick={this.handleClick}>
                        Search
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchBar;
