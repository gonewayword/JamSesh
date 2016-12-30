import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';
import Validation from 'react-validation';
// import validator from 'validator';
// import { browserHistory } from 'react-router';
Object.assign(Validation.rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>,
  },
});

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseApp: firebase.initializeApp(firebaseConfig),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGroup = {
      name: event.target.name.value,
      genre: event.target.genre.value,
      loc: event.target.loc.value,
      avail: event.target.avail.value,
      details: event.target.details.value,
    };
    this.state.firebaseApp.database().ref(`groups/${event.target.name.value}`).push(newGroup);
  }

  render() {
    return (
      <div className="container">
        <h3>Create Group</h3>
        <Validation.components.Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Group Name"
              name="name"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Genre"
              name="genre"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Location"
              name="loc"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Availability"
              name="avail"
              validations={['required']}
            />
          </div>
          <div className="form-group">
            <Validation.components.Textarea
              className="form-control"
              value=""
              placeholder="Details"
              name="details"
              validations={['required']}
            />
          </div>
          <div>
            <Validation.components.Button className="btn btn-default btn-block">
            Submit</Validation.components.Button>
          </div>
        </Validation.components.Form>
      </div>
    );
  }
}

export default CreateGroup;
