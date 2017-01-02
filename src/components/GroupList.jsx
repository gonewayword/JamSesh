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
    if (!this.props.query) {
      return this.state.groups;
    } else {
      let filteredGroups = this.state.groups;
      if (this.props.query.name) {
        filteredGroups = filteredGroups.filter(item =>
          item.name.toLowerCase().indexOf(this.props.query.name.toLowerCase()) > -1);
      }
      if (this.props.query.loc) {
        filteredGroups = filteredGroups.filter(item =>
          item.loc.toLowerCase().indexOf(this.props.query.loc.toLowerCase()) > -1);
      }
      if (this.props.query.genre) {
        filteredGroups = filteredGroups.filter(item =>
          item.genre.toLowerCase().indexOf(this.props.query.genre.toLowerCase()) > -1);
      }
      return filteredGroups;
    }
  }

  render() {
    const groups = this.filterGroups();
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
        {groups.length ?
          groups.map(el => <GroupListItem key={el.name} item={el} />) :
          <span>No groups to display! <br />Try widening your search.</span>}
        </tbody>
      </table>
    );
  }
}

export default GroupList;
