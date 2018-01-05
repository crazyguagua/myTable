import React from 'react'
import PropTypes from 'prop-types';
import './table.less'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import {getScrollBarSize} from './util'
import hoc from'./hoc'

const TableHeaderWrapper = hoc(TableHeader)
const TableBodyWrapper = hoc(TableBody)
export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
        columns:PropTypes.array.isRequired,
        scroll:PropTypes.object
    }
    componentWillReceiveProps() {
         
    }
    componentDidMount(){
        console.log(getScrollBarSize())
    }
    constructor(props){
        super()
        console.log(props)
        this.headerFixed = props.scroll&&props.scroll.y //头部固定
        this.columnFixed = props.scroll&&props.scroll.x //列固定
    }

    render() {
        return (
            
            <div className="my-table my-table-bordered">
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