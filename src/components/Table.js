import React from 'react'
import PropTypes from 'prop-types';
import './table.less'

export default class Table extends React.Component {
    static propTypes = {
        data:PropTypes.array.isRequired,
        columns:PropTypes.array.isRequired
    }
    constructor() {
        super();
        this.columns = [];
    }

    render() {
        return (
            
            <div className="my-table">
                <div className="my-table-header-div">
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
                </div>
            </div>
        )
    }
}