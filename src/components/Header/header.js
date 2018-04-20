import React from 'react';
import './header.css'

const Header = props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary fixed top">   
    <div className="gameScore">
        <h4 className="userStatus nav-link-right">Your Score: <span>{props.score}</span> | Top Score: {props.topScore} | <span> {props.status}</span></h4>
    </div>
    </nav>
);



export default Header;