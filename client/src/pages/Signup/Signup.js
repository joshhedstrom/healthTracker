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
    const state = this.state;
    state[e.target.id] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { firstname, lastname, username, weight, password } = this.state;

    axios.post('/api/auth/register', { firstname, lastname, username, weight, password }).then(result => {
      console.log(result)
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
