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
            listValue:[{lifeCyecle:'constructor().',id:'M'},{lifeCyecle:'static getDerivedStateFromProps().',id:'M'},
            {lifeCyecle:'componentDidMount().',id:'M'},{lifeCyecle:'render().',id:'M'},
            ]
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
           <b style={{fontSize:'large',color:'darksalmon'}}> Mount Phase</b>
            <br/>
            <b style={{fontSize:'large',color:'darkred'}}> Methods of Mount Phase</b>
            <br/>
            {
            this.state.listValue.length!== 0 && this.state.listValue.map((value,key) =>{

            return  value.id === "M" ? <li>{key+1}-{value.lifeCyecle}</li> : '';
            })
            }
            </>
        )
    }
}
export default LifeCycleMethod;