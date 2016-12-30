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
      // name: '',
      // genre: '',
      // loc: '',
      // avail: '',
      // details: '',
      firebaseApp: firebase.initializeApp(firebaseConfig),
    };

    // this.inputName = this.inputName.bind(this);
    // this.inputGenre = this.inputGenre.bind(this);
    // this.inputLoc = this.inputLoc.bind(this);
    // this.inputAvail = this.inputAvail.bind(this);
    // this.inputDetails = this.inputDetails.bind(this);
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
    console.log(newGroup);
    this.state.firebaseApp.database().ref(`groups/${event.target.name.value}`).push(newGroup);
  }

  // inputName(event) {
  //   this.setState({ name: event.target.value });
  // }
  // inputGenre(event) {
  //   this.setState({ genre: event.target.value });
  // }
  // inputLoc(event) {
  //   this.setState({ loc: event.target.value });
  // }
  // inputAvail(event) {
  //   this.setState({ avail: event.target.value });
  // }
  // inputDetails(event) {
  //   this.setState({ details: event.target.value });
  // }


  render() {
    return (
      <div>
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
          <div>
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Location"
              name="loc"
              validations={['required']}
            />
          </div>
          <div>
            <Validation.components.Input
              className="form-control"
              value=""
              placeholder="Availability"
              name="avail"
              validations={['required']}
            />
          </div>
          <div>
            <Validation.components.Input
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

        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.inputName} placeholder="Group Name"></input><br />
          <input type="text" onChange={this.inputGenre} placeholder="Genre"></input><br />
          <input type="text" onChange={this.inputLoc} placeholder="Location"></input><br />
          <input type="text" onChange={this.inputAvail} placeholder="Availability"></input><br />
          <input type="text" onChange={this.inputDetails} placeholder="Details"></input><br />

          <button type="submit">Create Group</button>
        </form> */}


      </div>
    );
  }
}

export default CreateGroup;
