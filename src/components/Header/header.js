import React from 'react';
import './header.css'

const Header = props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary fixed top">   
    <div className="gameScore">
        {/* <h4 className="userScore navbar-brand"></h4> */}
        <h4 className="userStatus nav-link-right">Your Score: <span>{props.total}</span> | Top Score: {props.topScore}</h4>
    </div>
    </nav>
);



export default Header;