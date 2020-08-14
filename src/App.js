
import React, { Component } from 'react';

import GridComp from './Component/GridComponent';
import TypeOfComp from './TypesofComp';
import {Hidden} from '@material-ui/core';
import{BrowserRouter,HashRouter,MemoryRouter,Route,Link,Router} from 'react-router-dom';
import SecondComponent from './Component/SecondComponent';
import ThirdComponent from './Component/ThirdComponent';
import HistoryComponent from './Component/HistoryComponent';
import history from './History';
class App extends Component {
    render() {
        return (
            <>
                {/* <h1>Welcome to App.js File.</h1> */}
                <Hidden xsUp>
                <GridComp/>
                </Hidden>
                {/* <TypeOfComp></TypeOfComp> */}

                {/* <BrowserRouter> */}
                <HashRouter history={history}>
                {/* <MemoryRouter> */}
                <Route path="/" component={TypeOfComp} exact>
                </Route>
                <Route path="/secondPage/:id" component={SecondComponent} exact>
                </Route>
                <Route path="/thirdComp" component={ThirdComponent} exact>
                </Route>
                <Route path="/historyComp" component={HistoryComponent} exact>

                </Route>
                {/* </MemoryRouter> */}
                </HashRouter>
                {/* </BrowserRouter> */}
            </>
        )
    }
}
export default App;