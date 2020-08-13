import React,{Component} from 'react';
import {connect} from 'react-redux';
import {empDetailsAction} from '../Redux/Action/Action';

class ReduxComponent extends Component{

    constructor(props){
            super(props);
    }

    componentDidMount(){
        this.props.empDetailsAction('Prashant Singh');
    }

    render(){
      const {empDetailResult} = this.props;
        return(
            <>
           <b style={{color:'black',marginLeft:'600px',fontStyle:'italic',fontWeight:'700'}}>Welcome to Redux Component</b> <br/>
            <br/>
        <b style={{marginLeft:'600px',fontStyle:'italic',fontWeight:'700'}}>Employee Name: {empDetailResult}</b>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        empDetailResult:state.Reducer.empName
    }
}

const mapDispatchToProps = {
    empDetailsAction
}

export default connect(mapStateToProps,mapDispatchToProps) (ReduxComponent);