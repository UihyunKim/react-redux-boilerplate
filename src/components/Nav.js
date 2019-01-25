import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { authWatch, userLogout } from "../actions/authActions";

import Home from "./Home";
import Feedback from "./Feedback";

class Nav extends Component {
  render() {
    const { user, isHelper, userLogout } = this.props;
    return (
      <div>
        {user && isHelper && (
          <Router>
            <div className="nav">
              <div>
                <Link to="/">홈</Link>
                <Link to="/feedback">피드백</Link>
                <a onClick={userLogout}>로그아웃</a>
              </div>

              <Route exact path="/" component={Home} />
              <Route path="/feedback" component={Feedback} />
            </div>
          </Router>
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
)(Nav);
