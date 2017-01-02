import React from 'react';
import GroupListItem from './GroupListItem.jsx';
import firebase from 'firebase';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };

    this.filterGroups = this.filterGroups.bind(this);

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
  }

  filterGroups() {
    console.log('filtering');
    if (!this.props.query) {
      console.log('no query');
      return this.state.groups;
    } else {
      console.log('query found');
      let filtering = this.state.groups;
      if (this.props.query.name) {
        filtering = filtering.filter(item =>
          item.name.toLowerCase().indexOf(this.props.query.name.toLowerCase()) > -1);
      }
      if (this.props.query.loc) {
        filtering = filtering.filter(item =>
          item.loc.toLowerCase().indexOf(this.props.query.loc.toLowerCase()) > -1);
      }
      return filtering;
    }
  }

  render() {
    console.log('rendering list');
    const groups = this.filterGroups();
    console.log('groups', groups);
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
        <tbody>
        {groups.map(el => <GroupListItem key={el.name} item={el} />)}
        </tbody>
      </table>
    );
  }
}

export default GroupList;
