import React,{Component} from 'react';
import { Tooltip } from '@material-ui/core';
//import {Grid} from '@material-ui/core';
//import Footer from './FooterComponent';
class ClassComp extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Prashant Singh',
            language:'React.js'
        }
        this.props.nickName('Motto');
    }
   
    render(){
        return(
            <>
            <b style={{color:'lightgreen'}}>Hi,<Tooltip title="Use of Props"><b style={{color:'black'}}>{this.props.name}</b></Tooltip>Welcome to Class Component.</b><br/>
           <b style={{color:'lightgreen'}}>Hi,<Tooltip title="Use of state"><b style={{color:'black'}}>{this.state.name}</b></Tooltip>Welcome to <b style={{color:'black'}}>{this.state.language}</b> Class Component</b>
            </>
        )
    }
}
export default ClassComp;