console.log('app.jsx loaded');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        <h3>New here?</h3>
        <div><a href="signup.html">Sign up!</a></div>
        <h3>Have an account?</h3>
        <div><a href="signin.html">Sign in!</a></div>
      </div>
    );
  }
}
