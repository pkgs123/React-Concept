import React,{Component} from 'react';
class UnMount extends Component{
    constructor(props){
        super(props);
        this.state = {
            listvalue: [{ lifeCyecle: 'componentWillUnmount().', id: 'UM' }]
        }
    }
    componentWillUnmount(){
       alert('Unmounting....')
        console.log('componentWillUnmount is called.');
    }
    render(){
        return(
                <>
                 <b style={{ fontSize: 'large', color: 'darksalmon' }}> UnMount Phase</b>
                <br />
                <b style={{ fontSize: 'large', color: 'darkred' }}> Methods of UnMount Phase</b>
                <br />
                {
                    this.state.listvalue.length !== 0 &&
                    this.state.listvalue.map((value, key) => {
                        return value.id === "UM" && <li>{key+1}-{value.lifeCyecle}</li>;
                    })
                }
                </>

        )
    }
}
export default UnMount;
