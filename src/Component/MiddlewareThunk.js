import React,{Component} from 'react';
import { Button, List, ListItem,ListItemText } from '@material-ui/core';
import {connect} from 'react-redux';
import {reduxThunkAction} from '../Redux/Action/Action';
class MiddleWareThunk extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){

    }

    reduxThunk = () =>{
        
        this.props.reduxThunkAction();
    }

    render(){
      const  {photoResult}=this.props;
      console.log('photoResult Reducer',photoResult);
        return(
            <>
            <b>Welcome to Redux Thunk middleware.</b><br/>
            <Button style={{backgroundColor:'black',color:'white',marginLeft:'4%'}} onClick={this.reduxThunk}>Redux-Thunk</Button>
            <List style={{
                            color: 'red',
                            maxWidth: 500,
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 400,
                        }}>
                {photoResult.length>=0 && photoResult.map((data) =>{
                        return <>
                        <ListItem>
                            <ListItemText>
                                {data.title}
                            </ListItemText>
                        </ListItem>
                        </>
                })
                 
                }
            </List>
           
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        photoResult:state.PhotoReducer.photoData
    }
}


const mapDispatchToProps = {
reduxThunkAction
}
export default connect(mapStateToProps,mapDispatchToProps)(MiddleWareThunk);