import React, { Component } from 'react';
export default (WrapperComponent)=>class extends Component{

        setWidth(){
            alert(1)
        }
        constructor(props) {
            super(props)
      
            this.setWidth = this.setWidth.bind(this)
        }
        render(){
            
            return (
                <WrapperComponent {...this.props} />
            )
        }
    
} 