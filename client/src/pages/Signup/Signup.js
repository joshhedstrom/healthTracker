import React, { Component } from 'react';
import axios from 'axios';
import SignupComponent from '../../components/SignupComponent';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      weight: '',
      password: '',
      passwordConfirmation: '',
      message: '',
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.password === this.state.passwordConfirmation) {
      let userDetails = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        weight: this.state.weight,
        password: this.state.password
      };

      axios.post('/auth/register', userDetails).then(result => {
        this.props.history.push('/login');
      });
    } else {
      this.handleClickOpen();
    }
  };

  render() {
    return (
      <div>
        <SignupComponent
          handleChange={this.handleChange.bind()}
          handleSubmit={this.handleSubmit}
          open={this.state.handleClickOpen}
        />
      </div>
    );
  }
}

export default Signup;
