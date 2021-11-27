import { useState } from "react";
const WithCount = (WrappedComponent, incrementValue) => {
   const UpdatedComponent= (props)=>{
        const [count, setCount]=useState(0);
        const incrementCount=()=>{
            setCount(count + incrementValue);
        }
        return <WrappedComponent count={count} incrementCount={incrementCount} {...props} />;
            
    };
    return UpdatedComponent;
}
 
export default WithCount;