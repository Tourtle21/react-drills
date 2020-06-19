import React, {Component} from 'react';


class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ''
        }
    }

    handleInput(val) {
        this.setState({
            userInput: val
        })
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleInput(e.target.value)} />
                <button onClick={() => this.props.change(this.state.userInput)}>Add</button>
            </div>
        )
    }
}

export default NewTask;