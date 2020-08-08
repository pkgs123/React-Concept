import React, { Component } from 'react';
class UpdateLifeCycleMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listvalue: [{ lifeCyecle: 'static getDerivedStateFromProps().', id: 'U' }, { lifeCyecle: 'shouldComponentUpdate().', id: 'U' },
            { lifeCyecle: 'render().', id: 'U' },
            { lifeCyecle: 'getSnapshotBeforeUpdate().', id: 'U' }, { lifeCyecle: 'componentDidUpdate().', id: 'U' }]
        }
    }

    static getDerivedStateFromProps(props) {
        return {

        }
    }
    shouldComponentUpdate(){
        
        console.log('shouldComponent is called.');
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate is called.');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is called');
    }
    render() {
        return (
            <>
                <b style={{ fontSize: 'large', color: 'darksalmon' }}> Update Phase</b>
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