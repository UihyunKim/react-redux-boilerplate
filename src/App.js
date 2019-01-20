import React, { Component } from "react";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

class App extends Component {
  render() {
    return (
      <div>
        <Postform />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
