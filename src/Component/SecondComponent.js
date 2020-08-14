import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Tooltip } from '@material-ui/core';
function SecondComp(props) {
    return (
        <>
            <div>
                <Link to="/thirdComp" >
                    <Tooltip title="Next">
                    <ArrowForwardIcon  style={{marginLeft:'99%'}}></ArrowForwardIcon>
                    </Tooltip>
                </Link>

                <Link to="/" >
                    <Tooltip title="Previous">
                    <ArrowBackIcon></ArrowBackIcon>
                    </Tooltip>
                </Link>
            </div>

            <b>Hi Welcome  to Second Component</b>
        </>
    )
}
export default SecondComp;