import React from 'react';
import { browserHistory } from 'react-router';

class Redirect extends React.Component {
  constructor() {
    super();
  }

  render() {
    setTimeout(() => browserHistory.push('inbox'), 2000);
    return (
      <div className="container col-md-8">
        <strong>Message deleted!</strong>
      </div>
    );
  }
}

export default Redirect;
