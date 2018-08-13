import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <h2>Products: <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></h2>
            </nav>
        );
    }
}
 
export default NavBar;