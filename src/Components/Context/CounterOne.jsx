
import { useCount, useCountActions } from "./ContextProvider";
const CounterOne = () => {
    const count=useCount();
    const dispatch=useCountActions();
    return (  <div>
        <h2> the value of count is{count}</h2>
        <button onClick={()=>dispatch({type:"add", value:1})}>add one</button>
        <button onClick={()=>dispatch({type:"decerement", value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>);
}
 
export default CounterOne;