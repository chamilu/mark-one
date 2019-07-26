import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    handleClick = () => {
        axios.post('/api/authenticate', this.state);
    };

    handleSignupClick = () => {
        this.props.history.push('/signup');
    };

    render() {
        return (
            <div className="form">
                <h3>Login Page</h3>
                username:
                <input
                    type="text"
                    onChange={e => this.setState({ username: e.target.value })}
                    value={this.state.username}
                />
                <br />
                password:
                <input
                    type="password"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={this.state.password}
                />
                <br />
                <button onClick={this.handleClick}>Login</button>
                <button onClick={this.handleSignupClick}>Signup</button>
            </div>
        );
    }
}

export default withRouter(Login);
