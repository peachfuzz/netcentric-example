import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import TodoApp from "./Components/ToDoApp";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer />
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
