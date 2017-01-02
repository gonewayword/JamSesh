import React from 'react';
import Validation from 'react-validation';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.firebaseApp.auth().currentUser);
    if (!this.props.firebaseApp.auth().currentUser) {
      return (
        <div className="container col-md-8">
          <strong>Please log in to send messages!</strong>
        </div>
      );
    } else {
      return (
        <div className="container col-md-8">
          <Validation.components.Form onSubmit={this.handleSubmit}>
            <label for="toUser" className="col-md-2">Send To:</label>
            <div className="form-group col-md-10" id="toUser">
              <Validation.components.Input
                className="form-control"
                value={this.props.sendTo || ''}
                name="toUser"
                validations={['required']}
              />
            </div>
            <label for="message" className="col-md-2">Message:</label>
            <div className="form-group col-md-10" id="message">
              <Validation.components.Textarea
                className="form-control"
                value=""
                name="message"
                validations={['required']}
              />
            </div>
            <div>
              <Validation.components.Button className="btn btn-default btn-block">
              Send
            </Validation.components.Button>
            </div>
          </Validation.components.Form>
        </div>
      );
    }
  }
}

export default Messenger;
