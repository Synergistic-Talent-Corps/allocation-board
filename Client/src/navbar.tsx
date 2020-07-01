import * as React from 'react';

// component function
function Navbar() {
    return (
        <div id="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="client.html">Clients</a></li>
                <li><a href="consultant.html">Consultants</a></li>
            </ul>
        </div>
    )
}

Navbar.displayName = "Navbar";

export {
    Navbar
}