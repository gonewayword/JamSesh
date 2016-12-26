console.log('app.jsx loaded');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFromLocation() {
    let loc = window.location.pathname;
    if (loc === '/' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/index.html') {
      return (
        <div>
          <h2>Welcome!</h2>
          <h4>If you have an account, <a href="signin.html">sign in!</a></h4>
          <h4>If you're new here, <a href="signup.html">sign up!</a></h4>
        </div>
      );
    }
    if (loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signin.html') {
      return (
        <Signin />
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
