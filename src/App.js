import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from "axios"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Form from "./Components/Form/Form.js"
import Header from "./Components/Header/Header.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;