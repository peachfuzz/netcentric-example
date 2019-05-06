import React from "react";
// var friends = require("./friends.json");

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      data: require("./friends.json")
    };
  }
  render() {
    return this.state.data.friends.map(friend => {
      return (
        <tr>
          <td>{friend.firstName}</td>
          <td>{friend.lastName}</td>
          <td>{friend.phone}</td>
        </tr>
      );
    });
  }
}

export default Friends;
