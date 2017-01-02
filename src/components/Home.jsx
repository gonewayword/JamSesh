import React from 'react';
import GroupList from './GroupList.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.firebaseApp.auth().currentUser)
    this.state = {
      messages: [],
    };
    const that = this;
    setTimeout(() => { console.warn('settimeout'); that.forceUpdate(); }, 1000);
  }


  render() {
    return (
      <div className="container">
        <h2>JamSesh</h2>
        <div className="col-md-8">
          {this.props.firebaseApp.auth().currentUser ?
            <GroupList /> :
            <strong>Please Sign In To View Groups</strong>}
        </div>
        <div className="col-md-4 bg-info">
          Message
        </div>
      </div>
    );
  }
}

export default Home;
