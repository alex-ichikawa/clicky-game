import React from "react";
import "./Header.css";

const Header = (props) => 
    <nav className="navbar sticky-top">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <span className="navbar-brand mb-0 h1">Score: {props.children[0]} | High Score: {props.children[1]}</span>
    </nav>


export default Header;