import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { authWatch, userLogout } from "../actions/authActions";
import { dbUsersWatch } from "../actions/dbActions";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dbUsersWatch();
  }

  render() {
    const { user, isHelper, userLogout } = this.props;
    return (
      <div className="row">
        {user && isHelper && (
          <div className="col text-right">
            <span className="ml-auto">
              <Link to="/">홈</Link>
            </span>
            <span className="ml-3">
              <Link to="/feedback">피드백</Link>
            </span>
            <span className="ml-3">
              <a onClick={userLogout}>로그아웃</a>
            </span>
          </div>
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
  { authWatch, userLogout, dbUsersWatch }
)(Nav);
