import React from "react";
// var friends = require("./friends.json");

class Friends extends React.Component {
    render() {
        return this.props.friends.map((friend, index) => {
            return (
                <tr key={index}>
                    <td>{friend.firstName}</td>
                    <td>{friend.lastName}</td>
                    <td>{friend.phone}</td>
                </tr>
            );
        });
    }
}

export default Friends;
