class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    };
  }

  render () {
    return (
      <div>
        <h3>Sign Up</h3>

        <form>
          <input type="text" value={this.state}></input>
        </form>
      </div>
    );
  }
}
