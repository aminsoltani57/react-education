import { useEffect, useState } from "react";

const ClearComponent= () => {
    const [count, setCount]= useState(0);
    useEffect(() => {
    const interval = setInterval(()=>{ console.log("hi amin");
        setCount( (count) => count + 1);
    }, 1000);
    // console.log(count);
    return () => {
        clearInterval(interval);
    };
    }, []);
    return   <div>this is timer</div>;
};
 
export default ClearComponent ;