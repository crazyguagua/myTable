


import React from 'react'
import PropTypes from 'prop-types';

export default class Table extends React.Component {
    static propTypes = {
        columns:PropTypes.array.isRequired
    }

    render() {
        return (
            
            <table className="my-table-header">
                <thead>
                    <tr>
                    {this.props.columns.map((column,index)=>{
                        return <th key={index}>{column.title}</th>
                    })
                    }
                    </tr>
                </thead>
            </table>
        )
    }
}