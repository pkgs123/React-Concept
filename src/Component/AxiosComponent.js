import React, { Component } from 'react';
import {
    Button, List, ListItem,
    ListItemText,
    Divider, Grid, Table, TableHead, TableRow, TableCell, TableBody
} from '@material-ui/core';
import axios from 'axios';

class AxiosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultValue: [],
            tableHeadValue: [{ UserName: "UserName", name: "Name", phone: "Phone", website: "WebSite", address: "Address", companyName: "CompanyName" }],

        }
        this.fnameRef = React.createRef();
        this.lnameRef = React.createRef();
    }
    static getDerivedStateFromProps(props) {
        return {

        }
    }
    componentDidMount() {
        //let path1 = "https://jsonplaceholder.typicode.com/users/";
        let path = "https://jsonplaceholder.typicode.com/users/";

        axios.get(path,{
            headers: {
                authorization:'prashant',
                'Content-Type':'application/json'
            }
        }, {
            params: {
              
            }
        })
            .then((response) => {
                console.log(response);
                this.setState({ resultValue: response.data })
            })
            .catch((err) => {
                console.log('AxiosError', err);
            })

        //Generic method for Axios
        let axiosgeneric = axios.create({baseURL:path,headers:{'Content-Type':'application/json'}});
        // axiosgeneric.get("?id=1")
        // .then((response) =>{
        //     console.log(response);
        //     this.setState({resultValue:response.data})
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   })
    
        let payload={
            userId:922929
        }
        axios.post("https://jsonplaceholder.typicode.com/posts",payload,{headers:{'Content-Type':'application/json'}},{params:{}})
        .then((response) =>{
            console.log(response);
           // alert("created Successfully....");
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    checkResult = () => {

    }

    render() {

        return (
            <>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <b style={{marginLeft:'4%'}}> List Binding</b>
                        <List style={{
                            color: 'red',
                            maxWidth: 500,
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 400,
                        }} >

                            {(Array.isArray(this.state.resultValue) && (this.state.resultValue !== undefined)) && this.state.resultValue.map((value, ind) => {
                                return <>
                                    <ListItem>
                                        <ListItemText primary={value.username} secondary={
                                            <>
                                                <h3>Name:{value.name}<br />EmailId:{value.email}<br />Contact No. :{value.phone}<br />
                      website:{value.website}<br />Address: {value.address.street},
                      {value.address.suite},{value.address.city},{value.address.zipcode}<br />
                      Company-Name:{value.company.name}<br />
                                                    {/* GeoLocation:{value.geo.lat}-{value.geo.lng} */}
                                                </h3>
                                            </>
                                        }>

                                        </ListItemText>
                                    </ListItem><Divider></Divider>
                                </>
                            })}
                        </List>
                    </Grid>
                    <br />
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <b>Table Binding</b>
                        <Table style={{
                          //  color: 'red',
                            maxWidth: 500,
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 400,
                            marginLeft:'4%'
                        }}>
                            <TableHead style={{ backgroundColor: "grey" }}>
                                {this.state.tableHeadValue.map((value) => {
                                    return <>
                                        <TableRow>
                                            <TableCell>
                                                {value.UserName}
                                            </TableCell>
                                            <TableCell>
                                                {value.name}
                                            </TableCell>
                                            <TableCell>
                                                {value.phone}
                                            </TableCell>
                                            <TableCell>
                                                {value.website}
                                            </TableCell>
                                            <TableCell>
                                                {value.address}
                                            </TableCell>
                                            <TableCell>
                                                {value.companyName}
                                            </TableCell>
                                        </TableRow>
                                    </>
                                })}
                            </TableHead>
                            <TableBody >
          {this.state.resultValue.map((row) => (
            <TableRow >
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.website}</TableCell>
              <TableCell align="center">{row.address.street}</TableCell>
              <TableCell align="center">{row.company.name}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default AxiosComponent;