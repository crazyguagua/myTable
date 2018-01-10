import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import HeaderFixedDemo from "./examples/HeaderFixedDemo";
class App extends Component {
  state={
    data:[]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react 轮子之 table组件</h1>
        </header>
        <p className="App-intro">
         table 演示
        </p>
          <HeaderFixedDemo />
      </div>
    );
  }
}

export default App;
