import React from "react";
import "./App.css";
import FriendsTable from "./Components/Friends/FriendsTable";

class App extends React.Component {
    render() {
        return (
            <div className="container justify-content-center text-center">
                <h1>An Example in React</h1>
                {/* created the top of the head */}
                <FriendsTable />
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
