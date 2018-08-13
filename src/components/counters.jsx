import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 4},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
    }
    render() { 
        return (
        <div className="m-2 p-2">
            {this.state.counters.map(counter => (
            <Counter key={counter.id} onDelete={this.handleDelete} counter={counter}>
                <h6>Counter #{counter.id}</h6>
            </Counter>
            ))}
        </div>
        );
    }

    handleDelete = counterId => { //Don't gonna delete else filter
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    }
}
 
export default Counters;