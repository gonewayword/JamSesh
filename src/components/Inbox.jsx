import React from 'react';
import InboxMessage from './InboxMessage.jsx';
import firebase from 'firebase';

class Inbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h2>Inbox</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <td className="col-md-2">
                Message From:
              </td>
              <td className="col-md-10">
                Message:
              </td>
            </tr>
          </thead>
          <tbody>
            <InboxMessage />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inbox;
