import { useReducer } from "react";
const initialState=0;
const reducer=(state, action)=>{
    switch(action){
        case "addOne":
            return state + 1 ;
            case "addFive":
                return state + 5;
                case "decrement":
                    return state - 1;
                    default:
                        return state;
    }
};
const CountReducer = () => {
    const [count, dispatch]=useReducer(reducer, initialState);
    return ( 
        <div>
            <h2>this is count{count}</h2>
            <button onClick={ () => dispatch("addOne")}>addOne</button>
            <button onClick={ () => dispatch("addFive")}>addFive</button>
            <button onClick={ () => dispatch("decrement")}>DECEREMENT</button>

        </div>
    );
}
 
export default CountReducer;