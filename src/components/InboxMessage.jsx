import React from 'react';
import firebase from 'firebase';
class InboxMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.state = {
      key: props,
    }
  }

  handleDeleteClick() {
    console.log('test');
    console.log(this.state.key);
    const user = firebase.auth().currentUser.displayName;
    firebase.database().ref(`/messages/${user}/${this.state.key.item.exists}`).remove();
  }
  render() {
    return (
      <tr>
        <td>{this.props.item.fromUser}</td>
        <td>{this.props.item.message}</td>
        <td onClick={this.handleDeleteClick}><img src="https://www.comparethehighstreet.com/skins/default/styleImages/remove-location.png" /></td>
      </tr>
    );
  }
}

export default InboxMessage;
