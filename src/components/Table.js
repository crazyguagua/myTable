import React from 'react'
import PropTypes from 'prop-types';

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
            <div>
                <table>
                    <thead>
                        {this.props.columns.map((column)=>{
                            return <th>{column.title}</th>
                        })
                        }
                    </thead>
                </table>
            </div>
        )
    }
}