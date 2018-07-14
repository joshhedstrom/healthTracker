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
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    let userDetails = {
      username: this.state.username,
      password: this.state.password,
      message: this.state.message
    };

    axios
      .post('/auth/login', userDetails)
      .then(result => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('userId', result.data.userId);
        this.setState({ message: '' });
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          this.setState({
            message: 'Login failed. Username or password not match'
          });
        }
      });
  };
  render() {
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
