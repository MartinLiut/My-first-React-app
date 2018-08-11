import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    stylesSpan = {
        fontWeight: 'bold',
        fontSize: 12,
        padding: "10px 5px"
    }

    //function call when the component is created
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);//binding the reference of the current Counter object. 
        //This method returns a new function
    }; 

    render() { 
        console.log('props', this.props);
        let spanClasses = this.getBadgeClasses();

        return (
            <div>
                {this.props.children}
                <span style={this.stylesSpan} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-default btn-sm">Increment</button>
            </div>
        );
    }
    
    handleIncrement() {
        this.setState({value: this.state.value + 1});
    }

    getBadgeClasses() {
        let spanClasses = "badge m-2 badge-";
        spanClasses += this.state.value === 0 ? 'warning' : 'primary';
        return spanClasses;
    }

    formatCount() {
        const {value} = this.state ; 
        return value === 0 ? 'Zero' : value; 
    }
}
 
export default Counter;