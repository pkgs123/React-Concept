import React from 'react';
import { Tooltip } from '@material-ui/core';

function functioCompo(props){
   // props.nickName('Guddan');
    return(
        <>
        <b style={{color:'lightsalmon'}}>Hi,<Tooltip title="use of props"><b style={{color:'white'}}>{props.name}</b></Tooltip>Welcome to Functional Component.</b>
        </>
    )
}
export default functioCompo;