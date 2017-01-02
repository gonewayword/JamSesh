import React from 'react';
import GroupList from './GroupList.jsx';
import Search from './Search.jsx';
import Messenger from './Messenger.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      groups: [],
      sendTo: null,
    };

    this.runSearch = this.runSearch.bind(this);
    this.setSendTo = this.setSendTo.bind(this);
    const that = this;
    setTimeout(() => { console.warn('settimeout'); that.forceUpdate(); }, 3000);
  }


  setSendTo(sendTo) {
    this.setState({ sendTo: sendTo });
  }
  runSearch(queryObj) {
    this.setState({ query: queryObj });
  }

  render() {
    return (
      <div className="container">
        <h2>JamSesh</h2>
        <div className="col-md-8">
          {this.props.firebaseApp.auth().currentUser ?
            '' :
            <strong>Please log in to contact groups</strong>}
          <GroupList query={this.state.query} sendTo={this.setSendTo} />
        </div>
        <div className="col-md-4 bg-info">
          Filter by:
          <Search runSearch={this.runSearch} />
        </div>
        <div>
          <h3>Message</h3>
          <Messenger firebaseApp={this.props.firebaseApp} sendTo={this.state.sendTo} />
        </div>
      </div>
    );
  }
}

export default Home;
