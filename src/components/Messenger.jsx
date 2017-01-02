import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.sendTo}
      </div>
    );
  }
}

export default Messenger;
