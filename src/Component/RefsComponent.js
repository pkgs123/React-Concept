import React,{Component} from 'react';
class RefsComponent extends Component{
    constructor(props){
        super(props);
        this.inpRefs = React.createRef();
    }
    onFocusTextInput = () =>{
  this.inpRefs.current.focus();
        console.log('onFocus function is being called.');
    }

    render(){
        return(
            <>
            <b style={{color:'#FFEB3B'}}>Adding a Ref to a DOM Element</b><br/>
            Name:<input type="text" ref={this.inpRefs}>
            </input>
            Action:<input type="button" value="Focus the text input" onClick={this.onFocusTextInput}>
            </input>
            
            </>
        )
    }
}
export default RefsComponent;