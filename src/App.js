import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.js";
import { useState } from "react";

const App = () => {
  const [myName, setName] = useState("Quoc Anh"); // returning an array
  const [address, setAddress] = useState("");

  const handleClick = (event) => {
    setName(address); // using setName function triggers rerendering
    console.log(">>> click me", myName);
  };

  const handleChange = (event) => {
    setAddress(event.target.value); // using setAddress function triggers rerendering
  };

  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is {myName}</h1>
        <input
          type="text"
          value={address}
          onChange={(event) => handleChange(event)}
        /> 
        <button type="button" onClick={(event) => handleClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
};

export default App;
