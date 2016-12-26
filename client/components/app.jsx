console.log('app.jsx loaded');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFromLocation() {
    let loc = window.location.pathname;
    if (loc === '/' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/client/index.html') {
      return (
        <div>You're on the index!</div>
      );
    } else {
      return (
        <div>You're not on the index :( </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Nav />
        {this.renderFromLocation()}
      </div>
    );
  }
}
