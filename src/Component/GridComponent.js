import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';

class GridComp extends Component {

    render() {

        return (
            <Grid container spacing={10} justify="center">
                <Hidden xsDown mdUp>
                {[0, 1, 2].map((value) => (
                    <Grid key={value} item>
                        <Paper style={{ height: '200px', width: '200px', backgroundColor:"bl" }}>Hi Prashant </Paper>
                    </Grid>
                ))}
                </Hidden>
                {/* <Hidden xsDown> */}
                <Grid item xs={12}>
                <Paper >xs=12 </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper >xs=6 </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper >xs=6 </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper >xs=3 </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper >xs=3 </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper >xs=3 </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper >xs=3 </Paper>
                </Grid>   
                {/* </Hidden>             */}
            </Grid>
        );
    }
}
export default (GridComp);