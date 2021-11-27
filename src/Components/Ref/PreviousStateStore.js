import { useEffect, useRef, useState } from "react";

const PreviousStateStore = () => {
const [inputValue, setInputValue]=useState("");
const [count, setCount]=useState(0);
const previousValue=useRef();
const previousCount=useRef();
const typeHandler=(e)=>{
    setInputValue(e.target.value)
}
useEffect(()=>{
    previousCount.current=count;
},[count])
useEffect(()=>{
    previousValue.current=inputValue;
},[inputValue])
    return ( <div>
        <input value={inputValue} type="text" onChange={typeHandler} />
        <p> THIS IS INPUT${inputValue} and it is PREVIOUS INPUT{previousValue.current}</p> 
        <div> THIS IS INPUT${count} and it is PREVIOUS INPUT{previousCount.current} </div>
        <button onClick={()=>setCount(Math.ceil(Math.random() * 100))}> random number{count}</button>
         </div>
     );
}
 
export default PreviousStateStore;