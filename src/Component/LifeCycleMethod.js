import React,{Component} from 'react';
import { AppBar } from '@material-ui/core';
class LifeCycleMethod extends Component{
      //Mounting
        //Updating
        //UnMounting
        //Error Handling

    //1. Mounting Methods
    constructor(props){
        console.log('First Constructor is called.');
        super(props);
        this.state={
            propsValue:'',
            listValue:[{lifeCyecle:'Concept of Mounting.'},{lifeCyecle:'Concept of Updating.'},{lifeCyecle:'Concept of UnMounting.'},{lifeCyecle:'Concept of Error Handling.'}]
        }
    }
    static getDerivedStateFromProps(props){
        console.log(props);
        console.log('Second getDerivedStateFromProps is called.');
        return{
            propsValue:props.propsValue
        }
    }
    componentDidMount(){
        console.log('Third componentDidMount is called.');
    }
    render(){
      console.log('Render is called.');
      
        return(
            <>
           <b style={{marginLeft:'44%',fontSize:'large'}}>Hi Prashant,Welcome to LifeCycle Method.</b><br/>
            <br/>
            {
            this.state.listValue.length!== 0 && this.state.listValue.map((value,key) =>{
            return  <li style={{marginLeft:'44%'}}>{key}-{value.lifeCyecle}</li>
            })
            
            }
            </>
        )
    }
}
export default LifeCycleMethod;