import React from "react";
import "./App.css";
import Friends from "./Components/Friends/Friends";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: require("./Components/Friends/friends.json").friends
    };
  }

  render() {
    return (
      <div className="container justify-content-center text-center">
        <h1>An Example in React</h1>
        <table className="table table-bordered table-hover">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
          </tr>
          <Friends friends={this.state.friends} />
        </table>
        <small>
          <code>
            Learn more about react{" "}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </code>
        </small>
      </div>
    );
  }
}

export default App;
