import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        return (
        <div className="m-2 p-2">
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>      
            {this.props.counters.map(counter => (
            <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
                <h6>Counter #{counter.id}</h6>
            </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;