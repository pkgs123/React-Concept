import React,{Component} from 'react';
import {Grid} from '@material-ui/core';
import FuncComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';
class TypesOfComponent extends Component{
    render(){
        return(
            <>
            <Grid container  >
                {/* Functional Component */}
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}> 
                <FuncComponent>
                </FuncComponent>
                </Grid>
                {/* Class Component */}
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <ClassComponent>
                    </ClassComponent>
                </Grid>
            </Grid>
            </>
        )
    }
}
export default TypesOfComponent;