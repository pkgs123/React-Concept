import React, { Component } from 'react';
import { Grid, AppBar, Toolbar,Button } from '@material-ui/core';
import FuncComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';
import FooterComp from './Component/FooterComponent';
class TypesOfComponent extends Component {


    btnAction = () =>{
    }
    render() {
        return (
            <>
                <Grid container  >
                    {/* Functional Component */}
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                        <AppBar position="static">
                            <Toolbar>
                                Function Component Header
                            </Toolbar>
                        </AppBar>
                        <FuncComponent>
                        </FuncComponent>

                        <FooterComp>
                        <Button style={{backgroundColor:'lightskyblue'}}>FunctButton1</Button>
                        <Button style={{backgroundColor:'lightskyblue'}}>FunctButton2</Button>
                        </FooterComp>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>

                    </Grid>
                    {/* Class Component */}
                    <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                    <AppBar position="static">
                            <Toolbar>
                                Class Component Header
                            </Toolbar>
                        </AppBar>
                        <ClassComponent>
                      
                        </ClassComponent>
                        <FooterComp>
                        <Button style={{backgroundColor:'lightsalmon'}} onClick={this.btnAction}>ClassButton1</Button>
                        <Button style={{backgroundColor:'lightsalmon'}}>ClassButton2</Button>
                        </FooterComp>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default TypesOfComponent;