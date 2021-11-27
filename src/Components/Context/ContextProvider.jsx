import React, {useReducer} from "react";
import { useContext } from "react";
 const CounterContext=React.createContext(); //state
 const CounterContextDispatcher=React.createContext(); //setState
 const initialState=0;
 
     const reducer=(state, action)=>{
            switch(action.type){
                case "add":
                    return state + action.value;
                    case "decerement":
                        return state - action.value;
                        case "reset":
                            return initialState;
                            default:
                                return state;
            }
        }
const ContexProvider = ({ children }) => {
   const [count, dispatch]=useReducer(reducer, initialState);

    return (  
<CounterContext.Provider value={count}>
    <CounterContextDispatcher.Provider value={dispatch}>
{children}
</CounterContextDispatcher.Provider>
</CounterContext.Provider>
    );
}
 
export default ContexProvider;

   export const useCount=()=>useContext(CounterContext);
   export const useCountActions=()=>{
    return useContext(CounterContextDispatcher);
    //    const setCount=useContext(CounterContextDispatcher);
    //    const addOne=()=>{
    //        setCount((prevCount)=>prevCount + 1)
    //    }
    //    const addFive=()=>{
    //     setCount((prevCount)=>prevCount + 5)
    // }
    // const decrement=()=>{
    //     setCount((prevCount)=>prevCount - 1)
    // }
    // return{addOne, addFive, decrement}
    
    };