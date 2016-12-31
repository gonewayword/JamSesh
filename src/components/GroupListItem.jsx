import React from 'react';
import { browserHistory } from 'react-router';

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // browserHistory.push('group-details');
  }
  render() {
    return (
      <tr onClick={this.handleClick}>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.genre}</td>
      </tr>
    );
  }
}

export default GroupListItem;
