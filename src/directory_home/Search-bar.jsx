import React, { Component } from "react";
import { InputGroup, Button, FormControl, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            value: ""
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
            realmInput: event.target.value,
            value1: event.target.value
        });
    }

    handleChange2(event) {
        this.setState({
            inputValue: event.target.value,
            value2: event.target.value
        });
    }

    render() {
        const { realmInput, inputValue, regionEU, regionUS } = this.state;

        // if (inputValue === "") {
        //     return <Redirect to="/" />;
        // }
        return (
            <div className={styles.searchPosition}>
                <InputGroup className={styles.searchEngine}>
                    <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Region" id="input-group-dropdown-1">
                        <Dropdown.Item>{regionEU}</Dropdown.Item>
                        <Dropdown.Item>{regionUS}</Dropdown.Item>
                    </DropdownButton>
                    <FormControl className={styles.searchBarForm} placeholder="What realm?" value1={this.state.value} onChange={this.handleChange1} />
                    <FormControl className={styles.searchBarForm} placeholder="Your Search" value2={this.state.value} onChange={this.handleChange2} />
                </InputGroup>

                <Link to={`/result-search/${realmInput}/${inputValue}/${regionEU || regionUS}`}>
                    <Button className={styles.buttonSearch} disabled={!this.state.value1 || !this.state.value2} onClick={this.handleClick}>
                        Search
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchBar;
