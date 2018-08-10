import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    stylesSpan = {
        fontWeight: 'bold',
        fontSize: 12,
        padding: "10px 5px"
    }

    render() { 
        let spanClasses = this.getBadgeClasses();

        return (
            <div>
                <span style={this.stylesSpan} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-default btn-sm">Increment</button>
            </div>
        );
    }
     
    getBadgeClasses() {
        let spanClasses = "badge m-2 badge-";
        spanClasses += this.state.count === 0 ? 'warning' : 'primary';
        return spanClasses;
    }

    formatCount() {
        const {count} = this.state ; 
        return count === 0 ? 'Zero' : count; 
    }
}
 
export default Counter;