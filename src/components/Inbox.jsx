import React from 'react';
import InboxMessage from './InboxMessage.jsx';
import firebase from 'firebase';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    const user = firebase.auth().currentUser.displayName;
    console.log(user, 'test')
    firebase.database().ref(`/messages/${user}`)
    .on('value', snapshot => {
      const snap = snapshot.val();
      for(const key in snapshot.val()) {
        console.log(key, 'key');
        snap[key].exists = key;
        this.state.messages.push(snap[key])
      }
      // const snap = snapshot.val();
      // console.log(snap, "snap");
      // for (const prop in snap) {
      //   this.state.messages.push([snap[prop], prop]);
      // }
      this.setState({ fetchedMessages: true });
    });
  }
  render() {
    const messages = this.state.messages;
    return (
      <div className="container">
        <h2>Inbox</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td className="col-md-2">Message From:</td>
              <td className="col-md-8">Message:</td>
              <td className="col-md-10">Delete</td>
            </tr>
          </thead>
          <tbody>
              {messages.map(el => <InboxMessage item={el} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inbox;
