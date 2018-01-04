import React from 'react'
import PropTypes from 'prop-types';
import './table.less'
import TableHeader from './TableHeader'
// import TableBody from './TableBody'
export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
        columns:PropTypes.array.isRequired,
        scroll:PropTypes.object
    }
    componentWillReceiveProps() {
        console.log(this.props)
        this.headerFixed = this.props.scroll&&this.props.scroll.y //头部固定
        this.columnFixed = this.props.scroll&&this.props.scroll.x //列固定
    }

    render() {
        return (
            
            <div className="my-table">
                <div className="my-table-header-div">
                    <TableHeader columns={this.props.columns} data={this.props.data}/>
                </div>
                <div className="my-table-body-div">
                    
                </div>
            </div>
        )
    }
}