import React from 'react';
// import Navbar from './Navbar.jsx';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        {this.props.children}
      </div>
    );
  }
}

MainContainer.propTypes = { children: React.PropTypes.object };

export default MainContainer;
