import React from 'react';
import PrivateChat from './PrivateChat.jsx'
// import { browserHistory } from 'react-router';

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
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
    console.warn('handleMessageClick works', this.props.item.owner);
    this.props.sendTo(this.props.item.owner);

    return this.state.showChat ?
    this.setState({ showChat: false }) :
    this.setState({ showChat: true });

  }

  render() {
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
          <div style={popChat}>{ this.state.showChat ? <PrivateChat id={this.props.item.id}/> : ''} </div>
        </td>
      </tr>
    );
  }
}

const popChat = {
  position: 'fixed',
  bottom: '0%',
  zIndex: 5
}

export default GroupListItem;
