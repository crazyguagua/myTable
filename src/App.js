import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
class App extends Component {
  componentWillMount(){
    this.columns=[{
      title:'aaa'
    },{
      title:'bbb'
    }]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         table 演示
        </p>
        <div>
          <Table columns={this.columns}/>
        </div>
      </div>
    );
  }
}

export default App;
