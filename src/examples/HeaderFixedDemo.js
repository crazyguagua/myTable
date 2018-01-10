import React from 'react';
import Table from '../components/Table'
let data = [{
    range: '1', name: '曼城', goal: 60, lose: 20, og: 40, points: 50, captain: '孔帕尼', forward: '阿奎罗 热苏斯'
}, {
    range: '2', name: '曼联', goal: 60, lose: 20, og: 40, points: 50, captain: '瓦伦西亚', forward: '拉什福德 卢卡库'
}, {
    range: '3', name: '切尔西', goal: 60, lose: 20, og: 40, points: 50, captain: '大卫。路易斯', forward: '莫拉塔 巴舒亚伊'
}, {
    range: '4', name: '利物浦', goal: 60, lose: 20, og: 40, points: 50, captain: '乔丹。亨德森', forward: '菲尔米诺 索兰克'
}, {
    range: '5', name: '托特纳姆热刺', goal: 60, lose: 20, og: 40, points: 50, captain: '阿尔德雷维尔德', forward: '哈里凯恩 孙兴民 阿里'
}, {
    range: '6', name: '阿森纳', goal: 60, lose: 20, og: 40, points: 50, captain: '科斯切尔尼', forward: '拉卡泽特 吉鲁 桑切斯'
}]
export default class HeaderFixedDemo extends React.Component {
    state = { data: [] }
    render() {
        return (
            <div>

                <div style={{ width: '800px'}} className="App-demoWrapper">
                    <h3 className="App-demoTitle">头部固定的表格</h3>
                    <Table columns={this.columns} data={this.state.data} width="550" height="400" />
                </div>
            </div>
        );
    }
    componentWillMount() {
        this.columns = [{
            title: '排名',
            dataIndex: 'range'
        }, {
            title: '球队',
            dataIndex: 'name', width: 100
        }, {
            title: '队长',
            dataIndex: 'captain', width: 100
        }, {
            title: '前锋',
            dataIndex: 'forward', width: 100
        }, {
            title: '进球',
            dataIndex: 'goal'
        }, {
            title: '失球',
            dataIndex: 'lose'
        }, {
            title: '净胜球',
            dataIndex: 'og'
        }, {
            title: '积分',
            dataIndex: 'points'
        }]

        setTimeout(() => {
            this.setState({
                data: data
            })
        }, 30)
    }
};