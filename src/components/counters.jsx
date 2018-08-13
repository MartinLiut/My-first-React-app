import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { onReset, counters, onDelete, onIncrement} = this.props;

        return (
        <div className="m-2 p-2">
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>      
            {counters.map(counter => (
            <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter}>
                <h6>Counter #{counter.id}</h6>
            </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;