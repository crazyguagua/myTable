import React from 'react'
import PropTypes from 'prop-types';
import './table.less'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import {getScrollBarSize} from './util'
import hoc from'./hoc'

const TableHeaderWrapper = hoc(TableHeader)
const TableBodyWrapper = hoc(TableBody)

const minWidth =80 //每一列最小的宽度
export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
        style:PropTypes.object,
        columns:PropTypes.array.isRequired,
        scroll:PropTypes.object,
        width:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number]),
        height:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number]),
        minWidth:PropTypes.number //每一列的最小宽度值
    }
    componentWillReceiveProps() {
         
    }
    componentDidMount(){
        this.setColumns()
        console.log(getScrollBarSize())
    }
    constructor(props){
        super()
        console.log(props)
        let width=props.width
        if(width){
            if(/^\d+(.\d+)?$/.test(width)){
                width+='px'
            }
            this.totalWidth = width
        }else{
            this.totalWidth='100%'
        }
        this.minWidth = props.minWidth||minWidth
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
        columns.forEach(element => {
            if(!element.width){
                element.width = Math.max(avgWidth,minWidth)
            }
        });
    }
    headerScroll(e){
        //头部滚动
        console.log(arguments)
    }
    render() {
        let height = this.props.height
        let className=`my-table my-table-bordered`
        if(height){//列表头部固定
            className+=' my-table-header-fixed'
            height = parseFloat(height)
            console.log(this.tableNode)
        }
        return (
            
            <div className={className} style={{width:this.totalWidth}}  ref={this.saveRef('tableNode')}>
                <div className="table-content" onScroll={this.headerScroll}>
                    <div className="my-table-header-div">
                        <TableHeaderWrapper columns={this.props.columns} />
                    </div>
                    <div className="my-table-body-div">
                        <TableBodyWrapper data={this.props.data} columns={this.props.columns}/>
                    </div>
                </div>
                
            </div>
        )
    }
}