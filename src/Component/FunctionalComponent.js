import React,{useState,useEffect} from 'react';
import { Tooltip, Button } from '@material-ui/core';

function FunctioCompo(props){
  
    const[name,setName] = useState('Priyanka Panjabi');
    const[nickName,setNicName] = useState('Guddan');
    const[value,setchangeValue] = useState('changeValue');
    const[counter,setCounter] = useState(0);
    //componentDidMount: second parameter will be constant.
    //componentDidUpdate: 
    useEffect(() =>{
        console.log('inside use Effect');
        console.log(counter);
    });

    const onCheckUseEffect = () =>{
        setchangeValue('Prashant_UseEffect');
        setCounter(counter+1);
    }

    return(
        <>
        <b style={{color:'lightsalmon'}}>Hi,<Tooltip title="use of props"><b style={{color:'black'}}>{props.name}</b></Tooltip>Welcome to Functional Component.</b><br/>
       <Tooltip title="use of Hooks"><b style={{color:'black'}}>Hi,<b style={{color:'black'}}>{nickName}</b> your original name is <b style={{color:'black'}}>{name}</b></b></Tooltip>
     <b>The previous value is {value} and update value is {value}</b><br/>
        <Button onClick={onCheckUseEffect} style={{backgroundColor:'black',color:'white'}}> check useEffect</Button>
        </>
    )
}
export default FunctioCompo;