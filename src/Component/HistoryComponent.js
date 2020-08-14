import React,{Component} from 'react';
import {Tooltip} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import history from '../History';
import { Router } from 'react-router-dom';

class HistoryComonent extends Component{

    navBack = () =>{
        history.push('/');
    }

    render(){
        return(
            <>
             <div>
                    <Tooltip title="Previous">
                    <ArrowBackIcon onClick={this.navBack}></ArrowBackIcon>
                    </Tooltip>
                
            </div>
                Welcome to History Component
            </>
        )
    }
}
export default HistoryComonent;