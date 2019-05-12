import React from "react";

// getting other component
import Friends from "./Friends";

class FriendsTable extends React.Component {
    constructor() {
        super();
        // state can be changed
        this.state = {
            friends: require("./friends.json").friends // getting the friends from the json in a relative path
        };
    }

    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {/* calling another component */}
                    <Friends friends={this.state.friends} />
                </tbody>
            </table>
        );
    }
}

export default FriendsTable;
