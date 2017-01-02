import React from 'react';
import Validation from 'react-validation';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const queryObject = {
      name: event.target.name.value,
      loc: event.target.loc.value,
      genre: event.target.genre.value,
    };
    this.props.runSearch(queryObject);
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
        <div className="form-group">
          <Validation.components.Input
            className="form-control"
            value=""
            placeholder="Location"
            name="loc"
            validations={[]}
          />
        </div>
        <div className="form-group">
          <Validation.components.Input
            className="form-control"
            value=""
            placeholder="Genre"
            name="genre"
            validations={[]}
          />
        </div>
        <div className="form-group">
          <Validation.components.Button className="btn btn-default col-md-2">
          Search</Validation.components.Button>
        </div>
      </Validation.components.Form>
    );
  }
}

export default Search;
