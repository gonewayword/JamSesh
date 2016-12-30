import React from 'react';
import Navbar from './Navbar.jsx'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <h2>MAIN</h2>
        <div> this is where all our groups will be listed. eventually.</div>
      </div>
    );
  }
}

export default Home;
