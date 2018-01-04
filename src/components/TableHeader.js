


import React from 'react'
import PropTypes from 'prop-types';

export default class TableHeader extends React.Component {
    static propTypes = {
        columns:PropTypes.array.isRequired,
        data:PropTypes.array
    }
    componentWillReceiveProps(nextProps){
       console.log(nextProps)
       
    }
    componentWillMount(){
        console.log(this.props)
        if(this.props.data)this.showBody=true
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
                {this.showBody&&
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
                }
            </table>
        )
    }
}