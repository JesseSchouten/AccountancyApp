import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Account from "./Company";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Account />
        </header>
        <body></body>
      </div>
    );
  }
}

export default App;
