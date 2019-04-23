import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function ButtonSearch({ filter }) {
    return (
        <Link to={`/resultat-search/${filter}`}>
            <Button className="ButtonSearch">Search</Button>
        </Link>
    );
}

export default ButtonSearch;
