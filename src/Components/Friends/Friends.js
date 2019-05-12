import React from "react";

class Friends extends React.Component {
    render() {
        // map is basically "for item in items" map the items in the bracket
        // props cannot be changed
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
