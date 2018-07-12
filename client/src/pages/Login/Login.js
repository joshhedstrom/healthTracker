import React, { Component } from 'react';
import axios from 'axios';
import LoginComponent from '../../components/LoginComponent';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    console.log(this.state, " is this.state" )

    axios
      .post('http://localhost:3001/auth/login', { username, password })
      .then(result => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 401) {
          this.setState({
            message: 'Login failed. Username or password not match'
          });
        }
      });
  };
  render() {
    const { username, password, message } = this.state;
    return (
      <div>
        <LoginComponent
          usernameAction={this.onChange.bind()}
          passwordAction={this.onChange.bind()}
          submitAction={this.onSubmit.bind()}
        />
      </div>
    );
  }
}

export default Login;
