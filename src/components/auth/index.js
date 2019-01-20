import React, { Component } from "react";
import produce from "immer";

import { connect } from "react-redux";
import { authWatch, userLogin, userLogout } from "../../actions/authActions";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pw: ""
    };
  }

  componentDidMount() {
    this.props.authWatch();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, pw } = this.state;
    this.props.userLogin(email, pw);
  };

  onLogout = e => {
    this.props.userLogout();
  };

  render() {
    return (
      <div>
        <div>
          <h1>current login: {this.props.login === null && "loading..."}</h1>
        </div>
        <hr />
        <div>
          <h1>Login</h1>
          <form onSubmit={this.onSubmit}>
            <label>
              이메일:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </label>
            <label>
              패스워드:
              <input
                type="password"
                name="pw"
                value={this.state.pw}
                onChange={this.onChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <hr />
        <div>
          <button onClick={this.onLogout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  console.log(auth);
  return auth;
};

export default connect(
  mapStateToProps,
  { authWatch, userLogin, userLogout }
)(Auth);
