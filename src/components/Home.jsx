import React from 'react';
import Navbar from './Navbar.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <h2>MAIN</h2>
        <div className="col-md-8">
          this is where all our groups will be listed. eventually.
          <table className="table table-striped">
            <thead>
              <tr>
                <td className="col-md-1">Inst.</td>
                <td className="col-md-11">Details</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>Test</td>
                <td>Test</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          this is where our filters will be. eventually.
        </div>
      </div>
    );
  }
}

export default Home;
