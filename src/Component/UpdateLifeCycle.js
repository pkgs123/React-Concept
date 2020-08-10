import React, { Component } from 'react';
import unMount from './UnMount';
class UpdateLifeCycleMethod extends Component {
    constructor(props) {
        //this method is called only once.
        super(props);
        this.state = {
            title:'Update Phase',
            ind:'y',
            listvalue: [{ lifeCyecle: 'static getDerivedStateFromProps().', id: 'U' }, { lifeCyecle: 'shouldComponentUpdate().', id: 'U' },
            { lifeCyecle: 'render().', id: 'U' },
            { lifeCyecle: 'getSnapshotBeforeUpdate().', id: 'U' }, { lifeCyecle: 'componentDidUpdate().', id: 'U' }]
        }
    }

    static getDerivedStateFromProps(props) {
        //if we want to update the state value from props then this method can be used.
        return {
            
        }
    }
    shouldComponentUpdate(){
   
        //return boolean bydefault it returns true so it rerender the component.
        //for correct use of shouldComponentUpdate we use pureComponent that check the state value with the help of shallow
        // if it changes then only it triggers the render function or method.
        console.log('shouldComponent is called.');
    }
    getSnapshotBeforeUpdate(){
        //It creates a log for any state or props value or variable value etc... .
        console.log('getSnapshotBeforeUpdate is called.');
    }
    componentDidUpdate(){
        //Once the state value is updated then we can use this method as per our need.
        console.log('componentDidUpdate is called');
    }
    render() {
        //whenever any changes occurs then this method is called to update tha changes on to screen.
        return (
            <>
                {this.state.ind === "X" ? <b style={{ fontSize: 'large', color: 'darksalmon' }}> {this.state.title}</b>
                :<unMount></unMount>

                }
                <br />
                <b style={{ fontSize: 'large', color: 'darkred' }}> Methods of Update Phase</b>
                <br />
                {
                    this.state.listvalue.length !== 0 &&
                    this.state.listvalue.map((value, key) => {
                        return value.id === "U" && <li>{key+1}-{value.lifeCyecle}</li>;
                    })
                }
            </>
        )
    }
}
export default UpdateLifeCycleMethod;