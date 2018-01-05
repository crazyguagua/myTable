


import React from 'react'
import PropTypes from 'prop-types';

export default class TableHeader extends React.Component {
    static propTypes = {
        columns:PropTypes.array.isRequired,
        data:PropTypes.array
    }
    componentWillReceiveProps(nextProps){
    }
    componentWillMount(){
       
        if(this.props.data)this.showBody=true
    }
    render() {
        return (
            
            <table className="my-table-header">
                <colgroup>
                    {this.props.columns.map((column,index)=>{
                        return (
                            <col key={index} width="80"/>
                        )
                    })}
                </colgroup>
                <thead>
                    <tr onClick={this.setWidth()}>
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