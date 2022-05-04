import React, { Component } from 'react';

class PersonCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;

        const bumpAge = () => {
            this.setState({age: this.state.age+1})
        }

        return <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={bumpAge}>Increase Age of {firstName}</button>
            <hr />
            </div>;
    }
}

export default PersonCard;