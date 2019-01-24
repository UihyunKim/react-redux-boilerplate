import React, { Component } from "react";

import { connect } from "react-redux";
import { userLogin } from "../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pw: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, pw } = this.state;
    this.props.userLogin(email, pw);
  };

  render = () => (
    <div>
      <h1>Login page</h1>
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
    </div>
  );
}

export default connect(
  null,
  { userLogin }
)(Login);
