import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function ButtonSearch() {
    return (
        // <Link to={`/resultat-search`}>
        <Button className="ButtonSearch">Search</Button>
        // </Link>
    );
}

/* <Link to={`/resultat-search/${filter}`}> */

export default ButtonSearch;
