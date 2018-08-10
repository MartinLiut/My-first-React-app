import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
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
                <button onClick={this.handleIncrement} className="btn btn-default btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag  }>{tag}</li>)}
                </ul>
            </div>
        );
    }
    
    handleIncrement() {
        console.log('Increment clicked');
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