import React, { Component } from "react";
// import { Link } from "react-router-dom";

function InputCharacter({ onChange }) {
    return (
        <div>
            {/* <Link to={`/resultat-search`}> */}
            <input placeholder="Your search" />

            {/* </Link> */}
        </div>
    );
}

/* <Link to={`/resultat-search/${filter}`}> */

export default InputCharacter;

// class InputCharacter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ""
//         };
//     }
//     searchName(event) {
//         this.setState({
//             name: event.target.value
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <input onChange={event => onChange(event.target.value)} />
//                 <Button className="ButtonSearch" onClick={}>
//                     Search
//                 </Button>
//             </div>
//         );
//     }
// }

// export default InputCharacter;
