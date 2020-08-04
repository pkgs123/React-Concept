
import React, { Component } from 'react';

import GridComp from './Component/GridComponent';
import TypeOfComp from './TypesofComp';
import {Hidden} from '@material-ui/core';
class App extends Component {
    render() {
        return (
            <>
                {/* <h1>Welcome to App.js File.</h1> */}
                <Hidden xsUp>
                <GridComp/>
                </Hidden>
                <TypeOfComp></TypeOfComp>
            </>
        )
    }
}
export default App;