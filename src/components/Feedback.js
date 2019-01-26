import React, { Component } from "react";

import { connect } from "react-redux";
import { dbActivityLv4 } from "../actions/dbActions";
class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log("feedback render");
    /** Fetch lv4. from firebase */
    this.props.dbActivityLv4();
  }

  render() {
    return (
      <div>
        <h1>feed back page</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { dbActivityLv4 }
)(Feedback);
