import React from "react";
import Friends from "./Friends";

class FriendsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: require("./friends.json").friends // getting the friends from the json in a relative path
        };
    }

    render() {
        return (
            <table className="table table-bordered table-hover">
                {/* created the top of the head */}
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <Friends friends={this.state.friends} />
                </tbody>
            </table>
        );
    }
}

export default FriendsTable;
