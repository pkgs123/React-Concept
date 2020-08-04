import React from 'react';
import { AppBar, Toolbar, Button, Tooltip } from '@material-ui/core';
function FooterComp(props) {
    return (
        <>
            <Tooltip title="Use of Footer">
            <AppBar position="static" style={{backgroundColor:'lightgrey'}}>
                <Toolbar>
                    {props.children}
                    <Button style={{backgroundColor:'lightseagreen'}}>GenericButton</Button>
                </Toolbar>
            </AppBar>
            </Tooltip>
        </>
    )
}
export default FooterComp;