import React from 'react';
import firebase from 'firebase';
import GroupListItem from './GroupListItem.jsx';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
    const temp = [];
    firebase.database().ref('/groups/')
    .on('value', snapshot => {
      const snap = snapshot.val();
      for (const prop in snap) {
        temp.push(snap[prop]);
      }
      temp.forEach(el => {
        for (const prop in el) {
          this.state.groups.push(el[prop]);
        }
      });
    });
    const that = this;
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <td className="col-md-2">Name</td>
            <td className="col-md-1">Genre</td>
            <td className="col-md-4">Details</td>
            <td className="col-md-1"></td>
          </tr>
        </thead>
        {this.state.groups.map((el) =>
          <tbody>
            <GroupListItem item={el} />
          </tbody>
          )}
      </table>
    );
  }
}

export default GroupList;
