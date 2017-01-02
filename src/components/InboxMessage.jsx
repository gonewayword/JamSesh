import React from 'react';

class InboxMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDeleteClick() {
    //
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.fromUser}</td>
        <td>{this.props.item.message}</td>
        <td><img src="https://www.comparethehighstreet.com/skins/default/styleImages/remove-location.png" /></td>
      </tr>
    );
  }
}

export default InboxMessage;
