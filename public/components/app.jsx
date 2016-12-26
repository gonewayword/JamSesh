console.log('app.jsx loaded');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFromLocation() {
    let loc = window.location.pathname;
    if (loc === '/' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/index.html') {
      return <Landing />;
    }
    if (loc === '/signin.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signin.html') {
      return <Signin />;
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
