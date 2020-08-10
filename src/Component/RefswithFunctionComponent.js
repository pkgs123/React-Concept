import React, { useRef }  from 'react';
function RefsWithFunction(props){
    const textInputRefs = useRef(null);

    const handleOnFocus = () =>{
        textInputRefs.current.focus()
    }
    return(
        <>
       <b style={{color:'#FFEB3B'}}>Refs and Function Components</b><br/>
        Name:<input type="text" ref={textInputRefs}>
        </input>
        <input type="button" style={{marginLeft:'4%'}}value="Focus the text Input" onClick={handleOnFocus}></input>
       
        </>
    )
}
export default RefsWithFunction;