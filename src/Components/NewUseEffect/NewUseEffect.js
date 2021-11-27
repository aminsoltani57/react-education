import  React, { useEffect, useState } from "react";

const NewUseEffect = () => {

    const [count, setCount]= useState(0);
    const [name, setName]=useState("");
    useEffect(()=>{
        console.log(`cdu NewUseEffect.js ${count}`);
    }, [count]);
    return (
         <div>
     <input type="text" value={name} onChange={e=>setName(e.target.value) } />
        <button onClick={e=>setCount(count +1)} >pluss</button>{count}
    </div>
    
    );
};
 
export default NewUseEffect ;