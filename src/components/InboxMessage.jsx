import React from 'react';

class InboxMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>
          FromUser
        </td>
        <td>
          Blah blah blah
        </td>
      </tr>
    );
  }
}

export default InboxMessage;
