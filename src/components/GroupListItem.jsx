import React from 'react';
import PrivateChat from './PrivateChat.jsx'
// import { browserHistory } from 'react-router';

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
    this.state = {
      showDetails: false,
    };
    this.details = (<span><p><strong>Location:</strong> {props.item.loc}</p>
      <p><strong>Availability:</strong> {props.item.avail}</p>
      <p><strong>Details:</strong> {props.item.details}</p></span>);
  }
  handleDetailsClick() {
    return this.state.showDetails ?
    this.setState({ showDetails: false }) :
    this.setState({ showDetails: true });
  }

  handleMessageClick() {
    this.props.sendTo(this.props.item.owner);
  }

  joinRoom() {
    return this.state.showChat ?
    this.setState({ showChat: false }) :
    this.setState({ showChat: true });

  }

  render() {

    let left = this.props.item.id * 20;

    const chatTitle = {
      backgroundColor: 'Gainsboro',
      borderRadius: 10,
      margin: 15,
      width: '100%',
      fontSize: 'large',
      margin: 'auto',
    }

    const popChat = {
      position: 'fixed',
      bottom: '0%',
      zIndex: 5,
      marginLeft: `${left}%`,
      width: 200,
    }

    return (
      <tr>
        <td>{this.props.item.instrument}</td>
        <td>{this.props.item.genre}</td>
        <td onClick={this.handleDetailsClick}>
          <div><strong>{this.props.item.name}</strong></div>
          {this.state.showDetails ? this.details : 'Click for More Details'}
        </td>
        <td>
          {this.props.item.owner}
          <br />
          <img onClick={this.handleMessageClick} alt="Message" src="http://www.rcuniverse.com/images/email-icon.jpg" />
          <div onClick={this.joinRoom}>Join This Group's Chat</div>
          <div style={popChat}>
            { this.state.showChat ? <div><div style={chatTitle}><strong>{this.props.item.name}'s Group Chat!</strong><br /></div> <PrivateChat id={this.props.item.id}/></div> : ''}
          </div>
        </td>
      </tr>
    );
  }
}

export default GroupListItem;
