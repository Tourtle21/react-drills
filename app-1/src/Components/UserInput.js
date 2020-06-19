import React, {Component} from 'react';

class UserInput extends Component {

    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }

    handleInput(val) {
        this.setState({
            userInput: val
        })
    }

    render () {
        return (
            <div>
                <input placeholder='Type Here' onChange={(e) => this.handleInput(e.target.value)} />
                <h1>{this.state.userInput}</h1>
            </div>
        )
    }
}

export default UserInput;