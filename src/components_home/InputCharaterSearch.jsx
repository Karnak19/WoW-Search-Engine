import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function InputCharacter({ onChange }) {
    return (
        <div>
            <input onChange={event => onChange(event.target.value)} placeholder="Your search" />
            {/* <Link to={`/resultat-search`}> */}
            <Button className="ButtonSearch">Search</Button>
            {/* </Link> */}
        </div>
    );
}

/* <Link to={`/resultat-search/${filter}`}> */

export default InputCharacter;
