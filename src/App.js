import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
let data=[{
  range:'1',name:'曼城',goal:60,lose:20,og:40,points:50,captain:'孔帕尼',forward:'阿奎罗 热苏斯'
},{
  range:'2',name:'曼联',goal:60,lose:20,og:40,points:50,captain:'瓦伦西亚',forward:'拉屎福德 卢卡库 马夏尔'
},{
  range:'3',name:'切尔西',goal:60,lose:20,og:40,points:50,captain:'大卫。路易斯',forward:'莫拉塔 巴蜀压抑'
},{
  range:'4',name:'利物浦',goal:60,lose:20,og:40,points:50,captain:'乔丹。亨德森',forward:'菲尔米诺 索兰克 库底尼奥'
},{
  range:'5',name:'托特纳姆热刺',goal:60,lose:20,og:40,points:50,captain:'阿尔德雷维尔德',forward:'哈里凯恩 孙兴民 阿里'
},{
  range:'6',name:'阿森纳',goal:60,lose:20,og:40,points:50,captain:'科斯切尔尼',forward:'拉卡则特 吉鲁 桑切斯'
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
      title:'球队的全部名字啊啊啊',
      dataIndex:'name',width:100
    },{
      title:'队长',
      dataIndex:'captain',width:100
    },{
      title:'前锋',
      dataIndex:'forward',width:100
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
    },30)
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
        <div style={{width:'600px',margin:'20px auto'}}>
          <Table columns={this.columns} data={this.state.data} width="550" height="400"/>
        </div>
      </div>
    );
  }
}

export default App;
