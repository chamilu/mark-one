import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    // TODO: come up with better form validation.
    // TODO: come up with better form styling pattern.

    state = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmPassword: '',
        isFormError: false
    };

    handleSignupClick = () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ isFormError: true });
        } else {
            this.setState({ isFormError: false });
            // TODO: call backend api to save user data.
            axios
                .post('/api/user', {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    password: this.state.password
                })
                .then(result => {
                    if (result.status === 200) {
                        this.props.history.push('/login');
                    }
                });
        }
    };

    render() {
        return (
            <div className="form">
                <h3>This is Signup component.</h3>
                {this.state.isFormError && (
                    <p style={{ color: 'red' }}>This form validation failed.</p>
                )}
                First name:
                <input
                    type="text"
                    value={this.state.firstname}
                    onChange={e => this.setState({ firstname: e.target.value })}
                />
                Last name:
                <input
                    type="text"
                    value={this.state.lastname}
                    onChange={e => this.setState({ lastname: e.target.value })}
                />
                Username:
                <input
                    type="text"
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}
                />
                Password:
                <input
                    type="password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                />
                Confirm password:
                <input
                    type="password"
                    value={this.state.confirmPassword}
                    onChange={e =>
                        this.setState({ confirmPassword: e.target.value })
                    }
                />
                <button onClick={this.handleSignupClick}>Signup</button>
            </div>
        );
    }
}

export default withRouter(Signup);
