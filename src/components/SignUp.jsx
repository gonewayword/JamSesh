import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import Validation from 'react-validation';
import validator from 'validator';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router';

Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>,
  },
  email: {
    rule: value => validator.isEmail(value),
    hint: value => <span className="form-error is-visible">{value} isnt an Email.</span>,
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseApp: firebase.initializeApp(firebaseConfig),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    //TODO: update with proper firebase path and auth
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
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
              placeholder="Email"
              name="email"
              validations={['required', 'email']}
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
          Already a member? <Link to="sign-in">Sign in!</Link>
        </div>

      </div>
    );
  }
}

export default SignUp;
