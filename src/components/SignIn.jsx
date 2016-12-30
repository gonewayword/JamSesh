import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import Validation from 'react-validation';
import { Link } from 'react-router';
import Navbar from './Navbar.jsx';
// import { browserHistory } from 'react-router';

Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>,
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseApp: firebase.initializeApp(firebaseConfig),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    // this.state.firebaseApp.database().ref(???);
    // TODO: update with proper firebase path and auth
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <h3>Sign In</h3>
        <Validation.components.Form onSubmit={this.handleSubmit}>
          <div>
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Username"
              name="username"
              validations={['required']}
            />
          </div>
          <div>
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Password"
              name="password"
              validations={['required']}
            />
          </div>
          <div>
            <Validation.components.Button className="btn btn-default btn-block">
            Sign Up</Validation.components.Button>
          </div>
        </Validation.components.Form>
        <div>
          Need an account? <Link to="sign-up">Sign up!</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
