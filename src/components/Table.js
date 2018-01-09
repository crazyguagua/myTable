import React from 'react'
import PropTypes from 'prop-types';
import './table.less'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import {getScrollBarSize} from './util'
import hoc from'./hoc'

const TableHeaderWrapper = hoc(TableHeader)
const TableBodyWrapper = hoc(TableBody)
const scrollBarWith = getScrollBarSize();

const minWidth =80 //每一列最小的宽度
export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
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
        
        // console.log(getScrollBarSize())
    }
    constructor(props){
        super()
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
        // this.headerScroll.bind(this)
    }
    saveRef = (name) => (node) => {
        this[name] = node;
    }
    setColumns(){
        let autoWidth=0
        let allWidth = this.tableNode.offsetWidth //父容器的宽度
        let {columns} = this.props
        let len = columns.length
        let widthCount = columns.reduce((a,b)=>{
            return a+(b.width||0)
        },0)
        autoWidth=allWidth-widthCount
        let avgWidth =  autoWidth/len
        columns.forEach((element,index)=> {
            if(!element.width){
                element.width = Math.max(avgWidth,minWidth)
            }
            //解决tablebody横向滚动条滚动到最后一列，出现和tableHeader对不齐的问题
            if(index==columns.length-1&&){

            }
        });
        this.allWidth=columns.reduce((a,b)=>{
            return a+(b.width||0)
        },0)
        console.log(allWidth)
        console.log(this.allWidth)
    }
    /**
     * table body 横向滚动同步
     */
    onTablebodyLeftScroll=(e)=>{ 
        //body滚动
        if (e.currentTarget !== e.target) {
            return;
        }
        const target = e.target;
        const { headTable, bodyTable } = this;
        console.log(target.scrollLeft)
        if (target === bodyTable && bodyTable) {
            headTable.scrollLeft = target.scrollLeft;
        } 
        // else if (target === headTable && bodyTable) {
        //     bodyTable.scrollLeft = target.scrollLeft;
        // }
    }
    render() {
        let height = this.props.height
        let className=`my-table my-table-bordered`
        if(height){//列表头部固定
            className+=' my-table-header-fixed'
            height = parseFloat(height)
        }
        return (
            
            <div className={className} style={{width:this.totalWidth}}  ref={this.saveRef('tableNode')}>
                <div className="table-content">
                    <div className="my-table-header-div" ref={this.saveRef('headTable')}>
                        <TableHeaderWrapper columns={this.props.columns} style={{width:this.allWidth}} />
                    </div>
                    <div className="my-table-body-div" ref={this.saveRef('bodyTable')} onScroll={this.onTablebodyLeftScroll}>
                        <TableBodyWrapper data={this.props.data} columns={this.props.columns} style={{width:this.allWidth-scrollBarWith}}/>
                    </div>
                </div>
                
            </div>
        )
    }
}