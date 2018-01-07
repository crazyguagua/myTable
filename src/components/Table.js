import React from 'react'
import PropTypes from 'prop-types';
import './table.less'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import {getScrollBarSize} from './util'
import hoc from'./hoc'

const TableHeaderWrapper = hoc(TableHeader)
const TableBodyWrapper = hoc(TableBody)

const minWidth =30 //每一列最小的宽度
export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
        columns:PropTypes.array.isRequired,
        scroll:PropTypes.object,
        width:PropTypes.number||PropTypes.string,
        height:PropTypes.number
    }
    componentWillReceiveProps() {
         
    }
    componentDidMount(){
        console.log(getScrollBarSize())
        console.log(this.tableNode.offsetWidth)
        this.setColumns()
    }
    constructor(props){
        super()
        console.log(props)
        this.headerFixed = props.scroll&&props.scroll.y //头部固定
        this.columnFixed = props.scroll&&props.scroll.x //列固定
        this.totalWidth = props.width?props.width:'100%'
    }
    saveRef = (name) => (node) => {
        this[name] = node;
    }
    setColumns(){
        let autoWidth=0
        let allWidth = this.tableNode.offsetWidth
        let {columns} = this.props
        let len = columns.length
        let widthCount = columns.reduce((a,b)=>{
            return a+(b.width||0)
        },0)
        autoWidth=allWidth-widthCount
        let avgWidth =  autoWidth/len
        if(avgWidth>minWidth){
            columns.forEach(element => {
                if(!element.width){
                    element.width = avgWidth
                }
            });
        }
        console.log(columns)
    }
    render() {
        return (
            
            <div className="my-table my-table-bordered" style={{width:this.totalWidth}}  ref={this.saveRef('tableNode')}>
                <div className="my-table-header-div">
                    <TableHeaderWrapper columns={this.props.columns} />
                </div>
                <div className="my-table-body-div">
                    <TableBodyWrapper data={this.props.data} columns={this.props.columns}/>
                </div>
            </div>
        )
    }
}