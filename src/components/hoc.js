
export default (WrapperComponent)=>class extends WrapperComponent{

        setWidth(){
           console.log(this)
        }
        constructor(props) {
            super(props)
      
            this.setWidth = this.setWidth.bind(this)
        }
        render(){
            
           return super.render()
        }
    
} 