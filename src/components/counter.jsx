import React, { Component } from 'react';

class Counter extends Component {
    stylesSpan = {
        fontWeight: 'bold',
        fontSize: 12,
        padding: "10px 5px"
    }

    //function call when the component is created
    constructor(props) {
        super(props);
        this.handleIncrement = this.props.onIncrement.bind(this);//binding the reference of the current Counter object. 
        //This method returns a new function
    }; 

    render() { 
        let spanClasses = this.getBadgeClasses();

        return (
            <div>
                {this.props.children}
                <span style={this.stylesSpan} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-default btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">X</button>
            </div>
        );
    }

    getBadgeClasses() {
        let spanClasses = "badge m-2 badge-";
        spanClasses += this.props.counter.value === 0 ? 'warning' : 'primary';
        return spanClasses;
    }

    formatCount() {
        const {value} = this.props.counter ; 
        return value === 0 ? 'Zero' : value; 
    }
}
 
export default Counter;