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
      passwordConfirmation: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    let userDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      weight: this.state.weight,
      password: this.state.password,
      message: this.state.message
    };

    axios
      .post('http://localhost:3001/auth/register', userDetails)
      .then(result => {
        console.log(result);
        // this.props.history.push('/login');
      });
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
