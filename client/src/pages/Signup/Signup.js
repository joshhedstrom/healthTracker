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
      message: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.password === this.state.passwordConfirmation) {
      let userDetails = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        weight: this.state.weight,
        password: this.state.password
      };

      axios
        .post('/auth/register', userDetails)
        .then(result => {
          this.setState({ message: 'Welcome to your new account!' });
          this.props.history.push('/login');
        });
    } else {
      this.setState({ message: 'Oops...your passwords did not match.' });
      console.log('passwords did not match');
    }
  };

  render() {
    return (
      <div>
        <SignupComponent
          firstNameAction={this.onChange.bind()}
          lastNameAction={this.onChange.bind()}
          usernameAction={this.onChange.bind()}
          weightAction={this.onChange.bind()}
          passwordAction={this.onChange.bind()}
          passwordConfirmAction={this.onChange.bind()}
          submitAction={this.onSubmit.bind()}
        />
      </div>
    );
  }
}

export default Signup;
