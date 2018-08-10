import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    render() { 
        return (
            <div>
                { this.state.tags.length === 0 && 'No tags' }
            </div>
        );
    }
}
 
export default Counter;