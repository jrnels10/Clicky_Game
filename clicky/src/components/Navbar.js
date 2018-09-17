import React from 'react';
import './Navbar.css';

const Navbar = props => (<div className='dog-house h-100'>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">Navbar
   <div className="score-board float-right">{/*{props.children} */}
            <div className="high-score float-right m-2">High score: {props.highscore}</div>
            <div className="current-score float-right m-2">Current score: {props.currentscore}</div>
        </div>
    </nav>
    <div className='wrapper container-fluid'>
        <div className='row'>
            {props.children}
        </div>
    </div>
</div>

);

export default Navbar;