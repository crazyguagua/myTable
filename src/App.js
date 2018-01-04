import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
let data=[{
  range:'1',name:'曼城',goal:60,lose:20,og:40,points:50
},{
  range:'2',name:'曼联',goal:60,lose:20,og:40,points:50
},{
  range:'3',name:'切尔西',goal:60,lose:20,og:40,points:50
},{
  range:'4',name:'利物浦',goal:60,lose:20,og:40,points:50
},{
  range:'5',name:'托特纳姆热刺',goal:60,lose:20,og:40,points:50
},{
  range:'6',name:'阿森纳',goal:60,lose:20,og:40,points:50
}]
class App extends Component {
  componentDidMount(){
  //  let appInfo =  document.querySelectorAll('.App-logo')[0]
  //  console.log(appInfo.offsetTop)
  }
  state={
    data:[]
  }
  componentWillMount(){
    this.columns=[{
      title:'排名',
      dataIndex:'range'
    },{
      title:'球队',
      dataIndex:'name'
    },{
      title:'进球',
      dataIndex:'goal'
    },{
      title:'失球',
      dataIndex:'lose'
    },{
      title:'净胜球',
      dataIndex:'og'
    },{
      title:'积分',
      dataIndex:'points'
    }]
   
    setTimeout(()=>{
      this.setState({
        data:data
      })
    },1000)
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
        <div style={{width:'600px',margin:'0 auto'}}>
          <Table columns={this.columns} data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
