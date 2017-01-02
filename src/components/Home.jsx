import React from 'react';
import GroupList from './GroupList.jsx';
import Search from './Search.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      groups: [],
    };

    this.runSearch = this.runSearch.bind(this);
    const that = this;
    setTimeout(() => { console.warn('settimeout'); that.forceUpdate(); }, 1000);
  }

  runSearch(queryObj) {
    this.setState({ query: queryObj });
  }


  render() {
    console.log('rendering')
    return (
      <div className="container">
        <h2>JamSesh</h2>
        <div className="col-md-8">
          {this.props.firebaseApp.auth().currentUser ?
            '' :
            <strong>Please log in to contact groups</strong>}
          <GroupList query={this.state.query}/>
        </div>
        <div className="col-md-4 bg-info">
          Filter by:
          <Search runSearch={this.runSearch}/>
        </div>
      </div>
    );
  }
}

export default Home;
