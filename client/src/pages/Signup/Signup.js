import React, { Component } from 'react';
import SignupComponent from '../../components/SignupComponent';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    weight: '',
    password: '',
    passwordConfirmation: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Form Submitted')
  }

  render() {
    return (
      <div>
        <SignupComponent
          firstNameAction={this.handleInputChange.bind()}
          lastNameAction={this.handleInputChange.bind()}
          usernameAction={this.handleInputChange.bind()}
          weightAction={this.handleInputChange.bind()}
          passwordAction={this.handleInputChange.bind()}
          passwordConfirmAction={this.handleInputChange.bind()}
          submitAction={this.handleSubmit.bind()}
        />
      </div>
    )
  }
}

export default Signup;
