
import { useReducer } from "react";
const initialState={
    firstCount:0,
    secondCount:0,
}
const reducer=(state, action)=>{
    switch(action.type){
        case "add":
            return {...state, firstCount:state.firstCount + action.value};
        case "decerement":
            return {...state, firstCount:state.firstCount - action.value};
            case "add2":
                return {...state, secondCount:state.secondCount + action.value};
            case "decerement2":
                return {...state, secondCount:state.secondCount - action.value};
                case "reset":
                    return initialState;
                    default:
                        return state;



            
    }

}

const MultipleStateReducer = () => {
    const [count, dispatch]=useReducer(reducer, initialState);
    return ( <div>
        <div>
            <h2> coun1 is {count.firstCount}</h2>
            <button onClick={()=>dispatch({type:"add", value:1})}>addOne</button>
            <button onClick={()=>dispatch({type:"add", value:5})}>addFive</button>
            <button onClick={()=>dispatch({type:"decerement", value:1})}>decrement</button>
           
        </div>
         <div>
         
            <h2> coun2 is {count.secondCount}</h2>
         <button onClick={()=>dispatch({type:"add2", value:1})}>addOne</button>
         <button onClick={()=>dispatch({type:"add2", value:5})}>addFive</button>
         <button onClick={()=>dispatch({type:"decerement2", value:1})}>decrement</button>
     </div>
     <button onClick={()=>dispatch({type:"reset"})}>reset</button>
     </div>
        
     );
}
 
export default MultipleStateReducer;
//multiple useReducer
// import { useReducer } from "react";
// const initialState=0;
// const reducer=(state, action)=>{
//     switch(action.type){
//         case "add":
//             return state + action.value;
//             case "decerement":
//                 return state - action.value;
//                 case "reset":
//                     return initialState;
//                     default:
//                         return state;
//     }
// }
// const MultipleStateReducer = () => {
//     const [count, dispatch]=useReducer(reducer, initialState);
//     const [countTwo, dispatchTwo]=useReducer(reducer, initialState);

//     return ( 
//         <div>
//         <div>
//             <h1>
//                 count is {count}

//             </h1>
//             <button onClick={()=>dispatch({type:"add", value:5})}>addFive</button>
//             <button onClick={()=>dispatch({type:"decerement", value:1})}>decerement</button>
//             <button onClick={()=>dispatch({type:"reset", value:1})}>reset</button>
//         </div>
//          <div>
//          <h1>
//                 count is {countTwo}

//             </h1>
//          <button onClick={()=>dispatchTwo({type:"add", value:5})}>addFive</button>
//          <button onClick={()=>dispatchTwo({type:"decerement", value:1})}>decerement</button>
//          <button onClick={()=>dispatchTwo({type:"reset"})}>reset</button>
//      </div>
//      </div>
//      );
// }
 
// export default MultipleStateReducer;
