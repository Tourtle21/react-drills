import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: [],
        }
    }

    handleInput(val, i) {
        let newList = this.state.inputs.slice();
        newList[i] = val;
        this.setState({
            inputs: newList
        })
    }

    logIn = () => {
        alert(`Username: ${this.state.inputs[0]} Password: ${this.state.inputs[1]}`)
    }

    render() {
        return (
            <div>
                <input placeholder='Username:' onChange={(e) => this.handleInput(e.target.value, 0)} />
                <input placeholder='Password:' type='password' onChange={(e) => this.handleInput(e.target.value, 1)}/>
                <button onClick={this.logIn}>Login</button>
            </div>
        )
    }
}

export default Login;