import React, { Component } from 'react';

//Stateless functional component:
//We dont' use a Component class. Else we use a simple variable to return the view, because this component
//doesn't have any state nor event.
//One difference with the other components is that props have to be included as a parameter in the arrow function.
const NavBar = ({totalCounters}) => { //ES6
    return ( 
        <nav className="navbar navbar-light bg-light">
            <h2>Products: <span className="badge badge-pill badge-secondary">{totalCounters}</span></h2>
        </nav>
    );
}

/*class NavBar extends Component {
    render() { 
        
    }
}*/
 
export default NavBar;