import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Tooltip} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
class ThirdComp extends Component{
    render(){
        return(
            <>
             <div>
                <Link to="/secondPage" >
                    <Tooltip title="Previous">
                    <ArrowBackIcon></ArrowBackIcon>
                    </Tooltip>
                </Link>
            </div>
            <b>Welcome to Third Component.</b>
            </>
        )
    }
}
export default ThirdComp;