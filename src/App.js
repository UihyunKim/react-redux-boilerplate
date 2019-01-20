import React, { Component } from "react";

import Posts from "./components/Posts";
import Postform from "./components/Postform";
import ToDoList from "./components/ToDoList";
import Auth from "./components/auth";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Postform />
        <hr />
        <Posts /> */}
        {/* <ToDoList /> */}
        <Auth />
      </div>
    );
  }
}

export default App;
