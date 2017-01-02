import React from 'react';
import Validation from 'react-validation';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.runSearch('test string')
  }

  render() {
    return (
      <Validation.components.Form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <Validation.components.Input
            className="form-control"
            value=""
            placeholder="Name"
            name="name"
            validations={[]}
          />
        </div>
      </Validation.components.Form>
    );
  }
}

export default Search;
