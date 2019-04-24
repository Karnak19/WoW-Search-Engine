import React from "react";

function InputCharacter({ onChange }) {
    return <input onChange={event => onChange(event.target.value)} placeholder="Your search" />;
}

export default InputCharacter;
