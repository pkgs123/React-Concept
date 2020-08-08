import React,{Component} from 'react';
class ErrorHandle extends Component{
    constructor(props){
        super(props);
        this.state={
            listvalue: [{ lifeCyecle: 'getDerivedStateFromError().', id: 'EH' },
            { lifeCyecle: 'componentDidCatch().', id: 'EH' }]
        }
    }
    render(){
        return(
            <>
               <b style={{ fontSize: 'large', color: 'darksalmon' }}> Error Handling Phase</b>
                <br />
                <b style={{ fontSize: 'large', color: 'darkred' }}> Methods of Error Handling Phase</b>
                <br />
                {
                    this.state.listvalue.length !== 0 &&
                    this.state.listvalue.map((value, key) => {
                        return value.id === "EH" && <li>{key+1}-{value.lifeCyecle}</li>;
                    })
                }
            </>
        )
    }
}
export default ErrorHandle;