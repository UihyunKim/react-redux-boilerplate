import React, { Component } from "react";
import { connect } from "react-redux";
import { authWatch, userLogout } from "./actions/authActions";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "wwdebate.helper@gmail.com", pw: "디베이트헬퍼" };
  }

  componentDidMount() {
    this.props.authWatch();
  }

  render() {
    const { user, isHelper, userLogout } = this.props;
    return (
      <div>
        <Header />
        <Nav />
        {user && !isHelper && (
          <div>
            <h1>관리자 권한이 없습니다.</h1>
            <a onClick={userLogout}>로그아웃</a>
          </div>
        )}
        {!user && <Login />}
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
