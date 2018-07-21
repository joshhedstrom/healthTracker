import React, { Component } from 'react';
import axios from 'axios';
import LoginComponent from '../../components/LoginComponent';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      open: false
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = e => {
    e.preventDefault();

    let userDetails = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post('/auth/login', userDetails)
      .then(result => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('userId', result.data.userId);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          this.handleClickOpen();
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
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Login;
