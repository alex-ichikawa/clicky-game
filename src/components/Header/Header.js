import React, { Component } from "react";
import "./Header.css";

// class Header extends Component {

//     render(props) {
//         return (
//             <nav className="navbar sticky-top navbar-light bg-light">
//                 <span className="navbar-brand mb-0 h1">Clicky Game</span>
//                 <span className="navbar-brand mb-0 h1">Score: {props.state.count}</span>
//             </nav>
//         );
//     }
// }
const Header = (props) => 
    <nav className="navbar sticky-top navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span className="navbar-brand mb-0 h1">Score: {props.children[0]} | High Score: {props.children[1]}</span>
    </nav>


export default Header;