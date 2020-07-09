import * as React from 'react';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

// component function
function Navbar() {

    let myStyleLink: CSSProperties = { color: '#fff', paddingRight: '15px' };

    return (
        <div id="navbar">
            <ul>
                <Link style={myStyleLink} to="/"><li>Home</li></Link>
                <Link style={myStyleLink} to="/client"><li>Clients</li></Link>
                <Link style={myStyleLink} to="/consultant"><li>Consultants</li></Link>
            </ul>
        </div>
    )
}

Navbar.displayName = "Navbar";

export {
    Navbar
}