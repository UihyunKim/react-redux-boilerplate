import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { authWatch, userLogout } from "./actions/authActions";

import Home from "./components/Home";
import Feedback from "./components/Feedback";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", pw: "" };
  }

  componentDidMount() {
    this.props.authWatch();
  }

  render() {
    const login = this.props.uid ? true : false;
    return (
      <div>
        {login ? (
          <Router>
            <div className="nav">
              <div>
                <Link to="/">홈</Link>
                <Link to="/feedback">피드백</Link>

                <a onClick={this.props.userLogout}>로그아웃</a>
              </div>

              <Route exact path="/" component={Home} />
              <Route path="/feedback" component={Feedback} />
            </div>
          </Router>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(
  mapStateToProps,
  { authWatch, userLogout }
)(App);
