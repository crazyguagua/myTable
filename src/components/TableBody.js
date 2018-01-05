


import React from 'react'
import PropTypes from 'prop-types';

export default class TableBody extends React.Component {
    static propTypes = {
        columns:PropTypes.array.isRequired,
        data:PropTypes.array.isRequired
    }

    render() {
        return (
            
            <table className="my-table-body">
                 <colgroup>
                    {this.props.columns.map((column,index)=>{
                        return (
                            <col key={index} width="80"/>
                        )
                    })}
                </colgroup>
                <tbody>
                    {
                        this.props.data.map((d,idx)=>{
                            return (
                                <tr key={idx} >
                                     {
                                        this.props.columns.map((column,index)=>{
                                            return <td key={index}>{d[column.dataIndex]}</td>
                                        })
                                     }
                                </tr>
                            )
                        })
                    }
                   
                  
                </tbody>
            </table>
        )
    }
}