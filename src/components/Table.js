import React from 'react'
import PropTypes from 'prop-types';
import './table.less'
import TableHeader from './TableHeader'

export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
        columns:PropTypes.array.isRequired
    }
    constructor() {
        super();
    }

    render() {
        return (
            
            <div className="my-table">
                <div className="my-table-header-div">
                    <TableHeader columns={this.props.columns}/>
                </div>
                <div>

                </div>
            </div>
        )
    }
}